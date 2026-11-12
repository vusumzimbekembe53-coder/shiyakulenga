
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const { cartCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinkStyle = ({ isActive }) =>
    `text-xs font-bold tracking-widest transition-colors duration-300 ${
      isActive ? 'text-[#00F0FF]' : 'text-white hover:text-[#00F0FF]'
    }`

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0B0C10] border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          
        {/* LOGO */}
        <Link to="/" className="text-3xl font-black tracking-tight text-white">
          SHIYA<span className="text-[#00F0FF] hover:animate-bounce">KULENGA.</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={navLinkStyle}>
            HOME
          </NavLink>

          <a href="/#categories"
            className="text-xs font-bold tracking-widest text-white hover:text-[#00F0FF] transition">
            CATEGORIES
          </a>

          <a href="/#featured-products"
            className="text-xs font-bold tracking-widest text-white hover:text-[#00F0FF] transition">
            LATEST DROPS
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* CART */}
          <Link to="/cart" className="relative flex items-center gap-2 text-white hover:text-[#00F0FF] transition">

            <span className="text-xl">🛍</span>

            <span className="text-xs font-bold tracking-widest hidden sm:block">
              BAG
            </span>

            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 min-w-5 h-5 px-1 bg-[#FF5500] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}

          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

        </div>

      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="md:hidden bg-[#181A20] border-t border-white/10 px-6 py-6 flex flex-col gap-6">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={navLinkStyle}
          >
            HOME
          </NavLink>

          <a
            href="/#categories"
            onClick={() => setMenuOpen(false)}
            className="text-xs font-bold tracking-widest text-white hover:text-[#00F0FF]"
          >
            CATEGORIES
          </a>

          <a
            href="/#featured-products"
            onClick={() => setMenuOpen(false)}
            className="text-xs font-bold tracking-widest text-white hover:text-[#00F0FF]"
          >
            LATEST DROPS
          </a>

          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="text-xs font-bold tracking-widest text-[#00F0FF]"
          >
            SHOPPING BAG ({cartCount})
          </Link>

        </div>
      )}

    </nav>
  )
}

export default Navbar
