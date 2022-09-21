import './styles.css';

export function Projects() {
  return (
    <section className='projects' id="portfolio">
      <div className='p-container'>
        <h1>
          Projetos
        </h1>

        <div className="p-wrapper">
          <div className="p-card">
            <h1>Nome do Projeto</h1>
            <p>detalhes</p>
            <a href="#"><button className='btn'>GitHub</button></a>
          </div>

          <div className="p-card">
            <h1>Nome do Projeto 2</h1>
            <p>detalhes</p>
            <a href="#"><button className='btn'>GitHub</button></a>
          </div>

          <div className="p-card">
            <h1>Nome do Projeto 3</h1>
            <p>detalhes</p>
            <a href="#"><button className='btn'>GitHub</button></a>
          </div>

          <div className="p-card">
            <h1>Nome do Projeto 4</h1>
            <p>detalhes</p>
            <a href="#"><button className='btn'>GitHub</button></a>
          </div>

          <div className="p-card">
            <h1>Nome do Projeto 5</h1>
            <p>detalhes</p>
            <a href="#"><button className='btn'>GitHub</button></a>
          </div>

          <div className="p-card">
            <h1>Nome do Projeto 6</h1>
            <p>detalhes</p>
            <a href="#"><button className='btn'>GitHub</button></a>
          </div>
        </div>
      </div>
    </section>
  )
}