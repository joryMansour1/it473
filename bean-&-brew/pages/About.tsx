import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Flame, Award } from 'lucide-react';

export const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="px-4 md:px-10 lg:px-20 py-8">
        <div className="relative rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center bg-black">
            <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD0Q2K_PZaPZWYoNGjj2Iws0M6Of2M6nDh2gKCpDpmAQd4CrU9xIpItdAUEZnjZkyBUiy3xz72VJZ3F9NWFYQkektU1lDWCNCQW1TDwLpAjPKOSO9UXNbwzPWxP2792sJnxSmrEJvMMsfBPC3zILnLSY-lCXobcmkXQ8qmrittgdSMdGrpcNSqqL0V67t-kFiacZi-Y3e9mOsBlcbV0DMgu6rxBZy5yjx8R95s_hW5eZueQaQ2-rhPEzdAR33XLECpc8wJBydZKxZ2" 
                alt="Roasted coffee beans close up" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="relative z-10 text-center max-w-2xl px-4">
                <h1 className="text-white text-5xl font-black mb-4 tracking-tight">Our Story</h1>
                <p className="text-white/90 text-lg">We source and deliver the finest specialty coffee beans to coffee lovers who value freshness and flavor.</p>
            </div>
        </div>
      </div>

      {/* Values Grid */}
      <section className="py-16 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto w-full">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-content-light dark:text-content-dark mb-4">Our Commitment to Quality</h2>
            <p className="text-subtle-light dark:text-subtle-dark max-w-xl mx-auto">To connect you with the world's most exceptional coffee, one cup at a time.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark flex flex-col items-start hover:shadow-lg transition-shadow">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-content-light dark:text-content-dark">Sourced with Care</h3>
                <p className="text-subtle-light dark:text-subtle-dark leading-relaxed">We partner with ethical farms around the globe to bring you the best single-origin beans.</p>
            </div>
            <div className="p-8 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark flex flex-col items-start hover:shadow-lg transition-shadow">
                <Flame className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-content-light dark:text-content-dark">Expert Roasting</h3>
                <p className="text-subtle-light dark:text-subtle-dark leading-relaxed">Our master roasters carefully craft each batch to unlock unique flavors and aromas.</p>
            </div>
            <div className="p-8 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark flex flex-col items-start hover:shadow-lg transition-shadow">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-content-light dark:text-content-dark">Peak Freshness</h3>
                <p className="text-subtle-light dark:text-subtle-dark leading-relaxed">Beans are shipped within 48 hours of roasting to ensure maximum freshness in every cup.</p>
            </div>
         </div>
      </section>

    

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto p-12 bg-primary/10 rounded-3xl">
            <h2 className="text-3xl font-black mb-4">Discover Your Perfect Brew</h2>
            <p className="text-subtle-light dark:text-subtle-dark mb-8">From bright single-origins to rich blends, we have something for everyone.</p>
            <Link to="/shop" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Explore Our Coffees
            </Link>
        </div>
      </section>
    </div>
  );
};
