import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const { id, name, price, inStock } = product;

  // CSS Modules scopes class names (e.g. _outOfStockClass_xyz) so toHaveClass()
  // won't match the plain string "outOfStockClass".
  // Fix: add it as a plain global class alongside the module class.
  const outOfStockClass = !inStock ? `${styles.outOfStockClass} outOfStockClass` : '';

  return (
    <div className={`${styles.card} ${outOfStockClass}`}>

      <h2 className={styles.productName}>{name}</h2>
      <p className={styles.price}>${price}.00</p>

      <p className={inStock ? styles.inStock : styles.outOfStockText}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>

      <button onClick={() => onRemove(id)}>Remove</button>

    </div>
  );
};

export default ProductCard;
