import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, MapPin, ChefHat, Clock, Utensils } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useWishlist } from '../context/WishlistContext';
import { ImageWithLoader } from '../components/ImageWithLoader';

export const Home: React.FC = () => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const toggleWishlist = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="animate-fade-in bg-white w-full overflow-x-hidden">
      {/* Premium Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        {/* Background Image with Loader Effect */}
        <div className="absolute inset-0 z-0">
          <ImageWithLoader 
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2670&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover transform scale-105 animate-[scaleIn_20s_ease-out_infinite_alternate]"
            containerClassName="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent z-10" />

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto pt-20">
          <div className="animate-slide-up">
             <span className="inline-block px-4 py-1.5 border border-white/30 rounded-full text-white/90 text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm shadow-sm">
               Premium Frozen Curry Base
             </span>
          </div>
          <h1 className="font-bangla text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight animate-slide-up delay-100 font-bold drop-shadow-2xl">
            রান্নার ঝামেলা শেষ,<br /> <span className="text-saffron">স্বাদ হবে রাজকীয়!</span>
          </h1>
          <p className="text-gray-100 font-bangla text-lg md:text-2xl max-w-2xl mb-12 font-light animate-slide-up delay-200 leading-relaxed opacity-90 drop-shadow-md">
            ঘণ্টার পর ঘণ্টা মশলা কষানোর দিন শেষ। আমাদের রেডিমেড ভুনা বেজ দিয়ে ১০ মিনিটে তৈরি করুন অথেনটিক বিফ, মাটন বা চিকেন কারি।
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 animate-slide-up delay-300 w-full md:w-auto px-8 md:px-0">
            <button 
              onClick={scrollToProducts}
              className="group bg-saffron text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-saffron/40 w-full md:w-auto"
            >
              Order Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link 
              to="/story"
              className="group bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-300 w-full md:w-auto text-center"
            >
              Our Process
            </Link>
          </div>
        </div>
      </div>

      {/* Premium Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-saffron font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Pick Your Protein</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-bold">Curated Collections</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Heritage Beef', 
                subtitle: 'Slow Cooked & Rich',
                img: 'https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?q=80&w=800&auto=format&fit=crop', 
                color: 'from-amber-900'
              },
              { 
                name: 'Classic Chicken', 
                subtitle: 'Roast & Korma',
                img: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?q=80&w=800&auto=format&fit=crop', 
                color: 'from-orange-900'
              },
              { 
                name: 'River Fish', 
                subtitle: 'Tangy & Spicy',
                img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop', 
                color: 'from-blue-900'
              }
            ].map((cat, idx) => (
              <div 
                key={idx} 
                className="relative h-[450px] rounded-t-full rounded-b-[200px] md:rounded-3xl overflow-hidden group cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gray-100" 
                onClick={scrollToProducts}
              >
                 <ImageWithLoader 
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    containerClassName="w-full h-full"
                 />
                 <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity`} />
                 
                 <div className="absolute bottom-0 left-0 right-0 p-10 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="text-saffron font-bold tracking-widest text-xs uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">{cat.subtitle}</span>
                    <h3 className="text-white font-serif text-3xl md:text-4xl font-bold tracking-tight mb-4">{cat.name}</h3>
                    <div className="w-12 h-1 bg-white mx-auto rounded-full group-hover:w-20 transition-all duration-300" />
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Illustrative How It Works Section */}
      <section className="py-24 bg-offwhite px-4 relative overflow-hidden" id="how-it-works">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-saffron/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-saffron font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Simple Steps</span>
            <h2 className="font-bangla text-4xl md:text-5xl text-charcoal font-bold mb-4">ম্যাজিক দেখুন ৩ ধাপে</h2>
            <p className="text-gray-500 max-w-md mx-auto">No chopping, no grinding, no waiting. Just pure flavor.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 px-4">
            {[
              { 
                step: "01",
                title: "প্যাকেটটি খুলুন", 
                desc: "ফ্রিজ থেকে বের করে প্যাকেটটি কাটুন এবং প্যানে ঢেলে দিন।",
                image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=800&auto=format&fit=crop" // Packet/Prep
              },
              { 
                step: "02",
                title: "১০ মিনিট রান্না করুন", 
                desc: "আপনার পছন্দের ভাজা মাছ বা মাংস মিশিয়ে মিডিয়াম আঁচে ১০ মিনিট রান্না করুন।",
                image: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?q=80&w=800&auto=format&fit=crop" // Cooking Pan
              },
              { 
                step: "03",
                title: "গরম পরিবেশন করুন", 
                desc: "ব্যস! তৈরি হয়ে গেলো ঐতিহ্যবাহী স্বাদের ভুনা। ভাতের সাথে উপভোগ করুন।",
                image: "https://images.unsplash.com/photo-1543826173-70651703c5a4?q=80&w=800&auto=format&fit=crop" // Serving
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative w-full aspect-square max-w-[280px] mb-8">
                  {/* Image Container with Blob Shape */}
                  <div className="absolute inset-0 bg-white rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 shadow-xl" />
                  <div className="absolute inset-0 bg-white rounded-[2rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500 shadow-sm border border-gray-100 overflow-hidden">
                     <ImageWithLoader 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover" 
                        containerClassName="w-full h-full"
                     />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-saffron text-white rounded-full flex items-center justify-center font-serif text-xl font-bold shadow-lg z-20 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                </div>

                <h3 className="font-bangla text-2xl font-bold mb-3 text-charcoal">{item.title}</h3>
                <p className="font-bangla text-gray-500 leading-relaxed text-base max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Collection Grid */}
      <section className="py-24 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8 gap-4">
            <div className="text-left w-full md:w-auto">
              <span className="text-saffron font-bold tracking-[0.2em] text-xs uppercase mb-3 block">From Our Kitchen</span>
              <h2 className="font-serif text-4xl text-charcoal font-bold">Signature Collection</h2>
            </div>
            <div className="w-full md:w-auto text-left md:text-right">
               <p className="text-gray-500 text-sm font-medium">Flash Frozen • No Preservatives • 500g Packs</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-transparent hover:border-gray-50">
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <ImageWithLoader 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <button 
                    onClick={(e) => toggleWishlist(e, product)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:scale-110 transition-transform z-10"
                  >
                    <Heart 
                      className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-saffron text-saffron' : 'text-gray-400'}`} 
                    />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                     <span className="text-xs font-bold text-white bg-saffron px-3 py-1 rounded-full shadow-sm">
                       ADD TO CART
                     </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                     <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">{product.category}</span>
                     <div className="flex items-center gap-1 text-saffron">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-xs font-bold">{product.rating}</span>
                     </div>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-saffron transition-colors mb-1 truncate">
                    {product.name}
                  </h3>
                  <h4 className="font-bangla text-sm text-gray-500 mb-4 line-clamp-1">{product.banglaName}</h4>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="font-serif text-lg font-medium text-charcoal">৳ {product.price}</span>
                    <span className="text-xs text-gray-400">{product.weight}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section - Bashundhara R/A */}
      <section className="py-0 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[500px]">
          {/* Content */}
          <div className="bg-charcoal text-white flex flex-col justify-center px-8 md:px-12 lg:px-24 py-16 lg:py-0 order-2 lg:order-1">
            <span className="text-saffron font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Delivery Zones</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Delivering Exclusively to Bashundhara R/A</h2>
            <p className="text-gray-400 leading-relaxed mb-8 font-light">
              We ensure our cold chain remains unbroken. Currently serving all blocks of Bashundhara Residential Area and select parts of Gulshan.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-saffron flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Delivery Time</h4>
                  <p className="text-gray-400 text-xs">11:00 AM - 9:00 PM (Daily)</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Pick-up Point</h4>
                  <p className="text-gray-400 text-xs">Haveli Complex, Bashundhara Main Gate</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Embed */}
          <div className="w-full h-[400px] lg:h-full bg-gray-200 relative order-1 lg:order-2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.700312386266!2d90.4190116!3d23.8195822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0xb33324832741e607!2sBashundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Delivery Map"
            ></iframe>
            {/* Overlay to blend map slightly */}
            <div className="absolute inset-0 bg-charcoal/10 pointer-events-none mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Philosophy / Ingredients */}
      <section className="py-24 bg-offwhite-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
           <ChefHat className="w-12 h-12 text-saffron mx-auto mb-6" />
           <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-8 leading-snug">"Good food takes time. We spend the hours so you don't have to."</h2>
           <p className="text-gray-500 italic mb-12">- The Primal Kitchen Team</p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm text-2xl animate-pulse-fast">🥩</div>
                <span className="text-xs font-bold uppercase tracking-widest text-charcoal">Halal Meat</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm text-2xl animate-pulse-fast [animation-delay:200ms]">🧂</div>
                <span className="text-xs font-bold uppercase tracking-widest text-charcoal">Premium Spices</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm text-2xl animate-pulse-fast [animation-delay:400ms]">🔥</div>
                <span className="text-xs font-bold uppercase tracking-widest text-charcoal">Slow Cooked</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm text-2xl animate-pulse-fast [animation-delay:600ms]">❄️</div>
                <span className="text-xs font-bold uppercase tracking-widest text-charcoal">Flash Frozen</span>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};