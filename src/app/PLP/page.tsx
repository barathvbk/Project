// app/plp/page.tsx
'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import Icon from '@/components/Icon/Icon';
import FilterAccordion from '@/components/FilterAccordion/FilterAccordion';

const sampleProducts = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  image: '/blue.jpg',
  title: `Product ${i + 1}`,
  price: 199 + i,
  quantity: 1 + i,
  description: 'Best selling products directly from the store.',
}));
const filters = [
  { label: 'Organic', value: 'organic' },
  { label: 'Fresh', value: 'fresh' },
  { label: 'On Sale', value: 'sale' },
];
const PRODUCTS_PER_PAGE = 20;

const PLPPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [sortOption, setSortOption] = useState('default');

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = sampleProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sampleProducts.length / PRODUCTS_PER_PAGE);
  const filterActive= filtersVisible ? styles.filterActive : '';
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };
  return (
    <div className={`${styles.main_container} page_container`}>
      <div className={styles.filter_sort}>
        <div className={styles.filterHeader}>
          <button onClick={() => setFiltersVisible(!filtersVisible)} className={`${styles.filterToggle} ${filterActive}`}>
            <h5>Filters</h5>
            <Icon name="filter" size={20} color={filtersVisible ? '#fff': '#1e3a8a'} />
          </button>
        </div>
        <div className={styles.sortBar}>
          <h5>Sort by: </h5>
          <select
            value={sortOption}
            className={styles.sortBox}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
      <div className={styles.container}>
      <aside
        className={`${styles.filters} ${!filtersVisible ? styles.hideFilters : ''}`}
      >
        {filtersVisible && (
          <div className={styles.filterBody}>
            {/* Add filter content here */}
            {[...Array(4)].map((_, i) => (
            <FilterAccordion
                key={`category-${i}`}
                title={`Category ${i + 1}`}
                options={filters}
                selectedValues={selected}
                onChange={handleChange} isAccordionOpen={i == 0 ? true : false}
              />
            ))}
          </div>
        )}
      </aside>

      <main className={`${styles.productsSection} ${!filtersVisible ? styles.expand : ''}`}>
        

        <ProductGrid products={currentProducts} />

        {totalPages >1 && (<div className={styles.pagination}>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`${styles.pageButton} ${currentPage === i + 1 ? styles.active : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>)}
      </main>
      </div>
    </div>
  );
};

export default PLPPage;
