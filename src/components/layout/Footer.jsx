import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__copy font-serif">
          <em>Trilen Surya Ningsih</em> · {new Date().getFullYear()}
        </span>
        <div className="footer__links">
          {[
            { label: 'GitHub', href: 'https://github.com/trilensuryaningsih' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/trilen-surya-ningsih-4673b5244/' },
            { label: 'Instagram', href: 'https://www.instagram.com/trilensurya_ningsih29/' },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="footer__link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
