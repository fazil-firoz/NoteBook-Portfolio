import { NbSection } from './NbSection'

const CATEGORIES = [
  {
    title: 'Programming Languages',
    colorClass: 'col-languages',
    icon: '💻',
    items: ['Python (Django)', 'C#', 'JavaScript', 'C / C++', 'HTML & CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    colorClass: 'col-frameworks',
    icon: '⚙️',
    items: ['ASP.NET Core', '.NET MVC', 'React.js', 'Bootstrap'],
  },
  {
    title: 'Databases & Tools',
    colorClass: 'col-tools',
    icon: '🛢️',
    items: [
      'MySQL', 'PostgreSQL', 'SQL Server', 'Git & SourceTree',
      'VS Code', 'Visual Studio', 'PyCharm', 'pgAdmin & SSMS',
      'Postman & ThunderClient', 'Microsoft Excel'
    ],
  },
]

const SOFT_SKILLS = [
  'Communication', 'Project Management', 'Leadership', 'Teamwork',
  'Quick Learning & Implementation', 'Adaptability'
]

const LANGUAGES_SPOKEN = [
  { name: 'Malayalam', level: 'Native' },
  { name: 'English', level: 'Conversational' },
  { name: 'Tamil', level: 'Conversational' },
]

export function SkillsSection() {
  return (
    <NbSection id="skills" extraClass="nb-neat-section">
      <h2 className="section-heading">Technical Skills &amp; Competencies</h2>
      <span className="heading-gap" />

      {/* Main categories grid */}
      <div className="skills-grid">
        {CATEGORIES.map((cat, i) => (
          <div
            key={cat.title}
            className={`skills-card neat-card ${cat.colorClass}`}
            style={{ '--d': `${0.1 + i * 0.12}s` }}
          >
            <h3 className="skills-card-title">
              <span className="skills-icon">{cat.icon}</span> {cat.title}
            </h3>
            <div className="skills-pill-group">
              {cat.items.map(item => (
                <span key={item} className="skill-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <span className="heading-gap" />

      {/* Soft Skills & Languages side-by-side */}
      <div className="skills-extra-row">
        {/* Soft Skills */}
        <div className="skills-extra-card neat-card" style={{ '--d': '0.5s' }}>
          <h3 className="skills-card-title">🌟 Soft Skills</h3>
          <div className="skills-pill-group">
            {SOFT_SKILLS.map(s => (
              <span key={s} className="skill-pill soft-pill">{s}</span>
            ))}
          </div>
        </div>

        {/* Languages Spoken */}
        <div className="skills-extra-card neat-card" style={{ '--d': '0.65s' }}>
          <h3 className="skills-card-title">🗣️ Spoken Languages</h3>
          <div className="lang-list">
            {LANGUAGES_SPOKEN.map(l => (
              <div key={l.name} className="lang-item">
                <span className="lang-name">{l.name}</span>
                <span className="lang-level">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </NbSection>
  )
}
