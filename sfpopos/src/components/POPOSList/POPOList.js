import React from 'react';

import POPOSSpace from '../POPOSSpace/POPOSSpace'
import './POPOSList.css'

// load JSON data in POPOSList component 
import data from '../../sfpopos-data.json'

function POPOList() {
  // map is used to transform an array to another type 
  // map method takes back a callback function and calls this once on each item in array
  const spaces = data.map((obj,i) => {
    // intermediate variables to hold values from properties on obj
    const { title, address, images, hours} = obj
    // turn array of objects into an array of components
    // one POPOSSpace for each object in the data array
    return (
      <POPOSSpace
        id={i} // new prop id
        key={title} // key prop for Virtual DOM - It needs to know which items have been changed and this is achievable with the help of unique keys for every item
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  })
    return (
      <div className="POPOSList">
        {spaces}
      </div>
  )
}

export default POPOList