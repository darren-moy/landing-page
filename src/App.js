import Header from './components/Header'
import About from './components/About'
import Profile from './components/Profile'
import Experiences from './components/Experiences'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Profile />
        <About />
        <Experiences />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
