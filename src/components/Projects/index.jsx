import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './styles.css';

export function Projects() {

  //scroll reveal (Page animations on Scrolling)
  useEffect(() => {
    Aos.init({
      duration: 3000
    });
  }, [])

  return (
    <section data-aos="fade" className='p-container container' id="portfolio">
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
    </section>
  )
}