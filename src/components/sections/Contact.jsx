import { ScrollReveal } from '../ui/ScrollReveal'
import './Contact.css'

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact__inner">
        <ScrollReveal>
          <span className="contact__label font-mono">Say hello</span>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 className="contact__heading font-serif">
            Let's create<br />
            <em>something together.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <a
            href="mailto:trilensuryaningsih@gmail.com"
            className="contact__email font-serif"
          >
            trilensuryaningsih@gmail.com
            <span className="contact__email-icon" aria-hidden="true">→</span>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <div className="contact__socials">
            {[
              { label: 'GitHub', href: 'https://github.com/trilensuryaningsih' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/trilen-surya-ningsih-4673b5244/' },
              { label: 'Instagram', href: 'https://www.instagram.com/trilensurya_ningsih29/' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="contact__social font-mono">
                {s.label} ↗
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
