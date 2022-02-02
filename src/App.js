import './App.css';
// import AboutMe from './components/AboutMe.js';
// import Projects from './components/Projects.js';
// import Resume from './components/Resume.js';
// import Links from './components/Links.js';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import photo1 from './demo/photo1.png';
import photo2 from './demo/photo2.png';
import photo3 from './demo/photo3.png';
import kulpi from './demo/kulpi.png';


function App() {
  return (
    <div className="App">
      <Navbar id='navbar'>
        <img src={kulpi} alt='kulpi'/>
      </Navbar>

      <h1 className="title" >Yaki Spaghetti</h1>

      <img src={photo1} alt="yaki" id="photo"/>
      <h1>끓는물에 약간의 소금과 면을넣어 약 분 정도 삶은 후 체에 받쳐 물기제거후 약간의 올리브유를 넣고 버무려주세요.</h1>
      <img src={photo2} alt="spa" id="photo"/>
      <h1>팬에 마늘편과 베이컨을 넣고 노릇하게 볶아주세요.
양배추. 양파. 페페론치니를 넣고 야채가 익으면....소스는 양을봐가며 조절하시고 삶은면과 면이 고루 섞이도록 잘 버무려 줍니다.</h1>
      <img src={photo3} alt="ghetti" id="photo"/>
      <h1>그릇에 야끼 스파게티 를 담고 가스오브시를 올린후 반숙 달걀후라이를 얹어 맛있게 드시면 됩니다.</h1>
      <h2>감사합니다</h2>
      
      {/* <Navbar bg="primary" variant="dark">
        <section href="">About Me</section>
        <section href="">Links</section>
        <section href="">Projects</section>
        <section href="">Resume</section>
      </Navbar>
      <header className="App-header">
        <p id="app" class="app">
           this is the app component
        </p>
        <section id="aboutMe" className="aboutMe">
           <AboutMe/>
        </section>
        <section id="projects" className="projects">
           <Projects/>
        </section>
        <section id="resume" className="resume">
            <Resume/>
        </section>
        <section id="links" className="links">
            <Links/>
        </section>
      </header> */}

    </div>
  );
}

export default App;
