import { getCategoryBySlug, getPostsByCategory } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { notFound } from "next/navigation";

export const revalidate = 21600;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.label} | Centrez-vous.fr`,
    description: `Articles dans la catégorie ${category.label}`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return notFound();

  const posts = await getPostsByCategory(slug);

  return (
    <div className="bg-background pt-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl animate-fade-in-up">
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">Catégorie</span>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">{category.label}</h1>
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
          <div className="text-center max-w-3xl mx-auto italic text-lg text-foreground/70 py-24 glass-card rounded-[2rem] mb-24">
            Aucun article publié pour le moment.
          </div>
        )}
      </div>
    </div>
  );
}
