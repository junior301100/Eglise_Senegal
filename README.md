# Église Catholique – Sénégal

Site web de l'Église Catholique du Sénégal permettant de trouver les paroisses, consulter les horaires des messes et accéder aux lectures liturgiques du jour.

## 📋 Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Architecture](#architecture)
- [Structure des fichiers](#structure-des-fichiers)
- [Installation](#installation)
- [Technologies](#technologies)
- [APIs utilisées](#apis-utilisées)
- [Fonctionnalités détaillées](#fonctionnalités-détaillées)
- [Personnalisation](#personnalisation)
- [Déploiement](#déploiement)

## ✨ Fonctionnalités

### 🏛️ Pages principales
- **Accueil** : Page d'accueil avec informations générales
- **Paroisses** : Recherche et liste des paroisses avec filtres
- **Détail** : Informations complètes d'une paroisse (horaires, contact, carte)
- **Liturgie** : Lectures du jour, méditation et prière

### 🔍 Recherche avancée
- Recherche textuelle avec gestion des accents
- Filtres par ville, quartier et jour de messe
- Recherche en temps réel sans rechargement

### 🗺️ Cartographie
- Cartes interactives Leaflet
- Localisation précise des paroisses
- Vue d'ensemble et zoom sur les détails

### 📖 Liturgie
- Lectures du jour via API AELF
- Méditation et prière quotidienne
- Temps liturgique et couleurs adaptées

## 🏗️ Architecture

### Architecture modulaire
Le site utilise une architecture JavaScript modulaire avec routing côté client :

```
├── index.html              # Point d'entrée HTML
├── css/
│   └── style.css           # Styles CSS
└── js/
    ├── app.js              # Point d'entrée de l'application
    ├── state.js            # État global
    ├── router.js           # Navigation entre pages
    ├── data.js             # Données des paroisses
    ├── icons.js            # Icônes SVG
    ├── map.js              # Gestion des cartes Leaflet
    ├── footer.js           # Pied de page
    └── pages/
        ├── accueil.js      # Page d'accueil
        ├── paroisses.js    # Liste des paroisses
        ├── detail.js       # Détail d'une paroisse
        └── liturgie.js     # Lectures liturgiques
```

### État global (state.js)
```javascript
const state = {
  page: "accueil",           // Page active
  selectedParoisse: null,    // Paroisse sélectionnée
  search: "",               // Terme de recherche
  filters: {},              // Filtres actifs
  liturgy: null,            // Données liturgiques
  liturgyLoading: false,    // Chargement en cours
  liturgyError: false,      // Erreur de chargement
  leafletReady: false       // Carte Leaflet chargée
};
```

## 📁 Structure des fichiers

### Fichiers principaux
- **index.html** : Structure HTML de base
- **css/style.css** : Styles CSS avec design responsive
- **js/app.js** : Point d'entrée, orchestre le rendu
- **js/router.js** : Gestion de la navigation
- **js/state.js** : État global partagé

### Pages
- **js/pages/accueil.js** : Page d'accueil avec statistiques
- **js/pages/paroisses.js** : Recherche et liste des paroisses
- **js/pages/detail.js** : Fiche détaillée d'une paroisse
- **js/pages/liturgie.js** : Lectures liturgiques du jour

### Utilitaires
- **js/data.js** : Données statiques des paroisses
- **js/icons.js** : Bibliothèque d'icônes SVG
- **js/map.js** : Intégration des cartes Leaflet
- **js/footer.js** : Pied de page

## 🚀 Installation

### Prérequis
- Serveur web local (XAMPP, Apache, Nginx)
- Navigateur web moderne

### Installation locale
1. Cloner le dépôt :
```bash
git clone <repository-url>
cd paroisse
```

2. Configurer le serveur web :
- Placez le dossier dans le répertoire web du serveur
- Pour XAMPP : `c:/xampp/htdocs/paroisse/`
- Pour Apache : `/var/www/html/paroisse/`

3. Accéder au site :
- Ouvrir `http://localhost/paroisse/` dans le navigateur

### Configuration
Aucune configuration requise. Le site fonctionne directement avec les données incluses.

## 🛠️ Technologies

### Frontend
- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec gradients et animations
- **JavaScript ES6+** : Logique applicative
- **SVG** : Icônes vectorielles

### Bibliothèques externes
- **Leaflet** : Cartes interactives (CDN)
- **API AELF** : Lectures liturgiques

### Architecture
- **SPA (Single Page Application)** : Navigation sans rechargement
- **Routing côté client** : Gestion des pages en JavaScript
- **État centralisé** : Partage des données entre composants

## 🌐 APIs utilisées

### AELF (Association Épiscopale Liturgique Francophone)
- **URL** : `https://www.aelf.org/bible/lectures`
- **Usage** : Récupération des lectures liturgiques du jour
- **Format** : JSON avec lectures, méditation et prière
- **Fallback** : Données statiques si l'API est indisponible

### Leaflet Maps
- **URL** : `https://unpkg.com/leaflet@1.9.4/`
- **Usage** : Cartes interactives des paroisses
- **Fonctionnalités** : Marqueurs, zoom, clustering

## 📖 Fonctionnalités détaillées

### Recherche de paroisses
```javascript
// Recherche avec gestion des accents
function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// Filtrage multi-critères
function getFiltered() {
  return PAROISSES.filter(p => {
    const matchesSearch = !searchTerm || 
      removeAccents(p.nom).includes(searchTerm) ||
      removeAccents(p.ville).includes(searchTerm) ||
      removeAccents(p.quartier).includes(searchTerm);
    
    const matchesFilters = 
      (!filters.city || p.ville === filters.city) &&
      (!filters.neighborhood || p.quartier === filters.neighborhood);
    
    return matchesSearch && matchesFilters;
  });
}
```

### Cartes interactives
```javascript
// Initialisation des cartes Leaflet
function buildLeafletMap(containerId, paroisses, center, zoom, activeId) {
  const map = L.map(containerId).setView(center, zoom);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  
  // Ajout des marqueurs
  paroisses.forEach(p => {
    const marker = L.marker([p.coordonnees.lat, p.coordonnees.lon]);
    marker.addTo(map).bindPopup(p.nom);
  });
}
```

### Lectures liturgiques
```javascript
// Chargement depuis l'API AELF
async function loadLiturgy() {
  try {
    const response = await fetch(`https://www.aelf.org/bible/lectures/${dateStr}`);
    const data = await response.json();
    state.liturgy = data;
  } catch (error) {
    state.liturgy = getRealAelfLiturgy(); // Fallback
  }
}
```

## 🎨 Personnalisation

### Modification des données
Les données des paroisses sont dans `js/data.js` :
```javascript
const PAROISSES = [
  {
    id: 1,
    nom: "Cathédrale Notre-Dame des Victoires",
    ville: "Dakar",
    quartier: "Plateau",
    adresse: "Avenue Pasteur, Dakar",
    telephone: "+221 33 822 45 67",
    email: "cathedrale.dakar@eglise.catho.sn",
    horaires: {
      dimanche: ["08:00", "10:30", "18:00"],
      semaine: ["07:00", "18:30"]
    },
    coordonnees: {
      lat: 14.6928,
      lon: -17.4472
    },
    curé: "Abbé Jean Dupont"
  }
];
```

### Personnalisation des couleurs
Les couleurs sont définies dans `css/style.css` :
```css
:root {
  --primary-color: #1a1a2e;
  --secondary-color: #0f3460;
  --accent-color: #d4af37;
  --text-light: rgba(255,255,255,0.8);
  --bg-light: #f8f9fa;
}
```

### Ajout de nouvelles pages
1. Créer un fichier dans `js/pages/` : `nouvelle_page.js`
2. Ajouter la page dans `js/router.js` :
```javascript
const pages = [
  ["accueil", "Accueil"],
  ["paroisses", "Paroisses"],
  ["detail", "Détail"],
  ["liturgie", "Liturgie"],
  ["nouvelle_page", "Nouvelle Page"]
];
```
3. Ajouter le routage dans `js/app.js` :
```javascript
else if (state.page === "nouvelle_page") main.innerHTML = renderNouvellePage();
```

## 🚀 Déploiement

### Déploiement local
1. Copier les fichiers dans un répertoire web
2. Configurer le serveur web
3. Accéder via l'URL locale

### Déploiement en production
1. **Hébergement statique** : Netlify, Vercel, GitHub Pages
2. **Hébergement mutualisé** : Upload des fichiers via FTP
3. **Serveur dédié** : Configuration Apache/Nginx

### Optimisation pour la production
- Minification CSS/JS
- Compression GZIP
- Cache HTTP
- CDN pour les bibliothèques externes

## 📊 Statistiques du projet

- **10 fichiers JavaScript** modulaires
- **8 paroisses** répertoriées
- **API AELF** intégrée pour les lectures
- **Cartes interactives** Leaflet
- **Design responsive** mobile-first
- **Recherche avec accents** optimisée

## 🤝 Contribution

Pour contribuer au projet :
1. Forker le dépôt
2. Créer une branche de fonctionnalité
3. Faire les modifications
4. Tester localement
5. Soumettre une pull request

## 📝 Licence

Ce projet est la propriété de l'Église Catholique du Sénégal.

---

**Développé avec ❤️ pour la communauté catholique du Sénégal**
