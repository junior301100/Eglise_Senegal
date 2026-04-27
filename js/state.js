
const state = {
  // Page actuellement affichée
  page: "accueil",            // "accueil" | "paroisses" | "detail" | "liturgie"

  // Paroisse sélectionnée (pour la page détail)
  selectedParoisse: null,

  // Texte de recherche (page paroisses)
  search: "",

  
  // Lectures liturgiques du jour
  liturgy: null,
  liturgyLoading: false,
  liturgyError: false,

  // Carte Leaflet chargée ?
  leafletReady: false,
};