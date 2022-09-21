import './styles.css';
import { GithubLogo, LinkedinLogo, } from 'phosphor-react';

import Img from '../../assets/Imagem-Home.png';

export function Intro() {
  return (
    <section className="intro" id="home">
      <div className="i-left">
        <div className="i-name">
          <span>Olá! Meu nome é </span>
          <span>Iann Rodrigues</span>
          <span>Desenvolvedor Frontend e Mobile.</span>
        </div>

        <button className="btn i-button">Hire me</button>

        <div className="i-icons">
          <a href="" title='GitHub'>
            <GithubLogo size={40} weight="bold" />
          </a>
          <a href="" title="LinkedIn">
            <LinkedinLogo size={40} weight="bold" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Img} alt="" />
      </div>

    </section>
  )
}