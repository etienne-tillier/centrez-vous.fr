export const metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité et gestion des données personnelles",
};

export default function PrivacyPage() {
  return (
    <div className="bg-background pt-12 pb-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-16 mt-12">Politique de Confidentialité</h1>
        
        <div className="glass p-8 md:p-12 rounded-[2rem] space-y-8 font-sans text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">1. Protection des données (RGPD)</h2>
            <p>
              Chez Centrez-vous, la confidentialité de vos données personnelles est une priorité absolue. La présente politique détaille la façon dont nous traitons les informations recueillies lors de votre visite sur <strong>centrez-vous.fr</strong>. Les traitements de données personnelles effectués par notre site sont conformes au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">2. Collecte et finalité des données</h2>
            <p className="mb-4">Nous collectons des informations lorsque vous :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Naviguez sur nos pages (données analytiques anonymisées).</li>
              <li>Nous contactez par email via contact@centrez-vous.fr.</li>
              <li>Prenez rendez-vous pour une consultation (nom, prénom, adresse email).</li>
            </ul>
            <p className="mt-4">
              Vos données sont uniquement utilisées pour répondre à vos demandes, améliorer notre contenu, ou assurer le bon suivi de vos consultations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">3. Conservation et sécurité</h2>
            <p>
              Vos données personnelles sont confidentielles et ne seront en aucun cas communiquées à des tiers, à l’exception du strict nécessaire pour la bonne exécution de nos services (plateforme de réservation, hébergement de base de données). Nous appliquons des protocoles d’authentification stricts et un transfert sécurisé (HTTPS) de bout en bout. Nous conservons ces informations pendant 3 ans au maximum après votre dernière interaction avec nous.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">4. Droits des utilisateurs</h2>
            <p>
              Vous disposez d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données, ainsi que d’un droit d’opposition au traitement de vos informations personnelles. Pour exercer ces droits, vous pouvez contacter notre Délégué à la Protection des Données (DPO) en écrivant à :
            </p>
            <p className="mt-4 font-medium text-primary">
              <a href="mailto:contact@centrez-vous.fr">contact@centrez-vous.fr</a>
            </p>
            <p className="mt-4">
              Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">5. Cookies</h2>
            <p>
              Le site centrez-vous.fr peut être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d’affichage. Les cookies strictement nécessaires au fonctionnement du site ne requièrent pas votre consentement préalable. Pour les cookies tiers (liés par exemple aux statistiques agrégées), vous avez la possibilité de les refuser via les paramètres de votre navigateur web.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
