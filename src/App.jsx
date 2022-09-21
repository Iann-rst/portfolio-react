import './App.css'
import { Intro } from './components/Intro'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Intro />
      </main>
    </div>
  )
}

export default App
