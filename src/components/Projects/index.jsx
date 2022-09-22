import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './styles.css';

import Projetos from '../../utils/projetos';

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
          <h1>{Projetos[5].title}</h1>
          <p>{Projetos[5].description}</p>
          <a href={`${Projetos[5].link}`} target="_blank">
            <button className='btn'>GitHub</button>
          </a>
        </div>

      </div>
    </section>
  )
}