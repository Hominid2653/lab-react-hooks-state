import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ products = sampleProducts, onAddToCart = () => {} }) => {
  return (
    <section className="product-list">
      <h2>Available Products</h2>

      {products.length === 0 ? (
        <p className="product-list__empty">No products available</p>
      ) : (
        <div className="product-list__grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductList
