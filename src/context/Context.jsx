import { createContext, useState } from 'react';

const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider };