// Centralized product interface & extended product data
// src/data/MainProducts.ts

// Importing local images
import product1 from "../assets/product-images/product1.png";
import product2 from "../assets/product-images/product2.png";
import product3 from "../assets/product-images/product3.png";
import product4 from "../assets/product-images/product4.png";
import product5 from "../assets/product-images/product5.png";
import product6 from "../assets/product-images/product6.png";
import product7 from "../assets/product-images/product7.png";
import product8 from "../assets/product-images/product8.png";
import product9 from "../assets/product-images/product9.png";
import product10 from "../assets/product-images/product10.png";
import product11 from "../assets/product-images/product11.png";
import product12 from "../assets/product-images/product12.png";
import product13 from "../assets/product-images/product13.png";
import product14 from "../assets/product-images/product14.png";
import product15 from "../assets/product-images/product15.png";
import product16 from "../assets/product-images/product16.png";
import product17 from "../assets/product-images/product17.png";
import product18 from "../assets/product-images/product18.png";
import product19 from "../assets/product-images/product19.png";
import product20 from "../assets/product-images/product20.png";
import product21 from "../assets/product-images/product21.png";
import product22 from "../assets/product-images/product22.png";
import product23 from "../assets/product-images/product23.png";
import product24 from "../assets/product-images/product24.png";
import product25 from "../assets/product-images/product25.png";
import product26 from "../assets/product-images/product26.png";
import product27 from "../assets/product-images/product27.png";
import product28 from "../assets/product-images/product28.png";
import product29 from "../assets/product-images/product29.png";
import product30 from "../assets/product-images/product30.png";
import product31 from "../assets/product-images/product31.png";
import product32 from "../assets/product-images/product32.png";
import product33 from "../assets/product-images/product33.png";
import product34 from "../assets/product-images/product34.png";
import product35 from "../assets/product-images/product35.png";
import product36 from "../assets/product-images/product36.png";
import product37 from "../assets/product-images/product37.png";
import product38 from "../assets/product-images/product38.png";
import product39 from "../assets/product-images/product39.png";
import product40 from "../assets/product-images/product40.png";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image?: string;
}

export const mainProducts: Product[] = [
  { id: 1, name: "Vitamin C Tablets", category: "Supplements", price: 1200, oldPrice: 1500, discount: 20, image: product1 },
  { id: 2, name: "Digital Thermometer", category: "Medical Devices", price: 850, oldPrice: 1000, discount: 15, image: product2 },
  { id: 3, name: "Hand Sanitizer 500ml", category: "Hygiene", price: 300, image: product3 },
  { id: 4, name: "Blood Pressure Monitor", category: "Medical Devices", price: 4500, oldPrice: 5200, discount: 13, image: product4 },
  { id: 5, name: "Cough Syrup", category: "Pharmacy", price: 700, image: product5 },
  { id: 6, name: "Multivitamin Capsules", category: "Supplements", price: 1400, oldPrice: 1600, discount: 12, image: product6 },
  { id: 7, name: "First Aid Kit", category: "Emergency Care", price: 2200, image: product7 },
  { id: 8, name: "Disposable Gloves Pack", category: "Hygiene", price: 500, image: product8 },
  { id: 9, name: "Nebulizer Machine", category: "Medical Devices", price: 3800, oldPrice: 4200, discount: 10, image: product9 },
  { id: 10, name: "Allergy Relief Tablets", category: "Pharmacy", price: 950, image: product10 },



  { id: 11, name: "Omega-3 Fish Oil", category: "Supplements", price: 1800, image: product11 },
  { id: 12, name: "Infrared Thermometer", category: "Medical Devices", price: 2700, image: product12 },
  { id: 13, name: "Face Masks (50pcs)", category: "Hygiene", price: 600, image: product13 },
  { id: 14, name: "Insulin Pen Needles", category: "Pharmacy", price: 1500, image: product14 },
  { id: 15, name: "Calcium + Vitamin D", category: "Supplements", price: 1600, oldPrice: 1900, discount: 15, image: product15 },
  { id: 16, name: "Antiseptic Solution", category: "Hygiene", price: 400, image: product16 },
  { id: 17, name: "Pregnancy Test Kit", category: "Pharmacy", price: 350, image: product17 },
  { id: 18, name: "Pulse Oximeter", category: "Medical Devices", price: 2200, image: product18 },
  { id: 19, name: "Kids Multivitamins", category: "Baby Care", price: 1300, image: product19 },
  { id: 20, name: "Glucose Meter", category: "Medical Devices", price: 3200, oldPrice: 3500, discount: 8, image: product20 },

  { id: 21, name: "Zinc Supplements", category: "Supplements", price: 900, image: product21 },
  { id: 22, name: "Herbal Tea - Detox", category: "Nutrition", price: 750, image: product22 },
  { id: 23, name: "Moisturizing Cream", category: "Skincare", price: 1800, image: product23 },
  { id: 24, name: "Baby Diapers (30pcs)", category: "Baby Care", price: 1200, image: product24 },
  { id: 25, name: "Cold & Flu Relief", category: "Pharmacy", price: 650, image: product25 },
  { id: 26, name: "Reusable Ice Pack", category: "Emergency Care", price: 800, image: product26 },
  { id: 27, name: "Protein Powder", category: "Nutrition", price: 2500, oldPrice: 2800, discount: 10, image: product27 },
  { id: 28, name: "Lotion - Sensitive Skin", category: "Skincare", price: 1100, image: product28 },
  { id: 29, name: "Antacid Tablets", category: "Pharmacy", price: 500, image: product29 },
  { id: 30, name: "Hair Growth Shampoo", category: "Skincare", price: 1450, image: product30 },

  { id: 31, name: "Iron Supplements", category: "Supplements", price: 1250, image: product31 },
  { id: 32, name: "Wound Dressing Kit", category: "Emergency Care", price: 950, image: product32 },
  { id: 33, name: "Toothpaste (Whitening)", category: "Hygiene", price: 350, image: product33 },
  { id: 34, name: "Pain Relief Spray", category: "Pharmacy", price: 800, image: product34 },
  { id: 35, name: "Vitamin B Complex", category: "Supplements", price: 1700, image: product35 },
  { id: 36, name: "Kids Cough Syrup", category: "Baby Care", price: 550, image: product36 },
  { id: 37, name: "Hand Cream", category: "Skincare", price: 600, image: product37 },
  { id: 38, name: "Electrolyte Powder", category: "Nutrition", price: 850, image: product38 },
  { id: 39, name: "Inhaler Spacer", category: "Medical Devices", price: 2100, image: product39 },
  { id: 40, name: "Probiotic Capsules", category: "Supplements", price: 1900, image: product40 },
];
