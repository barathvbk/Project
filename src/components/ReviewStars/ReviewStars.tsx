import React from "react";
import styles from "./ReviewStars.module.css";

type ReviewStarsProps = {
  rating: number; // between 0 and 5 (e.g. 4.5)
  max?: number;   // default is 5
  reviewsCount:number;
  onClick?: () => void;
};

const ReviewStars: React.FC<ReviewStarsProps> = ({ rating, max = 5,reviewsCount, onClick }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className={styles.stars} onClick={onClick}>
      {[...Array(max)].map((_, index) => {
        if (index < fullStars) {
          return <span key={index} className={styles.star}>★</span>;
        } else if (index === fullStars && hasHalf) {
          return <span key={index} className={`${styles.star} ${styles.half}`}>★</span>;
        } else {
          return <span key={index} className={`${styles.star} ${styles.empty}`}>★</span>;
        }
      })}
      <span className={styles.reviews}>{ reviewsCount } reviews</span>
    </div>
  );
};

export default ReviewStars;
