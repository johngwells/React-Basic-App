import React, { Component } from 'react'

// we will make this a child of textInput so import it there
class TextDisplay extends Component {
  
  render() {
    // need to display text from parent
    return (
      <div>
        <div>{this.props.text}</div>
        <button>delete one letter</button>
      </div>
    )
  }
}

export default TextDisplay