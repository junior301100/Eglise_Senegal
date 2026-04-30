/**
 * Données des paroisses du Sénégal
 */

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
    nom: "Église Saint-Joseph de Saint-Louis",
    ville: "Saint-Louis", quartier: "Sor",
    adresse: "Rue Blanchot, Saint-Louis",
    telephone: "+221 33 961 12 34",
    email: "stjoseph.saintlouis@eglise.catho.sn",
    horaires: {
      dimanche: ["07:00","09:00","11:00","18:00"],
      lundi:    ["07:00","18:30"], mardi:    ["07:00","18:30"],
      mercredi: ["07:00","18:30"], jeudi:    ["07:00","18:30"],
      vendredi: ["07:00","18:30"], samedi:   ["07:00","18:30"]
    },
    coordonnees: { lat: 16.0179, lon: -16.4935 },
    curé: "Père Joseph Ndiaye"
  },
  {
    id: 5,
    nom: "Église Sainte-Anne de Ziguinchor",
    ville: "Ziguinchor", quartier: "Boudody",
    adresse: "Boulevard de la Résistance, Ziguinchor",
    telephone: "+221 33 987 65 43",
    email: "steanne.ziguinchor@eglise.catho.sn",
    horaires: {
      dimanche: ["07:00","09:00","11:00","18:00"],
      lundi:    ["07:00","18:30"], mardi:    ["07:00","18:30"],
      mercredi: ["07:00","18:30"], jeudi:    ["07:00","18:30"],
      vendredi: ["07:00","18:30"], samedi:   ["07:00","18:30"]
    },
    coordonnees: { lat: 12.5678, lon: -12.2345 },
    curé: "Père Michel Sarr"
  },
  {
    id: 6,
    nom: "Église Saint-Pierre de Tambacounda",
    ville: "Tambacounda", quartier: "Centre",
    adresse: "Avenue du 4 Décembre, Tambacounda",
    telephone: "+221 33 923 45 67",
    email: "stpierre.tambacounda@eglise.catho.sn",
    horaires: {
      dimanche: ["07:00","09:00","11:00","18:00"],
      lundi:    ["07:00","18:30"], mardi:    ["07:00","18:30"],
      mercredi: ["07:00","18:30"], jeudi:    ["07:00","18:30"],
      vendredi: ["07:00","18:30"], samedi:   ["07:00","18:30"]
    },
    coordonnees: { lat: 13.7707, lon: -13.6734 },
    curé: "Père Pierre Ba"
  },
  {
    id: 7,
    nom: "Église Saint-François de Mbour",
    ville: "Mbour", quartier: "Plateau",
    adresse: "Route de Saly, Mbour",
    telephone: "+221 33 934 56 78",
    email: "stfrancois.mbour@eglise.catho.sn",
    horaires: {
      dimanche: ["07:00","09:00","11:00","18:00"],
      lundi:    ["07:00","18:30"], mardi:    ["07:00","18:30"],
      mercredi: ["07:00","18:30"], jeudi:    ["07:00","18:30"],
      vendredi: ["07:00","18:30"], samedi:   ["07:00","18:30"]
    },
    coordonnees: { lat: 14.4475, lon: -16.9567 },
    curé: "Père François Diatta"
  },
  {
    id: 8,
    nom: "Église Sainte-Marie de Kaolack",
    ville: "Kaolack", quartier: "Linguère",
    adresse: "Avenue Malick Sy, Kaolack",
    telephone: "+221 33 945 67 89",
    email: "stemarie.kaolack@eglise.catho.sn",
    horaires: {
      dimanche: ["07:00","09:00","11:00","18:00"],
      lundi:    ["07:00","18:30"], mardi:    ["07:00","18:30"],
      mercredi: ["07:00","18:30"], jeudi:    ["07:00","18:30"],
      vendredi: ["07:00","18:30"], samedi:   ["07:00","18:30"]
    },
    coordonnees: { lat: 14.1567, lon: -16.1234 },
    curé: "Père Marie Gueye"
  }
];

