import React from 'react';
import './Footer.css';

function Footer() { // components take a paramenter called, props. props is always an object (has properties - props.name, props.image, etc...) ~ it allows you to configure components
  // function to return current year
  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <div className= "Footer">
      <h1>sandy camilo &copy; {getCurrentYear()} </h1>
    </div>
  )
}

export default Footer