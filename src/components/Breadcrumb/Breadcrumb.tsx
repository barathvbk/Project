// components/Breadcrumb.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Breadcrumb.module.css';

interface BreadcrumbProps {
  segments: {
    label: string;
    href: string;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ segments }) => {
  return (
    <nav className={styles.breadcrumb}>
      <Link href="/" className={styles.link}>
        Home
      </Link>
      {segments.map((segment, index) => (
        <span key={index} className={styles.separator}>
          /
          <Link href={segment.href} className={styles.link}>
            {segment.label}
          </Link>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
