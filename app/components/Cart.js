// src/components/Cart.js
import React from 'react';

const Cart = ({ items }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Carrinho de Compras</h2>
      {items.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id} className="flex justify-between mt-2">
              <span>{item.name}</span>
              <span>{`€${item.price.toFixed(2)}`}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;