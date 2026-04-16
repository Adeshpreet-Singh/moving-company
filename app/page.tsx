"use client";
import { useEffect, useRef, useState } from "react";

/* ──── SWIFTMOVE — Moving Company Landing Page ──── */
/* Layout: Horizontal scroll sections + split hero + bento grid services */

const MOVING_STATS = [
  { num: "12K+", label: "Moves Completed" },
  { num: "98%", label: "On-Time Rate" },
  { num: "4.9★", label: "Average Rating" },
  { num: "50+", label: "Cities Covered" },
];

const MOVING_SERVICES = [
  {
    title: "Residential Moving",
    desc: "From studio apartments to sprawling estates, our residential moving teams handle every item with white-glove care. We disassemble furniture, wrap everything in protective materials, and reassemble at your new home. Packing supplies included in every quote.",
    img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=400&fit=crop",
    price: "Starting at $299",
  },
  {
    title: "Commercial Relocation",
    desc: "Minimize downtime with our commercial moving services. We work nights and weekends to relocate offices, retail spaces, and warehouses without disrupting your business operations. IT equipment handling and document security protocols included.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    price: "Custom Quote",
  },
  {
    title: "Long-Distance Moves",
    desc: "Cross-state or cross-country, SwiftMove delivers your belongings safely with real-time GPS tracking on every shipment. Dedicated trucks mean your items are never mixed with other customers' possessions. Delivery windows guaranteed.",'
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    price: "Starting at $899",
  },
  {
    title: "Packing & Unpacking",
    desc: "Our full-service packing team uses professional-grade materials to protect every item in your home. From custom crating for artwork to wardrobe boxes for your closet, we handle it all. Unpacking and setup at destination available.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    price: "Starting at $149",
  },
  {
    title: "Storage Solutions",
    desc: "Need temporary storage between moves? Our climate-controlled, 24/7 monitored facilities keep your belongings safe for days, weeks, or months. Free pickup from storage to your new address when you are ready.",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    price: "$89/month",
  },
  {
    title: "Specialty Items",
    desc: "Pianos, pool tables, safes, artwork, and antiques require specialized handling. Our trained crews use custom rigging equipment and climate-controlled transport to ensure your most valuable items arrive in perfect condition.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
    price: "Custom Quote",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Book Online", desc: "Fill out our simple form with your moving details. Get an instant ballpark estimate and choose your preferred date." },
  { step: "02", title: "Virtual Survey", desc: "A moving consultant video-calls you to walk through your home and provide a binding quote. No surprises on moving day." },
  { step: "03", title: "Moving Day", desc: "Our uniformed crew arrives on time with a fully stocked truck. We wrap, load, transport, and unload with care." },
  { step: "04", title: "Settle In", desc: "We reassemble furniture, place boxes in the right rooms, and remove all packing debris. You just enjoy your new home." },
];

const TESTIMONIALS = [
  { text: "SwiftMove handled our 4-bedroom move across state lines flawlessly. Everything arrived on time and nothing was damaged. The crew was incredibly professional and fast.", author: "Rachel & Tom P.", role: "Long-Distance Move", rating: 5 },
  { text: "We relocated our 200-person office over a single weekend. SwiftMove worked through the night and by Monday morning, every desk was set up and every computer was running.", author: "James K.", role: "Corporate Client", rating: 5 },
  { text: "I have moved 8 times in 10 years for work. SwiftMove is hands down the best company I have ever used. Their pricing is transparent and their crews genuinely care.", author: "Maria L.", role: "Frequent Mover", rating: 5 },
];

const BEFORE_AFTER = [
  { before: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop", after: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&h=300&fit=crop", label: "Living Room" },
  { before: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=300&fit=crop", after: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop", label: "Bedroom" },
  { before: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop", after: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop", label: "Office" },
];

export default function SwiftMovePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-scale, .stagger-children").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav className="nav-glass" style={{ position: "sticky", top: 0, zIndex: 50 }>>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }>>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }>>
            <span style={{ fontSize: 26 }>>🚚</span>
            <span className="heading" style={{ fontSize: "1.2rem" }>>
              SWIFT<span className="neon-text">MOVE</span>
            </span>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }>>
            {["Services", "Process", "Gallery", "Testimonials", "Contact"].map((item) => (
              <a key={item} href={'#${item.toLowerCase(})}'} style={{ color: "var(--text-secondary)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.3s" }>>
                {item}
              </a>
            ))}
            <a href="#contact" className="project-btn" style={{ fontSize: "0.7rem", padding: "10px 22px" }>>Get Quote</a>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </nav>

      {/* HERO — Full-width image with overlay text */}
      <section className="hero" style={{ position: "relative", minHeight: "85vh", display: "flex", alignItems: "center" }>>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }>>
          <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1600&h=900&fit=crop" alt="Moving day" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: '0.9' }> />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 100%)" }>>
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "center" }>>
          <div>
            <div className="badge" style={{ marginBottom: 20 }>>Top-Rated Moving Company 2024
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <h1 className="heading" style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", marginBottom: 20, lineHeight: 1.02 }>>
              WE MOVE YOUR<br />
              <span className="gradient-text">LIFE FORWARD</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 32, maxWidth: 520 }>>
              From your first box to your last piece of furniture, SwiftMove delivers a seamless moving experience. Transparent pricing, GPS-tracked shipments, and a 98% on-time delivery rate that speaks for itself.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }>>
              <a href="#contact" className="project-btn cta-pulse">Get Free Estimate</a>
              <a href="#process" className="project-btn-outline">How It Works</a>
              <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginLeft: 8 }>>No credit card required</span>
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <div className="card reveal-scale" style={{ padding: "2rem" }>>
            <h3 className="heading" style={{ fontSize: "1rem", marginBottom: 20, textAlign: "center" }>>Instant Estimate</h3>
            <form style={{ display: "flex", flexDirection: "column", gap: 14 }>>
              <div>
                <label style={{ display: "block", marginBottom: 4, fontSize: "0.75rem", color: "var(--text-muted)" }>>Moving From</label>
                <input type="text" placeholder="City or ZIP code" />
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <div>
                <label style={{ display: "block", marginBottom: 4, fontSize: "0.75rem", color: "var(--text-muted)" }>>Moving To</label>
                <input type="text" placeholder="City or ZIP code" />
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <div>
                <label style={{ display: "block", marginBottom: 4, fontSize: "0.75rem", color: "var(--text-muted)" }>>Home Size</label>
                <select defaultValue="">
                  <option value="" disabled>Select size</option>
                  <option>Studio / 1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>3 Bedrooms</option>
                  <option>4+ Bedrooms</option>
                  <option>Office / Commercial</option>
                </select>
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <div>
                <label style={{ display: "block", marginBottom: 4, fontSize: "0.75rem", color: "var(--text-muted)" }>>Moving Date</label>
                <input type="text" placeholder="Preferred date" />
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <button type="submit" className="project-btn" style={{ width: "100%", textAlign: "center", marginTop: 4 }>>Calculate Estimate</button>
            </form>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </section>

      {/* Stats Bar */}
      <div style={{ background: "var(--dark-surface)", borderTop: "1px solid var(--dark-border)", borderBottom: "1px solid var(--dark-border)", padding: "32px 0" }>>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "center" }>>
          {MOVING_STATS.map((s, i) => (
            <div key={i} className="reveal" style={{  transitionDelay: `${i * 0.1} }}s` }>>
              <div className="stat-number">{s.num}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: 6 }>>{s.label}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          ))}
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>

      {/* Services — Bento Grid Layout */}
      <section id="services" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }>>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 60 }>>
          <div className="badge" style={{ marginBottom: 16 }>>Our Services
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <h2 className="heading" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }>>
            Moving Solutions For <span className="neon-text">Every Need</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0" }>>
            Whether you are moving across the street or across the country, we have the expertise, equipment, and dedication to get you there safely.
          </p>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }>>
          {MOVING_SERVICES.map((svc, i) => (
            <div key={i} className="card" style={{ padding: 0, overflow: "hidden" }>>
              <div className="img-hover" style={{ height: 200 }>>
                <img src={svc.img} alt={svc.title} style={{ width: "100%", height: "100%", objectFit: "cover" }> />
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <div style={{ padding: "1.5rem" }>>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }>>
                  <h3 className="heading" style={{ fontSize: "1.1rem" }>>{svc.title}</h3>
                  <span className="neon-text" style={{ fontSize: "0.8rem", fontWeight: 600 }>>{svc.price}</span>
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.7 }>>{svc.desc}</p>
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          ))}
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </section>

      {/* Process Steps — Horizontal Timeline */}
      <section id="process" className="section-alt" style={{ padding: "100px 24px" }>>
        <div style={{ maxWidth: 1200, margin: "0 auto" }>>
          <div className="reveal" style={{ textAlign: "center", marginBottom: 60 }>>
            <div className="badge" style={{ marginBottom: 16 }>>How It Works
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <h2 className="heading" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }>>
              Four Steps To <span className="neon-text">Stress-Free</span> Moving
            </h2>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }>>
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} style={{ textAlign: "center", position: "relative" }>>
                {i < 3 && <div style={{ position: "absolute", top: 32, right: -12, width: 24, height: 2, background: "var(--neon)", opacity: '0.9' }>>
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>}
                <div style={{ width: 64, height: 64, borderRadius: "50%", border: "2px solid var(--neon)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", background: "rgba(255,107,53,0.06)" }>>
                  <span className="neon-text heading" style={{ fontSize: "1.2rem" }>>{step.step}</span>
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                <h3 className="heading" style={{ fontSize: "1.1rem", marginBottom: 10 }>>{step.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.7 }>>{step.desc}</p>
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            ))}
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </section>

      {/* Before/After Gallery */}
      <section id="gallery" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }>>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }>>
          <div className="badge" style={{ marginBottom: 16 }>>Our Work
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <h2 className="heading" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }>>
            Before &amp; <span className="neon-text">After</span> Moves
          </h2>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }>>
          {BEFORE_AFTER.map((item, i) => (
            <div key={i} className="card" style={{ padding: 0, overflow: "hidden" }>>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", height: 180 }>>
                <div style={{ position: "relative" }>>
                  <img src={item.before} alt="Before" style={{ width: "100%", height: "100%", objectFit: "cover" }> />
                  <span style={{ position: "absolute", bottom: 8, left: 8, background: "rgba(0,0,0,0.7)", padding: "2px 10px", fontSize: "0.65rem", borderRadius: 2, letterSpacing: "0.1em", textTransform: "uppercase" }>>Before</span>
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                <div style={{ position: "relative" }>>
                  <img src={item.after} alt="After" style={{ width: "100%", height: "100%", objectFit: "cover" }> />
                  <span style={{ position: "absolute", bottom: 8, left: 8, background: "rgba(255,107,53,0.9)", color: "#000", padding: "2px 10px", fontSize: "0.65rem", borderRadius: 2, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }>>After</span>
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <div style={{ padding: "1rem", textAlign: "center" }>>
                <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }>>{item.label} Move</span>
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          ))}
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-alt" style={{ padding: "100px 24px" }>>
        <div style={{ maxWidth: 800, margin: "0 auto" }>>
          <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }>>
            <div className="badge" style={{ marginBottom: 16 }>>Reviews
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <h2 className="heading" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }>>
              Happy <span className="neon-text">Customers</span>
            </h2>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <div className="card reveal" style={{ textAlign: "center", padding: "3rem", minHeight: 220 }>>
            <div style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8, fontStyle: "italic", marginBottom: 24 }>>
              &ldquo;{TESTIMONIALS[activeTestimonial].text}&rdquo;
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <div style={{ fontSize: "0.85rem", color: "var(--neon)", fontWeight: 600 }>>
              {"★".repeat(TESTIMONIALS[activeTestimonial].rating)}
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <div style={{ marginTop: 8 }>>
              <strong>{TESTIMONIALS[activeTestimonial].author}</strong>
              <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }>>{TESTIMONIALS[activeTestimonial].role}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }>>
              {TESTIMONIALS.map((_, i) => (
                <button key={i> onClick={() => setActiveTestimonial(i)} style={{ width: 10, height: 10, borderRadius: "50%", border: "none", background: i === activeTestimonial ? "var(--neon)" : "var(--dark-border)", cursor: "pointer" }} />
              ))}
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: "80px 24px", textAlign: "center", position: "relative", overflow: "hidden" }>>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(255,107,53,0.08) 0%, transparent 70%)", pointerEvents: "none" }>>
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        <div className="reveal" style={{ position: "relative", zIndex: 2 }>>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: 16 }>>
            Ready To <span className="gradient-text">Make Your Move?</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }>>
            Join 12,000+ happy customers who trusted SwiftMove with their most important possessions. Get your free quote in 60 seconds.
          </p>
          <a href="#contact" className="project-btn cta-pulse" style={{ fontSize: "0.9rem", padding: "16px 48px" }>>Start Your Free Quote</a>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-alt" style={{ padding: "100px 24px" }>>
        <div style={{ maxWidth: 1000, margin: "0 auto" }>>
          <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }>>
            <div className="badge" style={{ marginBottom: 16 }>>Contact Us
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <h2 className="heading" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }>>
              Request Your <span className="neon-text">Moving Quote</span>
            </h2>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <div className="card reveal" style={{ padding: "2.5rem" }>>
            <form style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }>>
              <div>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.78rem", color: "var(--text-muted)" }>>Full Name</label>
                <input type="text" placeholder="Jane Doe" />
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <div>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.78rem", color: "var(--text-muted)" }>>Phone</label>
                <input type="text" placeholder="(555) 987-6543" />
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <div>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.78rem", color: "var(--text-muted)" }>>Email</label>
                <input type="text" placeholder="jane@example.com" />
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <div>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.78rem", color: "var(--text-muted)" }>>Move Type</label>
                <select defaultValue="">
                  <option value="" disabled>Select type</option>
                  <option>Residential - Local</option>
                  <option>Residential - Long Distance</option>
                  <option>Commercial</option>
                  <option>Packing Only</option>
                  <option>Storage</option>
                </select>
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <div>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.78rem", color: "var(--text-muted)" }>>Origin Address</label>
                <input type="text" placeholder="123 Current St, City" />
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <div>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.78rem", color: "var(--text-muted)" }>>Destination Address</label>
                <input type="text" placeholder="456 New Ave, City" />
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <div style={{ gridColumn: "1 / -1" }>>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.78rem", color: "var(--text-muted)" }>>Additional Details</label>
                <textarea rows={4> placeholder="Tell us about any special items, timing constraints, or other requirements..." />
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <div style={{ gridColumn: "1 / -1", textAlign: "center" }>>
                <button type="submit" className="project-btn cta-pulse">Get My Free Quote</button>
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            </form>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </section>

      {/* Footer */}
      <footer className="footer-glow" style={{ padding: "60px 24px 32px", background: "var(--dark-surface)" }>>
        <div style={{ maxWidth: 1200, margin: "0 auto" }>>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, marginBottom: 40 }>>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }>>
                <span style={{ fontSize: 24 }>>🚚</span>
                <span className="heading" style={{ fontSize: "0.95rem" }>>SWIFTMOVE</span>
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.7 }>>
                Professional moving services with transparent pricing and guaranteed delivery windows. Licensed, insured, DOT certified.
              </p>
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <div>
              <h4 className="heading" style={{ fontSize: "0.8rem", marginBottom: 16 }>>Services</h4>
              {["Residential", "Commercial", "Long-Distance", "Packing"].map((s) => (
                <a key={s} href="#services" style={{ display: "block", color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: 8, textDecoration: "none" }>>{s}</a>
              ))}
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <div>
              <h4 className="heading" style={{ fontSize: "0.8rem", marginBottom: 16 }>>Company</h4>
              {["About", "Careers", "Blog", "Insurance Info"].map((s) => (
                <a key={s} href="#" style={{ display: "block", color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: 8, textDecoration: "none" }>>{s}</a>
              ))}
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <div>
              <h4 className="heading" style={{ fontSize: "0.8rem", marginBottom: 16 }>>Get In Touch</h4>
              <a href="tel:+18005559876" className="neon-text" style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", textDecoration: "none" }>>(800) 555-9876</a>
              <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: 8 }>>Mon-Sat 7AM - 9PM</p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }>>hello@swiftmove.com</p>
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <div style={{ borderTop: "1px solid var(--dark-border)", paddingTop: 24, textAlign: "center", color: "var(--text-muted)", fontSize: "0.75rem" }>>
            © 2026 SwiftMove Inc. All rights reserved. USDOT #1234567 | MC #987654
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </footer>
    
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
  );
}
