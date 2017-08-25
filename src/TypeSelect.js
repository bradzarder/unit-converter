import React, { Component } from "react";
import { FormControl } from 'react-bootstrap';

export default class TypeSelect extends Component {

  handleTypeChange = (e) => {
    const { onTypeChange } = this.props;
    onTypeChange(e.target.value);
  };

  renderItem = (type, i) => {
    return (
      <option value={type.name}>
        {type.name}
      </option>
    );
  };

  render() {
    const { id, types } = this.props;

    return (
      <FormControl id={id} onChange={this.handleTypeChange} componentClass="select" placeholder="select">
         {types.map(this.renderItem)}
      </FormControl>

    );
  }

 
}
