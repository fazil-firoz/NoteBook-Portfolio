import { NbSection } from './NbSection'

const PROJECTS = [
  {
    num:   '01',
    name:  'Self-Billing System',
    sub:   'Retail Management System',
    desc:  'An intelligent self-checkout solution for supermarkets that allows customers to scan product QR codes, automatically generate bills, and make secure payments through their smartphones. Features real-time monitoring to ensure transaction security and prevent fraud.',
    stack: ['Python Django', 'Flutter (Dart)', 'JavaScript', 'HTML & CSS', 'MySQL'],
    link:  'https://github.com/fazil-firoz/Main-Project.git',
    type:  'GitHub Repository',
    isRepo: true,
    noteColor: 'note-yellow',
    pinIcon: '📌',
    tilt:  'rotate(-1deg)',
  },
  {
    num:   '02',
    name:  'Learnify',
    sub:   'E-Learning Platform',
    desc:  'A full-featured online learning platform where instructors can create and manage courses, admins approve content, and students securely enroll and access video lessons after payment.',
    stack: ['Python Django', 'HTML & CSS', 'Bootstrap', 'MySQL'],
    link:  'https://github.com/fazil-firoz/Learnify.git',
    type:  'GitHub Repository',
    isRepo: true,
    noteColor: 'note-mint',
    pinIcon: '📎',
    tilt:  'rotate(1.2deg)',
  },
  {
    num:   '03',
    name:  'Personal Portfolio',
    sub:   'Developer Showcase Website',
    desc:  'Designed and developed a responsive personal portfolio website showcasing projects, skills, and achievements. Focused on creating a clean, user-friendly interface highlighting my journey as a developer.',
    stack: ['HTML & CSS', 'JavaScript', 'Bootstrap'],
    link:  'https://fazil-firoz.github.io/Portfolio_new/',
    type:  'Live Website',
    isRepo: false,
    noteColor: 'note-blue',
    pinIcon: '🏷️',
    tilt:  'rotate(-0.8deg)',
  },
  {
    num:   '04',
    name:  'News24',
    sub:   'Live News App',
    desc:  'My first project exploring REST APIs! Built a functional news website using HTML, CSS, and JavaScript, fetching live news in real time using a free News API.',
    stack: ['JavaScript', 'REST API', 'HTML & CSS', 'Bootstrap'],
    link:  'https://github.com/fazil-firoz/News-App.git',
    type:  'GitHub Repository',
    isRepo: true,
    noteColor: 'note-cream',
    pinIcon: '📌',
    tilt:  'rotate(0.9deg)',
  },
  {
    num:   '05',
    name:  "Bono's",
    sub:   'Static Webpage',
    desc:  'Designed and developed my first static website using pure HTML and CSS to master web structure, layout, and styling fundamentals — laying a solid foundation in front-end development.',
    stack: ['HTML', 'CSS', 'UI Layout'],
    link:  'https://fazil-firoz.github.io/bonos/',
    type:  'Live Webpage',
    isRepo: false,
    noteColor: 'note-pink',
    pinIcon: '📎',
    tilt:  'rotate(-1.1deg)',
  },
]

export function ProjectsSection() {
  return (
    <NbSection id="projects" extraClass="nb-neat-section">
      <h2 className="section-heading">Featured Projects</h2>
      <span className="heading-gap" />

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <div
            key={p.num}
            className={`proj-card sticky-note-card ${p.noteColor}`}
            style={{ '--d': `${0.1 + i * 0.12}s`, transform: p.tilt }}
          >
            {/* Top Tape strip / Pin */}
            <span className="card-tape-top" aria-hidden="true" />
            <span className="card-pin-icon" aria-hidden="true">{p.pinIcon}</span>

            <div className="proj-card-header">
              <span className="proj-card-num">{p.num}</span>
              <div className="proj-card-title-group">
                <h3 className="proj-card-title">{p.name}</h3>
                <span className="proj-card-sub">{p.sub}</span>
              </div>
            </div>

            <p className="proj-card-desc">{p.desc}</p>

            <div className="proj-card-stack">
              {p.stack.map(tech => (
                <span key={tech} className="proj-tag">{tech}</span>
              ))}
            </div>

            <div className="proj-card-footer">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="proj-card-btn"
              >
                {p.isRepo ? '🐙 GitHub Repository ↗' : '🌐 Live Website ↗'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </NbSection>
  )
}
