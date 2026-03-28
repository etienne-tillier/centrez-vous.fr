import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600; // 6h

export default async function Home() {
  const posts = await getPublishedBlogPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden w-full">
        <Image 
          src="/images/home-hero.jpeg" 
          alt="Méditation en forêt à l’aube" 
          fill 
          priority
          className="object-cover z-0" 
        />
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px] z-0"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6 font-medium leading-tight">
            Retrouvez votre <span className="gradient-text italic">équilibre intérieur</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 font-sans mb-10 max-w-2xl mx-auto">
            Découvrez des techniques éprouvées pour vous recentrer sur l’essentiel et vivre sereinement.
          </p>
          <Link 
            href="/consultation" 
            className="inline-block bg-primary text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all transform hover:-translate-y-1 font-sans tracking-wide"
          >
            Commencer mon parcours
          </Link>
        </div>
      </section>

      {/* 2. Méditation */}
      <section className="py-24 bg-card text-card-foreground">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/meditation-zen.jpeg" 
                alt="Jardin zen avec galets"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-secondary font-medium tracking-widest uppercase text-sm">Pratique</span>
              <h2 className="text-4xl md:text-5xl font-serif">La Pleine Conscience au Quotidien</h2>
              <p className="text-lg opacity-80 leading-relaxed font-sans">
                Apprenez à calmer le tumulte de vos pensées grâce à des techniques simples de méditation. Que vous soyez débutant ou pratiquant régulier, nos guides vous accompagnent pas à pas vers plus de clarté mentale et de paix intérieure.
              </p>
              <ul className="space-y-3 font-sans opacity-90 mt-6">
                <li className="flex items-center gap-3">
                  <span className="text-secondary">✦</span> Réduction de la charge mentale
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary">✦</span> Meilleure gestion de l’anxiété
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary">✦</span> Amélioration de la concentration
                </li>
              </ul>
              <Link href="/meditation" className="mt-8 inline-block font-sans font-medium text-primary hover:text-secondary transition-colors underline underline-offset-8">
                Découvrir nos guides de méditation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Alimentation Consciente */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="w-full md:w-1/2 relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/nutrition-healthy.jpeg" 
                alt="Repas sain et équilibré"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-secondary font-medium tracking-widest uppercase text-sm">Vitalité</span>
              <h2 className="text-4xl md:text-5xl font-serif">L’Alimentation Consciente</h2>
              <p className="text-lg opacity-80 leading-relaxed font-sans">
                Ce que nous mangeons a un impact direct sur notre humeur et notre énergie mentale. Explorez comment une alimentation équilibrée, riche en micronutriments, peut devenir un véritable pilier de votre équilibre psychologique.
              </p>
              <Link href="/nutrition" className="mt-8 inline-block bg-white text-foreground border border-border px-8 py-3 rounded-full hover:bg-card transition-colors">
                Nos conseils nutritionnels
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Activités Bien-être */}
      <section className="py-24 bg-muted text-muted-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <Image 
            src="/images/activities-nature.jpeg"
            alt="Promenade ressourçante en nature"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <span className="text-primary-foreground font-medium tracking-widest uppercase text-sm opacity-90">Déconnexion</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-white font-medium">Reconnexion à la Nature et à Soi</h2>
          <p className="text-lg leading-relaxed font-sans text-white/90 mb-10">
            Éloignez-vous des écrans et réapprenez à vous émerveiller. Nos recommandations d’activités douces et de promenades immersives vous aideront à ancrer votre corps dans le moment présent.
          </p>
          <Link 
            href="/activites" 
            className="inline-block bg-white text-primary font-medium px-8 py-4 rounded-full shadow-lg hover:bg-background transition-colors"
          >
            Explorer nos recommandations
          </Link>
        </div>
      </section>

      {/* 5. Consultation & Accompagnement */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">Accompagnement Privé</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-16">Aller plus loin ensemble</h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-left items-center">
            <div className="space-y-6">
              <p className="text-xl font-sans leading-relaxed">
                Le chemin vers l’équilibre est parfois semé d’obstacles. C’est pourquoi nous proposons des <strong className="font-semibold text-primary">consultations personnalisées</strong> pour comprendre votre situation unique.
              </p>
              <div className="glass p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
                <p className="italic font-serif text-lg text-foreground/80 relative z-10">
                  &quot;J’ai enfin réussi à identifier ce qui causait mon stress chronique. Cet accompagnement a changé ma façon de réagir face à l’imprévu.&quot; - Marie
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href="/consultation" 
                  className="bg-foreground text-background font-medium px-8 py-4 rounded-full hover:bg-primary transition-colors inline-flex items-center gap-3"
                >
                  Découvrir mes services <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="/images/consultation-peace.jpeg"
                alt="Espace de consultation chaleureux"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Blog Highlights */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-secondary font-medium tracking-widest uppercase text-sm">Nos derniers articles</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4">Inspirations & Ressources</h2>
            </div>
            <Link href="/blog" className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center gap-2">
              Voir tout le blog <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          
          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <div key={post.id} className="h-full">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center italic text-foreground/60 py-12 bg-card rounded-2xl">
              Aucun article publié pour le moment.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
