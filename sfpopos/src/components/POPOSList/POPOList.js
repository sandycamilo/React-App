import React, { useState } from 'react'
import POPOSSpace from '../POPOSSpace/POPOSSpace'
import './POPOSList.css'
// load JSON data in POPOSList component 
import data from '../../sfpopos-data.js'

function POPOList() {
  const [ query, setQuery ] = useState('')
  // map is used to transform an array to another type 
  // map method takes back a callback function and calls this once on each item in array
  const spaces = data.filter(({ features, title, address }) => {
    const inTitle = title.includes(query) 
    const inAddress = address.includes(query)
    const inFeatures = address.includes(query)
    return inTitle || inAddress || inFeatures
  }).map((obj) => {
    // intermediate variables to hold values from properties on obj
      const { id, title, address, images, hours, features } = obj
    // turn array of objects into an array of components
    // one POPOSSpace for each object in the data array
    return (
      <POPOSSpace
        id={id} // new prop id
        key={ `${title}-${id}`} // key prop for Virtual DOM - It needs to know which items have been changed and this is achievable with the help of unique keys for every item
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  })
    return (
      <div className="POPOSList">
          <div className="POPOList-Search">
          <form>
              <input 
                  value={query} /*  holds the value you entered into the field */
                  placeholder="search"
                  onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit">Submit</button>
          </form>
          </div>
          {spaces}
      </div>
  )
}

export default POPOList