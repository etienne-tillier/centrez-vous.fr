import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600;

export const metadata = {
  title: "Nutrition Consciente",
  description: "L’alimentation au service de votre équilibre psychologique et physique.",
};

export default async function NutritionPage() {
  const posts = await getPublishedBlogPosts();
  const relatedPosts = posts.slice(0, 3);

  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Nutrition Consciente</h1>
          <p className="text-xl font-sans text-foreground/80 max-w-2xl mx-auto">
            Nourrir son corps, c’est aussi nourrir son esprit.
          </p>
        </div>
        
        <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl mb-24 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <Image 
            src="/images/nutrition-healthy.jpeg" 
            alt="Repas équilibré et nutritif" 
            fill 
            className="object-cover" 
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-6 text-lg font-sans text-foreground/80 leading-relaxed sticky top-32">
            <h2 className="text-3xl font-serif text-primary mb-4 text-foreground">Le lien Corps-Esprit</h2>
            <p>
              L&apos;intestin est souvent qualifié de &quot;deuxième cerveau&quot;. La façon dont nous nous alimentons influence directement notre niveau d&apos;énergie, notre humeur et notre capacité à gérer le stress au quotidien.
            </p>
            <p>
              Reconsidérer notre relation à la nourriture n’implique pas de se frustrer, mais de réapprendre à écouter les signaux naturels de notre corps. Manger en pleine conscience, c’est ralentir, savourer et comprendre l’impact des nutriments sur notre psychologie.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-serif mb-4 text-secondary">Les piliers de la nutrition santé</h3>
              <ul className="space-y-4">
                <li><strong className="text-primary font-medium">Manger en conscience (Mindful Eating)</strong> : Prendre le temps d’apprécier la texture, l’odeur et le goût de chaque bouchée.</li>
                <li><strong className="text-primary font-medium">Anti-inflammatoire et vitalité</strong> : Privilégier des aliments bruts riches en oméga-3, vitamines et antioxydants, protecteurs de santé mentale.</li>
                <li><strong className="text-primary font-medium">Hydratation récurrente</strong> : Souvent ignorée, la déshydratation légère est pourtant l’une des causes majeures de la fatigue cérébrale et de l’anxiété.</li>
              </ul>
            </div>
            
            <div className="bg-primary/10 border border-primary/20 p-8 rounded-2xl">
              <h3 className="text-xl font-serif mb-4">Envie d’un bilan global ?</h3>
              <p className="font-sans mb-6">Nos consultations intègrent l’hygiène de vie dans l’accompagnement psychologique.</p>
              <Link href="/consultation" className="text-primary font-medium hover:underline">Découvrir les consultations &rarr;</Link>
            </div>
          </div>
        </div>
        
        {relatedPosts.length > 0 && (
          <div className="mb-24">
            <h2 className="text-3xl font-serif mb-8 text-center">Articles récents</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(post => <BlogCard key={post.slug} post={post} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
