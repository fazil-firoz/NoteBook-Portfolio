import { NbSection } from './NbSection'

const COLS = [
  {
    label: 'Languages',
    color: '',
    items: ['Python (Django)', 'C#', 'JavaScript', 'C / C++', 'HTML & CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    color: 'blue',
    items: ['ASP.NET Core', '.NET MVC', 'React.js', 'Bootstrap'],
  },
  {
    label: 'Databases & Tools',
    color: 'green',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'Git', 'VS Code', 'Postman', 'pgAdmin'],
  },
]

let _gDelay = 0.2

export function SkillsSection() {
  _gDelay = 0.2
  return (
    <NbSection id="skills">
      <h2 className="section-heading">Skills & Tools</h2>
      <span className="heading-gap" />

      <div className="skills-cols">
        {COLS.map((col) => {
          const colDelay = _gDelay
          _gDelay += 0.08 + col.items.length * 0.055
          return (
            <div
              key={col.label}
              className={`skill-col ${col.color}`}
              style={{ '--d': `${colDelay}s` }}
            >
              <span className="skill-col-label">{col.label}</span>
              {col.items.map((skill, si) => (
                <span
                  key={skill}
                  className="skill-item"
                  style={{ '--d': `${colDelay + 0.1 + si * 0.06}s` }}
                >
                  <span className="skill-item-mark">—</span>
                  {skill}
                </span>
              ))}
            </div>
          )
        })}
      </div>

      {/* Soft skills */}
      <span className="heading-gap" />
      <div className="skills-inline-block">
        <span className="skills-block-label">Soft Skills</span>
        <span className="skills-inline-text">
          Communication · Project Management · Leadership · Teamwork ·
          Quick Learning &amp; Implementation · <em>Adaptability</em>
        </span>
      </div>

      {/* Languages */}
      <span className="heading-gap" />
      <div className="skills-inline-block">
        <span className="skills-block-label">Languages</span>
        <span className="skills-inline-text">
          <em>Malayalam</em> (Native) · English (Conversational) · Tamil (Conversational)
        </span>
      </div>
    </NbSection>
  )
}
