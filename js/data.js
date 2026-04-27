
const PAROISSES = [
  {
    id: 1,
    nom: "Cathédrale Notre-Dame des Victoires",
    ville: "Dakar", quartier: "Plateau",
    adresse: "Avenue Pasteur, Dakar",
    telephone: "+221 33 822 45 67",
    email: "cathedrale.dakar@eglise.catho.sn",
    horaires: {
      dimanche: ["07:00","09:00","11:00","18:00"],
      lundi:    ["07:00","18:30"], mardi:    ["07:00","18:30"],
      mercredi: ["07:00","18:30"], jeudi:    ["07:00","18:30"],
      vendredi: ["07:00","18:30"], samedi:   ["07:00","18:30"]
    },
    coordonnees: { lat: 14.6694, lon: -17.4386 },
    curé: "Père Jean-Marie Diop"
  },
  {
    id: 2,
    nom: "Église Saint-Paul de Thiès",
    ville: "Thiès", quartier: "Centre-ville",
    adresse: "Avenue Lamine Guèye, Thiès",
    telephone: "+221 33 951 23 45",
    email: "stpaul.thies@eglise.catho.sn",
    horaires: {
      dimanche: ["07:00","09:00","11:00","18:00"],
      lundi:    ["07:00","18:30"], mardi:    ["07:00","18:30"],
      mercredi: ["07:00","18:30"], jeudi:    ["07:00","18:30"],
      vendredi: ["07:00","18:30"], samedi:   ["07:00","18:30"]
    },
    coordonnees: { lat: 14.7756, lon: -16.9234 },
    curé: "Père André Faye"
  },
  {
    id: 3,
    nom: "Église Saint-Michel de Kaolack",
    ville: "Kaolack", quartier: "Centre-ville",
    adresse: "Avenue du Général de Gaulle, Kaolack",
    telephone: "+221 33 945 23 45",
    email: "stmichel.kaolack@eglise.catho.sn",
    horaires: {
      dimanche: ["07:00","09:00","11:00","18:00"],
      lundi:    ["07:00","18:30"], mardi:    ["07:00","18:30"],
      mercredi: ["07:00","18:30"], jeudi:    ["07:00","18:30"],
      vendredi: ["07:00","18:30"], samedi:   ["07:00","18:30"]
    },
    coordonnees: { lat: 14.1823, lon: -16.2567 },
    curé: "Père Antoine Sarr"
  },
  {
    id: 4,
    nom: "Église Saint-Pierre de Saint-Louis",
    ville: "Saint-Louis", quartier: "Sud",
    adresse: "Rue de Saint-Louis",
    telephone: "+221 33 962 34 56",
    email: "stpierre.stlouis@eglise.catho.sn",
    horaires: {
      dimanche: ["07:00","09:00","11:00","18:00"],
      lundi:    ["07:00","18:30"], mardi:    ["07:00","18:30"],
      mercredi: ["07:00","18:30"], jeudi:    ["07:00","18:30"],
      vendredi: ["07:00","18:30"], samedi:   ["07:00","18:30"]
    },
    coordonnees: { lat: 16.2345, lon: -16.4567 },
    curé: "Père François Seck"
  },
  {
    id: 5,
    nom: "Église Saint-Paul de Ziguinchor",
    ville: "Ziguinchor", quartier: "Centre-ville",
    adresse: "Avenue de Ziguinchor",
    telephone: "+221 33 976 54 32",
    email: "stpaul.ziguinchor@eglise.catho.sn",
    horaires: {
      dimanche: ["07:00","09:00","11:00","18:00"],
      lundi:    ["07:00","18:30"], mardi:    ["07:00","18:30"],
      mercredi: ["07:00","18:30"], jeudi:    ["07:00","18:30"],
      vendredi: ["07:00","18:30"], samedi:   ["07:00","18:30"]
    },
    coordonnees: { lat: 12.5678, lon: -16.2345 },
    curé: "Père Jean-Baptiste Sène"
  },
  {
    id: 6,
    nom: "Église Saint-Pierre de Kolda",
    ville: "Kolda", quartier: "Centre-ville",
    adresse: "Route de Kolda",
    telephone: "+221 33 912 34 56",
    email: "stpierre.kolda@eglise.catho.sn",
    horaires: {
      dimanche: ["07:00","09:00","11:00","18:00"],
      lundi:    ["07:00","18:30"], mardi:    ["07:00","18:30"],
      mercredi: ["07:00","18:30"], jeudi:    ["07:00","18:30"],
      vendredi: ["07:00","18:30"], samedi:   ["07:00","18:30"]
    },
    coordonnees: { lat: 12.8901, lon: -14.4567 },
    curé: "Père Michel Sène"
  },
  {
    id: 7,
    nom: "Église Saint-Michel de Sédhiou",
    ville: "Sédhiou", quartier: "Centre-ville",
    adresse: "Route de Sédhiou",
    telephone: "+221 33 856 78 90",
    email: "stmichel.sedhiou@eglise.catho.sn",
    horaires: {
      dimanche: ["07:00","09:00","11:00","18:00"],
      lundi:    ["07:00","18:30"], mardi:    ["07:00","18:30"],
      mercredi: ["07:00","18:30"], jeudi:    ["07:00","18:30"],
      vendredi: ["07:00","18:30"], samedi:   ["07:00","18:30"]
    },
    coordonnees: { lat: 12.7234, lon: -15.5678 },
    curé: "Père Pierre Diop"
  },
  {
    id: 8,
    nom: "Église Saint-Jean-Baptiste de Kédougou",
    ville: "Kédougou", quartier: "Centre-ville",
    adresse: "Route de Kédougou",
    telephone: "+221 33 845 67 89",
    email: "stjean.kedougou@eglise.catho.sn",
    horaires: {
      dimanche: ["07:00","09:00","11:00","18:00"],
      lundi:    ["07:00","18:30"], mardi:    ["07:00","18:30"],
      mercredi: ["07:00","18:30"], jeudi:    ["07:00","18:30"],
      vendredi: ["07:00","18:30"], samedi:   ["07:00","18:30"]
    },
    coordonnees: { lat: 12.5678, lon: -12.2345 },
    curé: "Père Michel Sarr"
  }
];

