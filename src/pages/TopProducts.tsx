import React from 'react';
import styles from './TopProducts.module.css';

import Banner1 from "./../assets/Top/heart.png";
import Banner2 from "./../assets/Top/men.png";
import Banner3 from "./../assets/Top/women.png";
import Banner4 from "./../assets/Top/digestive.png";
import Banner5 from "./../assets/Top/pulmonary.png";
import Banner6 from "./../assets/Top/mental.png";

interface ProductCategory {
  title: string;
  products: string[];
  image: string;
}

const TopProducts: React.FC = () => {
  const categories: ProductCategory[] = [
    {
      title: "Heart Health",
      products: ["Livalo", "Corlanor", "Eliquis", "Xarelto", "Pradaxa"],
      image: Banner1
    },
    {
      title: "Men's Health",
      products: ["Cialis", "Viagra", "Levitra", "Propecia", "Edex"],
      image: Banner2
    },
    {
      title: "Women's Health",
      products: ["Vagifem", "Vivelle Dot", "Premarin", "Estring", "Estrogel"],
      image: Banner3
    },
    {
      title: "Digestive Health",
      products: ["Asacol", "Entocort", "Dexilant", "Xifaxan", "Motegrity"],
      image: Banner4
    },
    {
      title: "Chronic Obstructive Pulmonary Disease",
      products: [
        "Advair Diskus",
        "Flovent HFA Inhaler",
        "Symbicort Turbuhaler",
        "Spiriva plus Device",
        "Trelegy Ellipta"
      ],
      image: Banner5
    },
    {
      title: "Mental Health",
      products: ["Wellbutrin XL", "Lexapro", "Effexor XR", "Rexulti", "Latuda"],
      image: Banner6
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        OUR TOP SELLING DRUGS BY CATEGORY
      </h1>

      <div className={styles.grid}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={styles.categoryCard}
            style={{ backgroundImage: `url(${category.image})` }}
          >
            <div className={styles.overlay}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <ul className={styles.productList}>
                {category.products.map((product, productIndex) => (
                  <li key={productIndex} className={styles.productItem}>
                    <a href="#" className={styles.productLink}>
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
