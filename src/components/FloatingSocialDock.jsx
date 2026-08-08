import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SOCIAL_DOCK_ITEMS = [
  {
    id: 'whatsapp',
    title: 'Chat on WhatsApp (+91 90486 34881)',
    href: 'https://wa.me/919048634881',
    gradient: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
    shadowColor: 'rgba(37, 211, 102, 0.45)',
    svg: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.486 1.332 5.006L2 22l5.127-1.335c1.472.802 3.136 1.225 4.88 1.226h.005c5.504 0 9.988-4.479 9.989-9.985 0-2.668-1.037-5.176-2.923-7.062A9.927 9.927 0 0 0 12.012 2zm0 18.328h-.004c-1.5-.001-2.97-.403-4.253-1.164l-.305-.181-3.16.823.842-3.08-.201-.318A8.307 8.307 0 0 1 3.69 11.99c0-4.588 3.733-8.321 8.324-8.321 2.222 0 4.312.866 5.88 2.436a8.27 8.27 0 0 1 2.432 5.882c0 4.589-3.733 8.322-8.314 8.322zm4.562-6.234c-.25-.125-1.48-.73-1.71-.813-.23-.083-.398-.125-.565.125-.167.25-.648.813-.794.979-.146.167-.292.188-.542.063a6.852 6.852 0 0 1-2.013-1.242 7.55 7.55 0 0 1-1.393-1.734c-.146-.25-.016-.385.109-.51.113-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438-.063-.125-.565-1.356-.774-1.857-.204-.489-.411-.423-.565-.431l-.481-.008c-.167 0-.438.063-.668.313-.23.25-.877.856-.877 2.088 0 1.232.898 2.422 1.023 2.589.125.167 1.767 2.7 4.28 3.785.598.258 1.065.412 1.43.528.601.191 1.148.164 1.58.1.482-.072 1.48-.605 1.688-1.189.208-.584.208-1.084.146-1.189-.063-.105-.23-.167-.48-.292z"/>
      </svg>
    ),
  },
  {
    id: 'call',
    title: 'Call Fazil Firoz (+91 90486 34881)',
    href: 'tel:+919048634881',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    shadowColor: 'rgba(2, 132, 199, 0.45)',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
  },
  {
    id: 'facebook',
    title: 'Facebook Profile',
    href: 'https://www.facebook.com/Fazil%20FiroZe%20Mkv/',
    gradient: 'linear-gradient(135deg, #1877f2 0%, #0b51b3 100%)',
    shadowColor: 'rgba(24, 119, 242, 0.45)',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    id: 'instagram',
    title: 'Instagram (@fzl.frz)',
    href: 'https://instagram.com/fzl.frz',
    gradient: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    shadowColor: 'rgba(220, 39, 67, 0.45)',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    id: 'email',
    title: 'Email Fazil Firoz',
    href: 'mailto:fazzilfiroz@gmail.com',
    gradient: 'linear-gradient(135deg, #ea4335 0%, #c5221f 100%)',
    shadowColor: 'rgba(234, 67, 53, 0.45)',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
  {
    id: 'github',
    title: 'GitHub Profile',
    href: 'https://github.com/fazil-firoz',
    gradient: 'linear-gradient(135deg, #24292e 0%, #040404 100%)',
    shadowColor: 'rgba(36, 41, 46, 0.5)',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    id: 'linkedin',
    title: 'LinkedIn Profile',
    href: 'https://linkedin.com/in/fazzil-firoz',
    gradient: 'linear-gradient(135deg, #0077b5 0%, #004182 100%)',
    shadowColor: 'rgba(0, 119, 181, 0.45)',
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
]

export function FloatingSocialDock() {
  const [isAtBottom, setIsAtBottom] = useState(false)
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    const handleScroll = () => {
      // Trigger dock when user scrolls near bottom of page
      const scrollPosition = window.scrollY + window.innerHeight
      const threshold = document.documentElement.scrollHeight - 320
      setIsAtBottom(scrollPosition >= threshold)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const rightMargin = screenWidth <= 768 ? 20 : 28
  const iconSize = 52

  return (
    <div className="social-dock-wrapper" aria-label="Social links dock">
      {/* ── STAGE 1: Single WhatsApp Floating Button at Bottom-Right ── */}
      <AnimatePresence mode="wait">
        {!isAtBottom && (
          <motion.a
            key="single-wa"
            href="https://wa.me/919048634881"
            target="_blank"
            rel="noreferrer"
            className="nb-whatsapp-3d-btn"
            title="Chat on WhatsApp (+91 90486 34881)"
            aria-label="Chat on WhatsApp"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="wa-3d-svg" aria-hidden="true">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.486 1.332 5.006L2 22l5.127-1.335c1.472.802 3.136 1.225 4.88 1.226h.005c5.504 0 9.988-4.479 9.989-9.985 0-2.668-1.037-5.176-2.923-7.062A9.927 9.927 0 0 0 12.012 2zm0 18.328h-.004c-1.5-.001-2.97-.403-4.253-1.164l-.305-.181-3.16.823.842-3.08-.201-.318A8.307 8.307 0 0 1 3.69 11.99c0-4.588 3.733-8.321 8.324-8.321 2.222 0 4.312.866 5.88 2.436a8.27 8.27 0 0 1 2.432 5.882c0 4.589-3.733 8.322-8.314 8.322zm4.562-6.234c-.25-.125-1.48-.73-1.71-.813-.23-.083-.398-.125-.565.125-.167.25-.648.813-.794.979-.146.167-.292.188-.542.063a6.852 6.852 0 0 1-2.013-1.242 7.55 7.55 0 0 1-1.393-1.734c-.146-.25-.016-.385.109-.51.113-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438-.063-.125-.565-1.356-.774-1.857-.204-.489-.411-.423-.565-.431l-.481-.008c-.167 0-.438.063-.668.313-.23.25-.877.856-.877 2.088 0 1.232.898 2.422 1.023 2.589.125.167 1.767 2.7 4.28 3.785.598.258 1.065.412 1.43.528.601.191 1.148.164 1.58.1.482-.072 1.48-.605 1.688-1.189.208-.584.208-1.084.146-1.189-.063-.105-.23-.167-.48-.292z"/>
            </svg>
          </motion.a>
        )}
      </AnimatePresence>

      {/* ── STAGE 2: Wheel to Center + 7-Icon 3D Sizzle Collision Burst ── */}
      <AnimatePresence>
        {isAtBottom && (
          <motion.div
            key="bottom-dock-container"
            className="bottom-dock-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bottom-dock-center-wrapper">
              {SOCIAL_DOCK_ITEMS.map((item, index) => {
                const total = SOCIAL_DOCK_ITEMS.length
                const offsetStep = screenWidth <= 480 ? 46 : screenWidth <= 768 ? 54 : 62
                const startOffset = -((total - 1) * offsetStep) / 2
                const itemX = startOffset + index * offsetStep

                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="dock-3d-btn"
                    title={item.title}
                    aria-label={item.title}
                    style={{
                      background: item.gradient,
                      boxShadow: `0 12px 28px ${item.shadowColor}, 0 6px 14px rgba(0,0,0,0.2), inset 0 3px 4px rgba(255,255,255,0.45), inset 0 -3px 6px rgba(0,0,0,0.2)`,
                    }}
                    initial={{
                      x: screenWidth / 2 - rightMargin - iconSize / 2, // start from right corner
                      y: 0,
                      scale: 0.4,
                      rotate: 360,
                      opacity: 0,
                    }}
                    animate={{
                      x: [
                        screenWidth / 2 - rightMargin - iconSize / 2,
                        itemX,
                        itemX - 7,
                        itemX + 7,
                        itemX - 4,
                        itemX + 4,
                        itemX - 1,
                        itemX,
                      ],
                      y: [0, 0, -4, 4, -2, 2, 0, 0],
                      scale: [0.4, 1, 1.08, 0.94, 1.03, 0.97, 1, 1],
                      rotate: [360, 0, -16, 16, -9, 9, -3, 0],
                      opacity: [0, 1, 1, 1, 1, 1, 1, 1],
                    }}
                    exit={{
                      x: screenWidth / 2 - rightMargin - iconSize / 2,
                      scale: 0.4,
                      rotate: -360,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.95,
                      ease: 'easeOut',
                      delay: index * 0.06,
                      times: [0, 0.45, 0.55, 0.68, 0.8, 0.9, 0.96, 1],
                    }}
                    whileHover={{
                      scale: 1.22,
                      y: -10,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <span className="dock-icon-inner">{item.svg}</span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
