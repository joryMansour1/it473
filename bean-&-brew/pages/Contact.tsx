import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="min-h-screen py-16 px-4 md:px-10 lg:px-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-black mb-4 tracking-tight">Get in Touch</h1>
            <p className="text-subtle-light dark:text-subtle-dark max-w-2xl mx-auto">We'd love to hear from you. Whether it's about an order, a question about our beans, or just to say hello.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl flex items-center justify-center shrink-0">
                                <Mail className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-bold text-content-light dark:text-content-dark">Email Us</p>
                                <p className="text-subtle-light dark:text-subtle-dark">support@beanandbrew.com</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl flex items-center justify-center shrink-0">
                                <Phone className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-bold text-content-light dark:text-content-dark">Call Us</p>
                                <p className="text-subtle-light dark:text-subtle-dark">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl flex items-center justify-center shrink-0">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-bold text-content-light dark:text-content-dark">Visit Us</p>
                                <p className="text-subtle-light dark:text-subtle-dark">123 Coffee Bean Lane, Roastville, USA</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-64 rounded-2xl overflow-hidden shadow-sm border border-border-light dark:border-border-dark">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCng3JJ99oLch5RAQ4DpIeCaPHtMr_9URx1z4xcRcpuj3ddF9eJQQxoa82WHV73zaLSaUJ6KV_H-YNsZGR12sqmTmSi3FB-MYXIlQVd_GKB8gv7mzGSwkURUjoJctCx8wNRJDAAWoD0oTW0XFNYk78bkzpEaWctCjtomhE_QBMZMSky0SAt0mxq5eCmiNwoXZ-yK5eZ8EppH0M3Kf8ZAN-WwBo6LDMQO96EVyYGYHDR0UlIM17-NVS-U3gavo5JAaylBUuoLZqwjYia" 
                        alt="Map" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Form */}
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-border-light dark:border-border-dark">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-content-light dark:text-content-dark">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-content-light dark:text-content-dark">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-content-light dark:text-content-dark">Message</label>
                        <textarea 
                            id="message" 
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow resize-none"
                            placeholder="How can we help?"
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full py-3.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};
