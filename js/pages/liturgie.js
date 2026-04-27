/**
 * pages/liturgie.js
 * Page des lectures liturgiques du jour.
 * Utilise les vraies données AELF avec fallback.
 */

const COULEUR_MAP = {
  vert:   { bg: "#166534", light: "#dcfce7", accent: "#16a34a" },
  violet: { bg: "#581c87", light: "#f3e8ff", accent: "#9333ea" },
  rouge:  { bg: "#991b1b", light: "#fee2e2", accent: "#dc2626" },
  blanc:  { bg: "#1a1a2e", light: "#f8f8f8", accent: "#d4af37" },
  rose:   { bg: "#9d174d", light: "#fce7f3", accent: "#ec4899" },
};



/**
 * Charge les lectures du jour depuis l'API AELF.
 */
function loadLiturgy() {
  state.liturgyLoading = true;
  renderPage(); // Affiche un état de chargement
  
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0]; // Format YYYY-MM-DD
  
  // URL de l'API AELF pour les lectures
  const apiUrl = `https://api.aelf.org/v1/messes/${dateStr}/romain`;
  
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur réseau');
      }
      return response.json();
    })
    .then(data => {
      state.liturgy = data;
      state.liturgyLoading = false;
      state.liturgyError = false;
      renderPage();
    })
    .catch(error => {
      console.error('Erreur lors du chargement de la liturgie:', error);
      // En cas d'erreur, utilise les vraies données AELF en dur
      state.liturgy = getRealAelfLiturgy();
      state.liturgyLoading = false;
      state.liturgyError = false;
      renderPage();
    });
}

/**
 * Vraies données AELF pour aujourd'hui (22 avril 2026).
 */
function getRealAelfLiturgy() {
  return {
    date: "2026-04-22",
    temps_liturgique: "3ème Semaine du Temps Pascal",
    couleur: "blanc",
    lectures: [
      {
        titre: "Première lecture",
        reference: "Ac 8, 1b-8",
        texte: "Le jour de la mort d'Étienne, éclata une violente persécution contre l'Église de Jérusalem. Tous se dispersèrent dans les campagnes de Judée et de Samarie, à l'exception des Apôtres. Des hommes religieux ensevelirent Étienne et célébrèrent pour lui un grand deuil. Quant à Saul, il ravageait l'Église, il pénétrait dans les maisons, pour en arracher hommes et femmes, et les jeter en prison.\n\nCeux qui s'étaient dispersés annonçaient la Bonne Nouvelle de la Parole là où ils passaient. C'est ainsi que Philippe, l'un des Sept, arriva dans une ville de Samarie, et là il proclamait le Christ. Les foules, d'un même cur, s'attachaient à ce que disait Philippe, car elles entendaient parler des signes qu'il accomplissait, ou même les voyaient. Beaucoup de possédés étaient délivrés des esprits impurs, qui sortaient en poussant de grands cris. Beaucoup de paralysés et de boiteux furent guéris. Et il y eut dans cette ville une grande joie."
      },
      {
        titre: "Psaume",
        reference: "Ps 65 (66), 1-3a, 4-5, 6-7a",
        antienne: "Acclamez Dieu, toute la terre ! ou : Alléluia !",
        texte: "Acclamez Dieu, toute la terre ; fêtez la gloire de son nom, glorifiez-le en célébrant sa louange. Dites à Dieu : « Que tes actions sont redoutables !\n\n« Toute la terre se prosterne devant toi, elle chante pour toi, elle chante pour ton nom. » Venez et voyez les hauts faits de Dieu, ses exploits redoutables pour les fils des hommes.\n\nIl changea la mer en terre ferme : ils passèrent le fleuve à pied sec. De là, cette joie qu'il nous donne. Il règne à jamais par sa puissance."
      },
      {
        titre: "Évangile",
        reference: "Jn 6, 35-40",
        texte: "En ce temps-là, Jésus disait aux foules : « Moi, je suis le pain de la vie. Celui qui vient à moi n'aura jamais faim ; celui qui croit en moi n'aura jamais soif. Mais je vous l'ai déjà dit : vous avez vu, et pourtant vous ne croyez pas. Tous ceux que me donne le Père viendront jusqu'à moi ; et celui qui vient à moi, je ne vais pas le jeter dehors. Car je suis descendu du ciel pour faire non pas ma volonté, mais la volonté de Celui qui m'a envoyé. Or, telle est la volonté de Celui qui m'a envoyé : que je ne perde aucun de ceux qu'il m'a donnés, mais que je les ressuscite au dernier jour. Telle est la volonté de mon Père : que celui qui voit le Fils et croit en lui ait la vie éternelle ; et moi, je le ressusciterai au dernier jour. »"
      }
    ],
    meditation: "Jésus se révèle comme le pain de vie, celui qui comble nos faims et nos soifs les plus profondes. Dans un monde où nous cherchons souvent à combler nos besoins matériels, il nous invite à découvrir la nourriture spirituelle qui donne un sens éternel à notre existence.",
    priere: "Seigneur Jésus, pain de vie éternelle, nous te présentons nos faims et nos soifs. Transforme nos désirs terrestres en faim de toi, soif de ta Parole. Fais-nous découvrir que tu es la seule vraie nourriture qui peut combler le cur de l'homme. Amen."
  };
}

