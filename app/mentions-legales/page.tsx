export const metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site Centrez-vous.fr",
};

export default function LegalPage() {
  return (
    <div className="bg-background pt-12 pb-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-16 mt-12">Mentions Légales</h1>
        
        <div className="glass p-8 md:p-12 rounded-[2rem] space-y-8 font-sans text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">1. Éditeur du site</h2>
            <p>Le site Internet <strong>centrez-vous.fr</strong> est édité par la société Centrez-Vous SAS, enregistrée au Registre du Commerce et des Sociétés sous le numéro 123 456 789.</p>
            <p className="mt-2">
              Adresse du siège social : 12 Avenue de la Sérénité, 75000 Paris, France.<br/>
              Directeur de la publication : Équipe Éditoriale Centrez-vous.<br/>
              Contact email : <a href="mailto:contact@centrez-vous.fr" className="text-primary hover:underline">contact@centrez-vous.fr</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">2. Hébergement</h2>
            <p>
              Le Site est hébergé par la société Vercel Inc., dont le siège social est situé :<br/>
              340 S Lemon Ave #4133 Walnut, CA 91789, USA.<br/>
              Site Web : https://vercel.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">3. Propriété Intellectuelle</h2>
            <p>
              La structure générale du site Centrez-vous.fr, ainsi que les textes, graphiques, images, sons et vidéos la composant, sont la propriété de l’éditeur ou de ses partenaires. Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de ce site, par quelque procédé que ce soit, sans l’autorisation préalable et par écrit de la société Centrez-Vous SAS est strictement interdite et serait susceptible de constituer une contrefaçon au sens des articles L 335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">4. Avertissement médical</h2>
            <p>
              Les contenus publiés sur centrez-vous.fr sont donnés à titre purement informatif. Ils ne remplacent en aucun cas une consultation, un diagnostic ou un traitement médical ou psychologique délivré par un professionnel de santé diplômé d’État. En cas de détresse psychologique importante, veuillez consulter un spécialiste de la santé mentale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">5. Litiges</h2>
            <p>
              Les présentes conditions du site centrez-vous.fr sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l’interprétation ou de l’exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
