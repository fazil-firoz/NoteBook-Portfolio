import { useEffect, useRef, useState } from 'react'

const TOTAL_FRAMES = 50
const frames = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const num = String(i + 1).padStart(3, '0')
  return `/Images/frame_${num}.png`
})

export function HeroSection({ onLoaded }) {
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const currentFrameRef = useRef(0)
  const rafRef = useRef(null)
  const containerRef = useRef(null)
  const [loadProgress, setLoadProgress] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [showHi, setShowHi] = useState(true)
  const [hiVisible, setHiVisible] = useState(false)

  // Draw one frame cover-fit on canvas
  const drawFrame = (index) => {
    const canvas = canvasRef.current
    const img = imagesRef.current[index]
    if (!canvas || !img) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight)
    const x = (canvas.width - img.naturalWidth * scale) / 2
    const y = (canvas.height - img.naturalHeight * scale) / 2
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale)
  }

  // Preload all frames
  useEffect(() => {
    let done = 0
    imagesRef.current = new Array(TOTAL_FRAMES)
    frames.forEach((src, i) => {
      const img = new Image()
      img.src = src
      img.onload = img.onerror = () => {
        imagesRef.current[i] = img
        done++
        setLoadProgress(Math.round((done / TOTAL_FRAMES) * 100))
        if (done === TOTAL_FRAMES) {
          setLoaded(true)
          onLoaded?.()
          setTimeout(() => setHiVisible(true), 300)
        }
      }
    })
  }, [])

  // Scroll → frame
  useEffect(() => {
    if (!loaded) return
    drawFrame(0)

    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return
      const maxScroll = container.scrollHeight - window.innerHeight
      const progress = Math.min(window.scrollY / maxScroll, 1)
      const idx = Math.min(Math.round(progress * (TOTAL_FRAMES - 1)), TOTAL_FRAMES - 1)
      if (idx !== currentFrameRef.current) {
        currentFrameRef.current = idx
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        rafRef.current = requestAnimationFrame(() => drawFrame(idx))
      }
      if (window.scrollY > 30) setShowHi(false)
      else setShowHi(true)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loaded])

  // Resize
  useEffect(() => {
    const onResize = () => drawFrame(currentFrameRef.current)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [loaded])

  return (
    <>
      {/* Loading screen */}
      {!loaded && (
        <div className="loader-screen">
          <p className="loader-title">Fazil Firoz</p>
          <div className="loader-bar-wrap">
            <div className="loader-bar" style={{ width: `${loadProgress}%` }} />
          </div>
          <p className="loader-pct">{loadProgress}%</p>
        </div>
      )}

      {/* Scroll container — 600vh drives the animation */}
      <div ref={containerRef} className="scroll-container">
        <div className="sticky-canvas-wrap">
          <canvas ref={canvasRef} className="anim-canvas" />

          {/* "Hi" handwritten overlay */}
          <div className={`hi-overlay ${hiVisible && showHi ? 'hi-visible' : 'hi-hidden'}`}>
            <span className="hi-letter">Hi</span>
            <div className="scroll-hint">
              <span className="scroll-hint-text">scroll to explore</span>
              <span className="scroll-arrow">↓</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
