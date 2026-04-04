'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); element.focus(); }
    setMenuOpen(false);
  };

  const services = [
    { title: 'Local Moving', desc: 'Same-city residential and commercial', icon: '\uD83C\uDFE0', price: 'From $99/hr' },
    { title: 'Long Distance', desc: 'State-to-state and cross-country', icon: '\uD83D\uDE97', price: 'Custom Quote' },
    { title: 'Packing Services', desc: 'Full packing, unpacking, and supplies', icon: '\uD83D\uDCE6', price: 'From $250' },
    { title: 'Storage Solutions', desc: 'Climate-controlled short and long-term', icon: '\uD83C\uDFED', price: 'From $99/mo' },
  ];

  return (
    <div className="bg-orange-50 text-gray-900 min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-600 text-white px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>
      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white text-xl" aria-hidden="true">\uD83D\uDDD2\uFE0F</div>
              <div><h1 className="text-lg font-bold text-orange-900">SwiftMove</h1><p className="text-[9px] text-orange-600 tracking-wider">PROFESSIONAL MOVING</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Services','Why Us','Reviews','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase().replace(' ','-'))} aria-label={`Navigate to ${item} section`} className="text-sm text-gray-600 hover:text-orange-600 transition-colors focus-visible:outline-2 focus-visible:outline-orange-500 focus-visible:outline-offset-2 rounded">{item}</button>))}
              <button aria-label="Get a free moving quote" className="bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-orange-700 transition-colors focus-visible:outline-2 focus-visible:outline-orange-500 focus-visible:outline-offset-2">Free Quote</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-orange-600 focus-visible:outline-2 focus-visible:outline-orange-500 rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg>
            </button>
          </div>
        </nav>
      </header>
      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true"><div className="absolute top-20 right-20 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl"/></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-600 text-sm font-bold tracking-widest mb-4">STRESS-FREE MOVING</p>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-orange-900">Move With<br/><span className="text-orange-600">Confidence</span></h2>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">Licensed, insured movers handling your belongings with care. From studio apartments to corporate relocations.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button aria-label="Get your free moving quote" className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-700 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-orange-500 focus-visible:outline-offset-2">Free Quote</button>
                <button aria-label="View our moving services" className="border-2 border-orange-600 text-orange-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-50 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-orange-500 focus-visible:outline-offset-2">Our Services</button>
              </div>
              <div className="flex items-center gap-8">
                {[{num:'10K+',label:'Moves Completed'},{num:'99%',label:'On-Time Rate'},{num:'4.8',label:'Google Rating'}].map((s,i) => (<div key={i}><div className="text-2xl font-bold text-orange-700">{s.num}</div><div className="text-sm text-gray-500">{s.label}</div></div>))}
              </div>
            </div>
            <div className="relative"><div className="bg-white rounded-3xl p-8 shadow-xl"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" alt="Professional movers carefully loading furniture into truck" className="w-full rounded-2xl"/></div></div>
          </div>
        </section>
        <section id="services" aria-labelledby="services-heading" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><p className="text-orange-600 text-sm font-bold tracking-widest mb-4">WHAT WE OFFER</p><h2 id="services-heading" className="text-4xl font-bold text-orange-900 mb-4">Moving Services</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s,i) => (<article key={i} className="bg-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-105"><div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div><h3 className="text-xl font-bold text-orange-900 mb-2">{s.title}</h3><p className="text-gray-500 text-sm mb-3">{s.desc}</p><div className="text-orange-600 font-bold text-sm">{s.price}</div></article>))}
            </div>
          </div>
        </section>
        <section id="contact" aria-labelledby="contact-heading" className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div><p className="text-orange-600 text-sm font-bold tracking-widest mb-4">START PLANNING</p><h2 id="contact-heading" className="text-4xl font-bold text-orange-900 mb-6">Get Your Free Quote</h2><p className="text-gray-600 mb-8">Tell us about your move and we&#39;ll provide a detailed estimate within 24 hours.</p></div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form noValidate className="space-y-6">
                <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label><input id="name" type="text" aria-required="true" placeholder="Alex Move" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="move-type" className="block text-sm font-medium text-gray-700 mb-2">Move Type</label><select id="move-type" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-colors"><option value="">Select type</option><option value="local">Local Moving</option><option value="long-distance">Long Distance</option><option value="packing">Packing Services</option><option value="storage">Storage Solutions</option></select></div>
                <button type="submit" aria-label="Request your free moving quote" className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700 transition-all hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-orange-500 focus-visible:outline-offset-2">Request Quote</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer role="contentinfo" className="py-12 bg-orange-900"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white" aria-hidden="true">\uD83D\uDDD2\uFE0F</div><span className="text-white font-bold">SwiftMove Professional</span></div><p className="text-orange-300 text-sm">Licensed & Insured | Since 2010</p></div></footer>
    </div>
  );
}