import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChefHat, Award, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-red-500/30">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1722152667178-be659e54bffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaGVmJTIwY29va2luZ3xlbnwxfHx8fDE3NzQ1Nzk0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional chef cooking"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-red-500 text-white p-6 rounded-full shadow-2xl">
              <div className="text-center">
                <div className="text-4xl">15+</div>
                <div className="text-sm">Years</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-5xl md:text-6xl mb-6 text-white">
              Our <span className="text-red-500">Story</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Founded in 2009, FlavorHub began with a simple mission: to bring restaurant-quality meals directly to your door. Our team of passionate chefs combines traditional techniques with modern innovation to create unforgettable dining experiences.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Every dish is prepared with the finest ingredients, sourced locally whenever possible. We believe that great food brings people together, and we're committed to serving excellence in every bite.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-red-500 transition-colors">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <ChefHat className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white text-lg">Expert Chefs</h4>
                  <p className="text-gray-400">Michelin-trained culinary masters</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-red-500 transition-colors">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <Award className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white text-lg">Award Winning</h4>
                  <p className="text-gray-400">Recognized for culinary excellence</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-red-500 transition-colors">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white text-lg">Made with Love</h4>
                  <p className="text-gray-400">Quality ingredients, careful preparation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
