'use client'
import React, { useRef } from 'react';
import styles from './page.module.css';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ImageGallery, { MediaItem } from '@/components/ImageGallery/ImageGallery';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import SplitSection from '@/components/SplitSection/SplitSection';
import ProductSpec from '@/components/ProductSpec/ProductSpec';
import ProductReview from '@/components/ProductReview/ProductReview';

const PDPPage: React.FC = () => {
  const media:MediaItem[] = [
    { type: 'image', src: '/blue.jpg' },
    { type: 'video', src: '/video1.mp4' },
    { type: 'image', src: '/product2.jpg' }
  ];
  const specs = [
    { title: 'Fabric type', value: '100% Synthetic' },
    { title: 'Origin', value: 'Imported' },
    { title: 'Fur description', value: 'Faux fur' },
    { title: 'Sole material', value: 'Ethylene Vinyl Acetate' }
  ];
  const reviewRef = useRef<HTMLDivElement | null>(null);

  const scrollToReview = () => {
    reviewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
                description="It’s the iconic clog that started a comfort revolution around the world! The irreverent go-to comfort shoe that you're sure to fall deeper in love with day after day. Crocs Classic Clogs offer lightweight Iconic Crocs Comfort, a color for every personality, and an ongoing invitation to be comfortable in your own shoes."
                price={999}
                originalPrice={1499}
                onReviewClick={scrollToReview}
                />
            </div>
        </div>
        <ProductSpec items={specs}/>
        <SplitSection
          title="Quality Products"
          description="Explore our wide range of handcrafted items made with care and precision."
          imageUrl="/product2.jpg"
          primaryBtnText="Shop Now"
          secondaryBtnText="Get in Touch"
          onPrimaryClick={() => console.log('Shop Now')}
          onSecondaryClick={() => console.log('Contact')}
        />
        <div ref={reviewRef}>
        <ProductReview />
      </div>
      
    </div>
  );
};

export default PDPPage;
