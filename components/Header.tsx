import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <svg className="w-8 h-8 transform group-hover:rotate-45 transition-transform duration-500" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14" fill="var(--card)" stroke="currentColor" strokeWidth="2"/>
            <circle cx="16" cy="16" r="8" fill="var(--primary)" opacity="0.8"/>
            <circle cx="16" cy="16" r="4" fill="var(--secondary)"/>
          </svg>
          <span className="font-serif text-2xl tracking-wide font-medium">
            Centrez-vous
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide hover:text-primary transition-colors hover:-translate-y-0.5 transform inline-block"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
           {/* Simple mobile menu toggle (for a real app would have state) */}
           <button className="p-2 text-foreground" aria-label="Menu">
             <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <line x1="3" y1="12" x2="21" y2="12"></line>
               <line x1="3" y1="6" x2="21" y2="6"></line>
               <line x1="3" y1="18" x2="21" y2="18"></line>
             </svg>
           </button>
        </div>
      </div>
    </header>
  );
}
