import React, { useState } from 'react';
import styles from './ProductReview.module.css';
import ReviewList from '../ReviewList/ReviewList';
import ReviewForm from '../ReviewForm/ReviewForm';

export type Review = {
  id: number;
  user: string;
  text: string;
  rating: number;
  media: string[]; // image/video URLs
  date: string;
};

const ProductReview = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleAddReview = (newReview: Review) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <div className={styles.container}>
      <h2>Customer Reviews</h2>
      <ReviewForm onSubmit={handleAddReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ProductReview;
