import React from 'react';

function BrowseBooks() {
  return (
    <div className="browse-books">
      <h2>Browse Books</h2>
      <div className="book-grid">
        {/* Each book will be represented as a card */}
        <div className="book-card">
          <img src="book-cover.jpg" alt="Book Cover" />
          <h3>Book Title</h3>
        </div>
        {/* Repeat book cards */}
      </div>
    </div>
  );
}

export default BrowseBooks;
