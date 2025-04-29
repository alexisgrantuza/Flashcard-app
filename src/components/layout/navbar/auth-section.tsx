"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthSection() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Check if we're on a login-related page
  const isAuthPage =
    pathname?.includes("sign-in") ||
    pathname?.includes("login") ||
    pathname?.includes("signup");

  // Handle hydration and login detection
  useEffect(() => {
    setMounted(true);

    // If we're on auth page, set logging in state to true
    if (isAuthPage) {
      setIsLoggingIn(true);
    }

    // Force session refresh when navigating away from auth pages
    if (!isAuthPage && isLoggingIn) {
      const refreshSession = async () => {
        await update();
        setIsLoggingIn(false);
      };
      refreshSession();
    }
  }, [pathname, isAuthPage, isLoggingIn, update]);

  // Check URL for potential auth state changes
  useEffect(() => {
    const handleRouteChange = () => {
      if (!isAuthPage && isLoggingIn) {
        update();
        setIsLoggingIn(false);
      }
    };

    handleRouteChange();
  }, [pathname, isAuthPage, isLoggingIn, update]);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/sign-in");
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  // Always show loading state when logging in
  if (status === "loading" || isLoggingIn) {
    return (
      <div className="flex items-center gap-2">
        <div className="relative h-8 w-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      </div>
    );
  }

  if (status === "authenticated" && session?.user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 hover:opacity-80">
          <Avatar>
            <AvatarImage
              src={session.user.image || ""}
              alt={session.user.name || ""}
            />
            <AvatarFallback>
              {session.user.name
                ? session.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                : session.user.email?.charAt(0).toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {session.user.name || session.user.email?.split("@")[0] || "User"}
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/profile" className="w-full">
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings" className="w-full">
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/my-flashcards" className="w-full">
              My Flashcards
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red-600 cursor-pointer"
            onClick={handleSignOut}
          >
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <>
      <Link href="/sign-in">
        <Button
          variant="ghost"
          className="text-sm font-medium hover:text-purple-600 transition-colors"
        >
          Log in
        </Button>
      </Link>
      <Link href="/signup">
        <Button className="text-sm bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white rounded-full px-6">
          Get Started
        </Button>
      </Link>
    </>
  );
}
