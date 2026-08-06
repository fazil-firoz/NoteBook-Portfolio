import { NbSection }  from './NbSection'
import { WriteIn }    from './WriteIn'

const BULLETS = [
  'Designed & developed Hospital Management Systems (HMS) for clients across Dubai and India — ASP.NET Core · React · SQL · PostgreSQL',
  'Built and contributed to a CRM system for an overseas educational consultancy (student & application management)',
  'Improved database performance through optimised C# backend modules and SQL query tuning',
  'Developed & integrated RESTful APIs for seamless frontend ↔ backend communication',
  'Integrated third-party APIs to extend system functionality and external service connectivity',
  'Resolved critical production issues, maintaining high system availability and reliability',
]

export function ExperienceSection() {
  return (
    <NbSection id="experience">
      <h2 className="section-heading">Experience</h2>
      <span className="heading-gap" />

      <div
        className="exp-entry"
        style={{ '--d': '0.1s' }}
      >
        <span className="exp-company-line">
          <span style={{ transform: 'rotate(-0.5deg)', display: 'inline-block' }}>
            Antas Technologies, Kochi
          </span>
          <span className="exp-date-badge">● Present</span>
        </span>

        <span className="exp-role-line">
          <WriteIn text="Junior Software Engineer" baseDelay={0.2} speed={0.06} />
        </span>

        <span className="exp-divider" />

        <ul className="exp-bullets">
          {BULLETS.map((b, i) => (
            <li
              key={i}
              className="exp-bullet"
              style={{ '--d': `${0.35 + i * 0.1}s` }}
            >
              <span className="exp-bullet-mark">○</span>
              <WriteIn text={b} baseDelay={0.4 + i * 0.1} speed={0.028} />
            </li>
          ))}
        </ul>
      </div>
    </NbSection>
  )
}
