import React from 'react'

function Header() {
  return (
    <nav>
    <button className="brand" href='#'>PIZZAMANIA</button>
    <div className="navLeft">
      <ul>
        <li>Home</li>
        <li>About Pizza</li>
        <li>Pizza Types</li>
      </ul>
    </div>
  </nav>
  )
}

export default Header;