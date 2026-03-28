import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingCart } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1561912774-79769a0a0a7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXN0YXVyYW50JTIwZm9vZCUyMGhlcm98ZW58MXx8fHwxNzc0NjU4MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Delicious gourmet food"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl mb-6 text-white">
          Flavor<span className="text-red-500">Hub</span>
        </h1>
        <p className="text-2xl md:text-3xl mb-8 text-gray-200">
          Delicious Food Delivered Fast
        </p>
        <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-12 py-4 rounded-full text-xl hover:scale-105 transition-transform duration-300 shadow-2xl flex items-center gap-3 mx-auto">
          <ShoppingCart className="w-6 h-6" />
          Order Now
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
