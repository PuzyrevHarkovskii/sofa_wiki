import clsx from 'clsx'
import './styles.css'

type FooterProps = React.ComponentPropsWithoutRef<'footer'>

export function Footer(props: FooterProps) {
  const { className, ...otherProps } = props

  return (
    <footer className={clsx('wiki-footer', className)} {...otherProps}>
      <div className="wiki-footer-content">
        <div className="wiki-footer-links">
          <a href="#" className="wiki-footer-link">
            О Википедии
          </a>
          <a href="#" className="wiki-footer-link">
            Отказ от ответственности
          </a>
          <a href="#" className="wiki-footer-link">
            Свяжитесь с нами
          </a>
          <a href="#" className="wiki-footer-link">
            Мобильная версия
          </a>
        </div>
        <div className="wiki-footer-license">
          <p>
            Текст доступен по лицензии <a href="#">Creative Commons Attribution-ShareAlike</a>
          </p>
          <p>
            Wikipedia® — зарегистрированный товарный знак некоммерческой организации{' '}
            <a href="#">Wikimedia Foundation, Inc.</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
