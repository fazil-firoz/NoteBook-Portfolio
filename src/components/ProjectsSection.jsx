import { NbSection } from './NbSection'

const PROJECTS = [
  {
    num:   '01',
    name:  'E-Commerce Web App',
    sub:   'Full-Featured Online Store',
    desc:  'Full-featured modern e-commerce web application with interactive 3D product animations, C# backend API, PostgreSQL database, Razorpay payment gateway integration, dynamic cart management, and seamless checkout.',
    stack: ['C#', 'React.js', 'PostgreSQL', 'Razorpay', '3D Animations', 'Vercel'],
    link:  'https://e-commerce-web-app-woad-nine.vercel.app/',
    type:  'Live Web App',
    isRepo: false,
    noteColor: 'note-cream',
    pinIcon: '🛒',
    tilt:  'rotate(-1deg)',
  },
  {
    num:   '02',
    name:  'Self-Billing System',
    sub:   'Retail Management System',
    desc:  'An intelligent self-checkout solution for supermarkets allowing customers to scan product QR codes, auto-generate bills, and make secure smartphone payments with real-time fraud monitoring.',
    stack: ['Python Django', 'Flutter (Dart)', 'JavaScript', 'HTML & CSS', 'MySQL'],
    link:  'https://github.com/fazil-firoz/Main-Project.git',
    type:  'GitHub Repository',
    isRepo: true,
    noteColor: 'note-yellow',
    pinIcon: '📌',
    tilt:  'rotate(1.2deg)',
  },
  {
    num:   '03',
    name:  'Learnify',
    sub:   'E-Learning Platform',
    desc:  'A full-featured online learning platform where instructors can create and manage courses, admins approve content, and students securely enroll and access video lessons after payment.',
    stack: ['Python Django', 'HTML & CSS', 'Bootstrap', 'MySQL'],
    link:  'https://github.com/fazil-firoz/Learnify.git',
    type:  'GitHub Repository',
    isRepo: true,
    noteColor: 'note-mint',
    pinIcon: '📎',
    tilt:  'rotate(-0.8deg)',
  },
  {
    num:   '04',
    name:  'Personal Portfolio',
    sub:   'Developer Showcase Website',
    desc:  'Designed and developed a responsive personal portfolio website showcasing projects, skills, and achievements with a clean, user-friendly interface.',
    stack: ['HTML & CSS', 'JavaScript', 'Bootstrap'],
    link:  'https://fazil-firoz.github.io/Portfolio_new/',
    type:  'Live Website',
    isRepo: false,
    noteColor: 'note-blue',
    pinIcon: '🏷️',
    tilt:  'rotate(0.9deg)',
  },
  {
    num:   '05',
    name:  'News24',
    sub:   'Live News App',
    desc:  'My first REST API project! Built a functional news website using HTML, CSS, and JavaScript, fetching live news in real time using a public News API.',
    stack: ['JavaScript', 'REST API', 'HTML & CSS', 'Bootstrap'],
    link:  'https://github.com/fazil-firoz/News-App.git',
    type:  'GitHub Repository',
    isRepo: true,
    noteColor: 'note-pink',
    pinIcon: '📌',
    tilt:  'rotate(-1.1deg)',
  },
  {
    num:   '06',
    name:  "Bono's",
    sub:   'Static Webpage',
    desc:  'Designed and developed my first static website using pure HTML and CSS to master web structure, layout, and styling fundamentals.',
    stack: ['HTML', 'CSS', 'UI Layout'],
    link:  'https://fazil-firoz.github.io/bonos/',
    type:  'Live Webpage',
    isRepo: false,
    noteColor: 'note-cream',
    pinIcon: '📎',
    tilt:  'rotate(0.7deg)',
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
            style={{ '--d': `${0.1 + i * 0.1}s`, transform: p.tilt }}
          >
            {/* Top Tape strip / Pin */}
            <span className="card-tape-top" aria-hidden="true" />
            <span className="card-pin-icon" aria-hidden="true">{p.pinIcon}</span>

            <div className="proj-card-header">
              <span className="proj-card-num">#{p.num}</span>
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
                {p.isRepo ? '🐙 GitHub Repository ↗' : '🌐 Live Web App ↗'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </NbSection>
  )
}
