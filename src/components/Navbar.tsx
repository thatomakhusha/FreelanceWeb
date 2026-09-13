"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-300 items-center justify-between px-8">
        
        {/* TM Logo */}
        <a
          href="#"
          className="font-mono text-xl font-bold tracking-tight text-accent"
        >
          TM
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm uppercase tracking-[0.06em] text-muted-forground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-accent px-5 py-2 font-mono text-sm font-medium uppercase tracking-[0.06em] text-background transition-opacity duration-200 hover:opacity-80"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-foreground md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <line
                x1="4"
                y1="4"
                x2="16"
                y2="16"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="16"
                y1="4"
                x2="4"
                y2="16"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <line
                x1="3"
                y1="6"
                x2="17"
                y2="6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="3"
                y1="10"
                x2="17"
                y2="10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="3"
                y1="14"
                x2="17"
                y2="14"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-border bg-background px-8 pb-8 pt-6 md:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-3.5 font-mono text-sm uppercase tracking-[0.06em] text-muted-forground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 self-start bg-accent px-6 py-3 font-mono text-sm font-medium uppercase tracking-[0.06em] text-background transition-opacity duration-200 hover:opacity-80"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;