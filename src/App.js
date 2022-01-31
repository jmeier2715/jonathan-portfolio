import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
import Links from './components/Links.js';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
       <Navbar bg="primary" variant="dark">
    hello
  </Navbar>
      <header className="App-header">
        <p id="app" class="app">
          this is the app component
        </p>
        <AboutMe id="aboutMe" class="aboutMe"/>
        <Projects id="projects" class="projects"/>
        <Resume id="resume" class="resume"/>
        <Links id="links" class="links"/>
      </header>
    </div>
  );
}

export default App;
