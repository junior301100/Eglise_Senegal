/**
 * Charge Leaflet depuis le CDN si ce n'est pas déjà fait,
 * puis marque l'état et redessine l'interface.
 */
function initLeaflet() {
  if (window.L) {
    // Leaflet déjà chargé (ex: rechargement de page)
    state.leafletReady = true;
    renderPage();
    return;
  }

  // Chargement du JS Leaflet
  const script  = document.createElement("script");
  script.src    = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
  script.onload = () => {
    state.leafletReady = true;
    renderPage();         // redessine pour afficher les cartes
  };
  document.head.appendChild(script);
}

/**
 * Crée (ou recrée) une carte Leaflet dans le conteneur indiqué.
 *
 * @param {string}   containerId  - id de la <div> qui reçoit la carte
 * @param {Array}    paroisses    - liste de paroisses à afficher
 * @param {Array}    center       - [lat, lon] du centre initial (optionnel)
 * @param {number}   zoom         - niveau de zoom initial
 * @param {number}   selectedId   - id de la paroisse à mettre en avant (optionnel)
 */
function buildLeafletMap(containerId, paroisses, center, zoom, selectedId) {
  // Petit délai pour s'assurer que le DOM est prêt
  setTimeout(() => {
    const el = document.getElementById(containerId);
    if (!el || !window.L) return;

    // Détruire la carte précédente si elle existe
    if (el._leafletMap) {
      el._leafletMap.remove();
    }

    // Créer la carte
    const map = window.L.map(el).setView(center || [14.5, -14.5], zoom || 6);

    // Fond de carte OpenStreetMap
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(map);

    // Sauvegarder la référence pour pouvoir la supprimer plus tard
    el._leafletMap = map;

    // Ajouter un marqueur par paroisse
    const markers = paroisses.map(p => {
      const marker = window.L.marker([p.coordonnees.lat, p.coordonnees.lon])
        .addTo(map)
        .bindPopup(`
          <strong style="font-size:13px">${p.nom}</strong><br>
          <small>${p.adresse}</small><br>
          <small>${p.ville}</small>
        `);

      // Ouvrir le popup et centrer sur la paroisse sélectionnée
      if (selectedId === p.id) {
        marker.openPopup();
        map.setView([p.coordonnees.lat, p.coordonnees.lon], 14);
      }

      return marker;
    });

    // Si aucune sélection, adapter le zoom pour voir tous les marqueurs
    if (!selectedId && paroisses.length > 1) {
      const group = window.L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.1));
    }

  }, 100);
}