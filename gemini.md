## Project Configuration

- **Language**: TypeScript
- **Package Manager**: npm
- **Add-ons**: tailwindcss

---

# gemini.md : Guide de Projet Eco Digital Dashboard

## 1. Objectifs du Projet
* Créer une application web responsive de démonstration (POC) d'un tableau de bord de l'empreinte carbone numérique.
* Inspiré visuellement par les concepts Orange Livebox précédents (images générées).
* Utiliser SvelteKit pour la rapidité et la performance.
* Simuler des données en temps réel et un suivi historique de manière crédible.

## 2. Prérequis
* Node.js et npm installés.
* Gemini CLI configuré et fonctionnel.
* Connaissances de base en Svelte/SvelteKit.

## 3. Étapes du Projet

### Étape 1 : Initialisation
* [ ] Créer le projet SvelteKit : `create-svelte@latest eco-digital-dashboard` (choisir TypeScript ou JavaScript, et les options par défaut).
* [ ] Naviguer dans le dossier : `cd eco-digital-dashboard`.
* [ ] Installer les dépendances : `npm install`.

### Étape 2 : Styling & Design
* [ ] Configurer Tailwind CSS (option recommandée pour la rapidité et la réactivité) : `npm install -D tailwindcss postcss autoprefixer`, puis `npx tailwindcss init -p`. Suivre la configuration officielle pour SvelteKit.
* [ ] Créer un fichier de style global (`src/app.css`) et importer Tailwind.
* [ ] Définir une palette de couleurs professionnelle (base blanche/grise, accents verts éco-responsables). Utiliser une police de caractères professionnelle et lisible.

### Étape 3 : Données & État de l'Application
* [ ] Créer des fichiers de données fictives (ex: `src/lib/data.js`).
    * [ ] Liste des appareils (id, nom, icône, consommation_actuelle_wh, eco_score).
    * [ ] Données historiques (date, total_co2_kg_par_jour) sur plusieurs mois.
    * [ ] Liste des suggestions.
    * [ ] Liste des défis.
    * [ ] Liste des récompenses.
* [ ] Créer des stores Svelte (`src/lib/stores.js`) pour gérer l'état de l'application (le score total, les points, les défis complétés, etc.).

### Étape 4 : Développement des Composants
* [ ] Créer `src/routes/+layout.svelte` : Inclure l'en-tête, le menu si nécessaire, et un pied de page simple.
* [ ] Créer `src/routes/+page.svelte` : Le tableau de bord principal. Organiser en cartes responsives (ex: grille CSS, `flexbox`).
* [ ] Créer des sous-composants réutilisables dans `src/lib/components/` :
    * [ ] `Header.svelte`
    * [ ] `TotalConsumptionCard.svelte` (Score global).
    * [ ] `DetectedObjectsCard.svelte` (Liste des appareils).
    * [ ] `TrackingChartCard.svelte` (Utiliser une librairie comme `svelte-chartjs` ou `chart.js` pour le graphique).
    * [ ] `SuggestionsCard.svelte`
    * [ ] `ChallengesCard.svelte`
    * [ ] `RewardsStoreCard.svelte`

### Étape 5 : Intégration & Interactivité
* [ ] Connecter tous les composants aux données fictives et aux stores.
* [ ] Ajouter des filtres (Semaine, Mois, Année) pour le graphique de suivi.
* [ ] Simuler des mises à jour légères des données (ex: un chiffre qui change toutes les quelques secondes) pour donner une impression de temps réel.
* [ ] Implémenter la logique pour 'valider' un défi (ajouter des points) et 'dépenser' des points (mise à jour du solde).

### Étape 6 : Responsive Design & Finalisation
* [ ] Vérifier la réactivité de chaque composant et de la grille du tableau de bord sur différentes tailles d'écran.
* [ ] Appliquer des touches finales de design (animations légères, icônes, marges, etc.) pour un rendu professionnel.
* [ ] Ajouter un fichier `README.md` avec des instructions claires sur la façon de lancer et de visualiser le projet.

## 4. Notes Importantes
* Il s'agit d'une démonstration : aucune connexion réelle à une box n'est attendue.
* Privilégier un design propre, clair et intuitif, fidèle aux inspirations précédentes.
* La cohérence de la marque (inspirée d'Orange) est un plus pour la crédibilité de la démo.