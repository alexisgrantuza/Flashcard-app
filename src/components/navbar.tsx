import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth0 } from "@/lib/auth0";

export async function Navbar() {
  const session = await auth0.getSession();

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-bold">
            Flashcard App
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/decks"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Decks
            </Link>
            <Link
              href="/study"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Study
            </Link>
            <Link
              href="/create"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Create
            </Link>
            <Link
              href="/profile"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Profile
            </Link>
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          {session ? (
            <>
              <span className="text-sm">Welcome, {session.user.name}</span>
              <Button variant="outline" asChild>
                <Link href="/auth/logout">Logout</Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/login?screen_hint=signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
