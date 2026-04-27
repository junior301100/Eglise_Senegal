function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function getFiltered() {
  if (!state.search && !state.filters) return PAROISSES;
  
  const searchTerm = removeAccents(state.search || '');
  const filters = state.filters || {};
  
  return PAROISSES.filter(p => {
    const matchesSearch = !searchTerm || 
      removeAccents(p.nom).includes(searchTerm) ||
      removeAccents(p.ville).includes(searchTerm) ||
      removeAccents(p.quartier).includes(searchTerm) ||
      removeAccents(p.curé).includes(searchTerm);
    
    const matchesCity = !filters.city || p.ville === filters.city;
    const matchesNeighborhood = !filters.neighborhood || p.quartier === filters.neighborhood;
    const matchesMassDay = !filters.massDay || (p.horaires[filters.massDay] && p.horaires[filters.massDay].length > 0);
    
    return matchesSearch && matchesCity && matchesNeighborhood && matchesMassDay;
  });
}

function getUniqueCities() {
  return [...new Set(PAROISSES.map(p => p.ville))].sort();
}

function getUniqueNeighborhoods() {
  return [...new Set(PAROISSES.map(p => p.quartier))].sort();
}

function handleFilterChange(filterType, value) {
  if (!state.filters) state.filters = {};
  
  if (value === '') {
    delete state.filters[filterType];
  } else {
    state.filters[filterType] = value;
  }
  
  renderPage();
}

function renderParoisses() {
  const filtered = getFiltered();

  const searchHtml = `
    <div style="background: white; padding: 28px 20px; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
      <div style="max-width: 700px; margin: 0 auto;">
        <div style="display: flex; gap: 10px; align-items: center;">
          <div style="position: relative; flex: 1;">
            <div style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #aaa;">
              ${icons.search(18)}
            </div>
            <input
              type="text"
              id="searchInput"
              value="${state.search.replace(/"/g, '&quot;')}"
              oninput="handleSearchInput(this.value)"
              placeholder="Rechercher par nom, ville, quartier ou curé..."
              style="
                width: 100%; padding: 14px 48px;
                border-radius: 10px; border: 2px solid #e9ecef;
                font-size: 15px; outline: none;
                box-sizing: border-box; font-family: Georgia, serif;
              "
            />
            ${state.search
              ? `<button onclick="clearSearch()" style="
                   position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
                   background: none; border: none; cursor: pointer; color: #aaa; font-size: 18px;
                 ">×</button>`
              : ""}
          </div>
          <button
            onclick="executeSearch()"
            style="
              padding: 14px 24px; border-radius: 10px;
              background: linear-gradient(135deg, #1a1a2e, #0f3460);
              color: white; border: none; cursor: pointer;
              font-size: 15px; font-family: Georgia, serif; font-weight: 600;
              display: flex; align-items: center; gap: 8px;
              transition: all 0.2s; white-space: nowrap;
            "
            onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 4px 12px rgba(26,26,46,0.3)'"
            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'"
          >
            ${icons.search(16)} Rechercher
          </button>
        </div>
        <div style="margin-top: 12px; font-size: 13px; color: #888;">
          ${filtered.length} paroisse${filtered.length !== 1 ? "s" : ""} trouvée${filtered.length !== 1 ? "s" : ""}
          ${state.search ? ` pour "${state.search}"` : ""}
        </div>
      </div>
    </div>
  `;

  const cardsHtml = filtered.length === 0
    ? `<div style="text-align: center; padding: 60px; color: #888; font-family: Georgia, serif; font-size: 16px;">
         Aucune paroisse trouvée pour votre recherche
       </div>`
    : filtered.map(p => {
        const horairesHtml = (p.horaires.dimanche || []).slice(0, 3).map(h =>
          `<span style="background: #f8f8f8; border: 1px solid #e8e8e8; border-radius: 6px; padding: 2px 8px; font-size: 12px; color: #555;">${h}</span>`
        ).join("");
        const plusHtml = (p.horaires.dimanche || []).length > 3
          ? `<span style="font-size: 12px; color: #aaa;">+${p.horaires.dimanche.length - 3}</span>`
          : "";
        return `
          <div
            style="
              background: white; border-radius: 14px; padding: 24px;
              box-shadow: 0 2px 16px rgba(0,0,0,0.07);
              border: 1px solid #f0f0f0;
              transition: all 0.2s;
            "
            onmouseenter="this.style.boxShadow='0 8px 32px rgba(0,0,0,0.12)'; this.style.borderColor='#d4af37';"
            onmouseleave="this.style.boxShadow='0 2px 16px rgba(0,0,0,0.07)'; this.style.borderColor='#f0f0f0';"
          >
            <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px;">
              <div style="width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0; background: linear-gradient(135deg, #1a1a2e, #0f3460); display: flex; align-items: center; justify-content: center; color: #d4af37;">${icons.church(18)}</div>
              <span style="background: rgba(212,175,55,0.1); color: #b8860b; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; border: 1px solid rgba(212,175,55,0.2);">${p.ville}</span>
            </div>
            <h3 style="font-family: Georgia, serif; font-size: 16px; margin-bottom: 10px; color: #1a1a2e; line-height: 1.4;">${p.nom}</h3>
            <div style="font-size: 13px; color: #777; display: flex; flex-direction: column; gap: 5px; margin-bottom: 16px;">
              <span style="display: flex; align-items: center; gap: 6px;">${icons.mapPin(12)} ${p.quartier}, ${p.ville}</span>
              <span style="display: flex; align-items: center; gap: 6px;">${icons.user(12)} ${p.curé}</span>
              <span style="display: flex; align-items: center; gap: 6px;">${icons.phone(12)} ${p.telephone}</span>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">${horairesHtml} ${plusHtml}</div>
            <button onclick="navigate('detail', PAROISSES[${p.id - 1}])" style="width: 100%; padding: 10px; border-radius: 8px; background: linear-gradient(135deg, #1a1a2e, #0f3460); color: white; border: none; cursor: pointer; font-size: 13px; font-family: Georgia, serif; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 6px;">${icons.externalLink(14)} Voir les détails</button>
          </div>`;
      }).join("");

  const mapHtml = state.leafletReady && filtered.length > 0
    ? `<div style="
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          height: 500px;
          border: 2px solid rgba(212,175,55,0.2);
        ">
         <div id="map-paroisses" style="width: 100%; height: 100%;"></div>
       </div>`
    : "";

  return `
    <div class="page">

      <!-- Titre -->
      <section style="background: linear-gradient(135deg, #1a1a2e, #0f3460); padding: 60px 20px 40px; text-align: center;">
        <h1 style="font-family: Georgia, serif; font-size: clamp(1.8rem,4vw,2.8rem); color: white; margin-bottom: 12px;">
          Nos <span style="color: #d4af37;">Paroisses</span>
        </h1>
        <p style="color: rgba(255,255,255,0.7); font-size: 16px;">
          Les paroisses catholiques à travers tout le Sénégal
        </p>
      </section>

      ${searchHtml}

      <!-- Grille + Carte -->
      <div style="max-width: 1200px; margin: 0 auto; padding: 40px 20px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; margin-bottom: 60px;">
          ${cardsHtml}
        </div>
        ${mapHtml}
      </div>

    </div>`;
}

function handleSearchInput(value) {
  state.search = value;
}

function executeSearch() {
  renderPage();
}

function clearSearch() {
  state.search = '';
  renderPage();
}