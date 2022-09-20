import './styles.css';

export function NavBar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Iann</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <li>Home</li>
            <li>Serviços</li>
            <li>Portfólio</li>
            <li>Contato</li>
          </ul>
        </div>
        <button className="btn n-btn">Contato</button>
      </div>

    </div>
  )
}