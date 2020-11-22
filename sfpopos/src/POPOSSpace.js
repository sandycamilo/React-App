import React from 'react'
// import logo from './logo.svg'

function POPOSSpace(props) { // components take a paramenter called, props. props is always an object (has properties - props.name, props.image, etc...) ~ it allows you to configure components
  const { name, image, address } = props
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}images/50-california-st.jpg`}
        width="300" 
        height="300" 
        alt="50 California St." 
      />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default POPOSSpace