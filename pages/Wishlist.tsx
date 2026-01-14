import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { ImageWithLoader } from '../components/ImageWithLoader';

export const Wishlist: React.FC = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product: any) => {
    addToCart(product);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-offwhite px-4">
        <h2 className="font-serif text-3xl mb-4 text-charcoal font-bold">Your Wishlist is Empty</h2>
        <p className="text-gray-500 mb-8 font-light">Save your favorite curries here for later.</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-saffron text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-orange-700 transition-colors flex items-center gap-2"
        >
          Explore Menu <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl text-charcoal mb-12 text-center font-bold">My Wishlist</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-video overflow-hidden">
                <ImageWithLoader 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover" 
                  containerClassName="w-full h-full"
                />
                <button 
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm hover:text-red-500 transition-colors z-10"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-charcoal mb-1">{product.name}</h3>
                <p className="font-bangla text-gray-500 mb-4">{product.banglaName}</p>
                
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">৳ {product.price}</span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center gap-2 bg-charcoal text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-saffron transition-colors"
                  >
                    <ShoppingBag className="w-3 h-3" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};