import React, { useState, ChangeEvent, useRef } from 'react';
import styles from './ReviewForm.module.css';
import { Review } from '../ProductReview/ProductReview';

interface ReviewFormProps {
  onSubmit: (review: Review) => void;
}

type MediaItem = {
  src: string;
  type: 'image' | 'video';
};

const ReviewForm = ({ onSubmit }: ReviewFormProps) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [media, setMedia] = useState<MediaItem[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMediaUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newMedia: MediaItem[] = [];
    Array.from(files).forEach((file) => {
      const url = URL.createObjectURL(file);
      const type = file.type.startsWith('image') ? 'image' : 'video';
      newMedia.push({ src: url, type });
    });

    setMedia((prev) => [...prev, ...newMedia]);
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

    // Reset everything
    setText('');
    setRating(5);
    setMedia([]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className={styles.form}>
      <textarea
        placeholder="Write your review..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className={styles.rating}>
        {[1, 2, 3, 4, 5].map((r) => (
          <span
            key={r}
            className={r <= rating ? styles.active : ''}
            onClick={() => setRating(r)}
          >
            ★
          </span>
        ))}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleMediaUpload}
      />
      <button className="button primary large" onClick={handleSubmit}>
        Submit Review
      </button>
    </div>
  );
};

export default ReviewForm;
