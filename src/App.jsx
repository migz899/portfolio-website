import './App.css'
import Header from './components/header/Header'
import HomePage from './components/HomePage/HomePage'
import SkillList from './components/HomePage/SkillList/SkillList'
import About from './components/HomePage/About/About'
import Resume from './components/resume/resume'
import Projects from './components/projects/projects'
import Greeting from './components/HomePage/Greeting/Greeting'
import Playable_Games from './components/games/Playable_Games'

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <SkillList />
      <Greeting />
      <About />
      <Resume />

      <Projects />
      <Playable_Games />
    </div>
  )
}

export default App
