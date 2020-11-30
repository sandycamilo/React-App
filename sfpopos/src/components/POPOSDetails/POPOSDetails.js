import React from 'react';
import data from '../../sfpopos-data.json'

function POPOSDetails(props) {
  const { id } = props.match.params //Location index ~ defined variable id and set value to props.match.params
  const { images, title, desc, hours, features, geo } = data[id] //using id to get data for location at the index

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} /> 
      </div>

      <div>
        <h1>{ title }</h1>
        <p>{ desc }</p>
        <p>{ hours }</p>
        <p>{ features }</p>
        <p>{ geo.lat } { geo.lon }</p>
      </div>
    </div>
  )
}

export default POPOSDetails