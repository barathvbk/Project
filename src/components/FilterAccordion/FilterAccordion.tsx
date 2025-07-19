import React, { useState } from 'react';
import styles from './FilterAccordion.module.css';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterAccordionProps {
  title: string;
  options: FilterOption[];
  selectedValues: string[];
  onChange: (value: string) => void;
  isAccordionOpen:boolean;
}

const FilterAccordion: React.FC<FilterAccordionProps> = ({
  title,
  options,
  selectedValues,
  onChange,
  isAccordionOpen
}) => {
  const [isOpen, setIsOpen] = useState(isAccordionOpen);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={toggleAccordion}>
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className={styles.content}>
          {options.map((opt) => (
            <label key={opt.value} className={styles.option}>
              <input
                type="checkbox"
                value={opt.value}
                checked={selectedValues.includes(opt.value)}
                onChange={() => onChange(opt.value)}
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterAccordion;
