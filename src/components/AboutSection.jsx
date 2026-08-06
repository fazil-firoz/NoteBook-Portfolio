import { NbSection } from './NbSection'
import { WriteIn }   from './WriteIn'

export function AboutSection() {
  return (
    <NbSection id="about">
      <h2 className="section-heading">About Me</h2>
      <span className="heading-gap" />

      <div className="about-body">
        <span className="about-role">→ Junior Software Engineer · Kochi, Kerala</span>

        <p className="about-para">
          <WriteIn
            text="Hey! I'm Fazil Firoz — an MCA graduate with hands-on experience building scalable web applications, RESTful APIs, and database-driven systems."
            baseDelay={0.2} speed={0.042}
          />
        </p>

        <p className="about-para">
          <WriteIn
            text="I specialise in C#, ASP.NET Core, and React. Strong foundation in Python (Django) from academic projects. Quick learner, strong problem-solver, committed to clean code."
            baseDelay={1.2} speed={0.038}
          />
        </p>

        <p className="about-para">
          <WriteIn
            text="Based in Erakkingal, Mulayankavu, Kulukkallur — Palakkad, Kerala 679337."
            baseDelay={2.4} speed={0.05}
          />
        </p>

        <div className="about-contacts">
          {[
            { label: '✉', value: 'fazzil.firoz@gmail.com',   href: 'mailto:fazzil.firoz@gmail.com', d: '3.2s' },
            { label: '☎', value: '+91 90486 34881',           href: 'tel:+919048634881',             d: '3.4s' },
            { label: '⊡', value: 'github.com/fazil-firoz',   href: 'https://github.com/fazil-firoz',d: '3.6s' },
            { label: 'in', value: 'linkedin: fazzil-firoz',  href: 'https://linkedin.com/in/fazzil-firoz', d: '3.8s' },
          ].map(c => (
            <a
              key={c.value}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="about-contact-item"
              style={{ '--d': c.d }}
            >
              {c.label}&nbsp;&nbsp;{c.value}
            </a>
          ))}
        </div>
      </div>
    </NbSection>
  )
}
