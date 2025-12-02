import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1">
                <h3 className="text-xl font-bold mb-4 text-content-light dark:text-content-dark">Bean & Brew</h3>
                <p className="text-sm text-subtle-light dark:text-subtle-dark mb-4">
                    Premium coffee sourced from the world's best farms, roasted with passion and delivered to your doorstep.
                </p>
            </div>
            
            <div>
                <h4 className="font-bold mb-4 text-content-light dark:text-content-dark">Shop</h4>
                <ul className="space-y-2 text-sm text-subtle-light dark:text-subtle-dark">
                    <li><a href="/#/shop" className="hover:text-primary transition-colors">All Coffee</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold mb-4 text-content-light dark:text-content-dark">Company</h4>
                <ul className="space-y-2 text-sm text-subtle-light dark:text-subtle-dark">
                    <li><a href="/#/about" className="hover:text-primary transition-colors">Our Story</a></li>
                    <li><a href="/#/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
                    
                </ul>
            </div>

             <div>
                <h4 className="font-bold mb-4 text-content-light dark:text-content-dark">Stay Connected</h4>
                <p className="text-sm text-subtle-light dark:text-subtle-dark mb-4">Join our newsletter for brewing tips and exclusive offers.</p>
                <div className="flex gap-4">
                    <a href="#" className="text-subtle-light dark:text-subtle-dark hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                    <a href="#" className="text-subtle-light dark:text-subtle-dark hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                    <a href="#" className="text-subtle-light dark:text-subtle-dark hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                    <a href="mailto:support@beanandbrew.com" className="text-subtle-light dark:text-subtle-dark hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
                </div>
            </div>
        </div>
        
        <div className="pt-8 border-t border-border-light dark:border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-subtle-light dark:text-subtle-dark">© 2025 Bean & Brew. All Rights Reserved.</p>
          <p className="text-sm text-subtle-light dark:text-subtle-dark">support@beanandbrew.com</p>
        </div>
      </div>
    </footer>
  );
};
