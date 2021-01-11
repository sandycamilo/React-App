import React from 'react'
import './POPOSDetails.css'
import data from '../../sfpopos-data.js'

// random space button 
function POPOSDetails(props) {
  const { id } = props.match.params //Location index ~ defined variable id and set value to props.match.params
  const { images, title, desc, hours, features, geo } = data[id] //using id to get data for location at the index
  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} /> 
      </div>
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{ title }</h1>
        <p className="POPOSDetails-desc">{ desc }</p>
        <p className="POPOSDetails-hours">{ hours }</p>
        <p className="POPOSDetails-features">{ features }</p>
        <p className="POPOSDetails-geo">{ geo.lat } { geo.lon }</p>
      </div>
    </div>
  )
}

export default POPOSDetails