import clsx from 'clsx'
import './styles.css'

type HeaderProps = React.ComponentPropsWithoutRef<'header'>

export function Header(props: HeaderProps) {
  const { className, ...otherProps } = props

  return (
    <header className={clsx('wiki-header', className)} {...otherProps}>
      <div className="wiki-header-content">
        <div className="wiki-header-top">
          <div className="wiki-logo">
            <a href="/" className="wiki-logo-link">
              Википедия
            </a>
          </div>
          <button className="wiki-menu-button">☰</button>
        </div>
        <div className="wiki-search">
          <input type="search" placeholder="Поиск в Википедии" className="wiki-search-input" />
        </div>
        <nav className="wiki-nav">
          <a href="#" className="wiki-nav-link">
            Читать
          </a>
          <a href="#" className="wiki-nav-link">
            Править
          </a>
          <a href="#" className="wiki-nav-link">
            История
          </a>
        </nav>
      </div>
    </header>
  )
}
