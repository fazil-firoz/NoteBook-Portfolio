import './App.css'
import { HeroSection }       from './components/HeroSection'
import { AboutSection }      from './components/AboutSection'
import { ExperienceSection } from './components/ExperienceSection'
import { EducationSection }  from './components/EducationSection'
import { ProjectsSection }   from './components/ProjectsSection'
import { SkillsSection }     from './components/SkillsSection'
import { ContactSection }    from './components/ContactSection'

const NAV = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education'  },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Contact',    href: '#contact'    },
]

export default function App() {
  return (
    <>
      {/* Fixed binder spine — repeating punch holes */}
      <div className="nb-spine" aria-hidden="true" />

      {/* Floating handwritten nav */}
      <nav className="nb-nav" aria-label="Site navigation">
        {NAV.map(({ label, href }) => (
          <a key={label} href={href} className="nb-nav-link">{label}</a>
        ))}
      </nav>

      {/* Hero: canvas scroll animation + "Hi" */}
      <HeroSection />

      {/* Portfolio sections — all on the continuous notebook paper */}
      <main>
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Floating 3D Official WhatsApp Icon Button */}
      <a
        href="https://wa.me/919048634881"
        target="_blank"
        rel="noreferrer"
        className="nb-whatsapp-3d-btn"
        title="Chat on WhatsApp (+91 90486 34881)"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="wa-3d-svg" aria-hidden="true">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.486 1.332 5.006L2 22l5.127-1.335c1.472.802 3.136 1.225 4.88 1.226h.005c5.504 0 9.988-4.479 9.989-9.985 0-2.668-1.037-5.176-2.923-7.062A9.927 9.927 0 0 0 12.012 2zm0 18.328h-.004c-1.5-.001-2.97-.403-4.253-1.164l-.305-.181-3.16.823.842-3.08-.201-.318A8.307 8.307 0 0 1 3.69 11.99c0-4.588 3.733-8.321 8.324-8.321 2.222 0 4.312.866 5.88 2.436a8.27 8.27 0 0 1 2.432 5.882c0 4.589-3.733 8.322-8.314 8.322zm4.562-6.234c-.25-.125-1.48-.73-1.71-.813-.23-.083-.398-.125-.565.125-.167.25-.648.813-.794.979-.146.167-.292.188-.542.063a6.852 6.852 0 0 1-2.013-1.242 7.55 7.55 0 0 1-1.393-1.734c-.146-.25-.016-.385.109-.51.113-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438-.063-.125-.565-1.356-.774-1.857-.204-.489-.411-.423-.565-.431l-.481-.008c-.167 0-.438.063-.668.313-.23.25-.877.856-.877 2.088 0 1.232.898 2.422 1.023 2.589.125.167 1.767 2.7 4.28 3.785.598.258 1.065.412 1.43.528.601.191 1.148.164 1.58.1.482-.072 1.48-.605 1.688-1.189.208-.584.208-1.084.146-1.189-.063-.105-.23-.167-.48-.292z"/>
        </svg>
      </a>
    </>
  )
}
