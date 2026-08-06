import { useInView } from '../hooks/useInView'
import { NbSection }  from './NbSection'

const MILESTONES = [
  {
    year:    '2017 – 2019',
    degree:  'Higher Secondary Education',
    inst:    'GHSS Naduvattam',
    board:   'Kerala State Board',
    side:    'from-left',
  },
  {
    year:    '2019 – 2022',
    degree:  'Bachelor of Computer Applications',
    inst:    'Majlis Arts and Science College, Puramannur',
    board:   'University of Calicut',
    side:    'from-right',
  },
  {
    year:    '2022',
    degree:  'Python Web Development Expert',
    inst:    'Luminar Technolab, Kakkanad',
    board:   'National Council for Technology & Training',
    side:    'from-left',
    cert:    true,
  },
  {
    year:    '2023 – 2025',
    degree:  'Master of Computer Applications',
    inst:    'MES College of Engineering, Kuttippuram',
    board:   'APJ Abdul Kalam Technological University',
    side:    'from-right',
    graduated: true,
  },
]

export function EducationSection() {
  const [lineRef, lineInView] = useInView()

  return (
    <NbSection id="education">
      <h2 className="section-heading">My Journey</h2>
      <span className="heading-gap" />
      <span className="edu-intro">
        A road through learning — every stop shaped who I am.
      </span>
      <span className="heading-gap" />

      <ul className="timeline-list" ref={lineRef}>
        {MILESTONES.map((m, i) => (
          <li
            key={i}
            className={`tl-item ${m.side}`}
            style={{ '--d': `${0.3 + i * 0.38}s` }}
          >
            <span className="tl-year">{m.year}</span>

            {/* dashed vertical connector */}
            <span className="tl-connector">
              <span className={`tl-dot ${m.current ? 'current' : m.cert ? 'cert' : m.graduated ? 'current' : ''}`} />
              <span className="tl-vline" />
            </span>

            <span className="tl-content">
              <span className="tl-degree">{m.degree}</span>
              <span className="tl-inst">{m.inst}</span>
              <span className="tl-board">{m.board}</span>
              {m.current    && <span className="tl-badge">● Ongoing</span>}
              {m.graduated  && <span className="tl-badge">✓ MCA Graduate</span>}
              {m.cert       && <span className="tl-badge cert">✓ Certified</span>}
            </span>
          </li>
        ))}
      </ul>
    </NbSection>
  )
}
