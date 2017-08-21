import React, { Component } from "react";

export default class List extends Component {

  renderItem = (item, i) => {
    const { onClickItem, units, inputValue, selectedInputType } = this.props;

    const unit = units.filter((unit) => unit.name == item)[0]; 
    const conversion = unit.conversions.filter((conversion) => conversion.inputType == selectedInputType)[0];

    // console.log(inputValue)
    // console.log(unit);
    // console.log(conversion)
    // console.log(conversion.conversion(inputValue))

    return (
      <div style={styles.item} onClick={() => onClickItem(i)}>
        {/* {inputValue} {selectedInputType} is equal to {conversion.conversion(inputValue)} {item} */}
        {conversion.conversion(inputValue)} {item} 
      </div>
    );
  };

  render() {
    const { list } = this.props;

    return (
      <div style={styles.container}>
        {list.map(this.renderItem)}
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  item: {
    backgroundColor: "whitesmoke",
    marginBottom: 5,
    padding: 15
  }
};
