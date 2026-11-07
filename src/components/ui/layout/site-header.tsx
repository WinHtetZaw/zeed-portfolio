"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const navItems = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function isActiveRoute(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-background/80 backdrop-blur-xl">
      <div className="container-layout flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-xl font-semibold tracking-tight text-foreground"
          aria-label="Zeed.dev home"
        >
          Zeed<span className="text-accent">.</span>dev
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navItems.map((item) => {
            const isActive = isActiveRoute(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-foreground"
                    : "text-foreground-secondary hover:text-foreground",
                )}
              >
                {item.label}

                {isActive && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-x-0 -bottom-px h-px bg-violet-400"
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden h-10 items-center gap-2 rounded-lg bg-accent px-4 text-sm font-medium text-white transition-colors hover:bg-accent-hover md:inline-flex"
        >
          Let's talk
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface md:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-border-subtle bg-background px-6 py-6 md:hidden"
        >
          <div className="container-layout flex flex-col gap-5">
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-base font-medium transition-colors",
                    isActive
                      ? "text-accent"
                      : "text-foreground-secondary hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-4 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Let's talk
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
