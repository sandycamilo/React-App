import React from 'react';
import './POPOSSpace.css';
import LikeCount from './LikeCount';

function POPOSSpace(props) { // components take a paramenter called, props. props is always an object (has properties - props.name, props.image, etc...) ~ it allows you to configure components
  const { name, image, address, hours} = props
  return (
    <div>
      <h1 class="title">{name}</h1>
      <img 
        src={`${process.env.PUBLIC_URL}images/${image}`} 
        width="300" 
        height="300" 
        alt="50 California St." 
      />
      <div class="address">{address}</div>
      <div class= "hours">{hours}</div>
      <LikeCount />
    </div>
    
  )
}

export default POPOSSpace