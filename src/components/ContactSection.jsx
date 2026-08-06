import { NbSection } from './NbSection'

const CONTACTS = [
  { icon: '✉', label: 'Email',    value: 'fazzil.firoz@gmail.com',  href: 'mailto:fazzil.firoz@gmail.com',         d: '0.15s' },
  { icon: '☎', label: 'Phone',    value: '+91 90486 34881',          href: 'tel:+919048634881',                     d: '0.30s' },
  { icon: '⊡', label: 'GitHub',   value: 'github.com/fazil-firoz', href: 'https://github.com/fazil-firoz',         d: '0.45s' },
  { icon: 'in', label: 'LinkedIn', value: 'fazzil-firoz',            href: 'https://linkedin.com/in/fazzil-firoz',  d: '0.60s' },
]

export function ContactSection() {
  return (
    <NbSection id="contact">
      <h2 className="section-heading">Let's Connect</h2>
      <span className="heading-gap" />

      <p className="contact-intro">
        Always open to new opportunities, collaborations, or just a good
        conversation over coffee. ☕ Feel free to reach out —
      </p>

      <span className="heading-gap" />

      <ul className="contact-list">
        {CONTACTS.map(c => (
          <li key={c.value}>
            <a
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="contact-list-item"
              style={{ '--d': c.d }}
            >
              <span className="c-icon">{c.icon}</span>
              <span className="c-label">{c.label}</span>
              <span className="c-val">{c.value}</span>
            </a>
          </li>
        ))}
      </ul>

      <footer className="nb-footer">
        <p>
          Made with ☕ &amp; Caveat&nbsp;&nbsp;—&nbsp;&nbsp;
          <span className="footer-name">Fazil Firoz</span>
          &nbsp;© {new Date().getFullYear()}
        </p>
        <p>Junior Software Engineer · Kerala, India</p>
      </footer>
    </NbSection>
  )
}
