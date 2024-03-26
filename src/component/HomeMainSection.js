// HomeMainSection.js
import React, { useState, useEffect } from 'react';
import reviewsData from '../data/reviews';

const HomeMainSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const randomReviews = getRandomReviews();
    setReviews(randomReviews);
  }, []);

  const getRandomReviews = () => {
    const shuffledReviews = reviewsData.sort(() => 0.5 - Math.random());
    return shuffledReviews.slice(0, 2);
  }

  return (
    <section>
      <div className="about-us">
        <h2>About Us</h2>
        {/* Company's vision and mission */}
        <p>Company's Vision and Mission Description</p>
        <button>Shop Now</button>
      </div>
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {/* Display customer reviews */}
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review.customerName}</p>
            <p>{review.reviewContent}</p>
            <div className="rating">
              {[...Array(review.stars)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeMainSection;
