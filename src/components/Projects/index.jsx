import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './styles.css';

import Projetos from '../../utils/projetos';
import { GithubLogo } from 'phosphor-react';

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
          <h1>{Projetos[0].title}</h1>
          <p>{Projetos[0].description}</p>
          <a href={`${Projetos[0].link}`} target="_blank">
            <button className='btn'>
              <GithubLogo size={18} weight="bold" />
              GitHub
            </button>
          </a>
        </div>

        <div className="p-card">
          <h1>{Projetos[1].title}</h1>
          <p>{Projetos[1].description}</p>
          <a href={`${Projetos[1].link}`} target="_blank">
            <button className='btn'>
              <GithubLogo size={18} weight="bold" />
              GitHub
            </button>
          </a>
        </div>

        <div className="p-card">
          <h1>{Projetos[2].title}</h1>
          <p>{Projetos[2].description}</p>
          <a href={`${Projetos[2].link}`} target="_blank">
            <button className='btn'>
              <GithubLogo size={18} weight="bold" />
              GitHub
            </button>
          </a>
        </div>

        <div className="p-card">
          <h1>{Projetos[3].title}</h1>
          <p>{Projetos[3].description}</p>
          <a href={`${Projetos[3].link}`} target="_blank">
            <button className='btn'>
              <GithubLogo size={18} weight="bold" />
              GitHub
            </button>
          </a>
        </div>

        <div className="p-card">
          <h1>{Projetos[4].title}</h1>
          <p>{Projetos[4].description}</p>
          <a href={`${Projetos[4].link}`} target="_blank">
            <button className='btn'>
              <GithubLogo size={18} weight="bold" />
              GitHub
            </button>
          </a>
        </div>

        <div className="p-card">
          <h1>{Projetos[5].title}</h1>
          <p>{Projetos[5].description}</p>
          <a href={`${Projetos[5].link}`} target="_blank">
            <button className='btn'>
              <GithubLogo size={18} weight="bold" />
              GitHub
            </button>
          </a>
        </div>

      </div>
    </section>
  )
}