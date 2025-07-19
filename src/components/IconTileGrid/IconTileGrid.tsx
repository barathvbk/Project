// components/IconTileGrid.tsx
'use client';
import React from 'react';
import IconTile from './IconTile';
import styles from './IconTileGrid.module.css';

const items = [
  {
    imageSrc: '/truck.svg',
    title: 'Real Time Stock',
    description: 'Real-time stock updates, alerts for low stock',
  },
  {
    imageSrc: '/money.svg',
    title: 'Cost Effective',
    description: 'Save big with our Minimum Cost Subscription.',
  },
  {
    imageSrc: '/online-shop.svg',
    title: 'Buy Online',
    description: 'Connect With Your Nearby Suppliers.',
  },
  {
    imageSrc: '/bill.svg',
    title: 'Online Billing',
    description: 'Online billing, order history, digital receipts',
  },
];

const IconTileGrid = () => {
  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <IconTile
          key={index}
          imageSrc={item.imageSrc}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default IconTileGrid;
