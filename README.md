# Eco Digital Dashboard

Une application web de démonstration (POC) d'un tableau de bord de l'empreinte carbone numérique, inspirée par les solutions connectées modernes (type Livebox Orange).

## Fonctionnalités

- **Suivi en temps réel :** Visualisation de la consommation électrique totale et de l'équivalent CO2 des appareils connectés.
- **Gestion des Appareils :** Liste interactive des équipements avec leur score écologique individuel et possibilité de les simuler (On/Off).
- **Historique :** Graphique interactif montrant l'évolution de l'empreinte carbone.
- **Gamification :**
  - **Défis :** Accomplissez des actions éco-responsables pour gagner des points.
  - **Boutique :** Échangez vos points contre des récompenses fictives.
- **Conseils :** Suggestions actionnables pour réduire votre impact numérique.
- **Design Responsive :** Interface moderne et épurée, adaptée à tous les écrans.

## Technologies Utilisées

- **SvelteKit 2 / Svelte 5**
- **Tailwind CSS v4**
- **Lucide Svelte** (Icônes)
- **Chart.js** (Graphiques)
- **TypeScript**

## Installation et Lancement

1.  **Installer les dépendances :**
    ```bash
    npm install
    ```

2.  **Lancer le serveur de développement :**
    ```bash
    npm run dev
    ```

3.  **Accéder à l'application :**
    Ouvrez votre navigateur sur [http://localhost:5173](http://localhost:5173).

## Architecture

- `src/lib/data.ts` : Données fictives initiales.
- `src/lib/stores.ts` : Gestion de l'état global (points, appareils, calculs CO2).
- `src/lib/components/` : Composants UI réutilisables.
- `src/routes/` : Pages et layout principal.
