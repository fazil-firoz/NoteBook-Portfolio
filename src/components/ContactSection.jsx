import { NbSection } from './NbSection'

const CONTACT_ITEMS = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'fazzilfiroz@gmail.com',
    href: 'mailto:fazzilfiroz@gmail.com',
    sub: 'Send an email anytime',
    noteColor: 'note-cream',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 90486 34881',
    href: 'tel:+919048634881',
    sub: 'Mobile / WhatsApp',
    noteColor: 'note-mint',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/fazil-firoz',
    href: 'https://github.com/fazil-firoz',
    sub: 'Explore repositories & projects',
    noteColor: 'note-yellow',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/fazzil-firoz',
    href: 'https://linkedin.com/in/fazzil-firoz',
    sub: 'Connect professionally',
    noteColor: 'note-blue',
  },
  {
    icon: '🌐',
    label: 'Old Portfolio',
    value: 'fazil-firoz.github.io/Portfolio_new',
    href: 'https://fazil-firoz.github.io/Portfolio_new/',
    sub: 'Previous portfolio showcase',
    noteColor: 'note-pink',
  },
]

export function ContactSection() {
  return (
    <NbSection id="contact" extraClass="nb-neat-section">
      <h2 className="section-heading">Get In Touch</h2>
      <span className="heading-gap" />

      <div className="contact-container">
        {/* Left column: Address & Resume card */}
        <div className="contact-info-card sticky-note-card note-yellow" style={{ '--d': '0.1s' }}>
          <span className="card-tape-top" aria-hidden="true" />
          <h3 className="contact-card-title">📍 Location &amp; Address</h3>
          <p className="contact-address-text">
            <strong>Fazil Firoz</strong><br />
            Erakkingal (H), Mulayankavu (PO),<br />
            Kulukkallur, Palakkad,<br />
            Kerala 679337, India
          </p>

          <span className="contact-divider" />

          <h4 className="contact-card-subhead">📄 Resume &amp; Curriculum Vitae</h4>
          <p className="contact-resume-desc">
            Looking for a full copy of my CV with detailed technical skills and project descriptions?
          </p>
          <a
            href="mailto:fazzilfiroz@gmail.com?subject=Requesting%20Fazil%20Firoz%20Resume"
            target="_blank"
            rel="noreferrer"
            className="contact-resume-btn"
          >
            📎 Request / Download Resume
          </a>
        </div>

        {/* Right column: Social & Direct Links */}
        <div className="contact-links-grid">
          {CONTACT_ITEMS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`contact-item-card sticky-note-card ${item.noteColor}`}
              style={{ '--d': `${0.15 + i * 0.1}s` }}
            >
              <span className="contact-item-icon">{item.icon}</span>
              <div className="contact-item-details">
                <span className="contact-item-label">{item.label}</span>
                <span className="contact-item-val">{item.value}</span>
                <span className="contact-item-sub">{item.sub}</span>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="nb-footer">
        <p>
          Designed &amp; Hand-Crafted with 💙 &amp; Notebook Vibes —{' '}
          <span className="footer-name">Fazil Firoz</span>
          &nbsp;© {new Date().getFullYear()}
        </p>
        <p>Junior Software Engineer · Kochi &amp; Palakkad, Kerala, India</p>
      </footer>
    </NbSection>
  )
}
