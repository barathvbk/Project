
// src/app/pdp/page.tsx
'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ImageGallery, { MediaItem } from '@/components/ImageGallery/ImageGallery';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import VariantPicker from '@/components/VariantPicker/VariantPicker';
import QuantityAdjuster from '@/components/QuantityAdjuster/QuantityAdjuster';

const PDPPage: React.FC = () => {
  const media:MediaItem[] = [
    { type: 'image', src: '/blue.jpg' },
    { type: 'video', src: '/video1.mp4' },
    { type: 'image', src: '/product2.jpg' }
  ];

  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('M');

  return (
    <div className='page_container'>
        <Breadcrumb
        segments={[
          { label: 'Men', href: '/collection/men' },
          { label: 'Running Shoes', href: '/product/123' },
         ]}
        />
        <div className={styles.container}>
            <ImageGallery media={media} />
            <div className={styles.infoSection}>
                <ProductDetails
                title='Cool T-Shirt'
                description='100% cotton, relaxed fit'
                price={999}
                />
                <VariantPicker
                variants={['S', 'M', 'L', 'XL']}
                selected={variant}
                onSelect={setVariant}
                />
                <QuantityAdjuster
                quantity={quantity}
                onIncrease={() => setQuantity((q) => q + 1)}
                onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
                />
                <button className='large button primary' onClick={() => alert('Added to cart!')}>
                    Add to Cart
                </button>
            </div>
        </div>
        
      
    </div>
  );
};

export default PDPPage;
