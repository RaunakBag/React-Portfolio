import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
