import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600;

export const metadata = {
  title: "Activités & Lâcher-prise",
  description: "Des recommandations d’activités pour se ressourcer et se reconnecter à l’essentiel.",
};

export default async function ActivitiesPage() {
  const posts = await getPublishedBlogPosts();
  const relatedPosts = posts.slice(0, 3);

  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Activités Bien-Être</h1>
          <p className="text-xl font-sans text-foreground/80 max-w-2xl mx-auto">
            S’accorder du temps pour ralentir, observer et ressentir.
          </p>
        </div>
        
        <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl mb-24 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <Image 
            src="/images/activities-nature.jpeg" 
            alt="Personne marchant dans une forêt apaisante" 
            fill 
            className="object-cover" 
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-6 text-lg font-sans text-foreground/80 leading-relaxed sticky top-32">
            <h2 className="text-3xl font-serif text-primary mb-4 text-foreground">Savoir ralentir</h2>
            <p>
              Dans un monde en mouvement perpétuel, la véritable rébellion est parfois de simplement ralentir. L’activité physique douce n’a pas qu’un objectif sportif ; c’est un moyen privilégié de décharger la tension nerveuse accumulée et de renouer avec soi-même.
            </p>
            <p>
              Par la marche en nature, la pratique d’activités créatives ou de disciplines contemplatives, nous donnons au cerveau l’espace nécessaire pour intégrer les émotions que nous négligeons au cours de la semaine.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-serif mb-4 text-secondary">Idées d’activités ressourçantes</h3>
              <ul className="space-y-4">
                <li><strong className="text-primary font-medium">Bains de forêt (Shinrin-Yoku)</strong> : S’immerger en forêt pour baisser le niveau de cortisol et stimuler le système immunitaire.</li>
                <li><strong className="text-primary font-medium">L’écriture bienveillante (Journaling)</strong> : Coucher ses pensées sur le papier le matin ou avant de dormir pour libérer l’esprit.</li>
                <li><strong className="text-primary font-medium">Yoga doux & Étirements</strong> : Une pratique non-jugeante, centrée sur la reconnexion avec les signaux corporels.</li>
              </ul>
            </div>
            
            <div className="bg-primary/10 border border-primary/20 p-8 rounded-2xl">
              <h3 className="text-xl font-serif mb-4">Besoin d’accompagnement ?</h3>
              <p className="font-sans mb-6">Retrouvez du sens à travers une démarche de suivi personnalisé.</p>
              <Link href="/consultation" className="text-primary font-medium hover:underline">Voir les consultations &rarr;</Link>
            </div>
          </div>
        </div>
        
        {relatedPosts.length > 0 && (
          <div className="mb-24">
            <h2 className="text-3xl font-serif mb-8 text-center">Pour aller plus loin</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(post => <BlogCard key={post.slug} post={post} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
