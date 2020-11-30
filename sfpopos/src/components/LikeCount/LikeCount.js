import React, {Component} from 'react';
import './LikeCount.css';

class LikeCount extends Component { 
  constructor(props) {
    super(props)
    this.state= { likes: 0 }
  }

  increment() {
    this.setState({ likes: this.state.likes + 1 })
  }

  render() {
    return (
      <div>
        {/* <h1>{this.state.likes}</h1> */}
        <button class= "like" onClick={ (e) => {
        this.increment()
        }}> ❤️ {this.state.likes}
        </button>
      </div>
      )
    }
  }


export default LikeCount