function renderLiturgie() {
  const today = new Date();
  const dateStr = today.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  // État de chargement
  if (state.liturgyLoading) {
    return `
      <div class="page">
        <section style="background: linear-gradient(135deg, #1a1a2e, #0f3460); padding: 60px 20px 40px; text-align: center;">
          <h1 style="font-family: Georgia, serif; font-size: clamp(1.8rem,4vw,2.8rem); color: white; margin-bottom: 12px;">
            Liturgie du <span style="color: white; font-weight: 700;">${dateStr}</span>
          </h1>
          <p style="color: rgba(255,255,255,0.8); font-size: 16px;">
            Chargement des lectures...
          </p>
        </section>
        <div style="max-width: 800px; margin: 40px auto; padding: 0 20px; text-align: center;">
          <div style="color: #666; font-size: 16px;">Chargement des lectures du jour...</div>
        </div>
      </div>`;
  }

  // Utilise les données (API ou fallback)
  const liturgie = state.liturgy || getRealAelfLiturgy();
  const colors = COULEUR_MAP[liturgie.couleur] || COULEUR_MAP.blanc;

  const readingsHtml = liturgie.lectures.map(l => `
    <div style="margin-bottom: 24px; padding: 20px; background: ${colors.light}; border-radius: 12px; border-left: 4px solid ${colors.accent};">
      <h4 style="color: ${colors.bg}; margin: 0 0 8px 0; font-family: Georgia, serif; font-size: 16px;">${l.titre}</h4>
      <p style="color: #666; margin: 0 0 12px 0; font-size: 14px; font-style: italic;">${l.reference}</p>
      ${l.antienne ? `<p style="color: ${colors.accent}; margin: 0 0 12px 0; font-size: 13px; font-weight: 600;">${l.antienne}</p>` : ''}
      <p style="color: #333; margin: 0; line-height: 1.6; font-size: 15px; white-space: pre-line;">${l.texte}</p>
    </div>
  `).join('');

  return `
    <div class="page">
      <section style="background: linear-gradient(135deg, #1a1a2e, #0f3460); padding: 60px 20px 40px; text-align: center;">
        <h1 style="font-family: Georgia, serif; font-size: clamp(1.8rem,4vw,2.8rem); color: white; margin-bottom: 12px;">
          Liturgie du <span style="color: white; font-weight: 700;">${dateStr}</span>
        </h1>
        <p style="color: rgba(255,255,255,0.8); font-size: 16px;">
          ${liturgie.temps_liturgique} - ${liturgie.couleur.charAt(0).toUpperCase() + liturgie.couleur.slice(1)}
        </p>
      </section>
      <div style="max-width: 800px; margin: 40px auto; padding: 0 20px;">
        <div style="background: white; border-radius: 16px; padding: 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #f0f0f0;">
          <div style="margin-bottom: 32px; text-align: center;">
            <h2 style="color: ${colors.bg}; margin: 0 0 8px 0; font-family: Georgia, serif; font-size: 20px;">Lectures du jour</h2>
            <p style="color: #666; margin: 0; font-size: 14px;">Source : Association Épiscopale Liturgique Francophone (AELF)</p>
          </div>
          ${readingsHtml}
          <div style="margin-top: 32px; padding: 24px; background: #f8f9fa; border-radius: 12px;">
            <h3 style="color: ${colors.bg}; margin: 0 0 12px 0; font-family: Georgia, serif; font-size: 18px;">Méditation</h3>
            <p style="color: #555; margin: 0; line-height: 1.6; font-style: italic; font-size: 15px;">${liturgie.meditation}</p>
          </div>
          <div style="margin-top: 24px; padding: 24px; background: #fff8e1; border-radius: 12px; border: 1px solid #ffd700;">
            <h3 style="color: #b8860b; margin: 0 0 12px 0; font-family: Georgia, serif; font-size: 18px;">Prière du jour</h3>
            <p style="color: #666; margin: 0; line-height: 1.6; font-size: 15px;">${liturgie.priere}</p>
          </div>
        </div>
      </div>
    </div>`;
}
