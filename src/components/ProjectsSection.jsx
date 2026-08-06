import { NbSection } from './NbSection'
import { WriteIn }   from './WriteIn'

const PROJECTS = [
  {
    num:   '01',
    name:  'Self-Billing System',
    sub:   'Retail Management System',
    desc:  'Intelligent self-checkout for supermarkets — customers scan QR codes, auto-generate bills, secure payments from smartphones. Real-time monitoring for fraud prevention.',
    stack: 'Python Django · HTML · CSS · JavaScript · Flutter (Dart) · MySQL',
    link:  'https://github.com/fazil-firoz/Main-Project.git',
    rot:   '-0.6deg',
  },
  {
    num:   '02',
    name:  'Learnify',
    sub:   'E-Learning Platform',
    desc:  'Full-featured online platform — instructors create courses, admins approve content, students enrol and access video lessons post-payment. Seamless & secure digital learning.',
    stack: 'Python Django · HTML · CSS · Bootstrap · MySQL',
    link:  'https://github.com/fazil-firoz/Learnify.git',
    rot:   '0.4deg',
  },
  {
    num:   '03',
    name:  'Personal Portfolio',
    sub:   'Developer Showcase',
    desc:  'Responsive portfolio showcasing projects, skills, and achievements. Clean, user-friendly UI focused on clarity and simplicity.',
    stack: 'HTML · CSS · JavaScript · Bootstrap',
    link:  'https://fazil-firoz.github.io/Portfolio_new/',
    rot:   '-0.8deg',
  },
  {
    num:   '04',
    name:  'News24',
    sub:   'Live News App',
    desc:  'My first real-world API project — fetches live news using a public News API and displays articles in a clean, functional interface.',
    stack: 'HTML · CSS · JavaScript · Bootstrap',
    link:  'https://github.com/fazil-firoz/News-App.git',
    rot:   '0.5deg',
  },
  {
    num:   '05',
    name:  "Bono's",
    sub:   'Static Webpage',
    desc:  'My very first website — pure HTML & CSS. Built to understand the fundamentals of web structure, layout, and styling.',
    stack: 'HTML · CSS',
    link:  'https://fazil-firoz.github.io/bonos/',
    rot:   '-0.4deg',
  },
]

export function ProjectsSection() {
  return (
    <NbSection id="projects">
      <h2 className="section-heading">Projects</h2>
      <span className="heading-gap" />

      {PROJECTS.map((p, i) => (
        <div
          key={p.num}
          className="proj-entry"
          style={{ '--d': `${0.1 + i * 0.13}s` }}
        >
          <span className="proj-title-line">
            <span className="proj-num">{p.num}.</span>
            <span className="proj-name" style={{ transform: `rotate(${p.rot})` }}>
              {p.name}
            </span>
            <span className="proj-sub">— {p.sub}</span>
          </span>

          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="proj-link"
          >
            ↗ {p.link.replace('https://','').replace('http://','')}
          </a>

          <span className="proj-desc">
            <WriteIn text={p.desc} baseDelay={0.15 + i * 0.13} speed={0.03} />
          </span>

          <span className="proj-stack">
            <strong>Stack:</strong> {p.stack}
          </span>

          {i < PROJECTS.length - 1 && <span className="proj-sep" />}
        </div>
      ))}
    </NbSection>
  )
}
