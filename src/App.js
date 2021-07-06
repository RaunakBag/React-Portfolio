import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Experiences from './components/Experiences/Experiences';
import Portfolio from './components/Portfolio/Portfolio'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Experiences/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
