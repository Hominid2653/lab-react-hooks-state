import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [category, setCategory] = useState('all')
  const [cartItems, setCartItems] = useState([])

  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  const filteredProducts = sampleProducts.filter((product) => {
    return category === 'all' ? true : product.category === category
  })

  return (
    <div className={darkMode ? 'app app--dark' : 'app'}>
      <header className="app__header">
        <div className="app__hero">
          <h1>🛒 Shopping App</h1>
          <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>
        </div>
        <DarkModeToggle darkMode={darkMode} onToggle={handleToggle} />
      </header>

      <section className="app__controls">
        <label htmlFor="category-filter">Filter by Category:</label>
        <select
          id="category-filter"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </section>

      <main className="app__main">
        <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
        <Cart items={cartItems} />
      </main>
    </div>
  )
}

export default App
