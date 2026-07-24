const services = [
  { number: "01", title: "Certified Arborists", description: "Knowledgeable, on-site guidance from consultation through cleanup." },
  { number: "02", title: "Tree Pruning", description: "Thoughtful pruning plans shaped around the health and structure of each tree." },
  { number: "03", title: "Tree Removal", description: "Careful removal of hazardous, damaged, or unwanted trees, including the stump." },
  { number: "04", title: "Tree Inspections", description: "Clear, practical assessments that help you understand risk from root to canopy." },
  { number: "05", title: "Crane Services", description: "Safety-led crane support for large trees and technically complex removals." },
  { number: "06", title: "Spider Lift Services", description: "Low-impact access for tight spaces where traditional equipment cannot safely go." },
  { number: "07", title: "Ornamental Pruning", description: "Detailed care for small trees and shrubs that protects their natural form." },
  { number: "08", title: "Emergency Response", description: "Responsive support for storm damage and urgent tree hazards, day or night." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tri-County Tree Services home">
          <span className="brand-mark" aria-hidden="true">T</span>
          <span><strong>Tri-County</strong><small>Tree Services</small></span>
        </a>
        <div className="header-call">
          <span>24-hour emergency service</span>
          <a href="tel:+16303732554">630 373 2554</a>
        </div>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a><a href="#about">Our mission</a><a href="#arborist">Why certified</a>
          <a className="nav-cta" href="#contact">Request a consultation</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <div><a href="#services">Services</a><a href="#about">Our mission</a><a href="#arborist">Why certified</a><a href="#contact">Request a consultation</a></div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Local expertise. Lasting care.</p>
          <h1>Professional<br />solutions,<br /><span>integrity first.</span></h1>
          <p className="hero-intro">Safe, thoughtful tree care built around your property, your priorities, and the long-term health of your landscape.</p>
          <div className="button-row">
            <a className="button button-primary" href="#contact">Get a free consultation</a>
            <a className="text-link light" href="#services">Explore our services <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Professional tree-care crew at work">
          <img src="/images/tree-crew.jpg" alt="Professional tree-care crew working beside arborist equipment" />
          <div className="hero-note"><strong>20+</strong><span>years of hands-on tree-care experience</span></div>
        </div>
      </section>

      <section className="intro section-shell" id="about">
        <div className="section-heading"><p className="eyebrow green">Who we are</p><h2>Better care for the places you live.</h2></div>
        <div className="intro-copy">
          <p>Your property is more than a job site. It is where life happens. That is why every recommendation starts with listening, a careful on-site assessment, and a plan tailored to the trees and people involved.</p>
          <p>From routine pruning to complex removals, the same certified professional stays accountable for clear communication, safe work, and a clean finish.</p>
          <a className="text-link" href="#contact">Meet us on your property <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="services section-shell" id="services">
        <div className="services-top">
          <div><p className="eyebrow green">Tree care, made personal</p><h2>One trusted team for every branch of the job.</h2></div>
          <p>Practical answers, well-maintained equipment, and solutions chosen for your property—not a one-size-fits-all checklist.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p>
              <a href="#contact" aria-label={"Ask about " + service.title}>Ask about this service <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="proof">
        <div className="proof-image"><img src="/images/arborist-pruning.jpg" alt="Arborist pruning a mature tree from the canopy" /></div>
        <div className="proof-copy">
          <p className="eyebrow mint">Safety and satisfaction</p><h2>Experience that reaches the right solution.</h2>
          <p>Strong tree work is equal parts planning, judgment, and execution. Our work begins with the safest approach and ends only when your property is ready to enjoy again.</p>
          <div className="stats"><div><strong>20+</strong><span>Years in the industry</span></div><div><strong>24/7</strong><span>Emergency availability</span></div><div><strong>1:1</strong><span>Owner-led consultation</span></div></div>
        </div>
      </section>

      <section className="arborist section-shell" id="arborist">
        <div className="arborist-copy">
          <p className="eyebrow green">Certified expertise</p><h2>What does a certified arborist bring to your property?</h2>
          <p>Certified arborists pair real-world experience with ongoing education in tree biology, diagnosis, safety, and responsible care. That means recommendations consider the whole tree—not just the most visible symptom.</p>
          <p>You receive a clearer explanation of the options, an honest view of risk, and work designed to protect both the tree and the space around it.</p>
          <a className="button button-dark" href="#contact">Talk with an arborist</a>
        </div>
        <div className="arborist-image"><img src="/images/arborist-climbing.jpg" alt="Certified arborist secured in a mature tree" /><span className="image-caption">Knowledge in your canopy</span></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-info">
          <p className="eyebrow mint">Start with a conversation</p><h2>Let&apos;s take a look at your trees.</h2>
          <p>Tell us what is happening and we will help you choose the right next step. Existing and future clients can call at any hour for emergency service.</p>
          <div className="contact-list">
            <div><span>Call</span><a href="tel:+16303732554">630 373 2554</a></div>
            <div><span>Email</span><a href="mailto:admin@tri-countytreeservices.com">admin@tri-countytreeservices.com</a></div>
            <div><span>Service area</span><p>DuPage County, Illinois and surrounding communities</p></div>
          </div>
        </div>
        <form className="contact-form" action="mailto:admin@tri-countytreeservices.com" method="post" encType="text/plain">
          <div className="form-heading"><span>Consultation request</span><strong>How can we help?</strong></div>
          <div className="form-grid">
            <label>First name<input name="first-name" type="text" autoComplete="given-name" required /></label>
            <label>Last name<input name="last-name" type="text" autoComplete="family-name" required /></label>
          </div>
          <label>Phone number<input name="phone" type="tel" autoComplete="tel" required /></label>
          <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
          <label>What do you need help with?<textarea name="project" rows={4} placeholder="Pruning, removal, inspection, storm damage..." required /></label>
          <button className="button button-primary" type="submit">Send consultation request</button>
          <p className="form-note">Submitting opens your email app so you can review the message before sending.</p>
        </form>
      </section>

      <footer>
        <div className="footer-main">
          <div className="brand footer-brand"><span className="brand-mark" aria-hidden="true">T</span><span><strong>Tri-County</strong><small>Tree Services</small></span></div>
          <p>Certified tree care delivered with safety, transparency, and respect for your property.</p>
          <div className="footer-links"><a href="#services">Services</a><a href="#about">Our mission</a><a href="#arborist">Why certified</a><a href="#contact">Contact</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Tri-County Tree Services</span><a href="tel:+16303732554">24-hour emergency line: 630 373 2554</a></div>
      </footer>
    </main>
  );
}
