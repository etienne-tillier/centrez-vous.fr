import Image from "next/image";
import Link from "next/link";

export const revalidate = 21600;

export const metadata = {
  title: "Consultation & Accompagnement",
  description: "Des consultations personnalisées pour débloquer les situations chroniques et retrouver l’équilibre.",
};

export default async function ConsultationPage() {
  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">Votre espace d’écoute</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Consultation Privée</h1>
          <p className="text-xl font-sans text-foreground/80 max-w-2xl mx-auto">
            Un accompagnement personnel, ancré dans l’empathie, la psychologie et les neurosciences.
          </p>
        </div>
        
        <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl mb-24 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <Image 
            src="/images/consultation-peace.jpeg" 
            alt="Espace thérapeutique calme et apaisant" 
            fill 
            className="object-cover" 
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-6 text-lg font-sans text-foreground/80 leading-relaxed">
            <h2 className="text-3xl font-serif text-primary mb-4 text-foreground">Une démarche sur-mesure</h2>
            <p>
              Prendre la décision de consulter n’est jamais facile, mais c’est souvent le premier pas, le plus vital, vers une meilleure compréhension de soi-même. Notre approche n’est pas de vous dicter comment vivre, mais de vous aider à identifier et mobiliser les ressources qui sont déjà en vous.
            </p>
            <p>
              Ensemble, nous déconstruisons les schémas qui vous limitent face aux situations stressantes, à l’anxiété ou au burn-out, en combinant écoute active et méthodes pratiques (TCC, mindfulness).
            </p>
            <div className="pt-8">
              <Link href="/contact" className="inline-block bg-primary text-white font-medium px-8 py-4 rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all">
                Prendre Rendez-vous
              </Link>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-serif mb-4 text-secondary">Modalités des séances</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-primary mt-1">✦</span>
                  <div>
                    <strong className="text-foreground font-medium block">Première séance (Bilan - 1h)</strong>
                    <span className="text-sm opacity-80">Un moment dédié à comprendre vos attentes, votre histoire et vos objectifs.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary mt-1">✦</span>
                  <div>
                    <strong className="text-foreground font-medium block">Séances de suivi (45min)</strong>
                    <span className="text-sm opacity-80">Rythme défini ensemble, généralement toutes les 2 à 3 semaines pour intégrer les acquis.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary mt-1">✦</span>
                  <div>
                    <strong className="text-foreground font-medium block">Format hybride</strong>
                    <span className="text-sm opacity-80">Consultations en cabinet ou en visioconférence sécurisée selon vos disponibilités.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="glass p-6 rounded-2xl">
              <p className="italic font-serif text-foreground/80 md:text-lg">
                &quot;Une écoute profondément non-jugeante qui m’a permis de déposer mes fardeaux en toute confiance. L’approche est à la fois douce et concrète.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
