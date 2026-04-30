/**
 * pages/bible.js
 * Page de lecture de la Bible avec API dynamique
 */

// Configuration des livres de la Bible
const BIBLE_BOOKS = {
  "Ancien Testament": [
    "Genèse", "Exode", "Lévitique", "Nombres", "Deutéronome",
    "Josué", "Juges", "Ruth", "1 Samuel", "2 Samuel", "1 Rois", "2 Rois",
    "1 Chroniques", "2 Chroniques", "Esdras", "Néhémie", "Esther",
    "Job", "Psaumes", "Proverbes", "Ecclésiaste", "Cantique",
    "Ésaïe", "Jérémie", "Lamentations", "Ézéchiel", "Daniel",
    "Osée", "Joël", "Amos", "Abdias", "Jonas", "Michée", "Nahum",
    "Habacuc", "Sophonie", "Aggée", "Zacharie", "Malachie"
  ],
  "Nouveau Testament": [
    "Matthieu", "Marc", "Luc", "Jean", "Actes",
    "Romains", "1 Corinthiens", "2 Corinthiens", "Galates", "Éphésiens",
    "Philippiens", "Colossiens", "1 Thessaloniciens", "2 Thessaloniciens",
    "1 Timothée", "2 Timothée", "Tite", "Philémon", "Hébreux",
    "Jacques", "1 Pierre", "2 Pierre", "1 Jean", "2 Jean", "3 Jean", "Jude", "Apocalypse"
  ]
};

// Cache pour les chapitres chargés
const bibleCache = {};

function renderBible() {
  const currentTestament = state.bibleTestament || "Ancien Testament";
  const currentBook = state.bibleBook || "Genèse";
  const currentChapter = state.bibleChapter || 1;
  
  const testamentOptions = Object.keys(BIBLE_BOOKS).map(t => 
    `<option value="${t}" ${t === currentTestament ? 'selected' : ''}>${t}</option>`
  ).join('');
  
  const bookOptions = BIBLE_BOOKS[currentTestament].map(b => 
    `<option value="${b}" ${b === currentBook ? 'selected' : ''}>${b}</option>`
  ).join('');
  
  const chapterOptions = Array.from({length: 50}, (_, i) => i + 1).map(ch => 
    `<option value="${ch}" ${ch === currentChapter ? 'selected' : ''}>${ch}</option>`
  ).join('');
  
  // Navigation chapitre précédent/suivant
  const prevChapter = currentChapter > 1 ? currentChapter - 1 : null;
  const nextChapter = currentChapter < 50 ? currentChapter + 1 : null;
  
  return `
    <div class="aelf-bible">
      <!-- Header minimaliste style AELF -->
      <div class="aelf-header">
        <div class="aelf-title">
          <h1>${currentBook}</h1>
          <div class="aelf-chapter-nav">
            <button class="nav-btn ${!prevChapter ? 'disabled' : ''}" onclick="changeChapter(${prevChapter || currentChapter})" ${!prevChapter ? 'disabled' : ''}>
              ‹
            </button>
            <span class="chapter-number">Chapitre ${currentChapter}</span>
            <button class="nav-btn ${!nextChapter ? 'disabled' : ''}" onclick="changeChapter(${nextChapter || currentChapter})" ${!nextChapter ? 'disabled' : ''}>
              ›
            </button>
          </div>
        </div>
        
        <div class="aelf-controls">
          <select id="book-select" onchange="changeBook(this.value)" class="aelf-select">
            ${bookOptions}
          </select>
          <select id="chapter-select" onchange="changeChapter(this.value)" class="aelf-select chapter-select">
            ${chapterOptions}
          </select>
        </div>
      </div>
      
      <!-- Navigation testament -->
      <div class="aelf-testament-nav">
        <button class="testament-btn ${currentTestament === 'Ancien Testament' ? 'active' : ''}" onclick="changeTestament('Ancien Testament')">
          Ancien Testament
        </button>
        <button class="testament-btn ${currentTestament === 'Nouveau Testament' ? 'active' : ''}" onclick="changeTestament('Nouveau Testament')">
          Nouveau Testament
        </button>
      </div>
      
      <!-- Contenu principal style AELF -->
      <div class="aelf-content">
        <div class="aelf-reading" id="bible-content">
          <div class="aelf-loading">
            <p>Chargement du chapitre...</p>
          </div>
        </div>
      </div>
      
          </div>
  `;
}

