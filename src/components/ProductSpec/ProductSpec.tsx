import React from 'react';
import styles from './ProductSpec.module.css';

type ProductSpecProps = {
  items:item[]
};
type item = {
    title:string,
    value:string
}

const ProductSpec = ({
  items
}: ProductSpecProps) => {
  return (
    <section className={styles.SpecsContainer}>
        <h3>SPECIFICATION</h3>
        {items.map((item)=>(
        <div className={styles.SpecContainer}>
            <div className={styles.titleContainer}>
                {item.title}
            </div>
            <div className={styles.valueContainer}>
                {item.value}
            </div>
        </div>
    ))}
    </section>
  );
};

export default ProductSpec;
