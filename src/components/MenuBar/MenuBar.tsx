import React from 'react'
import styles from "./MenuBar.module.css"
const MenuBar = () => {
  return (
    <div className={styles.container}>
        <a>Essentials</a>
        <a>Products</a>
        <a>Sales</a>
        <a>Demands</a>
        <a>Stores</a>
    </div>
  )
}

export default MenuBar