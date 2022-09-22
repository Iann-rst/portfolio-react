import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Link, GithubLogo } from 'phosphor-react'
import './styles.css';

export function About() {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

  return (
    <section className="container about" id="about">
      <div data-aos="fade-right" className="a-left">
        <div className="a-avatar">
          <img src="https://github.com/Iann-rst.png" alt="" />
        </div>
      </div>

      <div data-aos="fade-left" className="a-right">
        <h1>Sobre Mim</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eveniet facilis minima expedita, vero eaque iusto placeat officia necessitatibus error nostrum dignissimos accusamus maiores provident!
          Autem, eveniet. Doloribus autem amet nesciunt.
        </p>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eveniet facilis minima expedita, vero eaque iusto placeat officia necessitatibus error nostrum dignissimos accusamus maiores provident!
          Autem, eveniet. Doloribus autem amet nesciunt.
        </p>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eveniet facilis minima expedita, vero eaque iusto placeat officia necessitatibus error nostrum dignissimos accusamus maiores provident!
          Autem, eveniet. Doloribus autem amet nesciunt.
        </p>
        <div className='social-btn'>
          <a className='btn a-button' href="https://www.github.com/Iann-rst" target="_blank">
            <GithubLogo size={24} weight="bold" />
            Github
          </a>

          <a href="/dist/Curriculo.pdf" className="btn a-button" download>
            <Link size={24} weight="bold" />
            Currículo
          </a>
        </div>
      </div>
    </section>
  )
}