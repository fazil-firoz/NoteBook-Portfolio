import { useEffect, useRef, useState } from 'react'

/**
 * Fires once when the element enters the viewport.
 * Returns [ref, inView] — attach ref to your element.
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Immediate check if element is already in viewport
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '50px 0px', ...options }
    )
    observer.observe(el)

    // Fallback: make visible after 800ms to prevent permanently hidden content
    const timer = setTimeout(() => setInView(true), 800)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  return [ref, inView]
}
