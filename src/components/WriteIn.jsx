/**
 * Splits text into individually-animated words.
 * The parent .nb-section must have class "visible" to trigger reveal.
 *
 * Props:
 *   text       — string to display
 *   tag        — HTML tag to render (default: 'span')
 *   className  — additional class names
 *   baseDelay  — seconds before first word appears (default 0.15)
 *   speed      — seconds between each word (default 0.055)
 */
export function WriteIn({ text, tag: Tag = 'span', className = '', baseDelay = 0.15, speed = 0.055 }) {
  const words = text.split(' ')
  return (
    <Tag className={`word-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="word" style={{ '--d': `${(baseDelay + i * speed).toFixed(3)}s` }}>
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  )
}
