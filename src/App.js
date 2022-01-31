import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          what's poppin
        </p>
        <AboutMe/>
        <Projects/>
        <Resume/>
      </header>
    </div>
  );
}

export default App;
