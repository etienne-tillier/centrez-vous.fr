import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600;

export const metadata = {
  title: "Méditation & Mindfulness",
  description: "Découvrez des guides pratiques et techniques pour vous ancrer dans le moment présent.",
};

export default async function MeditationPage() {
  const posts = await getPublishedBlogPosts();
  // We can filter conceptually if we wanted, but since blog might be empty, just show recent
  const relatedPosts = posts.slice(0, 3);

  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Méditation &amp; Mindfulness</h1>
          <p className="text-xl font-sans text-foreground/80 max-w-2xl mx-auto">
            Trouver refuge dans le moment présent, loin du bruit extérieur.
          </p>
        </div>
        
        <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl mb-24 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <Image 
            src="/images/meditation-zen.jpeg" 
            alt="Méditation zen avec galets" 
            fill 
            className="object-cover" 
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-6 text-lg font-sans text-foreground/80 leading-relaxed sticky top-32">
            <h2 className="text-3xl font-serif text-primary mb-4 text-foreground">Pourquoi méditer ?</h2>
            <p>
              La méditation ne consiste pas à &quot;vider&quot; son esprit, mais plutôt à devenir l&apos;observateur conscient de ses pensées. En s&apos;arrêtant quelques minutes par jour, on entraîne son cerveau à réagir avec plus de clarté face aux stress de la vie quotidienne.
            </p>
            <p>
              Nos guides d’introduction s’adressent à ceux qui souhaitent débuter une pratique sans contraintes, en intégrant des exercices de respiration (comme la cohérence cardiaque) et des moments de pleine conscience dans des routines déjà chargées.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-serif mb-4 text-secondary">Techniques Fondamentales</h3>
              <ul className="space-y-4">
                <li><strong className="text-primary font-medium">L’ancrage corporel (Scan Corporel)</strong> : Parcourir mentalement son corps pour relâcher les tensions musculaires accumulées.</li>
                <li><strong className="text-primary font-medium">La cohérence cardiaque</strong> : Respiration rythmée pour réguler le système nerveux autonome (5 secondes à l’inspiration, 5 secondes à l’expiration).</li>
                <li><strong className="text-primary font-medium">La pleine conscience (Mindfulness)</strong> : Observer ce qui se passe ici et maintenant sans émettre aucun jugement de valeur.</li>
              </ul>
            </div>
            
            <div className="bg-primary/10 border border-primary/20 p-8 rounded-2xl">
              <h3 className="text-xl font-serif mb-4">Prêt à approfondir ?</h3>
              <p className="font-sans mb-6">Notre accompagnement propose des sessions d’apprentissage sur-mesure.</p>
              <Link href="/consultation" className="text-primary font-medium hover:underline">Découvrir les consultations &rarr;</Link>
            </div>
          </div>
        </div>
        
        {relatedPosts.length > 0 && (
          <div className="mb-24">
            <h2 className="text-3xl font-serif mb-8 text-center">Ressources Récentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(post => <BlogCard key={post.slug} post={post} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
