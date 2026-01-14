import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Instagram, Facebook, Heart, Phone, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { items } = useCart();
  const { wishlistItems } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans text-charcoal bg-white selection:bg-saffron selection:text-white">
      {/* Top Bar - Premium Dark */}
      <div className="bg-charcoal text-white text-[11px] py-2.5 px-4 tracking-widest uppercase">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="font-medium opacity-90">Free Delivery on orders over ৳2000 within Bashundhara R/A</span>
          <div className="flex items-center gap-6 opacity-90">
             <div className="flex items-center gap-2">
               <MapPin className="w-3 h-3 text-saffron" />
               <span>Dhaka, Bangladesh</span>
             </div>
             <div className="flex items-center gap-2">
               <Phone className="w-3 h-3 text-saffron" />
               <span className="font-mono">01700-123456</span>
             </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="group">
                <span className="font-serif text-2xl md:text-3xl font-bold tracking-tighter text-charcoal group-hover:text-saffron transition-colors">
                  ReadyMade<span className="text-saffron">.</span>
                </span>
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-10 items-center">
              <Link 
                to="/" 
                className={`transition-colors text-xs uppercase tracking-[0.2em] font-bold ${isActive('/') ? 'text-saffron' : 'text-charcoal hover:text-saffron'}`}
              >
                Home
              </Link>
              <Link 
                to="/story" 
                className={`transition-colors text-xs uppercase tracking-[0.2em] font-bold ${isActive('/story') ? 'text-saffron' : 'text-charcoal hover:text-saffron'}`}
              >
                Our Story
              </Link>
              
              <div className="flex items-center gap-6 border-l border-gray-200 pl-8 h-6">
                 <Link to="/wishlist" className={`relative group transition-colors ${isActive('/wishlist') ? 'text-saffron' : 'text-charcoal hover:text-saffron'}`}>
                  <Heart className={`w-5 h-5 ${isActive('/wishlist') ? 'fill-current' : ''}`} />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-saffron text-white text-[9px] font-bold h-3.5 w-3.5 rounded-full flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Link>

                <Link to="/checkout" className={`relative group transition-colors ${isActive('/checkout') ? 'text-saffron' : 'text-charcoal hover:text-saffron'}`}>
                   <ShoppingBag className="w-5 h-5" />
                   {cartCount > 0 && (
                     <span className="absolute -top-1.5 -right-1.5 bg-charcoal text-white text-[9px] font-bold h-3.5 w-3.5 rounded-full flex items-center justify-center">
                       {cartCount}
                     </span>
                   )}
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden gap-5">
              <Link to="/checkout" className="relative text-charcoal hover:text-saffron">
                   <ShoppingBag className="w-6 h-6" />
                   {cartCount > 0 && (
                     <span className="absolute -top-1.5 -right-1.5 bg-saffron text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                       {cartCount}
                     </span>
                   )}
              </Link>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-charcoal focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-slide-up">
            <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center">
              <Link to="/" className={`block w-full text-center px-3 py-4 text-sm font-bold uppercase tracking-widest border-b border-gray-50 ${isActive('/') ? 'text-saffron' : 'text-charcoal'}`}>Home</Link>
              <Link to="/story" className={`block w-full text-center px-3 py-4 text-sm font-bold uppercase tracking-widest border-b border-gray-50 ${isActive('/story') ? 'text-saffron' : 'text-charcoal'}`}>Our Story</Link>
              <Link to="/wishlist" className={`block w-full text-center px-3 py-4 text-sm font-bold uppercase tracking-widest ${isActive('/wishlist') ? 'text-saffron' : 'text-charcoal'}`}>Wishlist ({wishlistCount})</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Floating WhatsApp - Adjusted design */}
      <a 
        href="https://wa.me/8801700123456" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:shadow-[#25D366]/40 hover:-translate-y-1 transition-all duration-300"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-charcoal text-white pt-20 pb-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-serif text-3xl font-bold text-white mb-6">ReadyMade<span className="text-saffron">.</span></h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-bangla">
                ব্যস্ত জীবনের সেরা সমাধান। <br/>
                ১০ মিনিটে অথেনটিক ভুনা।
              </p>
              <div className="flex space-x-4">
                 <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-saffron transition-all"><Instagram className="w-5 h-5" /></a>
                 <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-saffron transition-all"><Facebook className="w-5 h-5" /></a>
               </div>
            </div>
            
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Shop</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><Link to="/" className="hover:text-saffron transition-colors">All Products</Link></li>
                <li><Link to="/wishlist" className="hover:text-saffron transition-colors">Wishlist</Link></li>
                <li><Link to="/checkout" className="hover:text-saffron transition-colors">Checkout</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><Link to="/story" className="hover:text-saffron transition-colors">Our Story</Link></li>
                <li><a href="#" className="hover:text-saffron transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-saffron transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-saffron shrink-0" />
                  <span>Bashundhara R/A, Dhaka</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-saffron shrink-0" />
                  <span>+880 1711 000 000</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500 uppercase tracking-widest font-sans flex flex-col md:flex-row justify-between items-center gap-4">
            <span>&copy; {new Date().getFullYear()} ReadyMade Bhuna. Crafted in Dhaka.</span>
            <span className="flex items-center gap-2">
               Payment Partners: <span className="font-bold text-gray-300">bKash</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};