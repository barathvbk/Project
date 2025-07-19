'use client';
import React from 'react'
import styles from './HeroBanner.module.css'


const HeroBanner = () => {
  return (
    <div className={styles.container}>
        <img src="/blue.jpg" alt="Hero Image" className={styles.banner__Image} /> 
        <div className={styles.overlay} />
        <div className={styles.details__container}>
            <h1>Manage Your Store Easily</h1>
            <h3 className={styles.subtitle}>You have all the control</h3>
            <div className={styles.button__container}>
                <button className='large button primary'>Inventory</button>
                <button className='large button secondary'>Sales</button>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner