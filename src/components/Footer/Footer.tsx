import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div>
          <h3>Shop</h3>
          <ul>
            <li>New Arrivals</li>
            <li>Sales</li>
            <li>Best Sellings</li>
            <li>Demands</li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li>Support</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
          </ul>
        </div>
        <div className={styles.logo_social_container}>
          <Logo/>
          <div className={styles.social_icons} style={{ display: 'flex', gap: '12px' }}>
            <a href="https://facebook.com" target="_blank"><Icon name="facebook" size={20} color='#003971' /></a>
            <a href="https://instagram.com" target="_blank"><Icon name="instagram" size={20} color='#003971' /></a>
            <a href="https://twitter.com" target="_blank"><Icon name="twitter" size={20} color='#003971' /></a>
            <a href="https://linkedin.com" target="_blank"><Icon name="linkedin" size={20} color='#003971' /></a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        © 2025 VBK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
