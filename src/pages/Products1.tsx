import React from 'react';
import styles from './Products1.module.css';

interface Product {
  id: number;
  image: string;
  price: string;
  title: string;
  originalPrice?: string;
}

const Products1: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      image: '/images/hypnotic-capsules.jpg',
      price: 'From $8.95',
      originalPrice: '$9.50',
      title: 'Hypnotic Capsules 30\'s'
    },
    {
      id: 2,
      image: '/images/clanza-capsules.jpg',
      price: 'From $7.50',
      originalPrice: '$8.00',
      title: 'Clanza S 500mg [Azithromycin] Capsules'
    },
    {
      id: 3,
      image: '/images/coccenille-capsules.jpg',
      price: 'From $6.00',
      originalPrice: '$6.50',
      title: 'Coccenille Soft Capsules'
    },
    {
      id: 4,
      image: '/images/nexcare-gel.jpg',
      price: 'From $4.50',
      originalPrice: '$5.00',
      title: 'Nexcare Gel'
    },
    {
      id: 5,
      image: '/images/six-am-syrup.jpg',
      price: 'From $3.50',
      originalPrice: '$4.00',
      title: 'Six Am Syrup'
    },
    {
      id: 6,
      image: '/images/hemorrhoids-capsules.jpg',
      price: 'From $7.00',
      originalPrice: '$7.50',
      title: 'Hemorrhoids Cleansing Capsules'
    },
    {
      id: 7,
      image: '/images/zenebital-syrup.jpg',
      price: 'From $5.50',
      originalPrice: '$6.00',
      title: 'Zenebital Syrup'
    },
    {
      id: 8,
      image: '/images/orthocure-gel.jpg',
      price: 'From $6.50',
      originalPrice: '$7.00',
      title: 'Orthocure Gel'
    }
  ];

  return (
    <section className={styles.featuredProducts}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Products</h2>
        <p className={styles.description}>
          Discover our featured products that target common health conditions including diabetes, hypertension, anxiety, and effective medications for preventing acne and treatments. We emphasize safe and affordable options to support chronic condition management and improve wellness routines.
        </p>
        
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>{product.price}</span>
                  {product.originalPrice && (
                    <span className={styles.originalPrice}>{product.originalPrice}</span>
                  )}
                </div>
                <h3 className={styles.productTitle}>{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.shopAllContainer}>
          <button className={styles.shopAllButton}>Shop All</button>
        </div>
      </div>
    </section>
  );
};

export default Products1;