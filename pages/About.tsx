import React from 'react';
import { ImageWithLoader } from '../components/ImageWithLoader';

export const About: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white">
      {/* Header Image */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithLoader 
            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2670&auto=format&fit=crop"
            alt="About Background"
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold tracking-tight">
            Our Story
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-lg mx-auto text-center">
          <span className="text-saffron font-bold tracking-[0.2em] uppercase text-sm block mb-6">
            Heritage Meets Convenience
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-bold mb-8">
            Bringing the lost art of slow cooking to your busy life.
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            At <strong>ReadyMade Bhuna</strong>, we believe that time shouldn't be a barrier to taste. In the hustle of modern Dhaka life, the tradition of spending hours slow-cooking spices (koshano) to perfection is fading away. We wanted to bring that back—without the hassle.
          </p>
          <p className="text-gray-500 leading-relaxed mb-12">
            Our journey began in a small kitchen in Old Dhaka, trying to replicate our grandmother's recipes. We realized that the secret wasn't just in the ingredients, but in the patience. That's why every batch of our curry base is cooked for hours, ensuring the oils separate perfectly from the spices, locking in that deep, authentic flavor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
           <div className="rounded-2xl shadow-lg overflow-hidden h-[400px]">
             <ImageWithLoader 
               src="https://images.unsplash.com/photo-1606914501449-b780907a974b?q=80&w=800&auto=format&fit=crop"
               alt="Spices"
               className="w-full h-full object-cover"
               containerClassName="w-full h-full"
             />
           </div>
           <div className="flex flex-col justify-center bg-offwhite p-8 rounded-2xl border border-gray-100">
             <h3 className="font-serif text-2xl font-bold mb-6">Our Promise</h3>
             <ul className="space-y-6 text-gray-600">
               <li className="flex items-start gap-4">
                 <span className="text-saffron font-bold text-2xl">•</span>
                 <div>
                    <span className="font-bold block text-charcoal">100% Natural</span>
                    <span className="text-sm">Sourced directly from local farmers.</span>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <span className="text-saffron font-bold text-2xl">•</span>
                 <div>
                    <span className="font-bold block text-charcoal">Zero Preservatives</span>
                    <span className="text-sm">No artificial colors, or flavors. Pure food.</span>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <span className="text-saffron font-bold text-2xl">•</span>
                 <div>
                    <span className="font-bold block text-charcoal">Flash Frozen</span>
                    <span className="text-sm">To lock in nutrients and fresh-cooked taste.</span>
                 </div>
               </li>
             </ul>
           </div>
        </div>

        <div className="text-center bg-charcoal text-white p-12 rounded-3xl shadow-xl">
          <h3 className="font-serif text-2xl font-bold mb-4">Join the Revolution</h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Experience the joy of cooking a gourmet meal in just 10 minutes. Because you deserve good food, every single day.
          </p>
          <p className="font-bangla text-2xl">
            "রান্না এখন শিল্প, পরিশ্রম নয়।"
          </p>
        </div>
      </div>
    </div>
  );
};