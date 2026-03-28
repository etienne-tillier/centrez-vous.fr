import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block font-serif text-3xl mb-4 text-primary-foreground">
              Centrez-vous
            </Link>
            <p className="opacity-80 max-w-sm mb-6 font-sans">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-4 text-secondary">Navigation</h3>
            <ul className="space-y-3 font-sans">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-4 text-secondary">Légal</h3>
            <ul className="space-y-3 font-sans opacity-80">
              <li><Link href="/mentions-legales" className="hover:text-primary hover:opacity-100 transition-colors">Mentions Légales</Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-primary hover:opacity-100 transition-colors">Politique de Confidentialité</Link></li>
              <li><Link href="/contact" className="hover:text-primary hover:opacity-100 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center opacity-60 font-sans text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
