import { useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/Context';


import './styles.css';

import Projetos from '../../utils/projetos';
import { GithubLogo } from 'phosphor-react';

export function Projects() {

  const { theme } = useContext(ThemeContext);


  return (
    <section className={theme ? `p-container container p-light` : `p-container container p-dark`} id="portfolio">
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