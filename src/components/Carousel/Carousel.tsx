'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import styles from './Carousel.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductTile from '../ProductTile/ProductTile';
import Icon from '../Icon/Icon';

const Carousel: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
          <h1 className={styles.title_container}>New Arrivals</h1>
          <div className={styles.navigation_Container}>
            <div className={`${styles.prev_button} prev_button`}>
              <Icon name="arrowLeft" size={16} color="#003971" />
            </div>
            <div className={`${styles.next_button} next_button`}>
              <Icon name="arrowRight" size={16} color="#003971" />
            </div>
        </div>
      </div>
      <div className={`${styles.swiper_custom_pagination} swiper_custom_pagination`}></div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        className={styles.swiper__container}
        spaceBetween={24}
        slidesPerView={5}
        navigation={{
          nextEl:'.next_button',
          prevEl:'.prev_button',
        }
        }
        pagination={{
          el:'.swiper_custom_pagination',
          type:'bullets',
          clickable:true,
         }}
      >
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i+1} className={styles.swiper__slide}>
            <ProductTile
              image="/blue.jpg"
              title="Organic Mangoes"
              price={199}
              quantity={5}
              description="Fresh organic mangoes directly from the farm."
            />
        </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
