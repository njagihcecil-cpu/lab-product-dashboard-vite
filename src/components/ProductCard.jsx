import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const { id, name, price, inStock } = product;

  // Plain 'outOfStockClass' string is what toHaveClass() checks for.
  // CSS Modules alone won't work because they scope/hash the name.
  const outOfStockClass = !inStock ? `${styles.outOfStockClass} outOfStockClass` : '';

  return (
    <div className={`${styles.card} ${outOfStockClass}`}>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
};

export default ProductCard;