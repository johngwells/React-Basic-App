import React, { Component } from 'react'

// we will make this a child of textInput so import it there
class TextDisplay extends Component {
  
  handleClick() {
    // when console(this) Google console shows its the props coming from TextDisplay and not from textInput
    // so we need to use bind.this
    // console.log(this)
    this.props.deleteLetter()
    // console.log('button clicked')
  }

  render() {
    // need to display text from parent
    return (
      <div>
        <div>{this.props.text}</div>
        <button onClick={this.handleClick.bind(this)}>delete one letter</button>
      </div>
    )
  }
}

export default TextDisplay