// Mapping des noms de livres français vers anglais pour l'API
const BOOK_NAME_MAPPING = {
  "Genèse": "Genesis",
  "Exode": "Exodus", 
  "Lévitique": "Leviticus",
  "Nombres": "Numbers",
  "Deutéronome": "Deuteronomy",
  "Josué": "Joshua",
  "Juges": "Judges",
  "Ruth": "Ruth",
  "1 Samuel": "1 Samuel",
  "2 Samuel": "2 Samuel",
  "1 Rois": "1 Kings",
  "2 Rois": "2 Kings",
  "1 Chroniques": "1 Chronicles",
  "2 Chroniques": "2 Chronicles",
  "Esdras": "Ezra",
  "Néhémie": "Nehemiah",
  "Esther": "Esther",
  "Job": "Job",
  "Psaumes": "Psalm",
  "Proverbes": "Proverbs",
  "Ecclésiaste": "Ecclesiastes",
  "Cantique": "Song of Solomon",
  "Ésaïe": "Isaiah",
  "Jérémie": "Jeremiah",
  "Lamentations": "Lamentations",
  "Ézéchiel": "Ezekiel",
  "Daniel": "Daniel",
  "Osée": "Hosea",
  "Joël": "Joel",
  "Amos": "Amos",
  "Abdias": "Obadiah",
  "Jonas": "Jonah",
  "Michée": "Micah",
  "Nahum": "Nahum",
  "Habacuc": "Habakkuk",
  "Sophonie": "Zephaniah",
  "Aggée": "Haggai",
  "Zacharie": "Zechariah",
  "Malachie": "Malachi",
  "Matthieu": "Matthew",
  "Marc": "Mark",
  "Luc": "Luke",
  "Jean": "John",
  "Actes": "Acts",
  "Romains": "Romans",
  "1 Corinthiens": "1 Corinthians",
  "2 Corinthiens": "2 Corinthians",
  "Galates": "Galatians",
  "Éphésiens": "Ephesians",
  "Philippiens": "Philippians",
  "Colossiens": "Colossians",
  "1 Thessaloniciens": "1 Thessalonians",
  "2 Thessaloniciens": "2 Thessalonians",
  "1 Timothée": "1 Timothy",
  "2 Timothée": "2 Timothy",
  "Tite": "Titus",
  "Philémon": "Philemon",
  "Hébreux": "Hebrews",
  "Jacques": "James",
  "1 Pierre": "1 Peter",
  "2 Pierre": "2 Peter",
  "1 Jean": "1 John",
  "2 Jean": "2 John",
  "3 Jean": "3 John",
  "Jude": "Jude",
  "Apocalypse": "Revelation"
};

// Charger le chapitre depuis l'API bible-api.com
async function loadBibleChapter(book, chapter) {
  const cacheKey = `${book}-${chapter}`;
  
  if (bibleCache[cacheKey]) {
    return bibleCache[cacheKey];
  }
  
  // Convertir le nom du livre pour l'API
  const apiBookName = BOOK_NAME_MAPPING[book] || book;
  
  // Utiliser bible-api.com pour les versets
  const response = await fetch(`https://bible-api.com/${apiBookName}+${chapter}`);
  const data = await response.json();
  
  bibleCache[cacheKey] = data;
  return data;
}


// Afficher le contenu du chapitre
async function displayChapter() {
  const currentBook = state.bibleBook || "Genèse";
  const currentChapter = state.bibleChapter || 1;
  
  const content = document.getElementById('bible-content');
  if (!content) return;
  
  // Afficher le chargement
  content.innerHTML = `
    <div class="aelf-loading">
      <p>Chargement du chapitre...</p>
    </div>
  `;
  
  try {
    const chapterData = await loadBibleChapter(currentBook, currentChapter);
    
    if (chapterData.verses && chapterData.verses.length > 0) {
      const versesHtml = chapterData.verses.map(verse => `
        <div class="aelf-verse">
          <span class="verse-number">${verse.verse}</span>
          <span class="verse-text">${verse.text}</span>
        </div>
      `).join('');
      
      content.innerHTML = versesHtml;
    } else {
      content.innerHTML = `
        <div class="aelf-empty">
          <p>Chapitre ${currentChapter}</p>
          <p class="empty-subtitle">Ce chapitre n'est pas encore disponible</p>
        </div>
      `;
    }
  } catch (error) {
    content.innerHTML = `
      <div class="aelf-empty">
        <p>Erreur de chargement</p>
        <p class="empty-subtitle">Veuillez vérifier votre connexion</p>
      </div>
    `;
  }
}

function changeTestament(testament) {
  state.bibleTestament = testament;
  const books = BIBLE_BOOKS[testament];
  state.bibleBook = books[0];
  state.bibleChapter = 1;
  renderPage();
  setTimeout(displayChapter, 100);
}

function changeBook(book) {
  state.bibleBook = book;
  state.bibleChapter = 1;
  renderPage();
  setTimeout(displayChapter, 100);
}

function changeChapter(chapter) {
  state.bibleChapter = parseInt(chapter);
  renderPage();
  setTimeout(displayChapter, 100);
}

function searchBible(query) {
  if (!query.trim()) {
    displayChapter();
    return;
  }
  
  const content = document.getElementById('bible-content');
  if (!content) return;
  
  // Rechercher dans les données françaises
  const currentTestament = state.bibleTestament || "Ancien Testament";
  const testament = BIBLE[currentTestament];
  const currentBook = state.bibleBook || "Genèse";
  const bookData = testament[currentBook];
  
  if (!bookData) {
    content.innerHTML = `
      <div class="aelf-empty">
        <p>Livre non trouvé</p>
        <p class="empty-subtitle">Essayez une autre recherche</p>
      </div>
    `;
    return;
  }
  
  const results = Object.entries(bookData.key_verses).filter(([reference, text]) => 
    text.toLowerCase().includes(query.toLowerCase()) ||
    reference.toLowerCase().includes(query.toLowerCase())
  );
  
  if (results.length > 0) {
    const versesHtml = results.map(([reference, text]) => {
      const [verseNum] = reference.split(':').slice(1);
      return `
        <div class="aelf-verse highlighted">
          <span class="verse-number">${verseNum}</span>
          <span class="verse-text">${highlightText(text, query)}</span>
        </div>
      `;
    }).join('');
    
    content.innerHTML = versesHtml;
  } else {
    content.innerHTML = `
      <div class="aelf-empty">
        <p>Aucun résultat pour "${query}"</p>
        <p class="empty-subtitle">Essayez une autre recherche</p>
      </div>
    `;
  }
}

function highlightText(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}
