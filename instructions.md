## Description
# Centrez-vous.fr - Plateforme de développement personnel et bien-être

**Centrez-vous.fr** est un site web spécialisé dans le développement personnel, la méditation et le bien-être mental. Il s'adresse aux personnes en quête de sens, souhaitant se recentrer sur l'essentiel et retrouver un équilibre dans leur vie quotidienne.

Le site propose une approche holistique du développement personnel à travers des guides pratiques, des techniques de méditation, des conseils nutritionnels, et des recommandations d'activités pour prendre soin de soi. L'objectif principal est de générer des leads qualifiés vers des consultations personnalisées, tout en positionnant le site comme une référence SEO sur la longue traîne des requêtes liées au bien-être et à l'introspection.

## Public cible
Personnes de 25-50 ans, majoritairement urbaines, confrontées au stress, à la surcharge d'informations et à la difficulté de se reconnecter à leurs besoins authentiques. Profils recherchant des solutions concrètes pour améliorer leur qualité de vie et leur épanouissement personnel.

## Stratégie de contenu
Le site mise sur une approche éditoriale riche avec des fiches pratiques, des guides détaillés, des articles de fond sur la psychologie positive, et des recommandations personnalisées. Chaque contenu vise à répondre aux questions spécifiques que se posent les visiteurs dans leur parcours de développement personnel.

## Prompt IA
Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de développement personnel et bien-être.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- **Nom du projet** : Centrez-vous.fr
- **Domaine** : centrez-vous.fr
- **Type de site** : Site de génération de leads avec expertise en développement personnel
- **Thématiques** : Développement personnel, méditation, bien-être, psychologie positive, nutrition consciente
- **Objectif business** : Générer des leads qualifiés pour consultations personnalisées
- **Audience cible** : Adultes 25-50 ans en quête d'équilibre et de sens

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs clés** : Apaisant, Authentique, Équilibré, Bienveillant, Lumineux
- **Références visuelles mentales** : 
  - Lever de soleil dans la nature
  - Cercles de méditation en forêt
  - Jardin zen avec galets et bambous
  - Lumière douce filtrant à travers les feuilles
  - Espaces épurés et chaleureux
- **Émotions à évoquer** : Sérénité, confiance en soi, paix intérieure, sentiment de sécurité, inspiration douce

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers visuel ci-dessus, l'agent développeur devra :
1. Identifier les couleurs naturellement associées à la sérénité et à l'équilibre
2. Créer une palette UNIQUE inspirée de :
   - Tons terre et nature (beiges chauds, verts doux)
   - Nuances de lever de soleil (dorés subtils, roses poudrés)
   - Bleus apaisants (ciel clair, eau pure)
3. Éviter les couleurs trop vives ou agressives
4. Privilégier les tons neutres et harmonieux
5. Assurer un contraste suffisant pour l'accessibilité

### Typographie
- **Police principale** : Lora ou Libre Baskerville (élégante, lisible, chaleureuse)
- **Police secondaire** : Inter ou Source Sans Pro (moderne, claire pour les textes)
- Éviter les polices trop rigides ou corporate

## 2. SEO & métadonnées
- **Titre SEO principal** : "Centrez-vous.fr - Développement personnel et bien-être"
- **Méta-description principale** : "Découvrez des techniques de méditation, guides pratiques et conseils bien-être pour vous recentrer sur l'essentiel. Consultations personnalisées disponibles."
- **Open Graph title** : "Centrez-vous - Votre guide vers l'équilibre personnel"

## 3. Images pré-générées - À TÉLÉCHARGER ET INTÉGRER

### Images Homepage :
- **Hero principal** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/centrez-vous-com-home-hero-meditation-forest.jpeg
- **Section méditation** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/centrez-vous-com-home-meditation-zen-garden.jpeg
- **Section alimentation** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/centrez-vous-com-home-nutrition-healthy-meal.jpeg
- **Section activités** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/centrez-vous-com-home-activities-nature-walk.jpeg
- **Section consultation** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/centrez-vous-com-home-consultation-peaceful-space.jpeg

### Images Pages intérieures :
- **Page About** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/centrez-vous-com-about-hero-mindfulness-practice.jpeg
- **Page Contact** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/centrez-vous-com-contact-hero-welcoming-space.jpeg

## 4. Contenu & structure à mettre en place

