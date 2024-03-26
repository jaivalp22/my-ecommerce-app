import React from 'react';
import CartItem from './CartItem';

export default function Cart({ cartItems, cartremover }) {
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
        <h1><strong>Shopping Cart</strong></h1>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} cartremover={cartremover} />
      ))}
      <p>Total (in cart): {totalCost}</p>
    </div>
  );
}
