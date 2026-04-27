
function renderFooter() {
  return `
    <footer style="
      background: linear-gradient(135deg, #1a1a2e, #0f3460);
      color: white;
      padding: 40px 20px 20px;
      margin-top: 60px;
    ">
      <div style="max-width: 1200px; margin: 0 auto;">
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-bottom: 30px;">
          
          <!-- Informations de contact -->
          <div>
            <h3 style="font-family: Georgia, serif; font-size: 18px; margin-bottom: 16px; color: #d4af37;">
              Archidiocèse de Dakar
            </h3>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                ${icons.mapPin(16)}
                <span style="font-size: 14px;">Avenue Pasteur, BP 2106 Dakar</span>
              </div>
              <div style="display: flex; align-items: center; gap: 10px;">
                ${icons.phone(16)}
                <span style="font-size: 14px;">+221 33 822 45 67</span>
              </div>
              <div style="display: flex; align-items: center; gap: 10px;">
                ${icons.mail(16)}
                <span style="font-size: 14px;">contact@archidiocesedakar.org</span>
              </div>
            </div>
          </div>

          <!-- Liens rapides -->
          <div>
            <h3 style="font-family: Georgia, serif; font-size: 18px; margin-bottom: 16px; color: #d4af37;">
              Navigation
            </h3>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <a href="#" onclick="navigate('accueil'); return false;" style="color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#d4af37'" onmouseout="this.style.color='rgba(255,255,255,0.8)'">Accueil</a>
              <a href="#" onclick="navigate('paroisses'); return false;" style="color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#d4af37'" onmouseout="this.style.color='rgba(255,255,255,0.8)'">Paroisses</a>
              <a href="#" onclick="navigate('liturgie'); return false;" style="color: rgba(255,255,255,0.8); text-decoration: none; font-size: 14px; transition: color 0.2s;" onmouseover="this.style.color='#d4af37'" onmouseout="this.style.color='rgba(255,255,255,0.8)'">Liturgie</a>
            </div>
          </div>

          <!-- Informations -->
          <div>
            <h3 style="font-family: Georgia, serif; font-size: 18px; margin-bottom: 16px; color: #d4af37;">
              À propos
            </h3>
            <p style="color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.6; margin: 0;">
              L'Église Catholique au Sénégal vous accueille avec ses 8 paroisses. 
              Trouvez une paroisse près de chez vous et participez à la vie de votre communauté.
            </p>
          </div>

        </div>

        <!-- Ligne de séparation -->
        <div style="
          height: 1px;
          background: rgba(212,175,55,0.3);
          margin: 30px 0 20px;
        "></div>

        <!-- Copyright -->
        <div style="text-align: center; color: rgba(255,255,255,0.6); font-size: 13px;">
          <p style="margin: 0;">
            © 2026 Archidiocèse de Dakar. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  `;
}