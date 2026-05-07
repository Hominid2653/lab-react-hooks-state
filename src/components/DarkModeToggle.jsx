import React from 'react'

const DarkModeToggle = ({ darkMode = false, onToggle = () => {} }) => {
  return (
    <button onClick={onToggle}>
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle
