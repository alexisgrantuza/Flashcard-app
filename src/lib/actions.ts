import { schema } from "@/lib/schema";
import { db } from "@/lib/prisma";
import { executeAction } from "@/lib/executeAction";
import { hashPassword } from "@/lib/password";

const signUp = async (formData: FormData) => {
  return executeAction({
    actionFn: async () => {
      const email = formData.get("email");
      const password = formData.get("password");
      console.log(email, password);

      const validatedData = schema.parse({ email, password });

      const hashedPassword = await hashPassword(validatedData.password);

      await db.user.create({
        data: {
          email: validatedData.email.toLocaleLowerCase(),
          password: hashedPassword,
        },
      });
    },
    successMessage: "Signed up successfully",
  });
};

export { signUp };
