import { ImageWithFallback } from './figma/ImageWithFallback';
import { Plus } from 'lucide-react';
import { useState } from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Gourmet Burger',
    description: 'Premium beef patty with artisan toppings',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1666304328802-671b1e9022b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBkaW5uZXJ8ZW58MXx8fHwxNzc0NTU3NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Main'
  },
  {
    id: 2,
    name: 'Truffle Pasta',
    description: 'Fresh pasta with truffle cream sauce',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1711539137930-3fa2ae6cec60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzc0NTYxMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Main'
  },
  {
    id: 3,
    name: 'Artisan Pizza',
    description: 'Wood-fired pizza with fresh ingredients',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1720657632402-7d9db37b8aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBpenphJTIwY2xvc2V1cHxlbnwxfHx8fDE3NzQ2NTgyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Main'
  },
  {
    id: 4,
    name: 'Sushi Platter',
    description: 'Assorted premium sushi selection',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzc0NjIwOTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Main'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZSUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3NzQ1NTEyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Dessert'
  },
  {
    id: 6,
    name: 'Grilled Steak',
    description: 'Premium aged beef with seasonal vegetables',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1666304328802-671b1e9022b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBkaW5uZXJ8ZW58MXx8fHwxNzc0NTU3NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Main'
  },
];

export function MenuSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="menu" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4 text-white">
            Our <span className="text-red-500">Menu</span>
          </h2>
          <p className="text-xl text-gray-400">
            Crafted with passion, served with excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {hoveredId === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl mb-2 text-white">{item.name}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-3xl text-red-500">${item.price}</span>
                  <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
