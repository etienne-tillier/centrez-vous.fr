import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  const imageUrl = post.cover?.file_url || "/images/home-hero.jpeg";
  const imageAlt = post.cover?.alt || post.h1;

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="glass-card rounded-2xl overflow-hidden h-full flex flex-col group-hover:-translate-y-2 transition-transform duration-300">
        <div className="w-full h-56 relative overflow-hidden bg-muted">
          <Image 
            src={imageUrl} 
            alt={imageAlt}
            fill 
            className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          {post.categories?.[0] && (
            <span className="text-secondary font-medium tracking-wider text-xs uppercase mb-3 block">
              {post.categories[0].label}
            </span>
          )}
          <h3 className="font-serif text-xl font-medium mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.h1}
          </h3>
          {post.meta_description && (
            <p className="text-foreground/70 text-sm line-clamp-3 mb-6">
              {post.meta_description}
            </p>
          )}
          
          <div className="mt-auto flex items-center justify-between font-sans">
            <span className="text-primary font-medium group-hover:text-secondary transition-colors text-sm">
              Lire l’article &rarr;
            </span>
            <span className="text-foreground/50 text-xs">
              {new Date(post.published_at).toLocaleDateString('fr-FR')}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
