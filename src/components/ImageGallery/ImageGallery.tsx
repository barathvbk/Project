'use client';
import React, { useEffect, useState, useRef } from 'react';
import styles from './ImageGallery.module.css';

export type MediaItem = {
  type: 'image' | 'video';
  src: string;
};

interface ImageGalleryProps {
  media: MediaItem[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ media }) => {
  const [hovered, setHovered] = useState<'prev' | 'next' | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (index: number) => {
    if (index !== currentIndex) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setTransitioning(false);
      }, 300); // same as transition duration
    }
  };

  const next = () => {
    goTo((currentIndex + 1) % media.length);
  };

  const prev = () => {
    goTo((currentIndex - 1 + media.length) % media.length);
  };

//   useEffect(() => {
//     timerRef.current = setTimeout(() => {
//       next();
//     }, 5000);
//     return () => {
//       if (timerRef.current) clearTimeout(timerRef.current);
//     };
//   }, [currentIndex]);

  return (
    <div className={styles.gallery}>
      <div className={styles.mediaContainer}>
        <div
          className={`${styles.slider} ${transitioning ? styles.animate : ''}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {media.map((item, index) => (
            <div key={index} className={styles.slide}>
              {item.type === 'image' ? (
                <img src={item.src} alt={`media-${index}`} />
              ) : (
                <video src={item.src} autoPlay muted loop />
              )}
            </div>
          ))}
        </div>
        <button className={`${styles.prev} ${hovered === 'prev' ? 'primary' : 'secondary'}`}
      onMouseEnter={() => setHovered('prev')}
      onMouseLeave={() => setHovered(null)} onClick={prev} >&lt;</button>
        <button className={`${styles.next} ${hovered === 'next' ? 'primary' : 'secondary'}`}
      onMouseEnter={() => setHovered('next')}
      onMouseLeave={() => setHovered(null)} onClick={next}>&gt;</button>
      </div>

      {/* Thumbnails */}
      <div className={styles.thumbnails}>
        {media.map((item, index) => (
          <div
            key={index}
            className={`${styles.thumb} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goTo(index)}
          >
            {item.type === 'image' ? (
              <img src={item.src} alt={`thumb-${index}`} />
            ) : (
              <video src={item.src} muted />
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        {media.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === currentIndex ? styles.active : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
