import './styles.css';

export function NavBar() {
  return (
    <header className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Iann</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <nav className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <a href="#home">
                Home
              </a>
            </li>
            <li>
              <a href='#about'>
                Sobre
              </a>
            </li>
            <li>
              <a href="#portfolio"> Portfólio</a></li>
            <li>
              <a href="#contact"> Contato </a></li>
          </ul>
        </nav>
        <button className="btn n-btn">Contato</button>
      </div>

    </header>
  )
}