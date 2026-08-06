import { useInView } from '../hooks/useInView'

/**
 * Triggers .visible when it enters the viewport (once).
 * Background = transparent — body's ruled lines show through.
 */
export function NbSection({ id, children, className = '', extraClass = '' }) {
  const [ref, inView] = useInView()

  return (
    <section
      id={id}
      ref={ref}
      className={`nb-section ${inView ? 'visible' : ''} ${className} ${extraClass}`}
    >
      {children}
    </section>
  )
}
