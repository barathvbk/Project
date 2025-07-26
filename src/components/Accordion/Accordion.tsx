import React, { useState } from 'react';
import styles from './Accordion.module.css';

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  singleOpen?: boolean;
};

const Accordion = ({ items, singleOpen = false }: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (singleOpen) {
      setOpenIndexes(openIndexes[0] === index ? [] : [index]);
    } else {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div key={index} className={styles.item}>
            <button
              className={`${styles.header} ${isOpen ? styles.active : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span className={styles.icon}>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <div className={styles.content}>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
