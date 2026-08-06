/* ================================================================
   HERO SECTION — Notebook-style intro with passport-photo effect
   Photo glued on paper like a real notebook/diary entry
   ================================================================ */

export function HeroSection() {
  return (
    <section className="hero-section" id="home" aria-label="Introduction">

      {/* ── top faint rule spacing ── */}
      <span className="hero-gap" aria-hidden="true" />

      {/* ── main hero layout: text left, photo right ── */}
      <div className="hero-layout">

        {/* LEFT — handwritten intro text */}
        <div className="hero-text">

          {/* Date stamp — like a diary entry */}
          <span className="hero-date">August, 2025</span>

          {/* Greeting */}
          <h1 className="hero-greeting">
            <span className="hero-greeting-hi">Hi, I'm</span>
            <span className="hero-name">Fazil Firoz</span>
          </h1>

          {/* Designation line */}
          <span className="hero-title-line">
            <span className="hero-title-arrow">→</span>
            MCA Graduate &amp; Software Engineer
          </span>

          {/* Sub-tagline */}
          {/* <span className="hero-tagline">
            Building scalable web apps with{' '}
            <em className="hero-em">C# · ASP.NET Core · React</em>
          </span> */}

          {/* Degree badge — stamp style */}
          <div className="hero-stamp" role="img" aria-label="MCA Certified">
            <span className="hero-stamp-line1">MCA</span>
            <span className="hero-stamp-line2">Certified</span>
            <span className="hero-stamp-line3">APJ Abdul Kalam Technological University</span>
          </div>

          {/* Scroll hint */}
          <span className="hero-scroll-hint" aria-hidden="true">
            ↓ scroll to explore
          </span>
        </div>

        {/* RIGHT — passport photo glued on paper */}
        <div className="hero-photo-area" aria-hidden="true">
          {/* Tape strips — decorative */}
          <span className="hero-tape hero-tape-tl" />
          <span className="hero-tape hero-tape-tr" />
          <span className="hero-tape hero-tape-bl" />
          <span className="hero-tape hero-tape-br" />

          {/* Photo frame */}
          <div className="hero-photo-frame">
            <img
              src="/Mine/WhatsApp Image 2026-08-05 at 11.17.06 PM.jpeg"
              alt="Fazil Firoz"
              className="hero-photo-img"
              draggable="false"
            />
          </div>

          {/* Caption under photo */}
          <span className="hero-photo-caption">Fazil Firoz · MCA '25</span>
        </div>

      </div>

      {/* ── bottom decorative dashed line ── */}
      <span className="hero-bottom-rule" aria-hidden="true" />

    </section>
  )
}
