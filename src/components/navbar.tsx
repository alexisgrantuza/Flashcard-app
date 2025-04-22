import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { auth0 } from "@/lib/auth0";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export async function Navbar() {
  const session = await auth0.getSession();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm  ">
      <div className="container mx-auto flex items-center justify-between h-24 max-w-7xl ">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo/FLASHI-AI-logo.png"
            alt="Flashi AI Logo"
            width={350}
            height={350}
            priority
            className=" object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <NavigationMenu className="hidden md:flex -ml-24">
          <NavigationMenuList className="gap-16">
            {/* Fix: Remove legacyBehavior and NavigationMenuLink wrapper */}
            <NavigationMenuItem>
              <Link
                href="/decks"
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                Decks
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/study"
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                Study
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/create"
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                Create
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/profile"
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                Profile
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-4">
              <Link href="/profile" className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={session.user.picture}
                    alt={session.user.name || "User"}
                  />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {session.user.name?.[0]?.toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium hidden md:inline-block">
                  {session.user.name?.split(" ")[0]}
                </span>
              </Link>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/logout">Logout</Link>
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button
                variant="default"
                size="sm"
                asChild
                className="hidden sm:inline-flex"
              >
                <Link href="/auth/login?screen_hint=signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
