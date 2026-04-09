'use client';
import { useState } from 'react';
export default function Home() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="min-h-screen bg-amber-950 text-amber-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-400 text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      {/* EMERGENCY BANNER */}
      <div className="bg-amber-400 text-white py-2 text-center text-sm font-bold uppercase tracking-wider">24/7 Emergency Service Available — Call Now</div>
      <nav className="sticky top-0 z-50 bg-amber-950/95 backdrop-blur-md border-b border-current/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-2xl font-black uppercase">SwiftMove</h1><p className="text-xs text-amber-300 uppercase tracking-wider">Est. 2015</p></div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollTo('services')} className="text-sm font-bold text-amber-300 hover:text-amber-400 uppercase">Services</button>
            <button onClick={() => scrollTo('book')} className="bg-amber-400 text-white px-6 py-2 font-bold uppercase">Get Quote</button>
          </div>
        </div>
      </nav>
      <main id="main" role="main">
        {/* HERO with inline booking form */}
        <section className="pt-4">
          <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] mb-6 whitespace-pre-line">Moving made
simple.</h2>
              <p className="text-xl text-amber-300 mb-8">Professional moving services with careful handling, transparent pricing, and on-time delivery guaranteed.</p>
              <div className="grid grid-cols-3 gap-4 text-center">
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-amber-400">10K+</div><div className="text-sm text-amber-300 mt-1">Moves completed</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-amber-400">On-Time</div><div className="text-sm text-amber-300 mt-1">Guaranteed</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-amber-400">Licensed</div><div className="text-sm text-amber-300 mt-1">USDOT carrier</div></div>
              </div>
            </div>
            <div>
              <form id="book" className="bg-amber-900 rounded-xl p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-2xl font-bold mb-4">Get Quote</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-bold mb-1">Name</label><input type="text" placeholder="Your name" className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent" /></div>
                  <div><label className="block text-sm font-bold mb-1">Phone</label><input type="tel" placeholder="(555) 000-0000" className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent" /></div>
                </div>
                <div><label className="block text-sm font-bold mb-1">Service</label>
                  <select className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent">
                    <option>Select service</option>                    <option>Local Moving</option>
                    <option>Long Distance</option>
                    <option>Packing</option>
                    <option>Storage</option>
                    <option>Commercial</option>
                    <option>Specialty</option>
                  </select>
                </div>
                <div><label className="block text-sm font-bold mb-1">Describe the issue</label><textarea rows={3} placeholder="What's going on?" className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent resize-none" /></div>
                <button type="submit" className="w-full bg-amber-400 text-white py-4 rounded-lg font-black uppercase text-lg">Get Quote</button>
              </form>
            </div>
          </div>
        </section>
        {/* SERVICES with pricing */}
        <section id="services" className="py-24 bg-amber-900" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="services-heading" className="text-4xl font-black uppercase">Services & Pricing</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-amber-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🏠</div>
              <div><h3 className="font-bold text-lg">Local Moving</h3><p className="text-sm text-amber-300">Same-city residential moves.</p></div>
            </div>
            <div className="bg-amber-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🚛</div>
              <div><h3 className="font-bold text-lg">Long Distance</h3><p className="text-sm text-amber-300">Interstate moves nationwide.</p></div>
            </div>
            <div className="bg-amber-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">📦</div>
              <div><h3 className="font-bold text-lg">Packing</h3><p className="text-sm text-amber-300">Full and partial packing services.</p></div>
            </div>
            <div className="bg-amber-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🏗️</div>
              <div><h3 className="font-bold text-lg">Storage</h3><p className="text-sm text-amber-300">Climate-controlled storage units.</p></div>
            </div>
            <div className="bg-amber-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🏢</div>
              <div><h3 className="font-bold text-lg">Commercial</h3><p className="text-sm text-amber-300">Office and business relocations.</p></div>
            </div>
            <div className="bg-amber-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🎹</div>
              <div><h3 className="font-bold text-lg">Specialty</h3><p className="text-sm text-amber-300">Piano, art, antiques handling.</p></div>
            </div>
            </div>
          </div>
        </section>
        {/* TEAM */}
        <section className="py-24" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="team-heading" className="text-4xl font-black uppercase">Our Crew</h2></div>
            <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-amber-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-400/20 flex items-center justify-center text-2xl font-bold text-amber-400">TT</div>
              <h3 className="font-bold">Tom Torres</h3><p className="text-sm text-amber-400">Operations Director</p><p className="text-sm text-amber-300 mt-1">15yr moving</p></div>
            <div className="bg-amber-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-400/20 flex items-center justify-center text-2xl font-bold text-amber-400">SK</div>
              <h3 className="font-bold">Sarah Kim</h3><p className="text-sm text-amber-400">Move Coordinator</p><p className="text-sm text-amber-300 mt-1">Customer service pro</p></div>
            <div className="bg-amber-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-400/20 flex items-center justify-center text-2xl font-bold text-amber-400">CR</div>
              <h3 className="font-bold">Carlos Rivera</h3><p className="text-sm text-amber-400">Lead Mover</p><p className="text-sm text-amber-300 mt-1">Furniture specialist</p></div>
            <div className="bg-amber-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-400/20 flex items-center justify-center text-2xl font-bold text-amber-400">EP</div>
              <h3 className="font-bold">Emily Park</h3><p className="text-sm text-amber-400">Logistics</p><p className="text-sm text-amber-300 mt-1">Route optimization</p></div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="py-24 bg-amber-900" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12"><h2 id="faq-heading" className="text-4xl font-black uppercase">FAQ</h2></div>
            <div className="space-y-4">            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">How far ahead?<span className="ml-4 text-amber-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-amber-300 text-sm leading-relaxed">2-4 weeks recommended, rush available.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Insurance?<span className="ml-4 text-amber-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-amber-300 text-sm leading-relaxed">Full value protection included.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Packing?<span className="ml-4 text-amber-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-amber-300 text-sm leading-relaxed">Full packing available, or we supply boxes.</p></details></div>
          </div>
        </section>
        {/* CONTACT INFO */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="bg-amber-900 rounded-xl p-8 text-center"><div className="text-3xl mb-3">📞</div><div className="font-bold text-lg mb-1">Call Us</div><a href="tel:(555) 901-2347" className="text-amber-400">(555) 901-2347</a></div>
            <div className="bg-amber-900 rounded-xl p-8 text-center"><div className="text-3xl mb-3">📍</div><div className="font-bold text-lg mb-1">Visit Us</div><p className="text-amber-300">Serving Metro Chicago, IL</p></div>
            <div className="bg-amber-900 rounded-xl p-8 text-center"><div className="text-3xl mb-3">⏰</div><div className="font-bold text-lg mb-1">Hours</div><p className="text-amber-300">Mon–Sat 7 AM – 8 PM</p></div>
          </div>
        </section>
      </main>
      <footer className="bg-amber-900 py-8 text-center text-sm text-amber-300">&copy; 2026 SwiftMove</footer>
    </div>
  );
}
