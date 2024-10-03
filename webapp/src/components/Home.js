import React from 'react';
import './Home.css'; // Custom CSS for styling

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to the Virtual Library</h1>
          <p>Discover thousands of books, read reviews, and curate your personal reading list.</p>
          <a href="#" className="btn btn-primary btn-lg">Browse Books</a>
        </div>
      </div>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Explore Categories</h2>
        <div className="categories">
          <div className="category">Fiction</div>
          <div className="category">Non-Fiction</div>
          <div className="category">Science</div>
          <div className="category">History</div>
          <div className="category">Children</div>
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="popular-books-section">
        <h2>Popular Books</h2>
        <div className="popular-books">
          <div className="book-card">
            <img src="https://via.placeholder.com/150" alt="Book Cover" />
            <h3>Book Title 1</h3>
            <p>★★★★★</p>
          </div>
          <div className="book-card">
            <img src="https://via.placeholder.com/150" alt="Book Cover" />
            <h3>Book Title 2</h3>
            <p>★★★★☆</p>
          </div>
          <div className="book-card">
            <img src="https://via.placeholder.com/150" alt="Book Cover" />
            <h3>Book Title 3</h3>
            <p>★★★★★</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <h2>What Our Readers Say</h2>
        <div className="reviews">
          <div className="review">
            <p>"An amazing platform with a great selection of books!"</p>
            <p>– Reader 1</p>
          </div>
          <div className="review">
            <p>"Love the simplicity and ease of use!"</p>
            <p>– Reader 2</p>
          </div>
          <div className="review">
            <p>"The recommendations are spot on."</p>
            <p>– Reader 3</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
