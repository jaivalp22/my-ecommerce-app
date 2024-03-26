import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products';

export default function ProductList({ cartadder }) {
  return (
    <div>
      {productsData.map(product => (
        <ProductItem key={product.id} product={product} cartadder={cartadder} />
      ))}
    </div>
  );
}
