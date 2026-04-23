import { ScrollReveal } from '../ui/ScrollReveal'
import { projects } from '../../data/projects'
import './Projects.css'

export function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="projects__inner">

        <ScrollReveal>
          <span className="projects__label font-mono">Selected work</span>
        </ScrollReveal>

        <div className="projects__list">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 60}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-item"
                aria-label={`View ${project.title}`}
              >
                <span className="project-item__num font-serif" aria-hidden="true">
                  {project.index}
                </span>

                <div className="project-item__body">
                  <div className="project-item__top">
                    <h3 className="project-item__title font-serif">{project.title}</h3>
                    <span className="project-item__year font-mono">{project.year}</span>
                  </div>
                  <p className="project-item__desc">{project.description}</p>
                  <div className="project-item__footer">
                    <div className="project-item__tags">
                      {project.tech.map(t => (
                        <span key={t} className="project-item__tag font-mono">{t}</span>
                      ))}
                    </div>
                    <span className="project-item__cta font-serif">
                      View <em>→</em>
                    </span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
