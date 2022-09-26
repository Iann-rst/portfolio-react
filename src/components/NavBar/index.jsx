import './styles.css';

import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import { Toggle } from '../Toggle';

export function NavBar() {
  const { theme } = useContext(ThemeContext);

  console.log(theme);
  return (
    <header className={theme ? `container n-wrapper n-light` : `container n-wrapper n-dark`}>
      <div className="n-left">
        <div className="n-name">
          Iann
        </div>
        <Toggle />
      </div>
      <div className="n-right">
        <nav className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <a className={theme ? `light` : `dark`} href="#home">
                Home
              </a>
            </li>
            <li>
              <a className={theme ? `light` : `dark`} href='#about'>
                Sobre
              </a>
            </li>
            <li>
              <a className={theme ? `light` : `dark`} href="#portfolio">
                Portfólio
              </a>
            </li>
            <li>
              <a className={theme ? `light` : `dark`} href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  )
}