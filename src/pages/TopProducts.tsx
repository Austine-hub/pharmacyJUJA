import React from 'react';
import styles from './TopProducts.module.css';

interface ProductCategory {
  title: string;
  products: string[];
}

const TopProducts: React.FC = () => {
  const categories: ProductCategory[] = [
    {
      title: "Heart Health",
      products: ["Livalo", "Corlanor", "Eliquis", "Xarelto", "Pradaxa"]
    },
    {
      title: "Men's Health",
      products: ["Cialis", "Viagra", "Levitra", "Propecia", "Edex"]
    },
    {
      title: "Women's Health",
      products: ["Vagifem", "Vivelle Dot", "Premarin", "Estring", "Estrogel"]
    },
    {
      title: "Digestive Health",
      products: ["Asacol", "Entocort", "Dexilant", "Xifaxan", "Motegrity"]
    },
    {
      title: "Chronic Obstructive Pulmonary Disease",
      products: ["Advair Diskus", "Flovent HFA Inhaler", "Symbicort Turbuhaler", "Spiriva plus Device", "Trelegy Ellipta"]
    },
    {
      title: "Mental Health",
      products: ["Wellbutrin XL", "Lexapro", "Effexor XR", "Rexulti", "Latuda"]
    }
  ];

  const MapleLeafIcon = () => (
    <svg className={styles.leafIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5c-.8 0-1.5.7-1.5 1.5 0 .6.3 1.1.8 1.4L9.8 7.1c-.3-.1-.6-.1-.9 0L7.4 5.6c.4-.3.6-.8.6-1.3 0-.8-.7-1.5-1.5-1.5S4.9 3.5 4.9 4.3c0 .5.2 1 .6 1.3L4 7.1c-.3-.1-.6-.1-.9 0L1.6 5.4c.5-.3.8-.8.8-1.4 0-.8-.7-1.5-1.5-1.5S-.6 2.7-.6 3.5c0 .6.3 1.1.8 1.4l-1.5 1.7c-.3-.1-.6-.1-.9 0-.8.2-1.3 1-1.1 1.8.2.8 1 1.3 1.8 1.1.3-.1.6-.3.8-.5l1.5-1.7c0 .3.1.6.3.9L-1.3 9.8c-.3-.4-.8-.6-1.3-.6-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5c.5 0 1-.2 1.3-.6l1.5-1.7c.2.3.5.5.8.6l-1.5 1.7c-.5-.3-1-.3-1.5 0-.7.4-.9 1.3-.5 2s1.3.9 2 .5c.4-.2.7-.6.8-1l1.5-1.7c.3.1.6.1.9 0L4 13.9c-.5.3-.8.8-.8 1.4 0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.5-.2-1-.6-1.3l1.5-1.7c.3.1.6.1.9 0l1.5 1.7c-.4.3-.6.8-.6 1.3 0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.6-.3-1.1-.8-1.4l1.5-1.7c.3.1.6.1.9 0l1.5 1.7c-.5.3-.8.8-.8 1.4 0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.6-.3-1.1-.8-1.4l1.5-1.7c.8.2 1.6-.3 1.8-1.1.2-.8-.3-1.6-1.1-1.8-.3-.1-.6-.1-.9 0L18.4 7.1c.5-.3.8-.8.8-1.4 0-.8-.7-1.5-1.5-1.5S16.2 4.9 16.2 5.7c0 .5.2 1 .6 1.3L15.3 8.7c-.3-.1-.6-.1-.9 0L12.9 7c.5-.3.8-.8.8-1.4 0-.8-.7-1.5-1.5-1.5z"/>
    </svg>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        TOP SELLING PRESCRIPTIONS DRUGS IN CANADA AND WORLDWIDE BY CATEGORY
      </h1>
      
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <div className={styles.iconContainer}>
              <MapleLeafIcon />
            </div>
            <h2 className={styles.categoryTitle}>{category.title}</h2>
            <ul className={styles.productList}>
              {category.products.map((product, productIndex) => (
                <li key={productIndex} className={styles.productItem}>
                  <a href="#" className={styles.productLink}>{product}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;