### Page d'accueil (/) - Sections obligatoires :
1. **Hero** : 
   - Titre : "Retrouvez votre équilibre intérieur"
   - Sous-titre : "Découvrez des techniques éprouvées pour vous recentrer sur l'essentiel"
   - CTA principal : "Commencer mon parcours"

2. **Section Méditation** :
   - Présentation des techniques de méditation
   - Guides pour débutants et avancés
   - Benefits de la pratique régulière

3. **Section Alimentation Consciente** :
   - Conseils nutritionnels pour le bien-être
   - Recettes simples et équilibrées
   - Lien entre alimentation et état mental

4. **Section Activités Bien-être** :
   - Sorties et événements recommandés
   - Activités pour prendre du temps pour soi
   - Exercices de reconnexion à la nature

5. **Section Consultation** :
   - Présentation de l'accompagnement personnalisé
   - Témoignages clients
   - CTA vers prise de rendez-vous

6. **Blog highlights** : Mise en avant des derniers articles

### Autres pages importantes :
- `/blog` : Articles de fond sur le développement personnel
- `/meditation` : Guides pratiques de méditation
- `/nutrition` : Conseils alimentaires pour le bien-être
- `/activites` : Recommandations d'activités ressourçantes
- `/consultation` : Présentation des services personnalisés
- `/a-propos` : Histoire et philosophie du site
- `/contact` : Prise de rendez-vous et contact

### Clusters thématiques :
- Méditation et pleine conscience
- Nutrition et alimentation consciente
- Gestion du stress et des émotions
- Activités et sorties bien-être
- Développement personnel et psychologie positive

## 5. Consignes éditoriales

### Ton à respecter :
- Bienveillant et chaleureux
- Expert mais accessible
- Non-judgmental et inclusif
- Encourageant et inspirant
- Authentique et humble

### Types d'articles attendus :
- Guides pratiques étape par étape
- Techniques de méditation expliquées
- Conseils nutritionnels simples
- Recommandations d'activités
- Articles de fond sur la psychologie
- Témoignages et retours d'expérience

### Contraintes à éviter :
- Promesses miraculeuses ou exagérées
- Jargon trop technique
- Jugements ou culpabilisation
- Conseils médicaux non fondés
- Ton trop corporate ou distant

## 6. Checklist technique
- Configuration `.env` (clés Supabase, SITE_DOMAIN, BLOG_API_SECRET)
- Mise à jour `config/site.ts` avec les informations du site
- **Création de la palette UNIQUE** dans `app/globals.css` selon méthodologie
- Logos adaptés (`/public/logo.svg`, `/app/icon.svg`)
- Intégration blog Supabase (filtrage par domaine centrez-vous.fr)
- Configuration des routes personnalisées
- Vérifier `npm run lint` et `npm run build`
- Configuration déploiement

## 7. Anti-patterns à éviter
❌ Commencer à coder avant d'avoir créé le design system
❌ Copier-coller des couleurs d'un exemple existant
❌ Utiliser des couleurs agressives ou corporate
❌ Créer un design trop froid ou impersonnel
❌ Laisser des placeholders de couleurs dans le code final
❌ Négliger l'aspect chaleureux et humain du design

## 8. Objectif final
Créer une expérience web qui reflète parfaitement l'univers du bien-être et du développement personnel, incitant naturellement les visiteurs à explorer les contenus et à prendre contact pour un accompagnement personnalisé.

## URLs à rediriger
www.centrez-vous.fr/delrieu-emmanuelle-psychologue-developpementaliste-et-ecopsychologue-conf%C3%A9renci%C3%A8re/ateliers-stages/
www.centrez-vous.fr/psychologue/delrieu-emmanuelle-psychologue-developpementaliste-enfant-ado-et-adulte/
www.centrez-vous.fr/delrieu-emmanuelle-psychologue-developpementaliste-et-ecopsychologue-conf%C3%A9renci%C3%A8re/

## Instructions redirection
Chaque URL doit rediriger vers la version blog.
Insérer /blog/ entre le domaine et le slug.
Les segments après le domaine sont concaténés avec des tirets pour former le slug.
Exemples:
www.offreslg.fr/tv-oled-c2g2 -> www.offreslg.fr/blog/tv-oled-c2g2
www.offreslg.fr/tv/check-status -> www.offreslg.fr/blog/tv-check-status