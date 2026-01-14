export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  banglaName: string;
  category: 'Chicken' | 'Beef' | 'Fish' | 'Mutton';
  description: string;
  shortDescription: string;
  price: number;
  weight: string;
  image: string;
  features: string[];
  ingredients: string;
  faqs: { question: string; answer: string }[];
  reviews: Review[];
  rating: number; // Average rating
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderDetails {
  name: string;
  phone: string;
  email: string;
  address: string;
  senderNumber: string;
  transactionId: string;
}