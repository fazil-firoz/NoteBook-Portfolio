/* ================================================================
   HERO SECTION — Notebook-style intro with passport-photo effect
   Photo glued on paper like a real notebook/diary entry + Resume Download
   ================================================================ */
import { useState } from 'react'

export function HeroSection() {
  const [downloadState, setDownloadState] = useState('idle') // 'idle' | 'loading' | 'flying' | 'done'
  const [progress, setProgress] = useState(0)
  const [particles, setParticles] = useState([])

  const handleResumeClick = (e) => {
    if (downloadState !== 'idle') return

    // Get button position
    const rect = e.currentTarget.getBoundingClientRect()
    const startX = rect.left + rect.width / 2
    const startY = rect.top + rect.height / 2

    // Target top right corner (where browser downloads bar is)
    const targetX = window.innerWidth - 70
    const targetY = 30

    const deltaX = targetX - startX
    const deltaY = targetY - startY

    // 1. Start satisfying Loading animation
    setDownloadState('loading')
    setProgress(0)

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval)
          return 100
        }
        return prev + 30
      })
    }, 140)

    // 2. Launch flying particles when loading completes
    setTimeout(() => {
      setDownloadState('flying')
      const newParticles = [
        { id: 1, icon: '📄', startX, startY, deltaX, deltaY, delay: '0ms' },
        { id: 2, icon: '✨', startX: startX - 12, startY: startY - 8, deltaX: deltaX - 15, deltaY: deltaY + 10, delay: '90ms' },
        { id: 3, icon: '⚡', startX: startX + 12, startY: startY + 8, deltaX: deltaX + 15, deltaY: deltaY - 10, delay: '180ms' },
      ]
      setParticles(newParticles)
    }, 650)

    // 3. Mark complete
    setTimeout(() => {
      setDownloadState('done')
    }, 1300)

    // 4. Reset back to idle
    setTimeout(() => {
      setDownloadState('idle')
      setProgress(0)
      setParticles([])
    }, 3800)
  }

  return (
    <section className="hero-section" id="home" aria-label="Introduction">

      {/* ── top faint rule spacing ── */}
      <span className="hero-gap" aria-hidden="true" />

      {/* ── main hero layout: text left, photo right ── */}
      <div className="hero-layout">

        {/* LEFT — handwritten intro text */}
        <div className="hero-text">

          {/* Greeting */}
          <h1 className="hero-greeting">
            <span className="hero-greeting-hi">Hi, I'm</span>
            <span className="hero-name">Fazil Firoz</span>
          </h1>

          {/* Designation line */}
          <span className="hero-title-line">
            <span className="hero-title-arrow">→</span>
            Junior Software Engineer &amp; MCA Graduate
          </span>

          {/* Degree badge — stamp style */}
          <div className="hero-stamp" role="img" aria-label="MCA Certified">
            <span className="hero-stamp-line1">MCA</span>
            <span className="hero-stamp-line2">Certified</span>
            <span className="hero-stamp-line3">APJ Abdul Kalam Tech University</span>
          </div>

          {/* Scroll hint */}
          <span className="hero-scroll-hint" aria-hidden="true">
            ↓ scroll to explore notebook
          </span>

          {/* Minimal Resume Download Button with Satisfying Loading State */}
          <div className="hero-resume-wrap">
            <a
              href="https://drive.google.com/uc?export=download&id=1IkHdtZ_NiDw6oqCEv-06q8TGZoNhUhlZ"
              download="Fazil Firoz's Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={handleResumeClick}
              className={`hero-resume-minimal-btn ${downloadState}`}
              title="Download Fazil Firoz's Resume"
            >
              {/* Progress bar fill effect */}
              {downloadState === 'loading' && (
                <span
                  className="resume-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              )}

              <span className="resume-icon" aria-hidden="true">
                {downloadState === 'loading' && <span className="resume-spinner">🔄</span>}
                {downloadState === 'flying' && '📄'}
                {downloadState === 'done' && '✓'}
                {downloadState === 'idle' && '📄'}
              </span>

              <span className="resume-text">
                {downloadState === 'loading' && `Downloading ${progress}%`}
                {downloadState === 'flying' && 'Preparing PDF...'}
                {downloadState === 'done' && 'Downloaded!'}
                {downloadState === 'idle' && 'Download Resume'}
              </span>

              <span className="resume-arrow" aria-hidden="true">
                {downloadState === 'done' ? '✨' : '↓'}
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT — passport photo glued on paper */}
        <div className="hero-photo-area" aria-hidden="true">
          {/* Tape strips — decorative */}
          <span className="hero-tape hero-tape-tl" />
          <span className="hero-tape hero-tape-tr" />

          {/* Photo frame */}
          <div className="hero-photo-frame">
            <img
              src="/Mine/WhatsApp Image 2026-08-05 at 11.17.06 PM.jpeg"
              alt="Fazil Firoz"
              className="hero-photo-img"
              draggable="false"
            />
          </div>
        </div>

      </div>

      {/* ── Flying Data Particles (Visual Satisfaction on Download) ── */}
      {particles.map(p => (
        <span
          key={p.id}
          className="flying-particle"
          style={{
            '--start-x': `${p.startX}px`,
            '--start-y': `${p.startY}px`,
            '--delta-x': `${p.deltaX}px`,
            '--delta-y': `${p.deltaY}px`,
            '--delay': p.delay,
          }}
          aria-hidden="true"
        >
          {p.icon}
        </span>
      ))}

      {/* ── bottom decorative dashed line ── */}
      <span className="hero-bottom-rule" aria-hidden="true" />

    </section>
  )
}
