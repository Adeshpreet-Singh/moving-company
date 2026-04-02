'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const services = [
    { title: 'Local Moving', desc: 'Within city and surrounding areas', icon: '\uD83C\uDFE0', price: 'From $99/hr' },
    { title: 'Long Distance', desc: 'State-to-state relocations', icon: '\uD83D\uDE9A', price: 'Custom Quote' },
    { title: 'Commercial Moving', desc: 'Office and business relocations', icon: '\uD83C\uDFE2', price: 'Free Estimate' },
    { title: 'Packing Services', desc: 'Professional packing and unpacking', icon: '\uD83D\uDCE6', price: 'From $49/hr' },
  ];

  return (
    <div className="bg-blue-50 text-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <div>
              <h1 className="text-lg font-bold text-blue-900">MoveMaster</h1>
              <p className="text-[9px] text-blue-600 tracking-wider">PROFESSIONAL MOVERS</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
              Get Free Quote
            </button>
          </div>
          <button className="md:hidden text-blue-600" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t p-6">
            {['Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-full font-medium">
              Get Free Quote
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-200/50 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-blue-700 text-sm">Now Booking for Summer Moves!</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-blue-900">
                Moving Made
                <br />
                <span className="text-blue-600">Simple & Safe</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Professional moving services with care and precision. Licensed, insured, 
                and committed to making your move stress-free.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors">
                  Get Free Quote
                </button>
                <button className="border-2 border-blue-600 text-blue-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors">
                  Call Now
                </button>
              </div>
              <div className="flex items-center gap-8">
                {[
                  { num: '10K+', label: 'Moves Completed' },
                  { num: '4.9', label: 'Star Rating' },
                  { num: '15+', label: 'Years Experience' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-blue-700">{stat.num}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80"
                  alt="Moving Truck"
                  className="w-full rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-2xl px-6 py-4 shadow-lg">
                <div className="text-sm">Insured Up To</div>
                <div className="text-2xl font-bold">$50,000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm font-medium mb-4">OUR SERVICES</p>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Professional Moving Solutions</h2>
            <p className="text-gray-600 max-w-xl mx-auto">From small apartments to large offices, we handle moves of all sizes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{service.desc}</p>
                <div className="text-blue-600 font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80"
                alt="Moving Team"
                className="w-full rounded-2xl"
              />
            </div>
            <div>
              <p className="text-blue-600 text-sm font-medium mb-4">WHY CHOOSE US</p>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Trusted by Thousands</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                With over 15 years of experience, MoveMaster has been the trusted choice 
                for residential and commercial moves. Our trained professionals treat your 
                belongings with the utmost care.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '\u2705', label: 'Licensed & Insured' },
                  { icon: '\uD83D\uDC68\u200D\uD83D\uDCBC', label: 'Trained Professionals' },
                  { icon: '\uD83D\uDE9A', label: 'Modern Fleet' },
                  { icon: '\uD83D\uDCB0', label: 'Transparent Pricing' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-blue-50 rounded-xl p-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-blue-200 text-sm font-medium mb-4">GET A QUOTE</p>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Move?</h2>
              <p className="text-blue-100 mb-8">
                Get a free, no-obligation quote in minutes. Our team is ready to 
                make your move smooth and stress-free.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">Call Us 24/7</div>
                    <div className="text-blue-200">(555) 123-MOVE</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-blue-200">info@movemaster.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none"
                />
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none">
                  <option value="">Move Type</option>
                  <option>Local Moving</option>
                  <option>Long Distance</option>
                  <option>Commercial Moving</option>
                  <option>Packing Services</option>
                </select>
                <input
                  type="text"
                  placeholder="Moving From"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Moving To"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none"
                />
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-blue-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <span className="text-white">MoveMaster</span>
            </div>
            <div className="flex gap-6 text-blue-300 text-sm">
              <span>Licensed & Insured</span>
              <span>\u00B7</span>
              <span>DOT #123456</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}