import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const { id, name, price, inStock } = product;

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
