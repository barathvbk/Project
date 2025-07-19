// components/IconTile/IconTile.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import styles from './IconTile.module.css';

interface IconTileProps {
  imageSrc: string;
  title: string;
  description: string;
}

const IconTile: React.FC<IconTileProps> = ({ imageSrc, title, description }) => {
  return (
    <div className={styles.tile}>
      <div className={styles.iconWrapper}>
        <Image src={imageSrc} alt={title} fill className={styles.iconImage} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default IconTile;
