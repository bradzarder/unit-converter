import React, { Component } from "react";
import { FormControl } from 'react-bootstrap';

export default class Input extends Component {

  handleChange = e => {
    const { onSubmitEditing } = this.props;
    onSubmitEditing(e.target.value);
  };



  render() {
    const { placeholder } = this.props;
  
    return (
        <FormControl
            type="text"
            //value={value}
            placeholder={placeholder}
            onChange={this.handleChange}
        />
    );
  }
}