'use client';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const services = [
    {
      name: 'Local Moving',
      desc: 'Same-city residential moves handled with precision. Whether you are relocating from a studio apartment or a five-bedroom house, our experienced crew packs, loads, transports, and unloads every item with meticulous care. We know every neighborhood, shortcut, and parking situation, which means faster timelines and zero headaches for you.',
      icon: '🏠',
      price: 'From $149/hr',
    },
    {
      name: 'Long Distance',
      desc: 'Interstate and cross-country relocations coordinated from start to finish. Your dedicated move manager plans routes, schedules delivery windows, and provides real-time tracking so you always know where your belongings are. Full-value protection plans are available for complete peace of mind on every long haul.',
      icon: '🚛',
      price: 'Custom Quote',
    },
    {
      name: 'Commercial Moving',
      desc: 'Office and business relocations executed with minimal downtime. We work evenings and weekends to keep your operations running. IT equipment is labeled, packed in anti-static materials, and reconnected at the destination. Furniture disassembly and reassembly is always included in the base price.',
      icon: '🏢',
      price: 'Custom Quote',
    },
    {
      name: 'Packing Services',
      desc: 'Full and partial packing using commercial-grade materials. Our trained packers wrap fragile items in bubble cushion, reinforce box bottoms, and label everything by room and priority. Custom crating is available for artwork, mirrors, and electronics. You can also order a packing-only visit before moving day.',
      icon: '📦',
      price: 'From $25/box',
    },
    {
      name: 'Storage Solutions',
      desc: 'Climate-controlled warehouse units for short-term or long-term storage. Every unit is monitored 24/7 with security cameras, smoke detection, and humidity regulation. Your items are palletized and inventoried so you can request delivery of specific pieces at any time without visiting the facility.',
      icon: '🏗️',
      price: 'From $99/mo',
    },
    {
      name: 'Specialty Items',
      desc: 'Pianos, fine art, antiques, wine collections, and oversized items require specialized handling. We use custom padding, hydraulic lift gates, and rigging equipment to move your most valuable possessions safely. White-glove service includes placement exactly where you want it in the new space.',
      icon: '🎹',
      price: 'From $199',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Get Your Free Quote',
      desc: 'Fill out our quick online form or call us directly. Tell us what you are moving, where you are going, and your preferred date. We send a transparent, binding estimate within two hours — no obligation, no pressure.',
    },
    {
      num: '02',
      title: 'Plan Every Detail',
      desc: 'Your dedicated move coordinator schedules a walkthrough, confirms inventory, and addresses any special requirements. We reserve the crew, truck, and supplies so everything is ready before the first box is lifted.',
    },
    {
      num: '03',
      title: 'Moving Day Done Right',
      desc: 'Our uniformed crew arrives on time with padding, dollies, and a clean truck. We load carefully, drive safely, and keep you updated throughout transit. At the destination, we unload, place furniture, and complete a final walkthrough with you.',
    },
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      subtitle: 'Studio & 1-Bedroom',
      price: '$349',
      range: '– $599',
      features: ['2-person crew', 'Basic packing supplies', 'Loading & unloading', 'Local moves under 25 mi', 'Standard insurance included'],
      popular: false,
    },
    {
      name: 'Standard',
      subtitle: '2–3 Bedroom Home',
      price: '$699',
      range: '– $1,199',
      features: ['3-person crew', 'Full packing supplies', 'Furniture disassembly/reassembly', 'Local moves under 50 mi', 'Full-value protection available'],
      popular: true,
    },
    {
      name: 'Premium',
      subtitle: '4+ Bedroom or Office',
      price: '$1,299',
      range: '– $2,199',
      features: ['4+ person crew', 'Premium packing & crating', 'Specialty item handling', 'Unlimited local distance', 'Full-value protection included'],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'Maria S.',
      location: 'Lincoln Park, Chicago',
      text: 'SwiftMove handled our three-bedroom move in under five hours. Every piece of furniture arrived in perfect condition. The crew was friendly, fast, and incredibly careful with our grandmother\'s antique hutch. We could not be happier with the service.',
    },
    {
      name: 'James R.',
      location: 'Naperville, IL',
      text: 'We moved from Chicago to Denver and SwiftMove made a stressful cross-country move feel easy. The coordinator kept us informed every step of the way, and delivery arrived exactly on the promised date. Best moving experience we have ever had.',
    },
    {
      name: 'Tanya L.',
      location: 'The Loop, Chicago',
      text: 'Our office relocation had zero downtime thanks to SwiftMove. They moved 40 workstations over a weekend, and every cable was labeled and reconnected. Monday morning the team walked in and started working like nothing changed. Truly professional.',
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--dark-bg)', color: 'var(--text-primary)' }}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 text-white px-4 py-2 rounded z-[100] font-bold" style={{ background: 'var(--neon)' }}>Skip to main content</a>

      {/* Navigation */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="heading text-xl font-bold" style={{ color: 'var(--neon)', letterSpacing: '0.15em' }}>SwiftMove</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.25em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Professional Moving Services</p>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-sm uppercase tracking-widest transition-colors" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)' }} onMouseOver={(e) => (e.target as HTMLElement).style.color = 'var(--neon)'} onMouseOut={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}>Services</button>
            <button onClick={() => scrollTo('process')} className="text-sm uppercase tracking-widest transition-colors" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)' }} onMouseOver={(e) => (e.target as HTMLElement).style.color = 'var(--neon)'} onMouseOut={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}>How It Works</button>
            <button onClick={() => scrollTo('pricing')} className="text-sm uppercase tracking-widest transition-colors" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)' }} onMouseOver={(e) => (e.target as HTMLElement).style.color = 'var(--neon)'} onMouseOut={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}>Pricing</button>
            <button onClick={() => scrollTo('testimonials')} className="text-sm uppercase tracking-widest transition-colors" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)' }} onMouseOver={(e) => (e.target as HTMLElement).style.color = 'var(--neon)'} onMouseOut={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}>Reviews</button>
            <button onClick={() => scrollTo('quote')} className="btn">Get Free Quote</button>
          </div>
        </div>
      </nav>

      <main id="main">
        {/* Hero Section */}
        <section className="hero relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600518139528-749d8e3e9395?w=800&q=80"
              alt="Professional movers carrying boxes into a new home"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.95) 100%)' }}></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <span className="badge">Licensed & Insured — Est. 2015</span>
            <h2 className="heading text-5xl md:text-7xl lg:text-8xl mt-6 mb-6" style={{ lineHeight: 0.9 }}>
              Your Move,<br />
              <span style={{ color: 'var(--neon)' }}>Made Simple.</span>
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
              Professional moving with careful handling, transparent pricing, and on-time delivery guaranteed. From studio apartments to full office relocations, SwiftMove handles it all with care and precision. Over fifteen thousand successful moves and counting.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button onClick={() => scrollTo('quote')} className="btn cta-pulse">Get Your Free Quote</button>
              <button onClick={() => scrollTo('services')} className="btn-outline">Explore Services</button>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="reveal py-10" style={{ borderTop: '1px solid var(--dark-border)', borderBottom: '1px solid var(--dark-border)' }}>
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="stat-number">10+</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '4px' }}>Years in Business</div>
            </div>
            <div>
              <div className="stat-number">15K+</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '4px' }}>Moves Completed</div>
            </div>
            <div>
              <div className="stat-number">4.9★</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '4px' }}>Average Rating</div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="reveal py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="heading text-4xl md:text-5xl mb-4">Our Services</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                Six specialized moving services designed to cover every residential and commercial need. Each service is backed by trained crews, quality materials, and our satisfaction guarantee.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="card">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="heading text-lg mb-2" style={{ letterSpacing: '0.08em' }}>{s.name}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '12px' }}>{s.desc}</p>
                  <div style={{ color: 'var(--neon)', fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '0.05em' }}>{s.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works — 3-Step Process */}
        <section id="process" className="reveal section-alt py-24" aria-labelledby="process-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="process-heading" className="heading text-4xl md:text-5xl mb-4">How It Works</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                Three simple steps from first call to fully settled in. We handle the logistics and the heavy lifting so you can focus on your new beginning.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {steps.map((s, i) => (
                <div key={i} className="text-center relative">
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px]" style={{ background: 'linear-gradient(90deg, rgba(255,107,53,0.4), transparent)' }}></div>
                  )}
                  <div className="mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(255,107,53,0.1)', border: '2px solid rgba(255,107,53,0.3)' }}>
                    <span className="heading text-4xl" style={{ color: 'var(--neon)' }}>{s.num}</span>
                  </div>
                  <h3 className="heading text-xl mb-3" style={{ letterSpacing: '0.08em' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '340px', margin: '0 auto' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Showcase */}
        <section className="reveal py-24" aria-hidden="true">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="img-hover rounded-lg overflow-hidden" style={{ height: '400px' }}>
                <img
                  src="https://images.unsplash.com/photo-1600518139528-749d8e3e9395?w=800&q=80"
                  alt="Movers carefully loading furniture into a truck"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="img-hover rounded-lg overflow-hidden" style={{ height: '400px' }}>
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
                  alt="Beautiful new home ready for move-in"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="reveal py-24" aria-labelledby="pricing-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="pricing-heading" className="heading text-4xl md:text-5xl mb-4">Transparent Pricing</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                No hidden fees. No surprise charges. Choose the plan that fits your move, or request a custom quote for long-distance and commercial relocations. Every estimate is free and obligation-free.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, i) => (
                <div key={i} className="card text-center relative" style={plan.popular ? { borderColor: 'rgba(255,107,53,0.5)' } : {}}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 text-center py-1.5 text-xs uppercase tracking-widest font-bold" style={{ background: 'var(--neon)', color: '#000', fontFamily: 'var(--font-heading)', borderRadius: '6px 6px 0 0' }}>
                      Most Popular
                    </div>
                  )}
                  <div className={plan.popular ? 'pt-8' : ''}>
                    <h3 className="heading text-2xl mb-1" style={{ letterSpacing: '0.1em' }}>{plan.name}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '20px' }}>{plan.subtitle}</p>
                    <div className="mb-6">
                      <span className="heading text-5xl" style={{ color: 'var(--neon)' }}>{plan.price}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>{plan.range}</span>
                    </div>
                    <ul className="space-y-3 mb-8 text-left" style={{ paddingLeft: '8px' }}>
                      {plan.features.map((f, j) => (
                        <li key={j} style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ color: 'var(--neon)', fontWeight: 'bold', fontSize: '1rem' }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => scrollTo('quote')} className={plan.popular ? 'btn w-full' : 'btn-outline w-full'} style={{ textAlign: 'center' }}>
                      Get This Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'center', marginTop: '24px' }}>
              Prices are sample ranges for local moves. Long-distance and commercial pricing is based on weight, distance, and services. Request a free binding estimate for exact pricing.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="reveal section-alt py-24" aria-labelledby="testimonials-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="testimonials-heading" className="heading text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                Over fifteen thousand moves completed with a 4.9-star average rating. Here is what recent customers have to say about their SwiftMove experience.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="card">
                  <div className="flex gap-1 mb-4" style={{ color: 'var(--neon)' }}>
                    {'★★★★★'.split('').map((s, j) => <span key={j} className="text-lg">{s}</span>)}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.8, marginBottom: '20px', fontStyle: 'italic' }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Quote Form Section */}
        <section id="quote" className="reveal py-24" aria-labelledby="quote-heading">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 id="quote-heading" className="heading text-4xl md:text-5xl mb-4">Get a Free Quote</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
              We respond within two hours. No obligation, no hidden fees. Fill out the form below and a dedicated move coordinator will reach out to finalize your personalized estimate.
            </p>
            <form
              className="card text-left space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 4000);
              }}
            >
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>Name</label>
                  <input type="text" placeholder="Your full name" required />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>Phone</label>
                  <input type="tel" placeholder="(555) 000-0000" required />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>Email</label>
                <input type="email" placeholder="you@example.com" required />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>Moving From</label>
                  <input type="text" placeholder="City, State" required />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>Moving To</label>
                  <input type="text" placeholder="City, State" required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>Move Type</label>
                  <select>
                    <option>Local Move</option>
                    <option>Long Distance</option>
                    <option>Commercial</option>
                    <option>Senior Moving</option>
                    <option>Storage Needed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>Preferred Date</label>
                  <input type="date" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>Additional Details</label>
                <textarea rows={3} placeholder="Describe your move: number of rooms, large items, special requirements..." style={{ resize: 'none' }}></textarea>
              </div>
              <button type="submit" disabled={submitted} className="btn w-full" style={{ textAlign: 'center', opacity: submitted ? 0.8 : 1 }}>
                {submitted ? '✓ Quote Sent! We\'ll call within 2 hours' : 'Get Your Free Quote'}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--dark-border)', padding: '40px 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="heading text-lg mb-3" style={{ color: 'var(--neon)', letterSpacing: '0.15em' }}>SwiftMove</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.7 }}>
                Professional moving and relocation services. Licensed, insured, and committed to making every move stress-free. Serving Chicago and nationwide since 2015.
              </p>
            </div>
            <div>
              <h4 className="heading text-sm mb-3" style={{ letterSpacing: '0.15em' }}>Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollTo('services')} className="block text-sm transition-colors" style={{ color: 'var(--text-muted)' }} onMouseOver={(e) => (e.target as HTMLElement).style.color = 'var(--neon)'} onMouseOut={(e) => (e.target as HTMLElement).style.color = 'var(--text-muted)'}>Services</button>
                <button onClick={() => scrollTo('pricing')} className="block text-sm transition-colors" style={{ color: 'var(--text-muted)' }} onMouseOver={(e) => (e.target as HTMLElement).style.color = 'var(--neon)'} onMouseOut={(e) => (e.target as HTMLElement).style.color = 'var(--text-muted)'}>Pricing</button>
                <button onClick={() => scrollTo('quote')} className="block text-sm transition-colors" style={{ color: 'var(--text-muted)' }} onMouseOver={(e) => (e.target as HTMLElement).style.color = 'var(--neon)'} onMouseOut={(e) => (e.target as HTMLElement).style.color = 'var(--text-muted)'}>Get a Quote</button>
              </div>
            </div>
            <div>
              <h4 className="heading text-sm mb-3" style={{ letterSpacing: '0.15em' }}>Contact</h4>
              <div className="space-y-2" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                <p>📞 (312) 555-0192</p>
                <p>✉️ hello@swiftmove.com</p>
                <p>📍 Chicago, IL 60601</p>
              </div>
            </div>
          </div>
          <div className="text-center pt-6" style={{ borderTop: '1px solid var(--dark-border)' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
              &copy; {new Date().getFullYear()} SwiftMove. Chicago, IL. Licensed USDOT Carrier. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
