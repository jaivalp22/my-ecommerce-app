import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import reviewsData from '../data/reviews';

const HomeMainSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getRandomReviews();
  }, []);

  const getRandomReviews = () => {
    const shuffledReviews = reviewsData.sort(() => 0.5 - Math.random());
    setReviews(shuffledReviews.slice(0, 2));
  };
  
  return (
    <section>
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction.
        </p>
        <Link to='/products'>
          <button>Shop Now</button>
        </Link>
      </div>
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review.customerName}</p>
            <p>{review.reviewContent}</p>
            <div className="rating">
              {[...Array(review.stars)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeMainSection;
