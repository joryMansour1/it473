import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data';
import { ShoppingBag, Truck, ShieldCheck, Leaf } from 'lucide-react';

export const Home = () => {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="px-4 sm:px-8 md:px-10 lg:px-20 py-5">
        <div 
          className="relative w-full rounded-2xl overflow-hidden min-h-[500px] flex items-center justify-center text-center px-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuACWD2GAK9OaeUQpCk_oNkdvw5AvwKH-BFvRf-rW0bBuzU0vrW1TqjfrLQFfQK9iGDeUdo2y9GD6lI43VUKZAgT21M1xbl2CWrJMWMrcxAoQdXn_N_jWbsatRORGnfVF8dPTAp-R83IwbvffqmAXjnd8LC78FRJtiuwxSM6FN7-DcBOU4F0VassSbSZFvVVA-kF107s1omMko2bXjEAos2_FtXus7fWRUkGiGYuV5jQwNmSUBhiPWgeoB4GynDRM8ac7Y76s7-CIIfL")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative z-10 flex flex-col gap-6 max-w-3xl mx-auto items-center">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-lg">
              Premium Coffee Beans <br /> Freshly Roasted
            </h1>
            <h2 className="text-white/90 text-lg sm:text-xl font-medium max-w-xl mx-auto drop-shadow-md">
              Discover your perfect blend, delivered straight from the roastery to your door.
            </h2>
            <Link 
              to="/shop" 
              className="mt-4 px-8 py-3 bg-primary text-white text-base font-bold rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold text-content-light dark:text-content-dark tracking-tight">Featured Roasts</h2>
            <Link to="/shop" className="text-primary font-medium hover:underline hidden sm:block">View all products</Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button 
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 right-4 h-10 w-10 bg-white dark:bg-black/80 rounded-full flex items-center justify-center shadow-md translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white dark:hover:bg-primary"
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-content-light dark:text-content-dark mb-1">{product.name}</h3>
                <p className="text-sm text-subtle-light dark:text-subtle-dark mb-3 line-clamp-1">{product.description}</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-primary font-bold text-lg">{product.price.toFixed(2)} SAR</span>
                  <button onClick={() => addToCart(product)} className="text-sm font-medium hover:underline sm:hidden text-primary">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
             <Link to="/shop" className="text-primary font-medium hover:underline">View all products</Link>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-4 sm:px-8 md:px-10 lg:px-20 bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-content-light dark:text-content-dark mb-4">Why Choose Bean & Brew?</h2>
                <p className="text-subtle-light dark:text-subtle-dark max-w-2xl mx-auto">We are dedicated to providing the best coffee experience, from bean to cup.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                        <Leaf className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Ethically Sourced</h3>
                    <p className="text-sm text-subtle-light dark:text-subtle-dark">We source only the finest, ethically-grown beans from renowned coffee regions.</p>
                </div>
                <div className="p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                        <Truck className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                    <p className="text-sm text-subtle-light dark:text-subtle-dark">Roasted to order and shipped quickly to ensure maximum freshness and flavor.</p>
                </div>
                <div className="p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
                    <p className="text-sm text-subtle-light dark:text-subtle-dark">If you're not satisfied with your brew, we'll make it right.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};