// Saints du jour (clé = "mois-jour")
const SAINTS = {
  "1-1":  { name: "Sainte Marie, Mère de Dieu",      desc: "Mère de Jésus-Christ, figure centrale du christianisme, symbole d'humilité et d'obéissance à Dieu." },
  "1-17": { name: "Saint Antoine le Grand",           desc: "Père du monachisme, il a vécu dans le désert en Égypte dans la prière et l'ascèse." },
  "2-14": { name: "Saint Valentin de Rome",           desc: "Prêtre martyr, associé à l'amour et au mariage chrétien." },
  "3-19": { name: "Saint Joseph",                     desc: "Protecteur de la Sainte Famille, modèle de travail et de foi." },
  "4-21": { name: "Saint Anselme de Cantorbéry",      desc: "Philosophe et archevêque, célèbre pour ses réflexions sur la foi et la raison." },
  "4-25": { name: "Saint Marc",                       desc: "Auteur d'un des quatre Évangiles, témoin de la vie de Jésus." },
  "5-1":  { name: "Saint Joseph artisan",             desc: "Version de Saint Joseph célébrée comme modèle des travailleurs." },
  "5-13": { name: "Notre-Dame de Fatima",             desc: "Commémoration des apparitions de la Vierge à Fatima." },
  "6-24": { name: "Saint Jean-Baptiste",              desc: "Il a baptisé Jésus et annoncé sa venue." },
  "6-29": { name: "Saints Pierre et Paul",            desc: "Deux grandes figures fondatrices de l'Église." },
  "7-22": { name: "Sainte Marie-Madeleine",           desc: "Première témoin de la résurrection du Christ." },
  "8-15": { name: "Assomption de Marie",              desc: "Fête majeure célébrant l'entrée de Marie au ciel." },
  "9-29": { name: "Saint Michel Archange",            desc: "Protecteur et combattant contre le mal." },
  "10-1": { name: "Sainte Thérèse de Lisieux",        desc: "Connue pour sa 'petite voie' de simplicité et d'amour." },
  "11-1": { name: "Toussaint",                        desc: "Célébration de tous les saints connus et inconnus." },
  "11-11":{ name: "Saint Martin de Tours",            desc: "Connu pour avoir partagé son manteau avec un pauvre." },
  "12-6": { name: "Saint Nicolas de Myre",            desc: "Évêque généreux, inspirateur du Père Noël." },
  "12-25":{ name: "Jésus-Christ",                     desc: "Fête de la naissance de Jésus." }
};

