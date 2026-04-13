'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const services = [
    { name: 'Local Moving', desc: 'Same-city residential moves for apartments, condos, and houses. Our team handles every detail from packing the first box to placing the last piece of furniture. We know Chicago neighborhoods inside and out, ensuring the fastest routes and a stress-free experience.', icon: '🏠', price: 'From $149/hr' },
    { name: 'Long Distance', desc: 'Interstate moves nationwide with full-service care. Whether you are heading coast to coast or to a neighboring state, we coordinate logistics, timing, and delivery so your belongings arrive safe and on schedule.', icon: '🚛', price: 'Custom quote' },
    { name: 'Commercial Moving', desc: 'Office and business relocations with minimal downtime. We plan around your schedule, handle IT equipment with care, and get your team back to work fast. Furniture disassembly and reassembly included.', icon: '🏢', price: 'Custom quote' },
    { name: 'Packing Services', desc: 'Full and partial packing using quality materials. Our trained packers wrap fragile items, label every box, and organize by room so unpacking is effortless. Custom crating available for valuables.', icon: '📦', price: 'From $25/box' },
    { name: 'Storage Solutions', desc: 'Climate-controlled storage units for short or long term. Your items are protected from temperature swings, humidity, and dust. Access your unit anytime with secure 24-hour entry.', icon: '🏗️', price: 'From $99/mo' },
    { name: 'Specialty Items', desc: 'Pianos, fine art, antiques, wine collections, and fragile items deserve specialized handling. We use custom padding, rigging, and white-glove service to protect your most valuable possessions.', icon: '🎹', price: 'From $199' },
    { name: 'Senior Moving', desc: 'Compassionate downsizing and relocation services for seniors. We handle sorting, packing, and setup at the new home with patience and respect. Estate cleanout coordination available on request.', icon: '🤝', price: 'From $199/hr' },
  ];

  const steps = [
    { num: '01', title: 'Request a Quote', desc: 'Fill out our simple form or call us. Tell us what you are moving, where, and when. We send a transparent estimate within two hours.' },
    { num: '02', title: 'Plan Your Move', desc: 'Your dedicated move coordinator walks you through every detail. We schedule the date, confirm inventory, and address any special requirements.' },
    { num: '03', title: 'Moving Day', desc: 'Our crew arrives on time with all the equipment needed. We load carefully, drive safely, and keep you updated throughout transit.' },
    { num: '04', title: 'Settle In', desc: 'We unload, place furniture where you want it, and do a final walkthrough together. Your satisfaction is our guarantee before we leave.' },
  ];

  const samplePrices = [
    { type: 'Studio Apartment (Local)', range: '$349 – $599' },
    { type: '2-Bedroom Home (Local)', range: '$699 – $1,199' },
    { type: '4-Bedroom Home (Local)', range: '$1,299 – $2,199' },
    { type: 'Long Distance (1-BR)', range: '$1,800 – $3,200' },
    { type: 'Long Distance (3-BR)', range: '$3,500 – $6,800' },
    { type: 'Commercial Office (per room)', range: '$250 – $450' },
  ];

  const checklist = [
    'Confirm moving date and book your crew at least two weeks in advance.',
    'Declutter rooms and donate or discard items you no longer need.',
    'Notify your landlord or building management about the move-out date.',
    'Set up mail forwarding with USPS and update your address on key accounts.',
    'Pack a first-night box with essentials: toiletries, chargers, snacks, bedding.',
    'Label every box by room and priority so the crew knows where things go.',
    'Disassemble large furniture that will not fit through doorways.',
    'Take photos of electronics setups before unplugging so you can reconnect easily.',
    'Reserve parking spots or elevator access at both locations.',
    'Do a final walkthrough of the old place before handing over the keys.',
  ];

  const testimonials = [
    { name: 'Maria S.', location: 'Lincoln Park, Chicago', text: 'SwiftMove handled our three-bedroom move in under five hours. Every piece of furniture arrived in perfect condition. The crew was friendly, fast, and incredibly careful with our grandmother\'s antique hutch. We could not be happier.' },
    { name: 'James R.', location: 'Naperville, IL', text: 'We moved from Chicago to Denver and SwiftMove made a stressful cross-country move feel easy. The coordinator kept us informed every step of the way, and delivery arrived exactly on the promised date. Best moving experience we have ever had.' },
    { name: 'Tanya L.', location: 'Loop, Chicago', text: 'Our office relocation had zero downtime thanks to SwiftMove. They moved 40 workstations over a weekend, and every cable was labeled and reconnected. Monday morning the team walked in and started working like nothing changed. Truly professional.' },
  ];

  const faqs = [
    { q: 'How far in advance should I book my move?', a: 'We recommend booking at least two weeks before your desired move date. During peak season (May through September), three to four weeks is ideal. That said, we do accommodate last-minute moves when our schedule allows, so reach out and we will do our best.' },
    { q: 'Are my belongings insured during the move?', a: 'Yes. Every move includes basic released-value protection at no extra cost. We also offer full-value protection plans that cover repair or replacement at current market value. Your move coordinator will explain all options during the planning call.' },
    { q: 'Do you provide packing materials?', a: 'Absolutely. We supply sturdy boxes, packing paper, bubble wrap, tape, and specialty containers for dishes and wardrobe items. Materials can be delivered to your home ahead of moving day, or the crew can bring everything on the day of the move.' },
    { q: 'What items cannot be moved?', a: 'For safety and legal reasons, we cannot transport hazardous materials such as gasoline, propane, paint thinner, and certain chemicals. Perishable food, plants, and live animals also fall outside our standard service. Your coordinator will provide a complete list during planning.' },
    { q: 'How is the cost of my move calculated?', a: 'Local moves are billed by the hour based on crew size. Long-distance moves are priced by weight, distance, and services requested. We provide a written, binding estimate after a virtual or in-home survey so there are no surprises on moving day.' },
    { q: 'What happens if my move takes longer than expected?', a: 'If the delay is on our end, there is no extra charge. If additional time is needed due to unforeseen circumstances at the destination, we communicate in real time and get your approval before any overtime rates apply. Transparency is our policy.' },
  ];

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-600 text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0a09]/95 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-xl font-black uppercase text-amber-500">SwiftMove</h1><p className="text-base tracking-[0.2em] text-stone-400 uppercase">Professional Moving — Chicago</p></div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="btn text-base text-stone-300 hover:text-amber-500">Services</button>
            <button onClick={() => scrollTo('pricing')} className="btn text-base text-stone-300 hover:text-amber-500">Pricing</button>
            <button onClick={() => scrollTo('testimonials')} className="btn text-base text-stone-300 hover:text-amber-500">Reviews</button>
            <button onClick={() => scrollTo('faq')} className="btn text-base text-stone-300 hover:text-amber-500">FAQ</button>
            <button onClick={() => scrollTo('contact')} className="btn bg-amber-600 text-white px-5 py-2.5 text-base font-bold rounded-full hover:bg-amber-500">Get Quote</button>
          </div>
        </div>
      </nav>

      <main id="main">
        {/* Hero */}
        <section className="hero pt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 text-center">
            <p className="badge text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">Licensed & Insured — Est. 2015</p>
            <h2 className="heading text-5xl md:text-7xl font-black uppercase leading-[0.85] mb-6">Your move,<br /><span className="text-amber-500">made simple.</span></h2>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto mb-10">Professional moving with careful handling, transparent pricing, and on-time delivery guaranteed. From studio apartments to full office relocations, SwiftMove handles it all with care and precision.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button onClick={() => scrollTo('contact')} className="btn btn bg-amber-600 text-white px-8 py-4 text-lg font-bold rounded-full hover:bg-amber-500">Get Free Quote</button>
              <button onClick={() => scrollTo('services')} className="btn btn-outline border-2 border-stone-600 text-stone-300 px-8 py-4 text-lg rounded-full hover:border-amber-500">Our Services</button>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="reveal py-10 border-y border-stone-800">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
            <div><div className="text-3xl md:text-4xl font-black text-amber-500">10+ Years</div><div className="text-xs text-stone-400 uppercase mt-1">In Business</div></div>
            <div><div className="text-3xl md:text-4xl font-black text-amber-500">15K+ Moves</div><div className="text-xs text-stone-400 uppercase mt-1">Successfully Completed</div></div>
            <div><div className="text-3xl md:text-4xl font-black text-amber-500">4.9 Rating</div><div className="text-xs text-stone-400 uppercase mt-1">Average Customer Score</div></div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="reveal py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="heading text-4xl font-black uppercase mb-4">Our Services</h2>
              <p className="text-stone-300 max-w-xl mx-auto">Seven specialized services designed to cover every moving need. From local apartment moves to cross-country relocations and everything in between.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="card border border-stone-800 rounded-lg p-8 hover:border-amber-500/40 transition-colors">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-black uppercase mb-2">{s.name}</h3>
                  <p className="text-stone-300 text-sm mb-3 leading-relaxed">{s.desc}</p>
                  <div className="text-amber-500 font-bold">{s.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="reveal section-alt py-24 bg-stone-900/30" aria-labelledby="how-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="how-heading" className="heading text-4xl font-black uppercase mb-4">How It Works</h2>
              <p className="text-stone-300 max-w-xl mx-auto">Four simple steps from first call to settled in. We handle the heavy lifting so you can focus on your new beginning.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-6xl font-black text-amber-500/20 mb-4">{s.num}</div>
                  <h3 className="text-lg font-black uppercase mb-3">{s.title}</h3>
                  <p className="text-stone-300 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="reveal py-24" aria-labelledby="pricing-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="pricing-heading" className="heading text-4xl font-black uppercase mb-4">Transparent Pricing</h2>
              <p className="text-stone-300 max-w-xl mx-auto">No hidden fees. No surprise charges. Here are sample price ranges to help you plan. Your final quote is always free and obligation-free.</p>
            </div>
            <div className="border border-stone-800 rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 bg-stone-900/50 px-6 py-4 border-b border-stone-800">
                <div className="font-bold uppercase text-base text-stone-300">Move Type</div>
                <div className="font-bold uppercase text-base text-stone-300 text-right">Price Range</div>
              </div>
              {samplePrices.map((p, i) => (
                <div key={i} className="grid grid-cols-2 px-6 py-4 border-b border-stone-800/50 last:border-b-0 hover:bg-stone-900/20 transition-colors">
                  <div className="text-stone-300">{p.type}</div>
                  <div className="text-amber-500 font-bold text-right">{p.range}</div>
                </div>
              ))}
            </div>
            <p className="text-stone-400 text-sm text-center mt-6">Prices vary based on inventory, distance, and services requested. Request a free binding estimate for exact pricing.</p>
          </div>
        </section>

        {/* Moving Checklist */}
        <section className="reveal section-alt py-24 bg-stone-900/30" aria-labelledby="checklist-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="checklist-heading" className="heading text-4xl font-black uppercase mb-4">Moving Checklist</h2>
              <p className="text-stone-300 max-w-xl mx-auto">Stay organized with our ten-step pre-move checklist. Print it out or save it to your phone and check items off as you go.</p>
            </div>
            <div className="space-y-4">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-start gap-4 border border-stone-800 rounded-lg px-6 py-4 hover:border-amber-500/40 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-600/20 text-amber-500 font-black flex items-center justify-center text-sm">{i + 1}</div>
                  <p className="text-stone-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="reveal py-24" aria-labelledby="testimonials-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="testimonials-heading" className="heading text-4xl font-black uppercase mb-4">What Our Customers Say</h2>
              <p className="text-stone-300 max-w-xl mx-auto">Over fifteen thousand moves and a 4.9 average rating. Here is what recent customers have to say about their SwiftMove experience.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="card border border-stone-800 rounded-lg p-8 hover:border-amber-500/40 transition-colors">
                  <div className="flex items-center gap-1 text-amber-500 mb-4">{'★'.repeat(5)}</div>
                  <p className="text-stone-300 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <div className="font-bold text-stone-100">{t.name}</div>
                    <div className="text-xs text-stone-400">{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="reveal section-alt py-24 bg-stone-900/30" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="faq-heading" className="heading text-4xl font-black uppercase mb-4">Frequently Asked Questions</h2>
              <p className="text-stone-300 max-w-xl mx-auto">Answers to the most common questions about pricing, insurance, timing, and what to expect on moving day.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="border border-stone-800 rounded-lg overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="btn w-full flex justify-between items-center px-6 py-5 text-left hover:bg-stone-900/30 transition-colors">
                    <span className="font-bold text-stone-200 pr-4">{f.q}</span>
                    <span className="text-amber-500 text-2xl leading-none flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-stone-300 text-sm leading-relaxed">{f.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Quote Form */}
        <section id="contact" className="reveal py-24" aria-labelledby="contact-heading">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 id="contact-heading" className="heading text-4xl font-black uppercase mb-4">Get a Free Quote</h2>
            <p className="text-stone-300 mb-10">We respond within 2 hours. No obligation, no hidden fees. Fill out the form below and a move coordinator will reach out to finalize your estimate.</p>
            <form className="card border border-stone-800 rounded-xl p-8 space-y-5 text-left" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000); }}>
              <div className="grid grid-cols-2 gap-5">
                <div><label className="block text-sm mb-2 text-stone-300">Name</label><input type="text" placeholder="Your name" required className="w-full border border-stone-700 bg-transparent px-4 py-3 rounded-lg placeholder:text-stone-400 focus:border-amber-500 focus:outline-none border border-gray-300 " /></div>
                <div><label className="block text-sm mb-2 text-stone-300">Phone</label><input type="tel" placeholder="(555) 000-0000" required className="w-full border border-stone-700 bg-transparent px-4 py-3 rounded-lg placeholder:text-stone-400 focus:border-amber-500 focus:outline-none border border-gray-300 " /></div>
              </div>
              <div><label className="block text-sm mb-2 text-stone-300">Email</label><input type="email" placeholder="you@example.com" required className="w-full border border-stone-700 bg-transparent px-4 py-3 rounded-lg placeholder:text-stone-400 focus:border-amber-500 focus:outline-none border border-gray-300 " /></div>
              <div className="grid grid-cols-2 gap-5">
                <div><label className="block text-sm mb-2 text-stone-300">Moving From</label><input type="text" placeholder="City, State" required className="w-full border border-stone-700 bg-transparent px-4 py-3 rounded-lg placeholder:text-stone-400 focus:border-amber-500 focus:outline-none border border-gray-300 " /></div>
                <div><label className="block text-sm mb-2 text-stone-300">Moving To</label><input type="text" placeholder="City, State" required className="w-full border border-stone-700 bg-transparent px-4 py-3 rounded-lg placeholder:text-stone-400 focus:border-amber-500 focus:outline-none border border-gray-300 " /></div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div><label className="block text-sm mb-2 text-stone-300">Move Type</label>
                  <select className="w-full border border-stone-700 bg-[#0c0a09] px-4 py-3 rounded-lg focus:border-amber-500 focus:outline-none text-stone-100 border border-gray-300 ">
                    <option>Local Move</option><option>Long Distance</option><option>Commercial</option><option>Senior Moving</option><option>Storage Needed</option>
                  </select>
                </div>
                <div><label className="block text-sm mb-2 text-stone-300">Preferred Date</label><input type="date" className="w-full border border-stone-700 bg-[#0c0a09] px-4 py-3 rounded-lg focus:border-amber-500 focus:outline-none text-stone-100 border border-gray-300 " /></div>
              </div>
              <div><label className="block text-sm mb-2 text-stone-300">Additional Details</label><textarea rows={3} placeholder="Describe your move: number of rooms, large items, special requirements..." className="w-full border border-stone-700 bg-transparent px-4 py-3 rounded-lg placeholder:text-stone-400 focus:border-amber-500 focus:outline-none resize-none border border-gray-300 "></textarea></div>
              <button type="submit" disabled={submitted} className="btn w-full bg-amber-600 text-white py-4 rounded-lg font-black uppercase hover:bg-amber-500 transition-colors disabled:opacity-80">{submitted ? '✓ Quote Sent! We\'ll call within 2 hours' : 'Get Free Quote'}</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-800 py-8"><div className="max-w-6xl mx-auto px-6 text-center text-stone-400 text-sm">© {new Date().getFullYear()} SwiftMove. Chicago, IL. Licensed USDOT Carrier.</div></footer>
    </div>
  );
}
