import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Divider } from './components/Divider'
import { Intro } from './components/Intro'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'

import { ThemeProvider } from './context/Context';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar />
        <main>
          <Intro />
          <Divider divider="divider-1" />
          <About />
          <Divider divider="divider-2" />
          <Projects />
        </main>
        <Contact />
      </div>
    </ThemeProvider>
  )
}

export default App
