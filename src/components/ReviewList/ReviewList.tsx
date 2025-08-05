import React from 'react';
import styles from './ReviewList.module.css';
import { Review } from '../ProductReview/ProductReview';

interface Props {
  reviews: Review[];
}

const ReviewList = ({ reviews }: Props) => {
  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div className={styles.list}>
      {reviews.map((review) => (
        <div key={review.id} className={styles.card}>
          <div className={styles.header}>
            <strong>{review.user}</strong>
            <span>{review.date}</span>
          </div>
          <div className={styles.rating}>
            {'★'.repeat(review.rating)}
            {'☆'.repeat(5 - review.rating)}
          </div>
          <p>{review.text}</p>
          <div className={styles.mediaContainer}>
            {review.media.map((m, i) =>
              m.type.includes('video') ? (
                <video className={styles.media} key={i} src={m.src} controls width="150" />
              ) : (
                <img className={styles.media} key={i} src={m.src} alt={`review-media-${i}`} width="150" />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
