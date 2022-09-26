import { ThemeContext } from '../../context/Context';

import { useEffect, useContext } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { LinkedinLogo, GithubLogo } from 'phosphor-react'
import './styles.css';

export function About() {

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

  return (
    <section className={theme ? `container about a-light` : `container about a-dark`} id="about">
      <div data-aos="fade-right" className="a-left">
        <div className="a-avatar">
          <img src="https://github.com/Iann-rst.png" alt="" />
        </div>
      </div>

      <div data-aos="fade-left" className="a-right">
        <h1>Sobre Mim</h1>
        <p className="text" style={{ color: theme ? 'var(--black)' : 'white' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eveniet facilis minima expedita, vero eaque iusto placeat officia necessitatibus error nostrum dignissimos accusamus maiores provident!
          Autem, eveniet. Doloribus autem amet nesciunt.
        </p>
        <p className="text" style={{ color: theme ? 'var(--black)' : 'white' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eveniet facilis minima expedita, vero eaque iusto placeat officia necessitatibus error nostrum dignissimos accusamus maiores provident!
          Autem, eveniet. Doloribus autem amet nesciunt.
        </p>
        <div className='social-btn'>
          <a href="https://www.linkedin.com/in/iann-rodrigues-b71b9220a/" className="btn a-button" target="_blank">
            <LinkedinLogo size={24} weight="bold" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}