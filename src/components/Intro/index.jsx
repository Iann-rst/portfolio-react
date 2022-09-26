import { ThemeContext } from '../../context/Context';
import { useEffect, useContext } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { GithubLogo, LinkedinLogo, } from 'phosphor-react';

import './styles.css';
import Img from '../../assets/Imagem-Home.png';

export function Intro() {

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, [])


  return (
    <section className={theme ? `container intro i-light` : `container intro i-dark`} id="home">
      <div data-aos="fade-right" className="i-left">
        <div className="i-name">
          <span style={{ color: theme ? '' : 'white' }}>Olá! Meu nome é </span>
          <span>Iann Rodrigues</span>
          <span>Desenvolvedor Frontend e Mobile.</span>
        </div>

        <div className="i-icons">
          <a href="https://github.com/Iann-rst" title='GitHub' target="_blank">
            <GithubLogo size={40} weight="bold" />
          </a>
          <a href="https://www.linkedin.com/in/iann-rodrigues-b71b9220a/" title="LinkedIn">
            <LinkedinLogo size={40} weight="bold" />
          </a>
        </div>
      </div>

      <div data-aos="fade-left" className="i-right">
        <img src={Img} alt="" />
      </div>

    </section>
  )
}