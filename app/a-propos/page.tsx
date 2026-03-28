import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "À Propos",
  description: "Découvrez notre histoire, notre vision et notre philosophie d’accompagnement.",
};

export default function AboutPage() {
  return (
    <div className="bg-background pt-12 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-4 max-w-5xl mb-24 mt-12">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">Notre Philosophie</span>
          <h1 className="text-5xl md:text-6xl font-serif text-foreground leading-tight">
            Cultiver l’équilibre, <br />
            <span className="italic gradient-text">pas la perfection</span>
          </h1>
        </div>
        
        <div className="relative h-[50vh] min-h-[400px] rounded-[2rem] overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <Image 
            src="/images/about-hero.jpeg"
            alt="Pratique de pleine conscience au lever du soleil"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-16 font-sans text-lg text-foreground/80 leading-relaxed">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-32">
              <h2 className="text-3xl font-serif text-primary mb-4">Notre Histoire</h2>
              <div className="w-12 h-1 bg-secondary rounded-full"></div>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p>
                Centrez-vous.fr est né d’un constat simple, mais alarmant : notre société moderne nous éloigne de nous-mêmes. Surchargés d’informations, d’obligations et de notifications, nous perdons peu à peu le contact avec notre rythme intérieur authentique.
              </p>
              <p>
                En 2018, après des années passées dans l’urgence des milieux urbains et professionnels intenses, notre équipe s’est réunie autour d’une conviction profonde : l’introspection et la reconnexion à la nature ne sont pas des luxes, ce sont des nécessités biologiques et psychologiques.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-32">
              <h2 className="text-3xl font-serif text-primary mb-4">Notre Mission</h2>
              <div className="w-12 h-1 bg-secondary rounded-full"></div>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p>
                La mission de Centrez-vous est de fournir des méthodes accessibles et non dogmatiques pour retrouver la sérénité. Nous croyons que le véritable développement personnel ne consiste pas à &quot;devenir meilleur&quot; au sens compétitif, mais à <strong className="font-medium text-foreground">se comprendre plus profondément</strong>.
              </p>
              <ul className="space-y-4 pl-4 border-l-2 border-border mt-8">
                <li><span className="text-secondary mr-2">✦</span> Déculpabiliser la charge mentale.</li>
                <li><span className="text-secondary mr-2">✦</span> Promouvoir la psychologie positive appliquée.</li>
                <li><span className="text-secondary mr-2">✦</span> Encourager l’alimentation consciente.</li>
                <li><span className="text-secondary mr-2">✦</span> Démystifier la méditation pour la rendre pratique.</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start mt-16 pt-16 border-t border-border">
            <div className="md:col-span-12 text-center">
              <h2 className="text-3xl font-serif text-primary mb-8">Commencez l’aventure</h2>
              <p className="max-w-xl mx-auto mb-8">
                Que vous lisiez nos guides, pratiquiez nos méditations, ou entamiez une consultation avec notre équipe, nous sommes ravis de vous accompagner sur votre chemin.
              </p>
              <Link href="/consultation" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-transform transform hover:-translate-y-1 shadow-md">
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
