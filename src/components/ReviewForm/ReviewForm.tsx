import React, { useState, ChangeEvent } from 'react';
import styles from './ReviewForm.module.css';
import { Review } from '../ProductReview/ProductReview';

interface ReviewFormProps {
  onSubmit: (review: Review) => void;
}

const ReviewForm = ({ onSubmit }: ReviewFormProps) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [media, setMedia] = useState<string[]>([]);

  const handleMediaUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newMedia: string[] = [];
    Array.from(files).forEach((file) => {
      const url = URL.createObjectURL(file);
      newMedia.push(url);
    });

    setMedia([...media, ...newMedia]);
  };

  const handleSubmit = () => {
    const newReview: Review = {
      id: Date.now(),
      user: 'Guest',
      text,
      rating,
      media,
      date: new Date().toLocaleDateString(),
    };

    onSubmit(newReview);
    setText('');
    setRating(5);
    setMedia([]);
  };

  return (
    <div className={styles.form}>
      <textarea
        placeholder="Write your review..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className={styles.rating}>
        {[1,2,3,4,5].map((r) => (
          <span
            key={r}
            className={r <= rating ? styles.active : ''}
            onClick={() => setRating(r)}
          >
            ★
          </span>
        ))}
      </div>
      <input type="file" accept="image/*,video/*" multiple onChange={handleMediaUpload} />
      <button className='button primary large' onClick={handleSubmit}>Submit Review</button>
    </div>
  );
};

export default ReviewForm;
