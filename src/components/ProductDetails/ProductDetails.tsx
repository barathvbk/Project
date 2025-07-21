// src/components/pdp/ProductDetails.tsx
import React from 'react';
import styles from './ProductDetails.module.css';

interface ProductDetailsProps {
  title: string;
  description: string;
  price: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ title, description, price }) => (
  <div className={styles.details}>
    <h1>{title}</h1>
    <p>{description}</p>
    <div className={styles.price}>₹{price}</div>
  </div>
);

export default ProductDetails;
