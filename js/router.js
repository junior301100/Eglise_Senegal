/**
 * Change de page et redessine l'interface.
 *
 * @param {string}  page      - nom de la page cible
 * @param {Object}  paroisse  - paroisse à afficher (page détail uniquement)
 */
function navigate(page, paroisse = null) {
  state.page = page;

  if (paroisse) {
    state.selectedParoisse = paroisse;
  }

  // Charger la liturgie lors du premier accès à cette page
  if (page === "liturgie" && !state.liturgy && !state.liturgyLoading) {
    loadLiturgy();
  }

  renderPage();
  window.scrollTo(0, 0);
}

/**
 * Construit et injecte le menu de navigation dans le <header>.
 * Appelé à chaque rendu pour mettre à jour l'onglet actif.
 */
function renderHeader() {
  const pages = [
    ["accueil",   "Accueil"],
    ["paroisses", "Paroisses"],
    ["liturgie",  "Liturgie"]
  ];

  const navButtons = pages.map(([pg, label]) => {
    const isActive = state.page === pg;
    return `
      <button
        onclick="navigate('${pg}')"
        style="
          padding: 8px 18px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          font-family: Georgia, serif;
          font-size: 14px;
          font-weight: 500;
          background:     ${isActive ? "rgba(212,175,55,0.2)" : "transparent"};
          color:          ${isActive ? "#d4af37" : "rgba(255,255,255,0.75)"};
          border-bottom:  ${isActive ? "2px solid #d4af37" : "2px solid transparent"};
          transition: all 0.2s;
        "
      >${label}</button>`;
  }).join("");

  document.getElementById("header").innerHTML = `
    <div style="
      position: sticky; top: 0; z-index: 1000;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      border-bottom: 1px solid rgba(212,175,55,0.2);
      box-shadow: 0 4px 24px rgba(0,0,0,0.4);
    ">
      <div style="
        max-width: 1200px; margin: 0 auto;
        padding: 0 20px;
        display: flex; align-items: center; justify-content: space-between;
        height: 70px;
      ">

        <!-- Logo -->
        <button onclick="navigate('accueil')" style="
          display: flex; align-items: center; gap: 12px;
          background: none; border: none; cursor: pointer; color: white;
        ">
          <div style="
            width: 40px; height: 40px; border-radius: 50%;
            background: linear-gradient(135deg, #d4af37, #b8860b);
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 0 20px rgba(212,175,55,0.4);
            color: white;
          ">${icons.cross(18, "white")}</div>
          <div style="text-align: left;">
            <div style="font-family: Georgia, serif; font-size: 15px; font-weight: 700; color: #d4af37; letter-spacing: 0.5px;">
              Église Catholique
            </div>
            <div style="font-size: 11px; color: rgba(255,255,255,0.6); letter-spacing: 2px; text-transform: uppercase;">
              Sénégal
            </div>
          </div>
        </button>

        <!-- Navigation -->
        <nav style="display: flex; gap: 8px;">
          ${navButtons}
        </nav>

      </div>
    </div>`;
}