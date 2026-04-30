/**
 * Données liturgiques et saints
 */

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

// Saints du jour
const SAINTS = {
  "1-1": { name: "Sainte Marie, Mère de Dieu", desc: "Mère de Jésus et modèle de foi pour tous les chrétiens." },
  "1-6": { name: "Saint André", desc: "Apôtre, frère de Pierre, premier appelé par Jésus." },
  "2-2": { name: "Sainte Présentation", desc: "Présentation de Jésus au Temple, purification de Marie." },
  "2-14": { name: "Saint Valentin", desc: "Témoin de l'amour chrétien, martyr pour la foi." },
  "3-17": { name: "Saint Patrick", desc: "Apôtre de l'Irlande, missionnaire zélé." },
  "3-19": { name: "Saint Joseph", desc: "Époux de Marie, modèle de père et de travailleur." },
  "3-25": { name: "Annonciation", desc: "Ange Gabriel annonce à Marie la naissance de Jésus." },
  "4-23": { name: "Saint Georges", desc: "Martyr courageux, symbole de la foi face à l'adversité." },
  "5-1": { name: "Saint Joseph ouvrier", desc: "Modèle de dignité du travail et de vie simple." },
  "5-31": { name: "Sainte Visitation", desc: "Marie visite sa cousine Élisabeth, chant de joie." },
  "6-24": { name: "Saint Jean-Baptiste", desc: "Précurseur du Christ, voix qui prépare la voie." },
  "6-29": { name: "Saint Pierre et Paul", desc: "Fondements de l'Église, témoins jusqu'au martyre." },
  "7-16": { name: "Notre-Dame du Mont-Carmel", desc: "Marie protectrice, symbole de la vie spirituelle." },
  "8-15": { name: "Assomption", desc: "Marie élevée au ciel, première ressuscitée." },
  "8-22": { name: "Sainte Marie Reine", desc: "Marie couronnée dans la gloire céleste." },
  "9-8": { name: "Nativité de Marie", desc: "Naissance de la Mère de Dieu, joie pour l'humanité." },
  "9-14": { name: "Sainte Croix", desc: "Instrument de notre salut, victoire sur la mort." },
  "10-1": { name: "Sainte Thérèse", desc: "Petite voie d'amour, docteur de l'Église." },
  "10-2": { name: "Saints Anges Gardiens", desc: "Protection divine, présence invisible mais réelle." },
  "10-4": { name: "Saint François", desc: "Ami de la nature, pauvreté évangélique." },
  "10-7": { name: "Notre-Dame du Rosaire", desc: "Méditation des mystères du Christ avec Marie." },
  "10-18": { name: "Saint Luc", desc: "Évangéliste, médecin, ami de Marie." },
  "10-28": { name: "Saint Simon et Jude", desc: "Apôtres, témoins fidèles du Ressuscité." },
  "11-1": { name: "Toussaint", desc: "Communion des saints, famille céleste." },
  "11-2": { name: "Commémoration des défunts", desc: "Prière pour les âmes, espérance de la résurrection." },
  "11-9": { name: "Sainte Dédicace", desc: "Dédicace des églises, maison de Dieu parmi nous." },
  "11-21": { name: "Présentation de Marie", desc: "Offrande de sa vie au service de Dieu." },
  "11-30": { name: "Saint André", desc: "Premier apôtre appelé, pêcheur d'hommes." },
  "12-8": { name: "Immaculée Conception", desc: "Marie préservée du péché, pleine de grâce." },
  "12-12": { name: "Notre-Dame de Guadalupe", desc: "Apparition en Amérique, message d'amour." },
  "12-25": { name: "Noël", desc: "Incarnation du Verbe, Dieu fait homme." },
  "12-26": { name: "Saint Étienne", desc: "Premier martyr, témoin jusqu'à la mort." },
  "12-27": { name: "Saint Jean", desc: "Apôtre bien-aimé, disciple de l'amour." },
  "12-28": { name: "Saints Innocents", desc: "Martyrs innocents, témoins de l'enfance." },
  "12-31": { name: "Saint Sylvestre", desc: "Pape de la paix, fin d'année dans la prière." }
};

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
  return FEASTS_2026.find(f => f.date > now) || FEASTS_2026[0];
}

/** Retourne la fête du jour si elle existe. */
function getTodayFeast() {
  const now = new Date();
  return FEASTS_2026.find(f => 
    f.date.getDate() === now.getDate() && 
    f.date.getMonth() === now.getMonth()
  );
}

