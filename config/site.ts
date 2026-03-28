export const siteConfig = {
  name: "Centrez-vous",
  description: "Découvrez des techniques de méditation, guides pratiques et conseils bien-être pour vous recentrer sur l'essentiel. Consultations personnalisées disponibles.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.centrez-vous.fr",
  domain: "centrez-vous.fr",
  mainNav: [
    { title: "Accueil", href: "/" },
    { title: "Méditation", href: "/meditation" },
    { title: "Nutrition", href: "/nutrition" },
    { title: "Activités", href: "/activites" },
    { title: "Consultation", href: "/consultation" },
    { title: "Blog", href: "/blog" },
    { title: "À propos", href: "/a-propos" },
    { title: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
