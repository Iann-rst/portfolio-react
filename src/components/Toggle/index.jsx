import './styles.css';

import { Sun, Moon } from 'phosphor-react';

import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';

export function Toggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className='toggle' onClick={toggleTheme}>
      <Moon weight="bold" />
      <Sun weight="bold" />
      <div className="t-button" style={theme ? { right: '2px' } : { left: '2px' }}>
      </div>
    </div>
  )
}