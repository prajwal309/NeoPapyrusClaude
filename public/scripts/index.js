const booksEl = document.getElementById('books');
const errorEl = document.getElementById('error');

function renderBooks(books) {
  booksEl.innerHTML = '';

  books.forEach((book) => {
    const cover = `/books/${encodeURIComponent(book)}/coverPage/frontpage.png`;

    const card = document.createElement('a');
    card.className = 'card book-card';
    card.href = `/book.html?book=${encodeURIComponent(book)}`;

    card.innerHTML = `
      <div class="book">
        <div class="book-cover">
          <img src="${cover}" alt="${book} cover" loading="lazy" />
        </div>
        <div class="book-pages">
          <div class="page"></div>
          <div class="page"></div>
          <div class="page"></div>
        </div>
      </div>
      <div class="title">${book}</div>
    `;

    booksEl.appendChild(card);
  });
}

async function loadBooks() {
  try {
    const response = await fetch('/api/books');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const books = await response.json();
    renderBooks(books);
  } catch (error) {
    console.error('Failed to load books:', error);
    errorEl.hidden = false;
    errorEl.textContent = `Failed to load books: ${error.message}`;
  }
}

loadBooks();
