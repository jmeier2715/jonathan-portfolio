import './App.css';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
import Links from './components/Links.js';
import { Navbar, NavLink} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
       <Navbar className="navbar">
    <NavLink id ='navChild'>Jonathan Meier</NavLink>
    <NavLink id ='navChild'>About Me</NavLink>
    <NavLink id ='navChild'>My Projects</NavLink>
    <NavLink id ='navChild'>Connect with Me</NavLink>
  </Navbar>
        <h1 id="obama" className="obama">
          this is the app component
        </h1>
        <div className="myChildren">
        <AboutMe id="aboutMe" class="aboutMe"/>
        <Projects id="projects" class="projects"/>
        <Resume id="resume" className="resume"/>
        <Links id="links" class="links"/>
        </div>
        
    </div>
  );
}

export default App;
