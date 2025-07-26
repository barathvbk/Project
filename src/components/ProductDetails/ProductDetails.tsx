// src/components/pdp/ProductDetails.tsx
import React, { useState } from 'react';
import styles from './ProductDetails.module.css';
import Badge from '../Badge/Badge';
import ReviewStars from '../ReviewStars/ReviewStars';
import VariantPicker from '../VariantPicker/VariantPicker';
import QuantityAdjuster from '../QuantityAdjuster/QuantityAdjuster';
import ColorPicker from '../ColorPicker/ColorPicker';
import Accordion from '../Accordion/Accordion';

const data = [
  { title: 'Description', content: <p>This is the product description.</p> },
  { title: 'Material Info', content: <p>100% cotton. Machine washable.</p> },
  { title: 'Shipping & Returns', content: <p>Free shipping for orders over $50.</p> },
];
interface ProductDetailsProps {
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  onReviewClick?: () => void;
}
const colorOptions = [
  { label: 'Red', value: '#FF0000' },
  { label: 'Blue', value: '#0000FF' },
  { label: 'Green', value: '#008000' },
  { label: 'Black', value: '#000000' },
];

const ProductDetails: React.FC<ProductDetailsProps> = ({ title, description, price, originalPrice, onReviewClick }) => {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('M');
  const [selectedColor, setSelectedColor] = useState('#FF0000');

  return(
  <div className={styles.details}>
    <h1>{title}</h1>
    <div className={styles.priceBlock}>
        {originalPrice && originalPrice > price && (
          <span className={styles.strikePrice}>₹{originalPrice}</span>
        )}
        <span className={styles.price}>₹{price}</span>
      </div>
    
    
    <Badge name="Limited" style="primary" />
                <ReviewStars rating={4.5} reviewsCount={1000} onClick={onReviewClick} />
                <p>{description}</p>
                <VariantPicker
                variants={['S', 'M', 'L', 'XL']}
                selected={variant}
                onSelect={setVariant}
                />
                <ColorPicker
                  options={colorOptions}
                  selected={selectedColor}
                  onChange={(val) => setSelectedColor(val)}
                />
                <QuantityAdjuster
                quantity={quantity}
                onIncrease={() => setQuantity((q) => q + 1)}
                onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
                />
                <button className='large button primary' onClick={() => alert('Added to cart!')}>
                    Add to Cart
                </button>
                 <Accordion items={data} singleOpen={true} />
  </div>
)};

export default ProductDetails;
