import React from 'react'

const Cart = ({ items = [] }) => {
  return (
    <aside className="cart-card">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="cart-card__empty">Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name} is in your cart.</li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default Cart
