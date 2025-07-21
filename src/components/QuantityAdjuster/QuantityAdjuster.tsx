// src/components/pdp/QuantityAdjuster.tsx
import React from 'react';
import styles from './QuantityAdjuster.module.css';

interface Props {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantityAdjuster: React.FC<Props> = ({ quantity, onIncrease, onDecrease }) => (
  <div className={styles.adjuster}>
    <button className='primary' onClick={onDecrease} disabled={quantity <= 1}>-</button>
    <span>{quantity}</span>
    <button className='primary' onClick={onIncrease}>+</button>
  </div>
);

export default QuantityAdjuster;
