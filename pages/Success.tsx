import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const Success: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-offwhite px-4 animate-fade-in text-center">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 animate-bounce-slow">
        <CheckCircle className="w-12 h-12 text-green-600" />
      </div>
      
      <span className="text-saffron font-bold tracking-[0.3em] uppercase text-sm mb-4">
        Order Confirmed
      </span>
      
      <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6">
        Excellent Choice.
      </h1>
      
      <p className="text-gray-500 text-lg max-w-lg mb-12 leading-relaxed">
        We have received your order and payment details. Our kitchen is preparing your package for dispatch. You will receive an SMS confirmation shortly.
      </p>
      
      <div className="flex flex-col md:flex-row gap-4">
        <Link 
          to="/"
          className="bg-charcoal text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};