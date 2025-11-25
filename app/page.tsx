'use client';

import { Menu, X, MapPin, Clock, Phone } from 'lucide-react';
import { useState } from 'react';
import despia from 'despia-native';

export default function RestaurantLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTakeSs = () => {
    despia('lighthaptic://');
    console.log('first');
    despia('takescreenshot://');
    console.log('second');
  };

  return (
    <div className="w-full bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-amber-950 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Savour</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-amber-200 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="hover:text-amber-200 transition"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-amber-200 transition"
            >
              Contact
            </button>
          </div>

          {/* Book Button */}
          <button className="hidden md:block bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-lg font-semibold transition">
            Book a Table
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-amber-900 px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left hover:text-amber-200 py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left hover:text-amber-200 py-2"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left hover:text-amber-200 py-2"
            >
              Contact
            </button>
            <button className="w-full bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-lg font-semibold transition">
              Book a Table
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen md:h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/placeholder.svg?height=1080&width=1920&query=elegant%20upscale%20restaurant%20interior%20with%20warm%20lighting)',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 md:px-8">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-pretty leading-tight">
            The Art of Dining
          </h2>
          <p className="text-lg md:text-2xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Experience culinary excellence in an atmosphere of refined elegance
          </p>
          <div className="flex items-center gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105">
              Reserve Your Seat
            </button>
            <button
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105"
              onClick={handleTakeSs}
            >
              Take Screenshot
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-amber-950">
              Welcome to Savour
            </h3>
            <p className="text-foreground text-lg leading-relaxed mb-4">
              Founded in 2015, Savour has become a culinary destination for
              those seeking an unforgettable dining experience. Our chef-driven
              menu celebrates seasonal ingredients and time-honored techniques
              with modern innovation.
            </p>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Every dish tells a story, every meal creates a memory. We believe
              dining is more than sustenance—it's an art form, a celebration, a
              moment to cherish.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition">
              Learn More
            </button>
          </div>

          <div
            className="h-96 md:h-full rounded-lg overflow-hidden shadow-xl"
            style={{
              backgroundImage:
                'url(/placeholder.svg?height=600&width=500&query=gourmet%20plated%20fine%20dining%20dish)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="py-16 md:py-24 px-4 md:px-8 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              Signature Dishes
            </h3>
            <p className="text-lg text-amber-900">
              Crafted with precision and passion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Pan-Seared Duck Breast',
                description:
                  'With cherry gastrique, polenta cake, and seasonal vegetables',
                image: 'gourmet%20duck%20breast%20fine%20dining',
              },
              {
                name: 'Wild Mushroom Risotto',
                description:
                  'Truffle oil, aged parmesan, and fresh herb garnish',
                image: 'creamy%20mushroom%20risotto%20luxury%20plating',
              },
              {
                name: 'Atlantic Lobster Tail',
                description: 'Drawn butter, lemon foam, and microgreens',
                image: 'elegant%20lobster%20tail%20gourmet%20presentation',
              },
            ].map((dish, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div
                  className="h-48 bg-gray-200"
                  style={{
                    backgroundImage: `url(/placeholder.svg?height=300&width=400&query=${dish.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-amber-950 mb-2">
                    {dish.name}
                  </h4>
                  <p className="text-amber-800">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="h-96 md:h-full rounded-lg overflow-hidden shadow-xl"
            style={{
              backgroundImage:
                'url(/placeholder.svg?height=600&width=500&query=warm%20ambient%20lighting%20restaurant%20interior)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-amber-950">
              An Atmosphere of Elegance
            </h3>
            <p className="text-foreground text-lg leading-relaxed mb-4">
              Step into our beautifully designed dining space, where warm
              lighting, rich wood accents, and carefully curated artwork create
              an intimate yet sophisticated ambiance perfect for any occasion.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              Whether celebrating a milestone or enjoying an evening with loved
              ones, our restaurant provides the perfect setting for your most
              memorable moments.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Info Section */}
      <section
        id="contact"
        className="py-16 md:py-24 px-4 md:px-8 bg-amber-950 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Plan Your Visit
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <MapPin size={32} className="mx-auto mb-4 text-amber-400" />
              <h4 className="font-bold text-lg mb-2">Location</h4>
              <p>
                123 Culinary Lane
                <br />
                Gourmet City, GC 12345
              </p>
            </div>

            <div className="text-center">
              <Clock size={32} className="mx-auto mb-4 text-amber-400" />
              <h4 className="font-bold text-lg mb-2">Hours</h4>
              <p>
                Tue - Thu: 5:00 PM - 10:00 PM
                <br />
                Fri - Sat: 5:00 PM - 11:00 PM
                <br />
                Sun: 5:00 PM - 9:00 PM
              </p>
            </div>

            <div className="text-center">
              <Phone size={32} className="mx-auto mb-4 text-amber-400" />
              <h4 className="font-bold text-lg mb-2">Contact</h4>
              <p>
                +1 (555) 123-4567
                <br />
                <a
                  href="mailto:hello@savour.com"
                  className="hover:text-amber-300"
                >
                  hello@savour.com
                </a>
              </p>
            </div>
          </div>

          <div className="bg-amber-900 rounded-lg p-8 text-center">
            <h4 className="text-2xl font-bold mb-4">Make a Reservation</h4>
            <p className="mb-6 text-amber-100">
              Reserve your table today and experience culinary excellence
            </p>
            <button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2025 Savour Restaurant. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
