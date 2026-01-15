import './assets/reset.css'
import './App.css'
import Header from './Header'
import Apropos from './Components/Apropos'
import Skill from './Components/Skill'
import Projects from './Components/Projects'

function App() {
  return (
    <>
    <div className="background"/>
    <Header />
    <Apropos />
    <Skill />
    <Projects />
    </>
  )
}
export default App
