import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Food Blogger',
    text: 'FlavorHub has completely transformed my dinner routine. The quality is exceptional and the delivery is always on time. The truffle pasta is absolutely divine!',
    rating: 5,
    avatar: 'SJ'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Executive',
    text: 'As someone who works long hours, FlavorHub is a lifesaver. Restaurant-quality meals delivered fresh to my door. The sushi platter is my weekly treat!',
    rating: 5,
    avatar: 'MC'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Family Mom',
    text: 'My whole family loves FlavorHub! The variety is amazing and there\'s something for everyone. The kids go crazy for the artisan pizza, and I love the healthy options.',
    rating: 5,
    avatar: 'ER'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4 text-white">
            What Our <span className="text-red-500">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-400">
            Join thousands of satisfied food lovers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-12 h-12 text-red-500" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-5xl text-red-500 mb-2">50k+</div>
            <div className="text-gray-400">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-5xl text-red-500 mb-2">4.9</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-5xl text-red-500 mb-2">100+</div>
            <div className="text-gray-400">Menu Items</div>
          </div>
          <div className="text-center">
            <div className="text-5xl text-red-500 mb-2">15+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
