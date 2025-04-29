"use client";

import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [refreshKey, setRefreshKey] = useState(0);

  // Force session refresh when login param is detected
  useEffect(() => {
    const loginSuccess = searchParams?.get("login") === "success";
    if (loginSuccess) {
      setRefreshKey((prev) => prev + 1);
    }
  }, [searchParams, pathname]);

  return (
    <SessionProvider
      refetchInterval={0}
      refetchOnWindowFocus={true}
      key={refreshKey}
    >
      {children}
    </SessionProvider>
  );
}
