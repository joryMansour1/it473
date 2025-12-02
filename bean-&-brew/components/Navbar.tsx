import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Coffee, User, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-primary font-bold" : "text-content-light dark:text-content-dark hover:text-primary transition-colors";

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center w-full bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-border-light dark:border-border-dark">
      <div className="flex items-center justify-between w-full max-w-7xl px-4 md:px-10 py-3">
        <Link to="/" className="flex items-center gap-3 text-content-light dark:text-content-dark group">
          <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
            <Coffee className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight">Bean & Brew</h2>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <nav className="flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium leading-normal ${isActive('/')}`}>Home</Link>
            <Link to="/shop" className={`text-sm font-medium leading-normal ${isActive('/shop')}`}>Shop</Link>
            <Link to="/about" className={`text-sm font-medium leading-normal ${isActive('/about')}`}>About</Link>
            <Link to="/contact" className={`text-sm font-medium leading-normal ${isActive('/contact')}`}>Contact</Link>
          </nav>
          
          <div className="flex items-center gap-3 border-l border-border-light dark:border-border-dark pl-6">
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
                <Search className="w-5 h-5 text-content-light dark:text-content-dark" />
            </button>
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
                <User className="w-5 h-5 text-content-light dark:text-content-dark" />
            </button>
            <Link to="/cart" className="relative p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors group">
              <ShoppingCart className="w-5 h-5 text-content-light dark:text-content-dark group-hover:text-primary transition-colors" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-content-light dark:text-content-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-dark md:hidden flex flex-col p-4 shadow-lg">
          <Link to="/" className="py-3 px-4 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 rounded-lg" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" className="py-3 px-4 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 rounded-lg" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/about" className="py-3 px-4 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 rounded-lg" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="py-3 px-4 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 rounded-lg" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/cart" className="py-3 px-4 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 rounded-lg flex justify-between items-center" onClick={() => setIsOpen(false)}>
            Cart 
            {cartCount > 0 && <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">{cartCount}</span>}
          </Link>
        </div>
      )}
    </header>
  );
};
