'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-amber-950 text-amber-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-400 text-black px-4 py-2 rounded z-[100] font-bold">
        Skip to main content
      </a>

      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-amber-950/95 backdrop-blur-md border-b border-current/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl tracking-tight font-bold">SwiftMove</h1>
              <p className="text-xs text-amber-300 tracking-wider uppercase">Est. 2015</p>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollTo('services')} className="text-sm text-amber-300 hover:text-amber-400 transition-colors">Services</button>
              <button onClick={() => scrollTo('team')} className="text-sm text-amber-300 hover:text-amber-400 transition-colors">Team</button>
              <button onClick={() => scrollTo('faq')} className="text-sm text-amber-300 hover:text-amber-400 transition-colors">FAQ</button>
              <button onClick={() => scrollTo('contact')} className="text-sm text-amber-300 hover:text-amber-400 transition-colors">Contact</button>
              <button onClick={() => scrollTo('contact')} className="bg-amber-400 text-black px-6 py-2.5 text-sm font-medium rounded-full hover:opacity-90 transition-opacity">
                Get Quote
              </button>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
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
            <div className="md:hidden bg-amber-950 border-t border-current/10 px-6 py-4 space-y-1">
              <button onClick={() => scrollTo('services')} className="block w-full text-left px-4 py-3 text-amber-300 hover:text-amber-400">Services</button>
              <button onClick={() => scrollTo('team')} className="block w-full text-left px-4 py-3 text-amber-300 hover:text-amber-400">Team</button>
              <button onClick={() => scrollTo('faq')} className="block w-full text-left px-4 py-3 text-amber-300 hover:text-amber-400">FAQ</button>
              <button onClick={() => scrollTo('contact')} className="block w-full text-left px-4 py-3 text-amber-300 hover:text-amber-400">Contact</button>
            </div>
          )}
        </nav>
      </header>

      <main id="main" role="main">
        <section className="pt-28 pb-20 md:pb-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-amber-400 text-sm tracking-widest uppercase mb-6">Est. 2015</p>
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-8 whitespace-pre-line">
                Moving made
