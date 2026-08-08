import { useInView } from '../hooks/useInView'
import { NbSection }  from './NbSection'

const MILESTONES = [
  {
    year:    '2023 – 2025',
    degree:  'Master of Computer Applications (MCA)',
    inst:    'MES College of Engineering, Kuttippuram',
    board:   'APJ Abdul Kalam Technological University',
    side:    'from-right',
    badgeText: '🎓 MCA Graduate',
    dotClass: 'current',
    badgeClass: '',
    noteColor: 'note-cream',
  },
  {
    year:    '2022',
    degree:  'Python Web Development Expert',
    inst:    'Luminar Technolab, Kakkanad',
    board:   'National Council for Technology and Training',
    side:    'from-left',
    badgeText: '📜 Certified Expert',
    dotClass: 'cert',
    badgeClass: 'cert',
    noteColor: 'note-blue',
  },
  {
    year:    '2019 – 2022',
    degree:  'Bachelor of Computer Applications (BCA)',
    inst:    'Majlis Arts and Science College, Puramannur',
    board:   'University of Calicut',
    side:    'from-right',
    badgeText: '🎓 BCA Graduate',
    dotClass: 'grad',
    badgeClass: '',
    noteColor: 'note-yellow',
  },
  {
    year:    '2017 – 2019',
    degree:  'Higher Secondary Education (HSE)',
    inst:    'GJHSS Naduvattam',
    board:   'Kerala State Board',
    side:    'from-left',
    badgeText: '📜 Certified',
    dotClass: 'cert',
    badgeClass: 'cert',
    noteColor: 'note-mint',
  },
]

export function EducationSection() {
  const [lineRef] = useInView()

  return (
    <NbSection id="education" extraClass="nb-neat-section">
      <h2 className="section-heading">Education &amp; Qualifications</h2>
      <span className="heading-gap" />
      <span className="edu-intro-neat">
        Academic roadmap — from school days to Master of Computer Applications.
      </span>
      <span className="heading-gap" />

      <ul className="timeline-list" ref={lineRef}>
        {MILESTONES.map((m, i) => (
          <li
            key={i}
            className={`tl-item ${m.side}`}
            style={{ '--d': `${0.15 + i * 0.15}s` }}
          >
            <span className="tl-year">{m.year}</span>

            {/* dashed vertical connector */}
            <span className="tl-connector">
              <span className={`tl-dot ${m.dotClass}`} />
              <span className="tl-vline" />
            </span>

            <span className={`tl-content sticky-note-card neat-card-sm ${m.noteColor}`}>
              <span className="card-tape-corner" aria-hidden="true" />
              <span className="tl-degree">{m.degree}</span>
              <span className="tl-inst">{m.inst}</span>
              <span className="tl-board">{m.board}</span>
              <span className={`tl-badge ${m.badgeClass}`}>{m.badgeText}</span>
            </span>
          </li>
        ))}
      </ul>
    </NbSection>
  )
}
