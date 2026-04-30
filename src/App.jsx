import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999, inStock: true  },
    { id: 2, name: 'Phone',  price: 699, inStock: false },
    { id: 3, name: 'Tablet', price: 499, inStock: true  },
  ]);

  const [filter, setFilter] = useState('all');

  // Derive filtered list from current products + active filter
  const filteredProducts = products.filter((product) => {
    if (filter === 'inStock')    return product.inStock === true;
    if (filter === 'outOfStock') return product.inStock === false;
    return true;
  });

  // Remove a product by id
  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      <button onClick={() => setFilter('all')}         disabled={filter === 'all'}>All</button>
      <button onClick={() => setFilter('inStock')}     disabled={filter === 'inStock'}>In Stock</button>
      <button onClick={() => setFilter('outOfStock')}  disabled={filter === 'outOfStock'}>Out of Stock</button>

      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  );
};

export default App;
