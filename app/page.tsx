'use client';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-600 text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0a09]/95 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-xl font-black uppercase text-amber-500">SwiftMove</h1><p className="text-[10px] tracking-[0.2em] text-stone-500 uppercase">Professional Moving — Chicago</p></div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-sm text-stone-400 hover:text-amber-500">Services</button>
            <button onClick={() => scrollTo('contact')} className="text-sm text-stone-400 hover:text-amber-500">Contact</button>
            <button onClick={() => scrollTo('contact')} className="bg-amber-600 text-white px-5 py-2.5 text-sm font-bold rounded-full hover:bg-amber-500">Get Quote</button>
          </div>
        </div>
      </nav>

      <main id="main">
        <section className="pt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 text-center">
            <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">Licensed & Insured — Est. 2015</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] mb-6">Moving made<br /><span className="text-amber-500">simple.</span></h2>
            <p className="text-xl text-stone-400 max-w-xl mx-auto mb-10">Professional moving with careful handling, transparent pricing, and on-time delivery guaranteed.</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => scrollTo('contact')} className="bg-amber-600 text-white px-8 py-4 text-lg font-bold rounded-full hover:bg-amber-500">Get Free Quote</button>
              <button onClick={() => scrollTo('services')} className="border-2 border-stone-600 text-stone-300 px-8 py-4 text-lg rounded-full hover:border-amber-500">Our Services</button>
            </div>
          </div>
        </section>

        <section className="reveal py-8 border-y border-stone-800">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
            <div><div className="text-3xl font-black text-amber-500">10K+</div><div className="text-xs text-stone-500 uppercase">Moves Done</div></div>
            <div><div className="text-3xl font-black text-amber-500">On-Time</div><div className="text-xs text-stone-500 uppercase">Guaranteed</div></div>
            <div><div className="text-3xl font-black text-amber-500">Licensed</div><div className="text-xs text-stone-500 uppercase">USDOT Carrier</div></div>
          </div>
        </section>

        <section id="services" className="reveal py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="services-heading" className="text-4xl font-black uppercase">Services</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Local Moving', desc: 'Same-city residential moves. Apartment, condo, house.', icon: '🏠', price: 'From $149/hr' },
                { name: 'Long Distance', desc: 'Interstate moves nationwide. Full-service.', icon: '🚛', price: 'Custom quote' },
                { name: 'Packing', desc: 'Full and partial packing with quality materials.', icon: '📦', price: 'From $25/box' },
                { name: 'Storage', desc: 'Climate-controlled storage units. Short or long term.', icon: '🏗️', price: 'From $99/mo' },
                { name: 'Commercial', desc: 'Office and business relocations. Minimal downtime.', icon: '🏢', price: 'Custom quote' },
                { name: 'Specialty', desc: 'Piano, art, antiques, and fragile items.', icon: '🎹', price: 'From $199' },
              ].map((s, i) => (
                <div key={i} className="border border-stone-800 rounded-lg p-8 hover:border-amber-500/40 transition-colors">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-black uppercase mb-2">{s.name}</h3>
                  <p className="text-stone-400 text-sm mb-3">{s.desc}</p>
                  <div className="text-amber-500 font-bold">{s.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="reveal py-24 bg-stone-900/30" aria-labelledby="contact-heading">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 id="contact-heading" className="text-4xl font-black uppercase mb-4">Get a Free Quote</h2>
            <p className="text-stone-400 mb-10">We respond within 2 hours. No obligation, no hidden fees.</p>
            <form className="border border-stone-800 rounded-xl p-8 space-y-5 text-left" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000); }}>
              <div className="grid grid-cols-2 gap-5">
                <div><label className="block text-sm mb-2 text-stone-400">Name</label><input type="text" placeholder="Your name" required className="w-full border border-stone-700 bg-transparent px-4 py-3 rounded-lg placeholder:text-stone-600 focus:border-amber-500 focus:outline-none" /></div>
                <div><label className="block text-sm mb-2 text-stone-400">Phone</label><input type="tel" placeholder="(555) 000-0000" required className="w-full border border-stone-700 bg-transparent px-4 py-3 rounded-lg placeholder:text-stone-600 focus:border-amber-500 focus:outline-none" /></div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div><label className="block text-sm mb-2 text-stone-400">Moving From</label><input type="text" placeholder="City, State" required className="w-full border border-stone-700 bg-transparent px-4 py-3 rounded-lg placeholder:text-stone-600 focus:border-amber-500 focus:outline-none" /></div>
                <div><label className="block text-sm mb-2 text-stone-400">Moving To</label><input type="text" placeholder="City, State" required className="w-full border border-stone-700 bg-transparent px-4 py-3 rounded-lg placeholder:text-stone-600 focus:border-amber-500 focus:outline-none" /></div>
              </div>
              <div><label className="block text-sm mb-2 text-stone-400">Move Type</label>
                <select className="w-full border border-stone-700 bg-[#0c0a09] px-4 py-3 rounded-lg focus:border-amber-500 focus:outline-none text-stone-100">
                  <option>Local Move</option><option>Long Distance</option><option>Commercial</option><option>Storage Needed</option>
                </select>
              </div>
              <button type="submit" disabled={submitted} className="w-full bg-amber-600 text-white py-4 rounded-lg font-black uppercase hover:bg-amber-500 transition-colors disabled:opacity-60">{submitted ? '✓ Quote Sent! We\'ll call within 2 hours' : 'Get Free Quote'}</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-800 py-8"><div className="max-w-6xl mx-auto px-6 text-center text-stone-600 text-sm">© {new Date().getFullYear()} SwiftMove. Chicago, IL. Licensed USDOT Carrier.</div></footer>
    </div>
  );
}
