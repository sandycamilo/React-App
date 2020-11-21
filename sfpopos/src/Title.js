import React from 'react'; // react must be in scope when using JSX - always import in every component you create
import './Title.css'; // import css file

function Title() {
  return (
    // JSX - Extension of HTML - uses XML languange syntax ~~ converts to vanilla JS by the build system each time you save files
    <div className="Title"> 
      <h1>SFPOPOS</h1>
      <div className="Title-Subtitle">San Francisco Privately Owned Public Spaces</div>
    </div>
  )
}

// exporting Title function as the default export ~ Any file/module may have a SINGLE default export
export default Title