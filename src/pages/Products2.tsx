import React, { useState } from 'react';
import styles from './Products2.module.css';

interface Product {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  currency: string;
}

const Products2: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products: Product[] = [
    {
      id: 1,
      name: "Ariul 7 Days Glow Brightening Serum 20ml",
      image: "/api/placeholder/200/200",
      currentPrice: 1955,
      originalPrice: 2300,
      discount: 15,
      currency: "KES"
    },
    {
      id: 2,
      name: "Ariul Hydro Sleeping Mask 80g",
      image: "/api/placeholder/200/200",
      currentPrice: 2380,
      originalPrice: 2800,
      discount: 15,
      currency: "KES"
    },
    {
      id: 3,
      name: "Bellalussi Angel's Tear Cream 50g",
      image: "/api/placeholder/200/200",
      currentPrice: 2560,
      originalPrice: 3200,
      discount: 20,
      currency: "KES"
    },
    {
      id: 4,
      name: "Bellalussi HG Foam Cleanser 90g",
      image: "/api/placeholder/200/200",
      currentPrice: 1720,
      originalPrice: 2150,
      discount: 20,
      currency: "KES"
    },
    {
      id: 5,
      name: "Canvas Flawless MultiTasker Foundation",
      image: "/api/placeholder/200/200",
      currentPrice: 3500,
      originalPrice: 3500,
      discount: 20,
      currency: "KES"
    }
  ];

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= products.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? products.length - 1 : prev - 1
    );
  };

  const formatPrice = (price: number, currency: string) => {
    return `${currency}${price.toLocaleString()}`;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>New on MYDAWA</h2>
      
      <div className={styles.carousel}>
        <button 
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevSlide}
          aria-label="Previous products"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={styles.productsWrapper}>
          <div 
            className={styles.productsContainer}
            style={{
              transform: `translateX(-${currentIndex * (100 / products.length)}%)`
            }}
          >
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.imageContainer}>
                  <div className={styles.discountBadge}>
                    save<br />{product.discount}%
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={styles.productImage}
                  />
                </div>
                
                <div className={styles.productInfo}>
                  <p className={styles.newLabel}>New on MYDAWA</p>
                  <h3 className={styles.productName}>{product.name}</h3>
                  
                  <div className={styles.priceContainer}>
                    <span className={styles.currentPrice}>
                      {formatPrice(product.currentPrice, product.currency)}
                    </span>
                    <span className={styles.originalPrice}>
                      {formatPrice(product.originalPrice, product.currency)}
                    </span>
                    <button className={styles.addToCartButton} aria-label="Add to cart">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17A2 2 0 0 1 15 19H9A2 2 0 0 1 7 17V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextSlide}
          aria-label="Next products"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className={styles.indicators}>
        {products.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Products2;