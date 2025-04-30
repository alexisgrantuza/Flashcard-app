"use client";

import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import AuthSection from "./auth-section";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-0 inset-x-0 w-full z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              FLASHI.AI
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="flex items-center gap-16">
            <MenuItem setActive={setActive} active={active} item="Explore">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/auto-generate">AI Generation</HoveredLink>
                <HoveredLink href="/pdf-import">Import PDF</HoveredLink>
                <HoveredLink href="/markdown">From Markdown</HoveredLink>
                <HoveredLink href="/manual">Manual Create</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Study">
              <div className="text-sm grid grid-cols-2 gap-10 p-4 ">
                <ProductItem
                  title="Quick Review"
                  href="/review"
                  src="https://placehold.co/140x70"
                  description="Review your flashcards with spaced repetition"
                />
                <ProductItem
                  title="Test Mode"
                  href="/test"
                  src="https://placehold.co/140x70"
                  description="Challenge yourself with timed tests"
                />
                <ProductItem
                  title="Analytics"
                  href="/analytics"
                  src="https://placehold.co/140x70"
                  description="Track your learning progress"
                />
                <ProductItem
                  title="Study Sets"
                  href="/sets"
                  src="https://placehold.co/140x70"
                  description="Organize and manage your flashcards"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Help">
              <div className="flex flex-col space-y-4 text-sm min-w-[150px]">
                <HoveredLink href="/guides">Guides</HoveredLink>
                <HoveredLink href="/templates">Templates</HoveredLink>
                <HoveredLink href="/faq">FAQ</HoveredLink>
                <HoveredLink href="/support">Support</HoveredLink>
              </div>
            </MenuItem>
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-2">
            <AuthSection />
          </div>
        </div>
      </Menu>
    </div>
  );
}

export { Navbar as NavbarDemo };
export default Navbar;
