import React from 'react'
import './globals.css';
import styles from "./page.module.css"
import Header from '@/components/Header/Header';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import Carousel from '@/components/Carousel/Carousel';
import IconTileGrid from '@/components/IconTileGrid/IconTileGrid';
import TextSection from '@/components/TextSection/TextSection';


const page = () => {
  return (
    <div className={`${styles.container} page_container`}>
    <HeroBanner/>
    <Carousel/>
    <TextSection subtitle={'#Grow U/S'} description={'The Ultimate Place to manage and  grow your business with minimal cost.The Ultimate Place to manage and  grow your business with minimal cost'} primaryText={'Read More'} secondaryText={'Read More'}/>
    <IconTileGrid/>
    </div>
  )
}

export default page