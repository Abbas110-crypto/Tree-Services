const services = [
  {
    title: "Tree Pruning",
    text: "Selective canopy care that improves safety, airflow, structure, and curb appeal without stripping the tree of its natural shape.",
    image: "/images/arborist-pruning.jpg",
  },
  {
    title: "Safe Removal",
    text: "Planned removals for dead, storm-damaged, leaning, or crowded trees with controlled rigging and careful cleanup.",
    image: "/images/tree-crew.jpg",
  },
  {
    title: "Certified Inspections",
    text: "On-site arborist assessments for pests, decay, limb risk, construction stress, and long-term tree-health decisions.",
    image: "/images/arborist-climbing.jpg",
  },
  {
    title: "Emergency Response",
    text: "Fast help after high winds, split trunks, broken limbs, and urgent hazards around homes, drives, and utilities.",
    image: "/images/tree-crew.jpg",
  },
];

const processSteps = [
  ["01", "Walk the property", "We listen first, inspect the tree from root flare to canopy, and explain what is happening in plain language."],
  ["02", "Design the safest plan", "Every job gets the right access method, crew size, equipment, and protection plan for the surrounding landscape."],
  ["03", "Finish clean", "The work is not complete until the site is tidy, the next steps are clear, and your property is ready to enjoy."],
];

const gallery = [
  { src: "/images/tree-crew.jpg", alt: "Tree-care crew working beside a residential landscape", label: "Residential tree care" },
  { src: "/images/arborist-pruning.jpg", alt: "Arborist pruning a mature tree from the canopy", label: "Canopy pruning" },
  { src: "/images/arborist-climbing.jpg", alt: "Certified arborist secured in a mature tree", label: "Certified climbing" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tri-County Tree Services home">
          <span className="brand-mark" aria-hidden="true">TC</span>
          <span><strong>Tri-County</strong><small>Tree Services</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#gallery">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-phone" href="tel:+16303732554"><span>24/7 emergency</span>630 373 2554</a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span></span><span></span><span></span></summary>
          <div><a href="#services">Services</a><a href="#process">Process</a><a href="#gallery">Work</a><a href="#contact">Contact</a></div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          <img src="/images/tree-crew.jpg" alt="" />
        </div>
        <div className="hero-panel reveal">
          <p className="kicker">Certified arborist care</p>
          <h1>Landscape-safe tree service with a modern, careful touch.</h1>
          <p className="hero-copy">Pruning, removals, inspections, crane access, and storm response shaped around your trees, your home, and the landscape you want to protect.</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Book a consultation</a>
            <a className="button ghost" href="#services">View services</a>
          </div>
        </div>
        <div className="hero-card reveal delay-one">
          <strong>20+</strong>
          <span>years of practical tree-care experience across DuPage County</span>
        </div>
        <div className="hero-leaf" aria-hidden="true"></div>
      </section>

      <section className="intro section-pad">
        <div className="intro-label reveal">Garden-minded tree care</div>
        <div className="intro-copy reveal delay-one">
          <h2>Thoughtful tree care that protects the whole landscape.</h2>
          <p>Your property deserves more than a quick cut. We plan tree work around access, safety, plant health, and the gardens, lawns, and structures surrounding every branch.</p>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-head reveal">
          <p className="kicker dark">What we do</p>
          <h2>Complete tree care for healthy, safer outdoor spaces.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card reveal" style={{ "--i": index } as React.CSSProperties} key={service.title}>
              <div className="service-image"><img src={service.image} alt="" /></div>
              <div className="service-body">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" aria-label={"Ask about " + service.title}>Request service</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-image reveal"><img src="/images/arborist-pruning.jpg" alt="Arborist pruning a mature tree" /></div>
        <div className="feature-copy reveal delay-one">
          <p className="kicker">Why certified care matters</p>
          <h2>Every cut should have a reason.</h2>
          <p>Certified arborist guidance keeps the work focused on tree biology, site safety, and long-term landscape health. You get recommendations that are practical, honest, and specific to the condition of each tree.</p>
          <div className="metric-row">
            <div><strong>24/7</strong><span>Emergency availability</span></div>
            <div><strong>1:1</strong><span>Owner-led guidance</span></div>
            <div><strong>Clean</strong><span>Respectful job sites</span></div>
          </div>
        </div>
      </section>

      <section className="process section-pad" id="process">
        <div className="section-head split reveal">
          <p className="kicker dark">How it works</p>
          <h2>A calm, organized process from first call to final cleanup.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map(([number, title, text]) => (
            <article className="process-card reveal" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery" id="gallery">
        <div className="gallery-head reveal">
          <p className="kicker dark">Field work</p>
          <h2>Skilled crews, clean job sites, and work you can feel confident about.</h2>
        </div>
        <div className="gallery-track">
          {gallery.map((item) => (
            <figure className="gallery-item reveal" key={item.label}>
              <img src={item.src} alt={item.alt} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy reveal">
          <p className="kicker">Start with a conversation</p>
          <h2>Let&apos;s take a careful look at your trees.</h2>
          <p>Call any hour for storm concerns, or send a consultation request for pruning, removal, inspection, crane service, spider lift access, or ornamental care.</p>
          <div className="contact-list">
            <a href="tel:+16303732554"><span>Call</span>630 373 2554</a>
            <a href="mailto:admin@tri-countytreeservices.com"><span>Email</span>admin@tri-countytreeservices.com</a>
            <p><span>Service area</span>DuPage County, Illinois and nearby communities</p>
          </div>
        </div>
        <form className="contact-form reveal delay-one" action="mailto:admin@tri-countytreeservices.com" method="post" encType="text/plain">
          <div className="form-top"><span>Appointment request</span><strong>Tell us what you need.</strong></div>
          <div className="form-grid">
            <label>First name<input name="first-name" type="text" autoComplete="given-name" required /></label>
            <label>Last name<input name="last-name" type="text" autoComplete="family-name" required /></label>
          </div>
          <label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          <label>Project details<textarea name="project" rows={4} placeholder="Tree pruning, removal, inspection, storm damage..." required /></label>
          <button className="button primary" type="submit">Send request</button>
        </form>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark" aria-hidden="true">TC</span><span><strong>Tri-County</strong><small>Tree Services</small></span></div>
        <p>Certified tree care delivered with safety, clarity, and respect for every property.</p>
        <a href="tel:+16303732554">24-hour emergency line: 630 373 2554</a>
      </footer>
    </main>
  );
}
