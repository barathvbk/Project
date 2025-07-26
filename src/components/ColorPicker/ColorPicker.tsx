import React from 'react';
import styles from './ColorPicker.module.css';

type ColorOption = {
  label: string;
  value: string; // hex color code
};

type ColorPickerProps = {
  options: ColorOption[];
  selected: string;
  onChange: (value: string) => void;
};

const ColorPicker = ({ options, selected, onChange }: ColorPickerProps) => {
  return (
    <div className={styles.container}>
     <div className={styles.title}>Color:</div>
     <div className={styles.picker}>
      {options.map((option) => (
        <button
          key={option.value}
          className={`${styles.colorCircle} ${
            selected === option.value ? styles.active : ''
          }`}
          style={{ backgroundColor: option.value }}
          onClick={() => onChange(option.value)}
          aria-label={option.label}
        />
      ))}</div>
    </div>
  );
};

export default ColorPicker;
