import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Smartphone, MapPin, User, Mail, CreditCard } from 'lucide-react';
import { ImageWithLoader } from '../components/ImageWithLoader';

export const Checkout: React.FC = () => {
  const { items, removeFromCart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    senderNumber: '',
    transactionId: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      clearCart();
      navigate('/success');
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="font-serif text-3xl mb-4 text-charcoal">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">It looks like you haven't added any delicacies yet.</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-saffron text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-orange-700 transition-colors"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="bg-offwhite min-h-screen py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl text-charcoal mb-12 text-center">Secure Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary - Left Column on Desktop */}
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
              <h2 className="font-serif text-xl mb-6">Your Selection</h2>
              <div className="space-y-6 mb-8">
                {items.map(item => (
                  <div key={item.id} className="flex items-start gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className="w-20 h-20 bg-gray-100 shrink-0">
                        <ImageWithLoader 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover" 
                          containerClassName="w-full h-full"
                        />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                         <h3 className="font-serif font-medium text-charcoal">{item.name}</h3>
                         <p className="font-medium text-charcoal">৳ {item.price * item.quantity}</p>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">{item.weight} x {item.quantity}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-100 pt-6 space-y-3">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span>৳ {cartTotal}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Delivery (Dhaka City)</span>
                  <span>৳ 100</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-charcoal pt-4 border-t border-gray-100 mt-4">
                  <span>Total</span>
                  <span>৳ {cartTotal + 100}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form - Right Column on Desktop */}
          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Details */}
              <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                <h2 className="font-serif text-xl mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-saffron" /> Contact & Delivery
                </h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider font-bold text-gray-500">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 bg-offwhite border border-gray-200 focus:border-saffron focus:ring-1 focus:ring-saffron outline-none transition-colors"
                        placeholder="e.g. Ayesha Rahman"
                      />
                    </div>
                    <div className="space-y-1">
                       <label className="text-xs uppercase tracking-wider font-bold text-gray-500">Phone</label>
                       <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 bg-offwhite border border-gray-200 focus:border-saffron focus:ring-1 focus:ring-saffron outline-none transition-colors"
                        placeholder="e.g. 017..."
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider font-bold text-gray-500">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-offwhite border border-gray-200 focus:border-saffron focus:ring-1 focus:ring-saffron outline-none transition-colors"
                      placeholder="e.g. ayesha@example.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider font-bold text-gray-500">Delivery Address</label>
                    <textarea 
                      required
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className="w-full p-3 bg-offwhite border border-gray-200 focus:border-saffron focus:ring-1 focus:ring-saffron outline-none transition-colors resize-none"
                      placeholder="Flat 4B, House 12, Road 5, Dhanmondi..."
                    />
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                <h2 className="font-serif text-xl mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-saffron" /> Payment Method
                </h2>
                
                <div className="mb-6 bg-pink-50 border border-pink-100 p-4 rounded-md">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-pink-600">bKash Payment</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Please Send Money to our Merchant Number:</p>
                  <p className="font-mono text-lg font-bold text-charcoal mb-4">01700-123456</p>
                  <p className="text-xs text-gray-500">Use Reference: <span className="font-mono bg-white px-1">PB-{Math.floor(Math.random() * 1000)}</span></p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider font-bold text-gray-500">Your bKash Number</label>
                    <input 
                      required
                      type="tel" 
                      name="senderNumber"
                      value={formData.senderNumber}
                      onChange={handleChange}
                      className="w-full p-3 bg-offwhite border border-gray-200 focus:border-saffron focus:ring-1 focus:ring-saffron outline-none transition-colors"
                      placeholder="01..."
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider font-bold text-gray-500">Transaction ID</label>
                    <input 
                      required
                      type="text" 
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleChange}
                      className="w-full p-3 bg-offwhite border border-gray-200 focus:border-saffron focus:ring-1 focus:ring-saffron outline-none transition-colors"
                      placeholder="e.g. 8N7..."
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-saffron text-white py-5 text-sm font-bold uppercase tracking-widest hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-saffron/30"
              >
                Confirm Order — ৳ {cartTotal + 100}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};