"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Divide as Hamburger } from "hamburger-react";

const navItems = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

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

  const containerVariants = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    show: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: [0.25, 1, 0.5, 1] }, // Smooth out cubic-bezier
        opacity: { duration: 0.25 },
        staggerChildren: 0.05, // Time delay between each link fade-in
        delayChildren: 0.1, // Wait slightly for container to open before starting links
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
        opacity: { duration: 0.2 },
        staggerChildren: 0.03,
        staggerDirection: -1, // Reverse stagger (bottom items disappear first)
      },
    },
  } as const;

  // 2. Child Item Variants
  const itemVariants = {
    hidden: { opacity: 0, x: 12 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    exit: { opacity: 0, x: 8 },
  } as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-background/80 backdrop-blur-xl">
      <div className="container-layout flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-xl font-semibold tracking-tight text-foreground"
          aria-label="WinHtetZaw.dev home"
        >
          WinHtetZaw<span className="text-accent">.</span>dev
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
                    className="absolute inset-x-0 -bottom-px h-px bg-accent"
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
          // className="inline-flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface md:hidden"
          className="inline-flex items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface md:hidden"
        >
          {/* {isMenuOpen ? <X size={22} /> : <Menu size={22} />} */}
          <Hamburger toggled={isMenuOpen} size={30} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          // <motion.nav
          //   initial={{ height: 0, opacity: 0 }}
          //   animate={{ height: "auto", opacity: 1 }}
          //   exit={{ height: 0, opacity: 0 }}
          //   transition={{ duration: 0.4, ease: "easeInOut" }}
          //   id="mobile-navigation"
          //   aria-label="Mobile navigation"
          //   className="overflow-hidden border-t border-border-subtle bg-background md:hidden"
          // >
          <motion.nav
            variants={shouldReduceMotion ? undefined : containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            // transition={{ type: "spring", damping: 25, stiffness: 200 }}
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="overflow-hidden border-t border-border-subtle bg-background md:hidden"
          >
            <div className="container-layout flex flex-col gap-5  px-6 py-6">
              {navItems.map((item) => {
                const isActive = isActiveRoute(item.href);

                return (
                  <motion.div
                    key={item.href}
                    variants={shouldReduceMotion ? undefined : itemVariants}
                  >
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
                  </motion.div>
                );
              })}

              <motion.div
                variants={shouldReduceMotion ? undefined : itemVariants}
              >
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-4 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  Let's talk
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
