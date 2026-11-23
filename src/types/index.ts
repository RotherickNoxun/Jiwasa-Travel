export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  category: 'conservacion' | 'montana' | 'biodiversidad' | 'cultural';
  duration: string;
  difficulty: 'Fácil' | 'Moderado' | 'Desafiante' | 'Para toda la familia';
  location: string;
  image: string;
  description: string;
  highlights: string[];
  includes: string[];
  featured?: boolean;
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  altitude: string;
  image: string;
  description: string;
  attractions: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  country: string;
  avatar?: string;
  rating: number;
  date: string;
  experience: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  experienceInterest: string;
  travelDate: string;
  groupSize: string;
  message: string;
}
