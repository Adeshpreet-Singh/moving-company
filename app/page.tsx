'use client';

import { useState, FormEvent } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [estimate, setEstimate] = useState({ rooms: '2', distance: 'local', packing: false });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
    setMenuOpen(false);
  };

  const getEstimate = () => {
    const roomCount = parseInt(estimate.rooms);
    let base = roomCount * 180;
    if (estimate.distance === 'long') base += 900;
    if (estimate.distance === 'cross') base += 1800;
    if (estimate.packing) base += roomCount * 90;
    return base;
  };

  const handleQuoteSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
    formData.append('subject', 'New Quote Request - Meridian Moving Co.');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  const services = [
    { title: 'Residential Moving', desc: 'White-glove home relocation for apartments, estates, and everything between. Every item catalogued and protected.', icon: '⌂' },
    { title: 'Corporate Relocation', desc: 'Seamless office and commercial moves executed after-hours or weekends. Zero downtime guaranteed.', icon: '◈' },
    { title: 'Packing & Crating', desc: 'Custom crating for art, antiques, and heirlooms. Museum-grade materials and techniques.', icon: '▣' },
    { title: 'Climate Storage', desc: 'Temperature and humidity-controlled vaults with individual alarm systems. 24/7 monitored.', icon: '◇' },
    { title: 'Long Distance', desc: 'Coast-to-coast relocations with dedicated trucks, GPS tracking, and real-time status updates.', icon: '→' },
    { title: 'Specialty Transport', desc: 'Pianos, sculptures, wine collections, and high-value items handled by certified specialists.', icon: '♦' },
  ];

  const testimonials = [
    { name: 'Margaret Ellsworth', role: 'Homeowner — Lincoln Park', text: 'They moved our entire 6-bedroom home including a 1920s Steinway grand piano. Not a scratch. The crew arrived in matching uniforms and treated every piece as if it were their own.', rating: 5 },
    { name: 'David Nakamura', role: 'CEO, Arcline Technologies', text: 'Meridian relocated our 120-person office over a single weekend. Monday morning, every monitor was calibrated, every cable routed. It was as if we had always been there.', rating: 5 },
    { name: 'Sofia Castellano', role: 'Gallery Director', text: 'We trust Meridian with our entire exhibition. They custom-crate every piece and their climate-controlled transport gives us total peace of mind. Truly a class apart.', rating: 5 },
  ];

  const serviceAreas = [
    'Chicago', 'Evanston', 'Naperville', 'Oak Park', 'Hinsdale',
    'Lake Forest', 'Wilmette', 'Winnetka', 'Glencoe', 'Kenilworth',
  ];

  const faqs = [
    { q: 'How far in advance should I schedule?', a: 'We recommend 3-4 weeks for residential and 6-8 weeks for corporate relocations. However, we maintain a dedicated rapid-response team for urgent moves and can often accommodate within 48 hours.' },
    { q: 'What insurance coverage do you provide?', a: 'All moves include our standard coverage at $0.60/lb per item. We offer Full Value Protection, which covers repair or replacement at current market value, and our Premium White Glove plan with zero deductible.' },
    { q: 'Are there items you cannot transport?', a: 'Hazardous materials, perishables, and certain chemicals cannot be shipped. We provide a comprehensive guide during your survey and offer specialized disposal referrals for restricted items.' },
    { q: 'How is pricing determined?', a: 'Pricing reflects volume, distance, access complexity, and services requested. Every move begins with a complimentary in-home or virtual survey — no estimates are ever guessed.' },
    { q: 'Do you offer unpacking services?', a: 'Yes. Our full-service option includes complete unpacking, furniture placement, debris removal, and even hanging artwork. We leave your new home move-in ready.' },
  ];

  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber text-midnight px-4 py-2 rounded z-[100] font-bold">Skip to main content</a>

      {/* ===== NAVIGATION ===== */}
      <header>
        <nav role="navigation" aria-label="Main navigation" className="nav-premium fixed top-0 left-0 right-0 z-50 px-6 md:px-10">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-[72px]">
            <div className="flex items-center gap-3">
              <div className="brand-mark"><span>M</span></div>
              <div>
                <span className="text-[15px] font-semibold tracking-wide text-ivory" style={{ fontFamily: 'var(--font-body)' }}>Meridian</span>
                <p className="text-[10px] tracking-[0.25em] uppercase" style={{ color: 'var(--text-muted)' }}>Moving Co.</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {['Services', 'About', 'Reviews', 'Contact'].map(item => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} aria-label={`Navigate to ${item}`} className="text-[13px] tracking-wide uppercase font-medium transition-colors hover:text-amber" style={{ color: 'var(--text-body)' }}>{item}</button>
              ))}
              <button onClick={() => scrollToSection('contact')} className="btn-primary text-[12px] py-[10px] px-[22px]">Get a Quote</button>
            </div>

            <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} className="md:hidden text-amber" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden border-t border-white/5 px-4 py-6 space-y-4" style={{ background: 'var(--midnight-soft)' }}>
              {['Services', 'About', 'Reviews', 'Contact'].map(item => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left py-2 text-[14px] uppercase tracking-wide font-medium" style={{ color: 'var(--text-body)' }}>{item}</button>
              ))}
              <button onClick={() => scrollToSection('contact')} className="btn-primary w-full text-center mt-4">Get a Quote</button>
            </div>
          )}
        </nav>
      </header>

      <main id="main-content" role="main">

        {/* ===== HERO ===== */}
        <section aria-labelledby="hero-heading" className="hero-section px-6 md:px-10 pt-[72px]">
          <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center py-16 lg:py-0">
            <div className="lg:col-span-5 relative z-10">
              <div className="animate-fade-in-up stagger-1">
                <p className="section-badge mb-6">Est. 2010 · Chicago</p>
              </div>
              <h2 id="hero-heading" className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] mb-6 animate-fade-in-up stagger-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Moving elevated<br />
                <span style={{ color: 'var(--amber)' }}>to an art form.</span>
              </h2>
              <p className="text-base lg:text-lg mb-10 max-w-md leading-relaxed animate-fade-in-up stagger-3" style={{ color: 'var(--text-body)' }}>
                For discerning clients who expect perfection. We don&apos;t just move belongings — we relocate lives with precision, care, and quiet professionalism.
              </p>
              <div className="flex flex-wrap gap-4 mb-14 animate-fade-in-up stagger-4">
                <button onClick={() => scrollToSection('contact')} className="btn-primary">Request a Survey</button>
                <a href="tel:+15553456683" className="btn-outline-premium">Call (555) 345-6683</a>
              </div>
              <div className="flex items-center gap-6 lg:gap-10">
                {[
                  { num: '12,400+', label: 'Moves Completed' },
                  { num: '4.97', label: 'Average Rating' },
                  { num: '0', label: 'Damage Claims' },
                ].map((s, i) => (
                  <div key={i} className="stat-item">
                    <div className="stat-number text-xl lg:text-2xl">{s.num}</div>
                    <div className="stat-label text-[10px] lg:text-[11px]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="hero-image-frame aspect-[4/3] lg:aspect-[16/10]">
                <img src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=900&q=85" alt="Professional movers carefully loading furniture into a modern moving truck" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 glass-card p-4 lg:p-5 z-10" style={{ background: 'rgba(12,18,32,0.9)' }}>
                <p className="text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-muted)' }}>Next Available</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--amber)' }}>This Thursday</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MARQUEE TRUST BAR ===== */}
        <section className="py-6 border-y border-white/5 overflow-hidden" style={{ background: 'rgba(201,145,58,0.02)' }} aria-label="Trust indicators">
          <div className="flex items-center justify-center gap-8 lg:gap-16 flex-wrap px-6">
            {['DOT Licensed', 'BBB A+ Rated', 'Fully Insured', 'Background Checked', 'GPS Trained', 'Eco Certified'].map((item, i) => (
              <span key={i} className="text-[11px] uppercase tracking-[0.2em] font-medium flex items-center gap-3" style={{ color: 'var(--text-muted)' }}>
                <span className="accent-dot" style={{ width: 4, height: 4 }}></span>
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section id="services" aria-labelledby="services-heading" className="py-16 md:py-20 px-6 md:px-10 relative">
          <div className="pattern-overlay" aria-hidden="true"></div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="max-w-xl mb-16">
              <p className="section-badge mb-4">What We Do</p>
              <h2 id="services-heading" className="text-3xl lg:text-4xl font-semibold mb-4">Tailored services for<br /><span style={{ color: 'var(--amber)' }}>exceptional moves.</span></h2>
              <div className="divider"></div>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'var(--text-body)' }}>Every relocation is unique. We design a custom plan around your timeline, your belongings, and your standards.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <article key={i} className="service-card group">
                  <div className="service-icon" aria-hidden="true" style={{ color: 'var(--amber)', fontFamily: 'serif', fontSize: '1.4rem' }}>{s.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-amber transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>{s.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-body)' }}>{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ABOUT / WHY US ===== */}
        <section id="about" aria-labelledby="about-heading" className="py-16 md:py-20 px-6 md:px-10 relative" style={{ background: 'rgba(201,145,58,0.015)', borderTop: '1px solid var(--border-card)', borderBottom: '1px solid var(--border-card)' }}>
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="img-premium aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=85" alt="Meridian Moving professional team in uniform" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 border border-amber/20 rounded-lg flex items-center justify-center" style={{ background: 'var(--midnight)' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: 'var(--amber)', fontFamily: 'var(--font-heading)' }}>14</div>
                  <div className="text-[9px] uppercase tracking-[0.15em]" style={{ color: 'var(--text-muted)' }}>Years</div>
                </div>
              </div>
            </div>
            <div>
              <p className="section-badge mb-4">Why Meridian</p>
              <h2 id="about-heading" className="text-3xl lg:text-4xl font-semibold mb-6">Built on trust,<br /><span style={{ color: 'var(--amber)' }}>refined by experience.</span></h2>
              <div className="divider"></div>
              <p className="mt-6 text-[15px] leading-relaxed mb-8" style={{ color: 'var(--text-body)' }}>
                Founded in Chicago in 2010, Meridian Moving Co. was born from a simple belief: your possessions deserve better than a generic truck and a hurried crew. Every member of our 85-person team undergoes 200+ hours of training, background checks, and ongoing certification.
              </p>
              <p className="text-[15px] leading-relaxed mb-10" style={{ color: 'var(--text-body)' }}>
                We serve clients who value reliability over speed, precision over shortcuts, and peace of mind over the lowest bid. That commitment has earned us a 4.97-star rating across 12,400+ relocations.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {[
                  'Licensed & DOT Certified',
                  'Full-Value Insurance',
                  'Background-Checked Crew',
                  'GPS-Tracked Fleet',
                  'No Subcontractors Ever',
                  'Complimentary Surveys',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="accent-dot"></span>
                    <span className="text-[13px] font-medium" style={{ color: 'var(--text-body)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== PRICING ESTIMATOR ===== */}
        <section id="estimator" aria-labelledby="estimator-heading" className="py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-badge mb-4 justify-center">Instant Estimate</p>
              <h2 id="estimator-heading" className="text-3xl lg:text-4xl font-semibold mb-4">Plan your investment.</h2>
              <div className="divider divider-center"></div>
              <p className="mt-4 text-[15px]" style={{ color: 'var(--text-body)' }}>Get a ballpark figure in seconds. Final pricing follows our complimentary in-home survey.</p>
            </div>
            <div className="glass-card">
              <div className="grid sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <label htmlFor="est-rooms" className="block text-[12px] uppercase tracking-[0.12em] font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Number of Rooms</label>
                  <select id="est-rooms" value={estimate.rooms} onChange={e => setEstimate({ ...estimate, rooms: e.target.value })} className="form-input-premium">
                    <option value="1">1 Room / Studio</option>
                    <option value="2">2 Rooms</option>
                    <option value="3">3 Rooms</option>
                    <option value="4">4 Rooms</option>
                    <option value="5">5+ Rooms</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="est-distance" className="block text-[12px] uppercase tracking-[0.12em] font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Distance</label>
                  <select id="est-distance" value={estimate.distance} onChange={e => setEstimate({ ...estimate, distance: e.target.value })} className="form-input-premium">
                    <option value="local">Local (Under 50 mi)</option>
                    <option value="long">Long Distance (50–500 mi)</option>
                    <option value="cross">Cross Country (500+ mi)</option>
                  </select>
                </div>
              </div>
              <label className="flex items-center gap-3 cursor-pointer mb-8">
                <input type="checkbox" checked={estimate.packing} onChange={e => setEstimate({ ...estimate, packing: e.target.checked })} className="w-4 h-4 rounded accent-amber" />
                <span className="text-[14px]" style={{ color: 'var(--text-body)' }}>Include professional packing services</span>
              </label>
              <div className="text-center p-8 rounded-lg border border-white/5" style={{ background: 'var(--midnight)' }}>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-muted)' }}>Estimated Cost</p>
                <p className="text-5xl lg:text-6xl font-bold" style={{ color: 'var(--amber)', fontFamily: 'var(--font-heading)' }}>${getEstimate().toLocaleString()}</p>
                <p className="text-[11px] mt-3" style={{ color: 'var(--text-muted)' }}>*Approximate. Request a survey for exact pricing.</p>
              </div>
              <div className="text-center mt-6">
                <button onClick={() => scrollToSection('contact')} className="btn-primary">Schedule a Free Survey</button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section id="reviews" aria-labelledby="reviews-heading" className="py-16 md:py-20 px-6 md:px-10" style={{ background: 'rgba(201,145,58,0.015)', borderTop: '1px solid var(--border-card)', borderBottom: '1px solid var(--border-card)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="section-badge mb-4 justify-center">Testimonials</p>
              <h2 id="reviews-heading" className="text-3xl lg:text-4xl font-semibold mb-4">Trusted by those who<br /><span style={{ color: 'var(--amber)' }}>expect the best.</span></h2>
              <div className="divider divider-center"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <article key={i} className="testimonial-card">
                  <div className="flex gap-1 mb-5" aria-label={`${t.rating} out of 5 stars`}>
                    {[...Array(t.rating)].map((_, j) => (
                      <span key={j} style={{ color: 'var(--amber)' }} aria-hidden="true">★</span>
                    ))}
                  </div>
                  <p className="text-[14px] leading-relaxed mb-6 relative z-10" style={{ color: 'var(--text-body)' }}>&ldquo;{t.text}&rdquo;</p>
                  <div className="border-t border-white/5 pt-4">
                    <p className="font-semibold text-[14px]">{t.name}</p>
                    <p className="text-[12px]" style={{ color: 'var(--text-muted)' }}>{t.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICE AREA ===== */}
        <section aria-labelledby="area-heading" className="py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="section-badge mb-4 justify-center">Coverage</p>
              <h2 id="area-heading" className="text-3xl lg:text-4xl font-semibold mb-4">Greater Chicago & beyond.</h2>
              <div className="divider divider-center"></div>
              <p className="mt-4 text-[15px] max-w-xl mx-auto" style={{ color: 'var(--text-body)' }}>Serving the finest neighborhoods across Chicagoland and interstate corridors nationwide.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
              {serviceAreas.map((area, i) => (
                <div key={i} className="text-center py-4 px-3 rounded-lg border border-white/5 transition-all hover:border-amber/20" style={{ background: 'var(--midnight-card)' }}>
                  <span className="text-[13px] font-medium">{area}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a href="https://maps.google.com/?q=890+Commerce+Blvd+Chicago+IL" target="_blank" rel="noopener noreferrer" className="btn-outline-premium inline-flex items-center gap-2 text-[12px]">
                View Our Chicago Office →
              </a>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" aria-labelledby="faq-heading" className="py-16 md:py-20 px-6 md:px-10" style={{ background: 'rgba(201,145,58,0.015)', borderTop: '1px solid var(--border-card)', borderBottom: '1px solid var(--border-card)' }}>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-14">
              <p className="section-badge mb-4 justify-center">Questions</p>
              <h2 id="faq-heading" className="text-3xl lg:text-4xl font-semibold mb-4">Common questions.</h2>
              <div className="divider divider-center"></div>
            </div>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="faq-trigger-premium"
                    aria-expanded={expandedFaq === i}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon">{expandedFaq === i ? '−' : '+'}</span>
                  </button>
                  {expandedFaq === i && (
                    <div className="pb-5 pr-10">
                      <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-body)' }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" aria-labelledby="contact-heading" className="py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            <div>
              <p className="section-badge mb-4">Get Started</p>
              <h2 id="contact-heading" className="text-3xl lg:text-4xl font-semibold mb-6">Request your<br /><span style={{ color: 'var(--amber)' }}>complimentary survey.</span></h2>
              <div className="divider"></div>
              <p className="mt-5 text-[15px] leading-relaxed mb-10" style={{ color: 'var(--text-body)' }}>
                Tell us about your move and a relocation specialist will contact you within 2 hours with a detailed proposal. No obligations, no pressure.
              </p>
              <div className="space-y-1">
                <div className="contact-info-item">
                  <div className="contact-icon" aria-hidden="true">📞</div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.12em]" style={{ color: 'var(--text-muted)' }}>Speak With Us</p>
                    <a href="tel:+15553456683" className="font-semibold text-[15px] hover:text-amber transition-colors">(555) 345-6683</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon" aria-hidden="true">✉</div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.12em]" style={{ color: 'var(--text-muted)' }}>Email</p>
                    <a href="mailto:hello@meridianmoving.com" className="font-semibold text-[15px] hover:text-amber transition-colors">hello@meridianmoving.com</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon" aria-hidden="true">◎</div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.12em]" style={{ color: 'var(--text-muted)' }}>Chicago Office</p>
                    <p className="font-semibold text-[15px]">890 Commerce Blvd, Chicago, IL 60614</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon" aria-hidden="true">◷</div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.12em]" style={{ color: 'var(--text-muted)' }}>Hours</p>
                    <p className="font-semibold text-[15px]">Mon–Fri 7AM–8PM · Sat 8AM–6PM · Sun 9AM–4PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card">
              <form onSubmit={handleQuoteSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[12px] uppercase tracking-[0.12em] font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Your Name *</label>
                  <input id="name" name="name" type="text" required placeholder="John Smith" className="form-input-premium" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-[12px] uppercase tracking-[0.12em] font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Email *</label>
                    <input id="email" name="email" type="email" required placeholder="john@example.com" className="form-input-premium" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[12px] uppercase tracking-[0.12em] font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Phone *</label>
                    <input id="phone" name="phone" type="tel" required placeholder="(555) 000-0000" className="form-input-premium" />
                  </div>
                </div>
                <div>
                  <label htmlFor="move-type" className="block text-[12px] uppercase tracking-[0.12em] font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Move Type *</label>
                  <select id="move-type" name="move_type" required className="form-input-premium">
                    <option value="">Select move type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="long-distance">Long Distance</option>
                    <option value="specialty">Specialty Items</option>
                    <option value="storage">Storage Only</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details" className="block text-[12px] uppercase tracking-[0.12em] font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Move Details</label>
                  <textarea id="details" name="details" rows={4} placeholder="Moving from... to... with approximately X items..." className="form-input-premium resize-none" />
                </div>
                <button type="submit" disabled={formStatus === 'loading'} className="btn-primary w-full justify-center text-center">
                  {formStatus === 'loading' ? 'Sending...' : 'Request Free Survey'}
                </button>
                {formStatus === 'success' && (
                  <div className="p-4 rounded-lg text-center text-[14px]" style={{ background: 'rgba(201,145,58,0.08)', border: '1px solid rgba(201,145,58,0.2)', color: 'var(--amber-light)' }}>
                    Thank you. A relocation specialist will contact you within 2 hours.
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="p-4 rounded-lg text-center text-[14px]" style={{ background: 'rgba(220,50,50,0.08)', border: '1px solid rgba(220,50,50,0.2)', color: '#f87171' }}>
                    Something went wrong. Please call us at (555) 345-6683.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer role="contentinfo" className="footer-premium py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="brand-mark" style={{ width: 32, height: 32 }}><span style={{ fontSize: '0.9rem' }}>M</span></div>
                <span className="font-semibold tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>Meridian Moving Co.</span>
              </div>
              <p className="text-[13px] leading-relaxed max-w-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                Premium relocation services for discerning clients since 2010. Licensed, insured, and DOT certified.
              </p>
              <p className="text-[11px] tracking-wide" style={{ color: 'var(--text-muted)' }}>DOT #MC-2010-55678 · BBB A+ Rating</p>
            </div>
            <div>
              <h3 className="text-[12px] uppercase tracking-[0.15em] font-semibold mb-4" style={{ color: 'var(--amber)' }}>Navigate</h3>
              <div className="space-y-2">
                {['Services', 'About', 'Reviews', 'FAQ', 'Contact'].map(item => (
                  <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block text-[13px] hover:text-amber transition-colors" style={{ color: 'var(--text-muted)', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>{item}</button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[12px] uppercase tracking-[0.15em] font-semibold mb-4" style={{ color: 'var(--amber)' }}>Contact</h3>
              <div className="space-y-2 text-[13px]" style={{ color: 'var(--text-muted)' }}>
                <a href="tel:+15553456683" className="block hover:text-amber transition-colors">(555) 345-6683</a>
                <a href="mailto:hello@meridianmoving.com" className="block hover:text-amber transition-colors">hello@meridianmoving.com</a>
                <p>890 Commerce Blvd<br />Chicago, IL 60614</p>
              </div>
              <div className="flex gap-3 mt-5">
                {[
                  { label: 'Facebook', char: 'f' },
                  { label: 'Instagram', char: 'ig' },
                  { label: 'LinkedIn', char: 'in' },
                ].map((s, i) => (
                  <a key={i} href={`https://${s.label.toLowerCase()}.com/meridianmoving`} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-9 h-9 rounded-lg border border-white/5 flex items-center justify-center text-[11px] font-semibold hover:border-amber/30 hover:text-amber transition-all" style={{ color: 'var(--text-muted)' }}>{s.char}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>© 2024 Meridian Moving Co. All rights reserved.</p>
            <div className="flex gap-6 text-[11px]" style={{ color: 'var(--text-muted)' }}>
              <a href="#" className="hover:text-amber transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
