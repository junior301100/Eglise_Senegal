function renderPage() {
  renderHeader();

  const main = document.getElementById("page-content");

  if      (state.page === "accueil")   main.innerHTML = renderAccueil();
  else if (state.page === "paroisses") main.innerHTML = renderParoisses();
  else if (state.page === "detail")    main.innerHTML = renderDetail();
  else if (state.page === "liturgie")  main.innerHTML = renderLiturgie();

  if (state.leafletReady) {
    const filtered = getFiltered();

    if (state.page === "paroisses" && document.getElementById("map-paroisses")) {
      buildLeafletMap("map-paroisses", filtered, null, 6, null);
    }

    if (state.page === "detail" && state.selectedParoisse && document.getElementById("map-detail")) {
      const p = state.selectedParoisse;
      buildLeafletMap("map-detail", [p], [p.coordonnees.lat, p.coordonnees.lon], 14, p.id);
    }
  } 

  const footer = document.getElementById("footer");
  if (footer) {
    footer.innerHTML = renderFooter();
  }
}


document.addEventListener('DOMContentLoaded', function() {
  renderPage();   
  initLeaflet(); 
});