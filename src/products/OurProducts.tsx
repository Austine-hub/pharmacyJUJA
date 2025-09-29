import React from "react";
import styles from "./OurProducts.module.css";

// import product data + interface
import { mainProducts } from "../data/MainProducts";

const OurProducts: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Our Products</h2>
      <div className={styles.grid}>
        {mainProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            {/* Top Section - Image */}
            <div className={styles.imageWrapper}>
              <img
                src={product.image || "/placeholder.png"}
                alt={product.name}
                className={styles.image}
              />
              {product.discount && (
                <span className={styles.discountBadge}>
                  -{product.discount}%
                </span>
              )}
            </div>

            {/* Bottom Section */}
            <div className={styles.cardBody}>
              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.category}>{product.category}</p>
              <div className={styles.priceWrapper}>
                <span className={styles.price}>KSh {product.price}</span>
                {product.oldPrice && (
                  <span className={styles.oldPrice}>
                    KSh {product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
