import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Divider } from './components/Divider'
import { Intro } from './components/Intro'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'

function App() {
  return (
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
  )
}

export default App
