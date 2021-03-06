// FIXME: uupdate picture links
import React from 'react'
import Sudoku from './Sudoku.png'
import Card from './Card.png'
import Number from './Number.png'
import SliderPuzzle from './SliderPuzzle.png'
import ReactTodo from './ReactTodo.png'
import Netflix from './Netflix.png'
import Amazon from './Amazon.png'
import Slack from './Slack.png'
import './Portfolio.css'
// Fontawesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// React Popupbox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

// FIXME: update portfolio projects
const Portfolio = () => {
  // Sudoku
  const openPopupboxSudoku = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={Sudoku}
          alt='Sudoku'
        />
        <p>
          Sudoku Game using HTML, CSS, Javascript
        </p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://raunakbag.github.io/SudokuGame/')
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/RaunakBag/SudokuGame')
          }
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Sudoku Game'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }

  // 2048
  const openPopupboxCard = () => {
    const content = (
      <>
         <img
          className='portfolio-image-popupbox'
          src={Card}
          alt='Card'
        />
        <p>
          BlackJack game using HTML, CSS, JS
        </p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open(
              'https://raunakbag.github.io/CardGame/'
            )
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() => window.open('https://github.com/RaunakBag/CardGame')}
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Card Game'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }

  // Number Project
  const openPopupboxNumber = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={Number}
          alt='Number Project...'
        />
        <p>2048 Game using HTML, CSS, JS</p>
        <a
          href='/'
          className='hyper-link'
          onClick={() => window.open('https://raunakbag.github.io/2048/')}
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/RaunakBag/2048')
          }
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: '2048 game using HTML, CSS, JS'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }

  // Book Store Ruby on Rails Project
  const openPopupboxSliderPuzzle = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={SliderPuzzle}
          alt='Slider Puzzle using HTML, CSS, JS'
        />
        <p>Image Puzzle using HTML, CSS, JS.</p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://raunakbag.github.io/ImagePuzzle/')
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/RaunakBag/ImagePuzzle')
          }
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Slider Puzzle using HTML, CSS, JS'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }
   // Book Store Ruby on Rails Project
   const openPopupboxReactTodo = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={ReactTodo}
          alt='Simple React Todo'
        />
        <p>TodoList using React.</p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://raunakbag.github.io/React-TODO/')
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/RaunakBag/React-TODO')
          }
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Simple React Todo'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }
   // Book Store Ruby on Rails Project
   const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={Netflix}
          alt='Netflix Clone using React'
        />
        <p>Netflix clone using React</p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://netflix-clone-483f9.web.app/')
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/RaunakBag/NetflixClone')
          }
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Netflix Clone using React'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }
  const openPopupboxAmazon = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={Amazon}
          alt='Amazon'
        />
        <p>Amazon clone using React</p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://fir-b70c3.web.app/')
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/RaunakBag/AmazonClone')
          }
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Amazon Clone using React'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }
  const openPopupboxSlack = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={Slack}
          alt='Slack'
        />
        <p>Slack clone using React</p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://slack-ron.web.app/')
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/RaunakBag/Slack/tree/master')
          }
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Slack Clone using React'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }

  return (
    <div id='portfolio' className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>projects</h1>
        <div className='image-box-wrapper '>
          <div
            className='portfolio-image-box'
            onClick={openPopupboxSudoku}
          >
            <img
              src={Sudoku}
              alt='Sudoku'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className='portfolio-image-box' onClick={openPopupboxCard}>
            <img
              src={Card}
              alt='Card'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className='portfolio-image-box' onClick={openPopupboxNumber}>
            <img
              src={Number}
              alt='Number Project...'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className='portfolio-image-box'
            onClick={openPopupboxSliderPuzzle}
          >
            <img
              src={SliderPuzzle}
              alt='SliderPuzzle'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          <div
            className='portfolio-image-box'
            onClick={openPopupboxReactTodo}
          >
            <img
              src={ReactTodo}
              alt='ReactTodo'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          <div
            className='portfolio-image-box'
            onClick={openPopupboxNetflix}
          >
            <img
              src={Netflix}
              alt='Netflix'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          <div
            className='portfolio-image-box'
            onClick={openPopupboxAmazon}
          >
            <img
              src={Amazon}
              alt='Amazon'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          <div
            className='portfolio-image-box'
            onClick={openPopupboxSlack}
          >
            <img
              src={Slack}
              alt='Slack'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </div>
  )
}

export default Portfolio