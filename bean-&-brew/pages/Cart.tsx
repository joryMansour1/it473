import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  if (cart.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-subtle-light dark:text-subtle-dark mb-8 text-center max-w-md">Looks like you haven't added any coffee to your cart yet. Time to brew up something special.</p>
            <Link to="/shop" className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
                Start Shopping
            </Link>
        </div>
    )
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-content-light dark:text-content-dark mb-8 tracking-tight">Your Cart ({cartCount} items)</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
                {cart.map(item => (
                    <div key={item.id} className="flex gap-4 p-4 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark">
                        <div className="h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                        </div>
                        
                        <div className="flex flex-1 flex-col justify-center">
                            <h3 className="text-base font-bold text-content-light dark:text-content-dark">{item.name}</h3>
                            <p className="text-sm text-subtle-light dark:text-subtle-dark">Whole Bean | 12oz</p>
                            <p className="text-sm font-medium text-content-light dark:text-content-dark mt-1">${item.price.toFixed(2)}</p>
                        </div>

                        <div className="flex flex-col items-end justify-between">
                            <div className="flex items-center gap-3 bg-background-light dark:bg-background-dark rounded-full p-1 border border-border-light dark:border-border-dark">
                                <button 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="p-1 hover:text-primary transition-colors"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                <button 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="p-1 hover:text-primary transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                            <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-xs text-subtle-light dark:text-subtle-dark hover:text-red-500 font-medium uppercase tracking-wider flex items-center gap-1 transition-colors"
                            >
                                <Trash2 className="w-3 h-3" /> Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark sticky top-28">
                    <h3 className="text-xl font-bold mb-6 text-content-light dark:text-content-dark">Order Summary</h3>
                    
                    <div className="space-y-4 text-sm text-content-light dark:text-content-dark mb-6">
                        <div className="flex justify-between">
                            <span className="text-subtle-light dark:text-subtle-dark">Subtotal</span>
                            <span className="font-medium">${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-subtle-light dark:text-subtle-dark">Shipping</span>
                            <span className="text-subtle-light dark:text-subtle-dark italic">Calculated at checkout</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="text-subtle-light dark:text-subtle-dark">Taxes</span>
                            <span className="text-subtle-light dark:text-subtle-dark italic">Calculated at checkout</span>
                        </div>
                    </div>

                    <div className="border-t border-border-light dark:border-border-dark pt-4 mb-6">
                        <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <button className="w-full bg-primary text-white font-bold py-3.5 px-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group">
                        Proceed to Checkout <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <div className="mt-6 text-center">
                        <p className="text-xs text-subtle-light dark:text-subtle-dark mb-3">Secure payments with</p>
                        <div className="flex justify-center gap-3 opacity-70 grayscale hover:grayscale-0 transition-all">
                             <img className="h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYDAJdrW70yzGgdYBFpGTgWOKaIX2PxQHHZSr417we0QHw2zqlwVqqqPdH1hFNF-X2i0fMslu4UPkLH3PojbJ8lOkWjRV9-jn_MyBScoNKR6G_ZTWhI3JQeZHPetoOCMNGbWMtoZfuV4GqVmYJOQEIXZYUoFFoQcbTdRzZ7B5OFs6cDB4Lyq4EpNymOxgS3K8q29fY2sykp9hqgt2JsOXaNULz3OwHxCxIKbYIHaWwVMMPYThOdKyfUqL4MXMLnqL-3uceQEI7h9m9" alt="Visa" />
                             <img className="h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAwTRFCRGB2jAyqBo_eysvJLm4VX_iiEHVLHlSqyHH-z33-71wNbDpK4t22CvmOaDGy-MzMoaWt9s859AIfMubAy602USJfvQHgrLGiYG2MUNHxiB7mSdKtzeGk23cxVNGJjtxgM68n_ocVLi4qm0pocN3bFEemK2UUJw-AJ_nqotEqMADoAMhYd1CQ_MXY_MhuRJC_2T8dS96-GDHn61hprhDwNfiAy1gWiUOfmRmmOvukuVM47CS7GnpDL2H8fF579VzOyB95OUa" alt="Mastercard" />
                             <img className="h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKvypxpbNEd40YVEoTNsqsZnnyFoWYfxw2f1hoDWULTNC2e36T8PI3_Z4PWQBElM326JB1KA3OiI1jxCF2sBxgpP2zHpDlCvt5OTBOzDqecEAH1MCkibjOEOVq-8rBBNkXUEm3FrSIHabRJI8yJWmkVLXx-XNY0lxK6_eckOHkqF4DWH59fT6VZbc2VKo1eiyQmJnELSXpqx0xgoNx_1t39O0xAtiWG0KURAMxXoJ9ZfvlNiwYYJz4-QtCvcLTNeQb7rnM9_nXN6Bh" alt="Paypal" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
