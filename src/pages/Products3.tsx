import React, { useState } from 'react';
import styles from './Products3.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
}

const Products3: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Sample product data based on your images
  const products: Product[] = [
    {
      id: 1,
      name: "Acilac Thin Film Rapid Tablet",
      price: 0, // Price not visible in image
      image: "/api/placeholder/200/200",
      category: "Tablets"
    },
    {
      id: 2,
      name: "Cysteine 200 microgram Tablets",
      price: 0,
      image: "/api/placeholder/200/200",
      category: "Tablets"
    },
    {
      id: 3,
      name: "Glutathione 500 mg Capsules",
      price: 0,
      image: "/api/placeholder/200/200",
      category: "Capsules"
    },
    {
      id: 4,
      name: 'Handmade Bowl "Ganbaru"',
      price: 32.00,
      image: "/api/placeholder/200/200",
      category: "Handmade"
    },
    {
      id: 5,
      name: 'Handmade Vase "Ikigai"',
      price: 62.00,
      image: "/api/placeholder/200/200",
      category: "Handmade"
    },
    {
      id: 6,
      name: 'Handmade Vase "Kaiyo"',
      price: 60.00,
      image: "/api/placeholder/200/200",
      category: "Handmade"
    }
  ];

  const categories = ['All products', 'Tablets', 'Capsules', 'Handmade'];
  const [selectedCategory, setSelectedCategory] = useState('All products');

  const filteredProducts = selectedCategory === 'All products' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleAddToBag = (productId: number) => {
    console.log(`Added product ${productId} to bag`);
    // Add your cart logic here
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h3 className={styles.browseTitle}>Browse by</h3>
        <div className={styles.categoryList}>
          <h4 className={styles.categoryHeader}>Categories</h4>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.categoryItem} ${
                selectedCategory === category ? styles.categoryActive : ''
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h2 className={styles.pageTitle}>{selectedCategory}</h2>
          <div className={styles.sortingControls}>
            <span>Sort by</span>
            <select className={styles.sortSelect}>
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Name: A to Z</option>
            </select>
          </div>
        </div>

        <div className={styles.productGrid}>
          {displayedProducts.map(product => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                {product.price > 0 && (
                  <p className={styles.productPrice}>₦{product.price.toFixed(2)}</p>
                )}
                <button 
                  className={styles.addToBagBtn}
                  onClick={() => handleAddToBag(product.id)}
                >
                  Add to bag
                </button>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button 
              className={styles.paginationArrow}
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              ‹
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`${styles.paginationNumber} ${
                  currentPage === page ? styles.paginationActive : ''
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
            
            <button 
              className={styles.paginationArrow}
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products3;