import React from 'react'
import { useHistory } from 'react-router-dom' // hook that we can use with React Router to navigate to a new page. 
import './RandomSpace.css';
import data from '../../sfpopos-data.json' // to know the length of the list.

function RandomSpace() {
    const history = useHistory()
  return (
        <button onClick={(e) => {
          // run code here when clicked'
          // gets a random number from 0 to the length - 1 
            const id = Math.floor(Math.random() * data.length)
            history.push(`/details/${id}`)
        }}>Show me a random space</button>
  )
}

export default RandomSpace