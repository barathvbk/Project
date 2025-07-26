import React from 'react';
import styles from './Badge.module.css';
type badgeProps = {
    name: string,
    style: 'primary' | 'secondary' | 'tertiary'
};

const Badge = (props:badgeProps)=>{
 return <span className={`${styles.badge} ${styles[props.style]}`}>{props.name}</span>;
};

export default Badge;