import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, ChevronDown, ChevronUp, Star, Heart, Truck, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ImageWithLoader } from '../components/ImageWithLoader';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const [product, setProduct] = useState(PRODUCTS.find(p => p.id === id));
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isAdded, setIsAdded] = useState(false);
  
  // Review Form State
  const [userRating, setUserRating] = useState(5);
  const [userComment, setUserComment] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setProduct(PRODUCTS.find(p => p.id === id));
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your review! It has been submitted for moderation.');
    setUserComment('');
    setUserName('');
    setUserRating(5);
  };

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-white min-h-screen pt-8 pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-400 hover:text-charcoal transition-colors mb-8 text-xs uppercase tracking-widest font-bold group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          {/* Image Section */}
          <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm shadow-sm lg:sticky lg:top-32">
            <ImageWithLoader 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
            />
            <button 
              onClick={toggleWishlist}
              className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-20"
            >
              <Heart 
                className={`w-6 h-6 ${isInWishlist(product.id) ? 'fill-saffron text-saffron' : 'text-gray-400'}`} 
              />
            </button>
          </div>

          {/* Details Section */}
          <div className="pt-4">
            <div className="flex items-center gap-4 mb-4">
               <div className="flex items-center gap-1 text-saffron">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200 fill-none'}`} />
                 ))}
                 <span className="text-xs font-bold text-gray-400 ml-2 underline decoration-gray-300 underline-offset-4">{product.reviews.length} Reviews</span>
               </div>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-2 font-bold tracking-tight">{product.name}</h1>
            <h2 className="font-bangla text-2xl text-gray-400 mb-8">{product.banglaName}</h2>
            
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-3xl font-medium text-charcoal">৳ {product.price}</span>
              <span className="text-sm text-gray-400 font-medium">/ {product.weight} pack</span>
            </div>

            <div className="border-t border-b border-gray-100 py-6 mb-8 grid grid-cols-2 gap-4">
               <div className="flex items-center gap-3 text-gray-500">
                 <Truck className="w-5 h-5 text-gray-400" />
                 <span className="text-xs font-bold uppercase tracking-wide">Next Day Delivery</span>
               </div>
               <div className="flex items-center gap-3 text-gray-500">
                 <ShieldCheck className="w-5 h-5 text-gray-400" />
                 <span className="text-xs font-bold uppercase tracking-wide">100% Halal</span>
               </div>
            </div>
            
            <div className="prose prose-stone text-gray-600 mb-10 leading-relaxed font-bangla text-lg">
              <p>{product.description}</p>
            </div>

            <div className="mb-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal mb-4">Flavor Profile</h3>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, idx) => (
                  <span key={idx} className="text-xs font-bold bg-gray-50 px-4 py-2 rounded-full border border-gray-100 text-charcoal uppercase tracking-wide">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <button 
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-full py-5 px-6 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                  isAdded 
                    ? 'bg-green-700 text-white' 
                    : 'bg-charcoal text-white hover:bg-saffron'
                }`}
              >
                {isAdded ? (
                  'Added to Cart'
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                  </>
                )}
              </button>
            </div>

            {/* Accordion / FAQ */}
            <div className="space-y-0 border-t border-gray-100">
              {product.faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex justify-between items-center w-full text-left py-5 focus:outline-none group"
                  >
                    <span className="text-sm font-bold uppercase tracking-wide text-charcoal group-hover:text-saffron transition-colors">{faq.question}</span>
                    {openFaq === index ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </button>
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      openFaq === index ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base font-bangla text-gray-500 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-gray-100 pt-20 mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl font-bold mb-10 text-center">Customer Reviews</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
               <div className="md:col-span-1 bg-gray-50 p-8 text-center rounded-lg border border-gray-100 shadow-sm">
                  <div className="text-5xl font-bold text-charcoal mb-2">{product.rating}</div>
                  <div className="flex justify-center text-saffron mb-2">
                     <Star className="w-5 h-5 fill-current" />
                     <Star className="w-5 h-5 fill-current" />
                     <Star className="w-5 h-5 fill-current" />
                     <Star className="w-5 h-5 fill-current" />
                     <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Based on {product.reviews.length} Reviews</p>
               </div>
               
               <div className="md:col-span-2">
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Write a Review</h4>
                  <form onSubmit={handleReviewSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                          required
                          type="text"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          className="w-full p-3 bg-white border border-gray-200 focus:border-saffron outline-none text-sm transition-colors"
                          placeholder="Your Name"
                       />
                       <div className="flex items-center gap-1 p-3 border border-gray-200 bg-white">
                        <span className="text-xs text-gray-500 mr-2">Rating:</span>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setUserRating(star)}
                            className="focus:outline-none"
                          >
                            <Star 
                              className={`w-4 h-4 ${star <= userRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <textarea 
                        required
                        value={userComment}
                        onChange={(e) => setUserComment(e.target.value)}
                        className="w-full p-3 bg-white border border-gray-200 focus:border-saffron outline-none text-sm transition-colors"
                        rows={3}
                        placeholder="Share your experience..."
                     />
                    <button type="submit" className="bg-charcoal text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                      Submit Review
                    </button>
                  </form>
               </div>
            </div>

            {/* Review List */}
            <div className="space-y-8">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-8 last:border-0">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-saffron text-white rounded-full flex items-center justify-center font-bold text-xs">
                        {review.user.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-charcoal">{review.user}</p>
                        <p className="text-[10px] uppercase tracking-wider text-gray-400">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex text-saffron">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-gray-200 fill-none'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-11">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="border-t border-gray-100 pt-16">
           <h3 className="font-serif text-2xl font-bold mb-8">You Might Also Like</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(rel => (
                 <Link to={`/product/${rel.id}`} key={rel.id} className="group block">
                    <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4 rounded-sm">
                       <ImageWithLoader 
                          src={rel.image} 
                          alt={rel.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                          containerClassName="w-full h-full"
                       />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-charcoal group-hover:text-saffron transition-colors">{rel.name}</h4>
                    <span className="text-sm text-gray-500">৳ {rel.price}</span>
                 </Link>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};