// components/ProductGrid.tsx
'use client';
import React from 'react';
import styles from './ProductGrid.module.css';
import ProductTile from '../ProductTile/ProductTile';


interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  quantity:number;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const chunks: Product[][] = [];

  for (let i = 0; i < products.length; i += 10) {
    chunks.push(products.slice(i, i + 10));
  }

  return (
    <div className={styles.wrapper}>
      {chunks.map((chunk, index) => {
            return chunk.length > 0 ? (
                <div key={index} className={styles.inner_wrapper}>
                {/* Layout 1: P1–P5 */}
                <div className={`${styles.layoutBlock} ${chunk[4] ? styles.tallBlock : styles.shortBlock}`}>
                    <div className={chunk[4] ? styles.grid2x2 : styles.grid4x1}>
                    {chunk.slice(0, 4).map((p) => (
                        <ProductTile key={p.id} {...p} />
                    ))}
                    </div>
                    {chunk[4] && (
                    <div className={styles.tallTile}>
                        <ProductTile {...chunk[4]} />
                    </div>
                    )}
                </div>

                {/* Layout 2: P6–P10 */}
               {chunk[5] && ( <div className={`${styles.layoutBlock} ${styles.tallBlock}`}>
                    
                    <div className={styles.tallTile}>
                        <ProductTile {...chunk[5]} />
                    </div>
                    
                    <div className={styles.grid2x2}>
                        {chunk.slice(6, 10).map((p) => (
                            <ProductTile key={p.id} {...p} />
                        ))}
                    </div>
                </div>
                )}
                </div>
            ) : null;
        })}
    </div>
  );
};

export default ProductGrid;