// Fêtes liturgiques 2026
const FEASTS_2026 = [
  { name: "Épiphanie",           date: new Date(2026,  0,  6), desc: "Manifestation du Christ aux nations, visite des mages." },
  { name: "Cendres",             date: new Date(2026,  1, 18), desc: "Début du Carême, appel à la conversion et à la prière." },
  { name: "Rameaux",             date: new Date(2026,  3,  5), desc: "Entrée triomphale de Jésus à Jérusalem." },
  { name: "Pâques",              date: new Date(2026,  3,  6), desc: "Résurrection du Christ, victoire sur la mort." },
  { name: "Ascension",           date: new Date(2026,  4, 15), desc: "Élévation du Christ au ciel 40 jours après Pâques." },
  { name: "Pentecôte",           date: new Date(2026,  4, 25), desc: "Don du Saint-Esprit, naissance de l'Église." },
  { name: "Fête-Dieu",           date: new Date(2026,  5,  9), desc: "Fête du Saint-Sacrement, présence réelle du Christ." },
  { name: "Saint Pierre et Paul",date: new Date(2026,  6, 29), desc: "Fête des deux grands apôtres, fondements de l'Église." },
  { name: "Assomption",          date: new Date(2026,  7, 15), desc: "Marie élevée au ciel corps et âme." },
  { name: "Toussaint",           date: new Date(2026, 10,  1), desc: "Fête de tous les saints du paradis." },
  { name: "Immaculée Conception",date: new Date(2026, 11,  8), desc: "Marie conçue sans péché originel." },
  { name: "Noël",                date: new Date(2026, 11, 25), desc: "Naissance de Jésus Christ, Fils de Dieu fait homme." }
];

// Traduction des jours
const JOURS_FR = {
  dimanche: "Dimanche", lundi: "Lundi",   mardi: "Mardi",
  mercredi: "Mercredi", jeudi: "Jeudi",   vendredi: "Vendredi",
  samedi:   "Samedi"
};

// Fonctions utilitaires sur les données

/** Retourne le saint du jour (ou un saint générique). */
function getSaint() {
  const today = new Date();
  const key   = `${today.getMonth() + 1}-${today.getDate()}`;
  return SAINTS[key] || { name: "Saint du jour", desc: "Un saint de l'Église nous inspire par sa foi et son témoignage." };
}

/** Retourne la prochaine fête liturgique à venir. */
function getNextFeast() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const found = FEASTS_2026.find(f => {
    const d = new Date(f.date);
    d.setHours(0, 0, 0, 0);
    return d >= now;
  });
  return found || FEASTS_2026[FEASTS_2026.length - 1];
}

/** Retourne "Aujourd'hui", "Demain", "Dans N jours" ou "Passé". */
function daysUntil(date) {
  const now  = new Date(); now.setHours(0, 0, 0, 0);
  const d    = new Date(date); d.setHours(0, 0, 0, 0);
  const diff = Math.round((d - now) / 86400000);
  if (diff === 0) return "Aujourd'hui";
  if (diff === 1) return "Demain";
  if (diff  < 0) return "Passé";
  return `Dans ${diff} jours`;
}

/** Formate une date en français : "22 avril 2026". */
function formatDate(date) {
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

/** Filtre les paroisses selon le texte de recherche stocké dans le state. */
function getFiltered() {
  if (!state.search.trim()) return PAROISSES;
  const q = state.search.toLowerCase();
  return PAROISSES.filter(p =>
    p.nom.toLowerCase().includes(q)      ||
    p.ville.toLowerCase().includes(q)    ||
    p.quartier.toLowerCase().includes(q) ||
    (p.curé && p.curé.toLowerCase().includes(q))
  );
}
