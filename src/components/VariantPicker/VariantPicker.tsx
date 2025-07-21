// src/components/pdp/VariantPicker.tsx
import React from 'react';
import styles from './VariantPicker.module.css';

interface VariantPickerProps {
  variants: string[];
  selected: string;
  onSelect: (variant: string) => void;
}

const VariantPicker: React.FC<VariantPickerProps> = ({ variants, selected, onSelect }) => (
  <div className={styles.picker}>
    {variants.map((v) => (
      <button
        key={v}
        className={`${styles.variant} ${v === selected ? 'primary' : 'secondary'} `}
        onClick={() => onSelect(v)}
      >
        {v}
      </button>
    ))}
  </div>
);

export default VariantPicker;
