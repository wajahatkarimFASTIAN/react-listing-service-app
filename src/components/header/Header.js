import React from 'react'
import './Header.css'
import headerImage from './headerBackground.jpg'

function Header() {
  return (
    <div className="header-section">
        <div className="hero-text">
            <span className="hero-text-title">Marketplace</span>
            <span className="hero-text-subtitle">Property Listing</span>
        </div>
        <img className="hero-image" src={headerImage} />
    </div>
  )
}

export default Header