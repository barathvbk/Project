import React from 'react';
import styles from './ProductTile.module.css'; // or use Tailwind

type ProductProps = {
  image: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
};

const ProductTile: React.FC<ProductProps> = ({
  image,
  title,
  price,
  quantity,
  description,
}) => {
  return (
    <div className={styles.product_tile}>
      <img src={image} alt={title} className={styles.product_image} />
      <div className={styles.product_content}>
        <h2 className={styles.product_title}>{title}</h2>
        <p className={styles.product_price}>₹{price}</p>
        <p className={styles.product_qty}>Qty: {quantity}</p>
        <p className={styles.product_desc}>{description}</p>
      </div>
    </div>
  );
};

export default ProductTile;
