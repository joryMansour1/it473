import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data';
import { ChevronDown, Filter, X } from 'lucide-react';

export const Shop = () => {
  const { addToCart } = useCart();
  const [selectedOrigin, setSelectedOrigin] = useState<string | null>(null);
  const [selectedRoast, setSelectedRoast] = useState<string | null>(null);

  const origins = Array.from(new Set(products.map(p => p.origin).filter(Boolean)));
  const roasts = Array.from(new Set(products.map(p => p.roast).filter(Boolean)));

  const filteredProducts = products.filter(product => {
    if (selectedOrigin && product.origin !== selectedOrigin) return false;
    if (selectedRoast && product.roast !== selectedRoast) return false;
    return true;
  });

  const clearFilters = () => {
    setSelectedOrigin(null);
    setSelectedRoast(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
       <div className="bg-background-light dark:bg-background-dark py-8 px-4 sm:px-8 md:px-10 lg:px-20 border-b border-border-light dark:border-border-dark">
        <h1 className="text-4xl font-black text-content-light dark:text-content-dark mb-4 tracking-tight">Our Selection</h1>
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
            <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                    {selectedRoast || "Roast Level"}
                    <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                    <div className="py-1">
                        {roasts.map(roast => (
                            <button 
                                key={roast}
                                onClick={() => setSelectedRoast(roast as string)}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5"
                            >
                                {roast}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                    {selectedOrigin || "Origin"}
                    <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                    <div className="py-1">
                        {origins.map(origin => (
                            <button 
                                key={origin}
                                onClick={() => setSelectedOrigin(origin as string)}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5"
                            >
                                {origin}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {(selectedOrigin || selectedRoast) && (
                <button 
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-sm text-subtle-light dark:text-subtle-dark hover:text-primary transition-colors ml-2"
                >
                    <X className="w-4 h-4" /> Clear
                </button>
            )}
        </div>
       </div>

       {/* Grid */}
       <div className="flex-1 px-4 sm:px-8 md:px-10 lg:px-20 py-10 bg-background-light dark:bg-background-dark">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
                <div key={product.id} className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20">
                    <div className="aspect-square w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <h3 className="text-lg font-bold text-content-light dark:text-content-dark">{product.name}</h3>
                        <p className="text-sm text-subtle-light dark:text-subtle-dark mt-1">{product.description}</p>
                        <p className="text-lg font-bold text-primary mt-3">{product.price.toFixed(2)} SAR
                        </p>
                    </div>
                    <button 
                        onClick={() => addToCart(product)}
                        className="mt-4 w-full py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors active:scale-95"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
         </div>
       </div>
    </div>
  );
};
