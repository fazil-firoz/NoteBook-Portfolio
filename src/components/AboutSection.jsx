import { NbSection } from './NbSection'

const STORY = [
  {
    chapter: null,
    margin: '✦',
    text: "I didn't know what programming was, but computers somehow fascinated me. Looking back, that weekly one-hour computer class was the highlight of my school days — though it certainly feels different now!",
  },
  {
    chapter: null,
    margin: null,
    text: "That initial curiosity landed me in BCA. To be honest... I wasn't the brightest student. There were days when I barely understood what was happening in class. Yet somehow, assignment by assignment, exam by exam, I survived. Sometimes I still wonder how I graduated!",
  },
  {
    chapter: '— the detour',
    margin: '→',
    text: "Like many students, I dreamed of studying abroad. It felt like the obvious next step. But somewhere between overthinking, confusion, and my own fears, I stepped back. At that time, I saw many of my friends moving abroad while I stayed where I was. I felt guilty, wondering if I had missed the biggest opportunity of my life.",
  },
  {
    chapter: null,
    margin: null,
    text: "Still searching for direction, I moved to Kochi and joined Luminar Technolab to study software development. Everyone seemed to be doing it, so I thought — \"Why not me?\" It was a good experience, but deep down, I still felt something was missing. I hadn't found the spark I was looking for.",
  },
  {
    chapter: '— the turn',
    margin: '★',
    text: "Then, almost unexpectedly, I joined MCA. Funny enough, the decision I was most unsure about turned out to be one of the happiest parts of my journey. Those two years were filled with great friends, memorable moments, and personal growth. For the first time, I genuinely enjoyed the journey instead of worrying about the destination.",
  },
  {
    chapter: null,
    margin: null,
    text: "But good times don't last forever. Before I knew it, MCA was over, and I was standing at another crossroads.",
    emphasis: true,
  },
  {
    chapter: '— the hunt',
    margin: '↓',
    text: "The job hunt began. During that time, I often wondered whether I had made a mistake by not going abroad. But deep inside, I also believed that if it was truly meant for me, it would have happened. Maybe life had a different route planned.",
  },
  {
    chapter: null,
    margin: null,
    text: "Eventually, after countless applications and plenty of self-doubt, I landed my first job as a Software Engineer in Infopark.",
    emphasis: true,
  },
  {
    chapter: '— today',
    margin: '✓',
    text: "Today, I've completed one year in my first job.",
    emphasis: true,
  },
  {
    chapter: null,
    margin: null,
    text: "Do I know if I'm on the right path? Honestly... I still don't. Some days I feel confident. Some days I feel completely lost. Some days I want to take the next big step, but I don't know where it is. I'm still figuring things out, just like everyone else.",
  },
  {
    chapter: null,
    margin: '♡',
    text: (
      <>
        I believe something good is waiting ahead. And if life decides otherwise... well, I do have a{' '}
        <mark className="green-highlighter">Plan B</mark>. Although — between you and me, I'm secretly hoping I never have to use it. 😄
      </>
    ),
  },
]

export function AboutSection() {
  return (
    <NbSection id="about">
      <h2 className="section-heading">About Me</h2>
      <span className="heading-gap" />

      {/* diary entry meta */}
      {/* <span className="about-role">→ MCA Graduate · Software Engineer · Kochi, Kerala</span> */}
      <span className="heading-gap" />

      <div className="about-body">
        {STORY.map((block, i) => (
          <div
            key={i}
            className={`about-story-block${block.emphasis ? ' about-story-em' : ''}`}
            style={{ '--d': `${0.1 + i * 0.12}s` }}
          >
            {/* chapter marker in left margin area */}
            {block.chapter && (
              <span className="about-chapter">{block.chapter}</span>
            )}

            <div className="about-story-row">
              {/* inline margin symbol */}
              {block.margin && (
                <span className="about-margin-mark" aria-hidden="true">
                  {block.margin}
                </span>
              )}
              <p className="about-para about-para-story">{block.text}</p>
            </div>
          </div>
        ))}

        {/* Contact items in a clean, aligned box view including WhatsApp wa.me */}
        <div className="about-contacts-box-grid">
          {[
            { icon: '💬', value: 'WhatsApp Chat',        href: 'https://wa.me/919048634881',   d: '0.1s' },
            { icon: '✉️', value: 'fazzilfiroz@gmail.com', href: 'mailto:fazzilfiroz@gmail.com', d: '0.2s' },
            { icon: '📞', value: '+91 90486 34881',         href: 'tel:+919048634881',             d: '0.3s' },
            { icon: '🐙', value: 'github.com/fazil-firoz', href: 'https://github.com/fazil-firoz', d: '0.4s' },
            { icon: '💼', value: 'linkedin: fazzil-firoz', href: 'https://linkedin.com/in/fazzil-firoz', d: '0.5s' },
          ].map(c => (
            <a
              key={c.value}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="about-contact-box"
              style={{ '--d': c.d }}
            >
              <span className="contact-box-icon">{c.icon}</span>
              <span className="contact-box-text">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </NbSection>
  )
}
