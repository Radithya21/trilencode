import { ScrollReveal } from '../ui/ScrollReveal'
import { skills } from '../../data/skills'
import './Skills.css'

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="skills__inner">

        <ScrollReveal>
          <span className="skills__label font-mono">Skills</span>
        </ScrollReveal>

        <div className="skills__grid">
          <ScrollReveal delay={80}>
            <h2 className="skills__heading font-serif">
              Tools &<br /><em>technologies.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="skills__content">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skills__group">
                  <span className="skills__group-label font-mono">{category}</span>
                  <div className="skills__pills">
                    {items.map(skill => (
                      <span key={skill} className="skills__pill font-serif">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
