import React from "react";
import styles from "./OurProducts.module.css";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image?: string;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Vitamin C Tablets",
    category: "Supplements",
    price: 1200,
    oldPrice: 1500,
    discount: 20,
    image: "/placeholder.png",
  },
  {
    id: 2,
    name: "Digital Thermometer",
    category: "Medical Devices",
    price: 850,
    oldPrice: 1000,
    discount: 15,
    image: "/placeholder.png",
  },
  {
    id: 3,
    name: "Hand Sanitizer 500ml",
    category: "Hygiene",
    price: 300,
    image: "/placeholder.png",
  },
  {
    id: 4,
    name: "Blood Pressure Monitor",
    category: "Medical Devices",
    price: 4500,
    oldPrice: 5200,
    discount: 13,
    image: "/placeholder.png",
  },
  {
    id: 5,
    name: "Cough Syrup",
    category: "Pharmacy",
    price: 700,
    image: "/placeholder.png",
  },
];

const OurProducts: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Our Products</h2>
      <div className={styles.grid}>
        {sampleProducts.map((product) => (
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
