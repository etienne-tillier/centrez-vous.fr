import Image from "next/image";

export const metadata = {
  title: "Contact",
  description: "Prenez contact avec nous pour commencer votre parcours vers l’équilibre.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-5xl font-serif text-center mb-16 animate-fade-in-up">Contact</h1>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-3xl font-serif text-primary">Un premier pas vers vous-même</h2>
            <p className="text-lg font-sans leading-relaxed text-foreground/80">
              Chaque parcours d’introspection commence par une simple démarche. Si vous souhaitez en savoir plus sur nos méthodes, prendre un rendez-vous pour une consultation personnalisée, ou simplement nous poser une question, nous sommes à votre écoute.
            </p>
            
            <div className="glass-card p-8 rounded-3xl mt-8">
              <h3 className="text-xl font-medium font-serif mb-4 text-secondary">Notre adresse email</h3>
              <p className="font-sans text-foreground/70 mb-2">
                Écrivez-nous directement à l’adresse suivante :
              </p>
              <a 
                href="mailto:contact@centrez-vous.fr" 
                className="text-2xl font-serif text-primary hover:text-secondary transition-colors inline-block break-all"
              >
                contact@centrez-vous.fr
              </a>
              <p className="text-sm font-sans mt-6 text-foreground/60 italic">
                Nous nous engageons à vous répondre dans les 48h ouvrées. Toutes nos correspondances sont strictement confidentielles.
              </p>
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Image 
              src="/images/contact-hero.jpeg" 
              alt="Espace accueillant et chaleureux" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
