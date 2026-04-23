import { ScrollReveal } from '../ui/ScrollReveal'
import './About.css'

export function About() {
  return (
    <section id="about" className="section about">
      <div className="about__inner">

        <ScrollReveal>
          <span className="about__label font-mono">About me</span>
        </ScrollReveal>

        <div className="about__grid">
          <ScrollReveal delay={80}>
            <h2 className="about__heading font-serif">
              Student,<br />developer,<br /><em>& storyteller.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="about__content">
              <p>
                I'm Trilen — an Information System student at Universitas Andalas in Padang,
                Indonesia. I focus on building structured backend systems and clean, purposeful code.
              </p>
              <p>
                Outside of technology, I write and host podcasts. Both have taught me how to distil
                complex ideas into something clear and human. I also competed in earth science at the
                regional level, which shaped how I approach problems — methodically, and with patience.
              </p>
              <p>
                I'm currently looking for opportunities to contribute to meaningful projects and grow
                alongside a team of people who care about their craft.
              </p>

              <div className="about__details">
                <div className="about__detail">
                  <span className="about__detail-label font-mono">Education</span>
                  <span className="about__detail-value font-serif">
                    Information System, <em>Universitas Andalas</em>
                  </span>
                </div>
                <div className="about__detail">
                  <span className="about__detail-label font-mono">Location</span>
                  <span className="about__detail-value font-serif">
                    <em>Padang, West Sumatra</em>
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
