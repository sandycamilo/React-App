import React from 'react' // react must be in scope when using JSX - always import in every component you create
import './Title.css' // import css file
import { NavLink } from 'react-router-dom' //component that sets the address to navigate to in our browser's URL bar
import RandomSpace from '../RandomSpace/RandomSpace'

function Title() {
  return (
    // JSX - Extension of HTML - uses XML languange syntax ~~ converts to vanilla JS by the build system each time you save files
    <div className="Title"> 
      <header>
      <h1 class="sftitle">SFPOPOS</h1>
      <div className="Title-Subtitle">San Francisco Privately Owned Public Spaces</div>
      <div>
        <NavLink to="/">
        <button class="home">
        List        
        </button>
        </NavLink> 
        <NavLink to="/about">
        <button class="about">
        About
        </button>
        </NavLink>
        <RandomSpace />
      </div>
      </header>
    </div>
  )
}

// exporting Title function as the default export ~ Any file/module may have a SINGLE default export
export default Title