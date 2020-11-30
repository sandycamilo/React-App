import React from 'react';
import './POPOSSpace.css';
import LikeCount from './LikeCount';
import { Link } from 'react-router-dom';

function POPOSSpace(props) { // components take a paramenter called, props. props is always an object (has properties - props.name, props.image, etc...) ~ it allows you to configure components
  const { name, image, address, hours, id} = props //deconstructing props
  return (
    <div>
      <h1 class="title">
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <Link to={`/details/${id}`}> 
        <img 
          src={`${process.env.PUBLIC_URL}images/${image}`} 
          width="300" 
          height="300" 
          alt="Hello" 
        />
      </Link>
      <div class="address">{address}</div>
      <div class= "hours">{hours}</div>
      <LikeCount />
    </div>
    
  )
}

export default POPOSSpace