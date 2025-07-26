import React from 'react';
import styles from './SplitSection.module.css';

type SplitSectionProps = {
  title: string;
  description: string;
  imageUrl: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
};

const SplitSection = ({
  title,
  description,
  imageUrl,
  primaryBtnText = 'Learn More',
  secondaryBtnText = 'Contact',
  onPrimaryClick,
  onSecondaryClick,
}: SplitSectionProps) => {
  return (
    <section className={styles.splitSection}>
      <div className={styles.details}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.buttonGroup}>
          <button className="primary button large" onClick={onPrimaryClick}>
            {primaryBtnText}
          </button>
          <button className="secondary button large" onClick={onSecondaryClick}>
            {secondaryBtnText}
          </button>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} />
      </div>
    </section>
  );
};

export default SplitSection;
