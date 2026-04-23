import placeholderImg from '../../assets/photo-placeholder.jpg'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      {/* Left: identity */}
      <div className="hero__left">
        <div className="hero__left-inner">
          <div className="hero__tag font-mono">Portfolio · 2025</div>

          <h1 className="hero__name font-serif">
            Trilen<br />
            <em>Surya Ningsih</em>
          </h1>

          <div className="hero__rule" aria-hidden="true" />

          <p className="hero__role font-mono">
            Information System Student<br />
            Universitas Andalas · Padang
          </p>

          <a href="#about" className="hero__scroll" aria-label="Scroll down">
            <span className="font-mono">Scroll</span>
            <span className="hero__scroll-arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      {/* Right: photo, edge to edge */}
      <div className="hero__right" aria-hidden="true">
        <img
          src={placeholderImg}
          alt=""
          className="hero__photo"
        />
        <div className="hero__photo-caption font-mono">
          Developer & Writer
        </div>
      </div>
    </section>
  )
}
