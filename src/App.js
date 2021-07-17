import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio'
// import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <Particles
        className='particles-canvas'
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 6,
                color: '#f9ab00'
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Portfolio />
      {/* <Contact /> */}
      <Footer />
    </>
  )
}

export default App
