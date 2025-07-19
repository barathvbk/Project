import React from 'react'
import styles from './Logo.module.css'
import Image from 'next/image';

const Logo = () => {
  return (
    <div className={styles.logo_container}>
        <Image src="/logo2.svg" alt="Logo Image" className={styles.logoImg} width={40} height={40}/> <span className={styles.logo_text}>VBK</span>
    </div>
  )
}

export default Logo;