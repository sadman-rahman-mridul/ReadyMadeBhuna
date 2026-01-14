import { Product } from './types';

const REVIEWS_MOCK = [
  { id: 'r1', user: 'Rahim A.', rating: 5, comment: 'অসাধারণ স্বাদ! ১০ মিনিটেই রান্না শেষ।', date: '2023-10-15' },
  { id: 'r2', user: 'Sadia K.', rating: 4, comment: 'খুবই সুবিধাজনক, তবে ঝাল একটু বেশি ছিল।', date: '2023-11-02' },
  { id: 'r3', user: 'Tanvir H.', rating: 5, comment: 'Authentic taste just like homemade.', date: '2023-11-20' },
];

// Using reliable Unsplash IDs directly
export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Heritage Beef Bhuna',
    banglaName: 'হেরিটেজ বিফ ভুনা বেজ',
    category: 'Beef',
    shortDescription: 'Slow-cooked beef base for instant curry.',
    description: 'আমাদের সিগনেচার বিফ ভুনা বেজ দীর্ঘ সময় ধরে অল্প আঁচে রান্না করা হয়। এতে আছে পেঁয়াজ, রসুন এবং বিশেষ মশলার মিশ্রণ। গরুর মাংসের আসল স্বাদ পেতে এটি সেরা পছন্দ।',
    price: 1250,
    weight: '500g',
    // Rich dark beef curry
    image: 'https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?q=80&w=800&auto=format&fit=crop', 
    features: ['১০০% প্রাকৃতিক', 'কোনো প্রিজারভেটিভ নেই', 'ঘরে তৈরি স্বাদ'],
    ingredients: 'Beef Stock, Onion, Garlic, Ginger, Mustard Oil, Special Spice Mix.',
    rating: 4.8,
    reviews: REVIEWS_MOCK,
    faqs: [
      {
        question: 'এটা ফ্রিজে কতদিন থাকবে?',
        answer: 'ডিপ ফ্রিজে ৩ মাস পর্যন্ত ভালো থাকবে।'
      },
      {
        question: 'মশলা কি আলাদা দিতে হবে?',
        answer: 'না, লবণ থেকে তেল—সবই পরিমাণমতো দেওয়া আছে।'
      }
    ]
  },
  {
    id: '2',
    name: 'Nawabi Mutton Rezala',
    banglaName: 'নবাবী মাটন রেজালা বেজ',
    category: 'Mutton',
    shortDescription: 'Fragrant white yogurt and poppy seed sauce.',
    description: 'পুরান ঢাকার ঐতিহ্যবাহী স্বাদ এখন আপনার ঘরে। দই, কাজুবাদাম এবং পোস্তদানা দিয়ে তৈরি শাহী রেজালা বেজ। খাসির মাংসের সাথে এটি অসাধারণ মানানসই।',
    price: 1450,
    weight: '500g',
    // Creamy white/yellow curry
    image: 'https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?q=80&w=800&auto=format&fit=crop', 
    features: ['Premium Mutton Stock', 'Authentic Recipe', 'Mild Spice'],
    ingredients: 'Yogurt, Cashew, Poppy Seeds, Ghee, Whole Spices, Kewra Water.',
    rating: 4.5,
    reviews: [REVIEWS_MOCK[0]],
    faqs: [
      {
        question: 'এটা ফ্রিজে কতদিন থাকবে?',
        answer: 'ডিপ ফ্রিজে ৩ মাস পর্যন্ত ভালো থাকবে।'
      },
      {
        question: 'মশলা কি আলাদা দিতে হবে?',
        answer: 'না, লবণ থেকে তেল—সবই পরিমাণমতো দেওয়া আছে।'
      }
    ]
  },
  {
    id: '3',
    name: 'Smoked Chicken Roast',
    banglaName: 'স্মোকড চিকেন রোস্ট বেজ',
    category: 'Chicken',
    shortDescription: 'Classic roast gravy with a smoky twist.',
    description: 'বিয়ে বাড়ির স্বাদের চিকেন রোস্ট এখন ১০ মিনিটে। গোল্ডেন গ্রেভি এবং স্মোকি ফ্লেভার। পোলাও বা নান রুটির সাথে পরিবেশনের জন্য পারফেক্ট।',
    price: 950,
    weight: '500g',
    // Chicken roast style
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop', 
    features: ['Charcoal Smoked', 'Kid Friendly', 'Rich Gravy'],
    ingredients: 'Onion, Tomato, Yogurt, Prune (Alu Bukhara), Sugar, Salt.',
    rating: 4.9,
    reviews: [...REVIEWS_MOCK, { id: 'r4', user: 'Karim', rating: 5, comment: 'Perfect for guests!', date: '2023-12-01' }],
    faqs: [
      {
        question: 'এটা ফ্রিজে কতদিন থাকবে?',
        answer: 'ডিপ ফ্রিজে ৩ মাস পর্যন্ত ভালো থাকবে।'
      },
      {
        question: 'মশলা কি আলাদা দিতে হবে?',
        answer: 'না, লবণ থেকে তেল—সবই পরিমাণমতো দেওয়া আছে।'
      }
    ]
  },
  {
    id: '4',
    name: 'Shatkora Fish Curry',
    banglaName: 'সাতকরা ফিশ কারি বেজ',
    category: 'Fish',
    shortDescription: 'Tangy citrus based curry for fish.',
    description: 'সিলেটের সাতকরা দিয়ে তৈরি এই টক-ঝাল গ্রেভি মাছের সাথে অসাধারণ লাগে। রুই, কাতলা বা বোয়াল মাছ দিয়ে রান্না করার জন্য সেরা।',
    price: 850,
    weight: '500g',
    // Spicy fish curry
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop', 
    features: ['Exotic Citrus', 'Spicy', 'Regional Specialty'],
    ingredients: 'Shatkora Fruit, Onion, Ginger, Garlic, Chef Special Spice Mix.',
    rating: 4.7,
    reviews: [REVIEWS_MOCK[1]],
    faqs: [
      {
        question: 'এটা ফ্রিজে কতদিন থাকবে?',
        answer: 'ডিপ ফ্রিজে ৩ মাস পর্যন্ত ভালো থাকবে।'
      },
      {
        question: 'কি মাছ দিয়ে ভালো লাগবে?',
        answer: 'রুই, কাতলা বা বোয়াল মাছের সাথে সেরা।'
      }
    ]
  }
];