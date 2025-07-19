// components/TextSection/TextSection.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import styles from './TextSection.module.css';
import Logo from '../Logo/Logo';

interface TextSectionProps {
  subtitle: string;
  description: string;
  primaryText: string;
  secondaryText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const TextSection: React.FC<TextSectionProps> = ({
  subtitle,
  description,
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div className={styles.container}>
      <Logo/>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonContainer}>
        <button className='large button primary' onClick={onPrimaryClick}>
          {primaryText}
        </button>
        <button className='large button secondary' onClick={onSecondaryClick}>
          {secondaryText}
        </button>
      </div>
    </div>
  );
};

export default TextSection;