simple.
              </h2>
              <p className="text-xl text-amber-300 max-w-xl leading-relaxed mb-10">
                Professional moving services with careful handling, transparent pricing, and on-time delivery guaranteed.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo('contact')} className="bg-amber-400 text-black px-8 py-4 text-lg font-medium rounded-full hover:opacity-90 transition-opacity">
                  Get Quote
                </button>
                <button onClick={() => scrollTo('services')} className="border-2 border-current/20 px-8 py-4 text-lg font-medium rounded-full hover:bg-current/5 transition-colors">
                  Our Services
                </button>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-amber-400">10K+</div><div className="text-sm text-amber-300 mt-1">Moves completed</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-amber-400">On-Time</div><div className="text-sm text-amber-300 mt-1">Guaranteed</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-amber-400">Licensed</div><div className="text-sm text-amber-300 mt-1">USDOT carrier</div></div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-amber-400 text-sm tracking-widest uppercase mb-3">What We Offer</p>
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold">Our Services</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-amber-900 border border-amber-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3 text-amber-50">Local Moving</h3>
              <p className="text-amber-300 leading-relaxed">Same-city residential moves.</p></article>
            <article className="bg-amber-900 border border-amber-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-xl font-bold mb-3 text-amber-50">Long Distance</h3>
              <p className="text-amber-300 leading-relaxed">Interstate moves nationwide.</p></article>
            <article className="bg-amber-900 border border-amber-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-3 text-amber-50">Packing</h3>
              <p className="text-amber-300 leading-relaxed">Full and partial packing services.</p></article>
            <article className="bg-amber-900 border border-amber-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3 text-amber-50">Storage</h3>
              <p className="text-amber-300 leading-relaxed">Climate-controlled storage units.</p></article>
            <article className="bg-amber-900 border border-amber-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-3 text-amber-50">Commercial</h3>
              <p className="text-amber-300 leading-relaxed">Office and business relocations.</p></article>
            <article className="bg-amber-900 border border-amber-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🎹</div>
              <h3 className="text-xl font-bold mb-3 text-amber-50">Specialty</h3>
              <p className="text-amber-300 leading-relaxed">Piano, art, antiques handling.</p></article>
            </div>
          </div>
        </section>

        <section id="team" className="py-24 bg-amber-900" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-amber-400 text-sm tracking-widest uppercase mb-3">Our Team</p>
              <h2 id="team-heading" className="text-4xl md:text-5xl font-bold">Meet the experts</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-amber-900 border border-amber-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-400/20 flex items-center justify-center text-2xl font-bold text-amber-400">TT</div>
              <h3 className="font-bold text-amber-50">Tom Torres</h3><p className="text-sm text-amber-400">Operations Director</p><p className="text-sm text-amber-300 mt-1">15yr moving</p></div>
            <div className="bg-amber-900 border border-amber-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-400/20 flex items-center justify-center text-2xl font-bold text-amber-400">SK</div>
              <h3 className="font-bold text-amber-50">Sarah Kim</h3><p className="text-sm text-amber-400">Move Coordinator</p><p className="text-sm text-amber-300 mt-1">Customer service pro</p></div>
            <div className="bg-amber-900 border border-amber-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-400/20 flex items-center justify-center text-2xl font-bold text-amber-400">CR</div>
              <h3 className="font-bold text-amber-50">Carlos Rivera</h3><p className="text-sm text-amber-400">Lead Mover</p><p className="text-sm text-amber-300 mt-1">Furniture specialist</p></div>
            <div className="bg-amber-900 border border-amber-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-400/20 flex items-center justify-center text-2xl font-bold text-amber-400">EP</div>
              <h3 className="font-bold text-amber-50">Emily Park</h3><p className="text-sm text-amber-400">Logistics</p><p className="text-sm text-amber-300 mt-1">Route optimization</p></div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-amber-400 text-sm tracking-widest uppercase mb-3">Questions</p>
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold">FAQ</h2>
            </div>
            <div className="space-y-4">
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none text-amber-50">How far ahead?<span className="ml-4 text-amber-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-amber-300 text-sm leading-relaxed">2-4 weeks recommended, rush available.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none text-amber-50">Insurance?<span className="ml-4 text-amber-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-amber-300 text-sm leading-relaxed">Full value protection included.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none text-amber-50">Packing?<span className="ml-4 text-amber-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-amber-300 text-sm leading-relaxed">Full packing available, or we supply boxes.</p></details>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-amber-900" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-amber-400 text-sm tracking-widest uppercase mb-3">Get In Touch</p>
                <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">Get Quote</h2>
                <div className="space-y-6 text-amber-300">
                  <div><div className="font-bold text-amber-50">Phone</div><a href="tel:(555) 901-2347" className="hover:text-amber-400">(555) 901-2347</a></div>
                  <div><div className="font-bold text-amber-50">Address</div><p>Serving Metro Chicago, IL</p></div>
                  <div><div className="font-bold text-amber-50">Hours</div><p>Mon–Sat 7 AM – 8 PM</p></div>
                </div>
              </div>
              <div>
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }} aria-label="Contact form">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input id="name" type="text" placeholder="John Smith" required className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-current/20" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input id="email" type="email" placeholder="john@example.com" required className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-current/20" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea id="message" rows={4} placeholder="How can we help?" required className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-current/20 resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-amber-400 text-black py-4 rounded-xl font-medium hover:opacity-90 transition-opacity">
                    {submitted ? "Sent! We'll be in touch." : "Get Quote"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-amber-900 border-t border-current/10 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-bold text-lg">SwiftMove</div>
            <p className="text-sm text-amber-300">Est. 2015</p>
          </div>
          <p className="text-sm text-amber-300">&copy; 2026 SwiftMove. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
