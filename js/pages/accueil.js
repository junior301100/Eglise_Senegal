/**
 * pages/accueil.js
 * Page d'accueil.
 */

function renderAccueil() {
  const saint = getSaint();
  const feast = getNextFeast();

  const tops   = [10, 20, 70, 80, 40, 60];
  const lefts  = [5, 85, 15, 90, 50, 30];
  const decorativeCrosses = Array.from({ length: 6 }, (_, i) => `
    <div style="position: absolute; opacity: 0.04; top: ${tops[i]}%; left: ${lefts[i]}%; transform: rotate(${i * 30}deg);">
      ${icons.cross(60 + i * 20, "#d4af37")}
    </div>`
  ).join("");

  const stats = [
    ["8", "Paroisses"],
    ["7", "Diocèses"],
  ];
  const statsHtml = stats.map(([n, l]) => `
    <div style="text-align: center; cursor: default;">
      <div style="font-size: 32px; font-weight: 700; color: white; margin-bottom: 4px;">${n}</div>
      <div style="font-size: 14px; color: rgba(255,255,255,0.8);">${l}</div>
    </div>`
  ).join("");

  // Cartes de fonctionnalités
  const features = [
    {
      icon:  icons.church(28),
      title: "Paroisses",
      text:  "Annuaire complet avec horaires, contacts et localisations des paroisses.",
      page:  "paroisses",
      label: "Explorer"
    },
    {
      icon:  icons.map(28),
      title: "Carte Interactive",
      text:  "Localisez facilement les paroisses près de chez vous sur une carte interactive.",
      page:  "paroisses",
      label: "Voir la carte"
    },
  ];

  const featuresHtml = features.map(f => `
    <div
      onclick="navigate('${f.page}')"
      style="
        background: white; border-radius: 16px; padding: 32px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        border: 1px solid rgba(212,175,55,0.1);
        transition: transform 0.2s, box-shadow 0.2s;
        cursor: pointer;
      "
      onmouseenter="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 40px rgba(0,0,0,0.14)';"
      onmouseleave="this.style.transform=''; this.style.boxShadow='0 4px 24px rgba(0,0,0,0.08)';"
    >
      <div style="
        width: 64px; height: 64px; border-radius: 16px; margin-bottom: 20px;
        background: linear-gradient(135deg, #1a1a2e, #0f3460);
        display: flex; align-items: center; justify-content: center;
        color: #d4af37;
      ">${f.icon}</div>
      <h3 style="font-family: Georgia, serif; font-size: 20px; margin-bottom: 10px; color: #1a1a2e;">${f.title}</h3>
      <p style="color: #666; line-height: 1.7; margin-bottom: 20px; font-size: 14px;">${f.text}</p>
      <button onclick="navigate('${f.page}')" style="
        display: inline-flex; align-items: center; gap: 6px;
        color: #0f3460; background: none; border: none;
        cursor: pointer; font-weight: 600; font-size: 14px; font-family: Georgia, serif;
      ">${f.label} →</button>
    </div>`
  ).join("");

  return `
    <div class="page">

      <!-- ── Hero ── -->
      <section style="
        background: linear-gradient(160deg, #1a1a2e 0%, #0f3460 60%, #1a1a2e 100%);
        padding: 80px 20px 100px;
        text-align: center;
        position: relative;
        overflow: hidden;
      ">
        ${decorativeCrosses}

        <div style="max-width: 700px; margin: 0 auto; position: relative; z-index: 1;">
          <div style="
            display: inline-flex; align-items: center; gap: 8px;
            background: rgba(212,175,55,0.1);
            border: 1px solid rgba(212,175,55,0.3);
            border-radius: 24px; padding: 6px 16px; margin-bottom: 24px;
          ">
            ${icons.cross(12, "#d4af37")}
            <span style="color: #d4af37; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; font-family: Georgia, serif;">
              Bienvenue
            </span>
          </div>

          <h1 style="
            font-family: Georgia, serif;
            font-size: clamp(2rem, 5vw, 3.5rem);
            color: white; line-height: 1.2; margin-bottom: 20px;
            text-shadow: 0 2px 20px rgba(0,0,0,0.5);
          ">
            Communauté Catholique<br/>
            <span style="color: #d4af37;">du Sénégal</span>
          </h1>

          <p style="color: rgba(255,255,255,0.7); font-size: 18px; margin-bottom: 40px; line-height: 1.7;">
            Découvrez nos paroisses et les horaires des messes près de chez vous
          </p>

          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <button onclick="navigate('paroisses')" style="
              padding: 14px 32px; border-radius: 8px;
              background: linear-gradient(135deg, #d4af37, #b8860b);
              color: white; border: none; cursor: pointer;
              font-size: 15px; font-weight: 600; font-family: Georgia, serif;
              box-shadow: 0 4px 20px rgba(212,175,55,0.4);
              display: inline-flex; align-items: center; gap: 8px;
            ">
              ${icons.church(18)} Découvrir les paroisses
            </button>
                      </div>
        </div>
      </section>


      <!-- ── Statistiques ── -->
      <div style="background: #d4af37; padding: 20px 0;">
        <div style="
          max-width: 1200px; margin: 0 auto; padding: 0 20px;
          display: flex; justify-content: space-around; flex-wrap: wrap; gap: 16px;
        ">
          ${statsHtml}
        </div>
      </div>

      <!-- ── Fonctionnalités + Saint + Fête ── -->
      <div style="max-width: 1200px; margin: 0 auto; padding: 60px 20px;">

        <!-- Cartes fonctionnalités -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 60px;">
          ${featuresHtml}
        </div>

        <!-- Saint du jour + Prochaine fête -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">

          <!-- Saint du jour -->
          <div style="
            background: linear-gradient(135deg, #1a1a2e, #0f3460);
            border-radius: 16px; padding: 32px; color: white;
            border: 1px solid rgba(212,175,55,0.2);
            box-shadow: 0 8px 32px rgba(15,52,96,0.3);
          ">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
              <div style="
                width: 36px; height: 36px; border-radius: 50%;
                background: rgba(212,175,55,0.2);
                display: flex; align-items: center; justify-content: center;
                color: #d4af37;
              ">${icons.cross(16, "#d4af37")}</div>
              <span style="color: #d4af37; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; font-family: Georgia, serif;">
                Saint du Jour
              </span>
            </div>
            <h3 style="font-family: Georgia, serif; font-size: 22px; margin-bottom: 10px; color: white;">${saint.name}</h3>
            <p style="color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.7; margin-bottom: 16px;">${saint.desc}</p>
            <div style="display: flex; align-items: center; gap: 6px; color: rgba(212,175,55,0.7); font-size: 12px;">
              ${icons.calendar(12)} ${formatDate(new Date())}
            </div>
          </div>

          <!-- Prochaine fête -->
          <div style="
            background: linear-gradient(135deg, #8b1a1a, #4a0e0e);
            border-radius: 16px; padding: 32px; color: white;
            border: 1px solid rgba(212,175,55,0.15);
            box-shadow: 0 8px 32px rgba(139,26,26,0.3);
          ">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
              <div style="
                width: 36px; height: 36px; border-radius: 50%;
                background: rgba(212,175,55,0.2);
                display: flex; align-items: center; justify-content: center;
                color: #d4af37;
              ">${icons.calendar(16)}</div>
              <span style="color: #d4af37; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; font-family: Georgia, serif;">
                Prochaine Fête
              </span>
            </div>
            <h3 style="font-family: Georgia, serif; font-size: 22px; margin-bottom: 10px; color: white;">${feast.name}</h3>
            <p style="color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.7; margin-bottom: 16px;">${feast.desc}</p>
            <div style="display: flex; gap: 20px; align-items: center;">
              <div style="display: flex; align-items: center; gap: 6px; color: rgba(212,175,55,0.8); font-size: 12px;">
                ${icons.clock(12)} ${formatDate(feast.date)}
              </div>
              <div style="
                background: rgba(212,175,55,0.2); color: #d4af37;
                padding: 2px 10px; border-radius: 12px; font-size: 12px; font-weight: 600;
              ">${daysUntil(feast.date)}</div>
            </div>
          </div>

        </div>
      </div>
    </div>`;
}
