import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600;

export const metadata = {
  title: "Blog - Ressources Équilibre & Bien-Être",
  description: "Parcourez nos derniers articles sur la méditation, la psychologie et la nutrition consciente.",
};

export default async function BlogIndexPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <div className="bg-background pt-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl animate-fade-in-up">
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">Notre Journal</span>
          <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6">Inspirations & Ressources</h1>
          <p className="text-xl font-sans text-foreground/80 max-w-2xl mx-auto">
            Des clés de compréhension et des exercices concrets pour cultiver un quotidien apaisé.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {posts.map((post) => (
              <div key={post.id} className="h-full">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center max-w-3xl mx-auto italic text-lg text-foreground/70 py-24 glass-card rounded-[2rem] mb-24 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Aucun article publié pour le moment.
          </div>
        )}
      </div>
    </div>
  );
}
