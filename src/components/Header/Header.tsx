'use client';
import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image';
import MenuBar from '../MenuBar/MenuBar';
import Icon from '@/components/Icon/Icon';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner__container}>
        <Logo/>
        <MenuBar/>  
        <div className={styles.icon__container}>
          <a href="/" className={styles.icon__inner_container}><Icon name="search" size={16} color="#003971" /></a>
          <a href="/" className={styles.icon__inner_container}><Icon name="notification" size={16} color="#003971" /></a>
          <a href="/" className={styles.icon__inner_container}><Icon name="user" size={16} color="#003971" /></a>
        </div>
      </div>
    </div>
  )
}

export default Header