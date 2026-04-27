/**
 * pages/detail.js
 * Page de détail d'une paroisse : horaires, contact, carte, itinéraire.
 */

function renderDetail() {
  const p = state.selectedParoisse;
  if (!p) return "";

  // ── Horaires par jour ───────────────────────────────────────────────────────
  const horairesHtml = Object.entries(p.horaires).map(([jour, heures]) => {
    const heuresHtml = heures.map(h =>
      `<span style="
         background: #1a1a2e; color: #d4af37;
         padding: 2px 8px; border-radius: 6px;
         font-size: 12px; font-weight: 600;
       ">${h}</span>`
    ).join("");

    return `
      <div style="background: #f8f9fa; border-radius: 10px; padding: 14px; border-left: 3px solid #d4af37;">
        <div style="font-weight: 600; color: #1a1a2e; margin-bottom: 8px; font-size: 14px; font-family: Georgia, serif;">
          ${JOURS_FR[jour]}
        </div>
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${heuresHtml}
        </div>
      </div>`;
  }).join("");

  // ── Infos de contact ────────────────────────────────────────────────────────
  const contactItems = [
    [icons.mapPin(18), "Adresse",   p.adresse],
    [icons.phone(18),  "Téléphone", p.telephone],
    [icons.mail(18),   "Email",     p.email],
  ];

  const contactHtml = contactItems.map(([icon, label, val]) => `
    <div style="display: flex; gap: 14px; align-items: flex-start;">
      <div style="
        width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0;
        background: rgba(15,52,96,0.08);
        display: flex; align-items: center; justify-content: center;
        color: #0f3460;
      ">${icon}</div>
      <div>
        <div style="font-size: 11px; color: #999; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 2px;">${label}</div>
        <div style="color: #333; font-size: 14px;">${val}</div>
      </div>
    </div>`
  ).join("");

  // ── Carte (si Leaflet prêt) ─────────────────────────────────────────────────
  const mapHtml = state.leafletReady
    ? `<div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.07);">
         <div style="
           padding: 18px 20px 12px;
           font-family: Georgia, serif; font-size: 16px; font-weight: 600; color: #1a1a2e;
           display: flex; align-items: center; gap: 8px;
         ">
           <span style="color: #d4af37;">${icons.map(16)}</span> Localisation
         </div>
         <div id="map-detail" style="height: 280px;"></div>
       </div>`
    : "";

  return `
    <div class="page">

      <!-- ── Entête paroisse ── -->
      <section style="background: linear-gradient(135deg, #1a1a2e, #0f3460); padding: 40px 20px;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <button onclick="navigate('paroisses')" style="
            display: inline-flex; align-items: center; gap: 6px;
            background: rgba(255,255,255,0.1); border: none; cursor: pointer;
            color: rgba(255,255,255,0.8); padding: 8px 16px; border-radius: 8px;
            margin-bottom: 24px; font-size: 13px;
          ">
            ${icons.arrowLeft(14)} Retour aux paroisses
          </button>

          <div style="display: flex; gap: 24px; align-items: flex-start; flex-wrap: wrap;">
            <div style="
              width: 80px; height: 80px; border-radius: 20px; flex-shrink: 0;
              background: rgba(212,175,55,0.15);
              display: flex; align-items: center; justify-content: center;
              border: 2px solid rgba(212,175,55,0.3); color: #d4af37;
            ">${icons.church(40)}</div>
            <div>
              <h1 style="font-family: Georgia, serif; font-size: clamp(1.4rem,3vw,2rem); color: white; margin-bottom: 8px;">${p.nom}</h1>
              <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                <span style="display: flex; align-items: center; gap: 6px; color: rgba(255,255,255,0.7); font-size: 14px;">
                  ${icons.mapPin(13)} ${p.ville}, ${p.quartier}
                </span>
                <span style="display: flex; align-items: center; gap: 6px; color: rgba(255,255,255,0.7); font-size: 14px;">
                  ${icons.user(13)} ${p.curé}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Contenu principal ── -->
      <div style="max-width: 1200px; margin: 40px auto; padding: 0 20px;">
        <div class="detail-grid">

          <!-- Colonne gauche : horaires + contact -->
          <div style="display: flex; flex-direction: column; gap: 24px;">

            <!-- Horaires -->
            <div style="background: white; border-radius: 16px; padding: 28px; box-shadow: 0 2px 16px rgba(0,0,0,0.07);">
              <h2 style="font-family: Georgia, serif; font-size: 20px; margin-bottom: 20px; color: #1a1a2e; display: flex; align-items: center; gap: 8px;">
                <span style="color: #d4af37;">${icons.clock(18)}</span> Horaires des Messes
              </h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px;">
                ${horairesHtml}
              </div>
            </div>

            <!-- Contact -->
            <div style="background: white; border-radius: 16px; padding: 28px; box-shadow: 0 2px 16px rgba(0,0,0,0.07);">
              <h2 style="font-family: Georgia, serif; font-size: 20px; margin-bottom: 20px; color: #1a1a2e; display: flex; align-items: center; gap: 8px;">
                <span style="color: #d4af37;">${icons.phone(18)}</span> Contact
              </h2>
              <div style="display: flex; flex-direction: column; gap: 16px;">
                ${contactHtml}
              </div>
            </div>

          </div>

          <!-- Colonne droite : carte -->
          <div style="display: flex; flex-direction: column; gap: 24px;">

            ${mapHtml}

          </div>
        </div>
      </div>
    </div>`;
}
