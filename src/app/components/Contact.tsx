import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4 text-white">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-400">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-red-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white text-xl mb-2">Location</h4>
                  <p className="text-gray-400">
                    123 Flavor Street<br />
                    Downtown District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-red-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white text-xl mb-2">Phone</h4>
                  <p className="text-gray-400">
                    +1 (555) 123-4567<br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-red-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white text-xl mb-2">Email</h4>
                  <p className="text-gray-400">
                    info@flavorhub.com<br />
                    support@flavorhub.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-red-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white text-xl mb-2">Hours</h4>
                  <p className="text-gray-400">
                    Mon - Fri: 11:00 AM - 10:00 PM<br />
                    Sat - Sun: 12:00 PM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
