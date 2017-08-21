import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class AddConversionButton extends Component {

  render() {    
    const {text, onButtonPress} = this.props

    return (
      // <button type='button' onClick={onButtonPress}>
      //   {text}
      // </button>

      <Button bsStyle="primary" block onClick={onButtonPress}>{text}</Button>
    )
  }
}
