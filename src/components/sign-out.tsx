"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export function SignOut() {
  const handleSignOut = () => {
    signOut();
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
}
