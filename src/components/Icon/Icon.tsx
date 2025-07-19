// components/Icon.tsx
'use client';

import React from 'react';
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaHome,
  FaHeart,
  FaBoxOpen,
  FaTag,
  FaTruck,
  FaBell,
  FaArrowLeft,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaFilter,
} from 'react-icons/fa';

type IconName =
  | 'cart'
  | 'user'
  | 'search'
  | 'home'
  | 'wishlist'
  | 'products'
  | 'offers'
  | 'delivery'
  | 'notification'
  | 'arrowLeft'
  | 'arrowRight'
  | 'facebook'
  | 'instagram'
  | 'twitter'
  | 'linkedin'
  | 'youtube'
  | 'pinterest'
  | 'filter';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

const iconMap: Record<IconName, React.ElementType> = {
  cart: FaShoppingCart,
  user: FaUser,
  search: FaSearch,
  home: FaHome,
  wishlist: FaHeart,
  products: FaBoxOpen,
  offers: FaTag,
  delivery: FaTruck,
  notification: FaBell,
  arrowLeft: FaArrowLeft, 
  arrowRight: FaArrowRight,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaTwitter,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
  pinterest: FaPinterestP,
  filter: FaFilter,
};

const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#333' }) => {
  const IconComponent = iconMap[name];
  return <IconComponent size={size} color={color} />;
};

export default Icon;
