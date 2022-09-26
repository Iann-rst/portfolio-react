import { GithubLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react';
import './styles.css';
import { useContext } from 'react'
import { ThemeContext } from '../../context/Context';

export function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={theme ? `light` : `dark`} style={{ paddingTop: '10rem' }}></div>
      <footer className="footer" id="contact">
        <div className="social-network">
          <a href="https://github.com/Iann-rst" target="_blank" className="social" title="GitHub">
            <GithubLogo weight='bold' />
          </a>
          <a href="https://www.linkedin.com/in/iann-rodrigues-b71b9220a/" target="_blank" className="social" title="LinkedIn">
            <LinkedinLogo weight='bold' />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5577999138868&text&type=phone_number&app_absent=0" target="_blank" className="social" title="Whatsapp">
            <WhatsappLogo weight='bold' />
          </a>
        </div>

        <p className="autor">&#9400; Iann Rodrigues - 2022</p>

      </footer>
    </>
  )
}