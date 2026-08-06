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
    </>
  )
}
