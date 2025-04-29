import { signIn } from "../../auth";
import { Button } from "@/components/ui/button";

const GithubSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button className="w-full" variant="outline">
        Continue with Google
      </Button>
    </form>
  );
};

export { GithubSignIn };
