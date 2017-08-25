import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './List'
import Input from './Input'
import TypeSelect from './TypeSelect'
import AddConversionButton from './AddConversionButton'
import { PageHeader, Well, InputGroup, Grid, Row, Col, Panel} from 'react-bootstrap';

class App extends Component {

  state = {
    selectedOutputType: "Feet",
    selectedInputType: "Feet",
    inputValue: "",
    conversions: ["Inches"],
    units: [
      {
        name: "Feet",
        type: "length",
        conversions: [
          {
            inputType: "Feet",
            conversion: (x) => x
          },
          {
            inputType: "Inches",
            conversion: (x) => x/12
          },
          {
            inputType: "Yards",
            conversion: (x) => x*3
          },
          {
            inputType: "Centimeters",
            conversion: (x) => x/30.54
          },
          {
            inputType: "Millimeters",
            conversion: (x) => x/305.4
          },
          {
            inputType: "Meters",
            conversion: (x) => x/.3054
          },
          
        ]
      },
      {
        name: "Inches",
        type: "length",
        conversions: [
          {
            inputType: "Inches",
            conversion: (x) => x
          },
          {
            inputType: "Feet",
            conversion: (x) => x*12
          },
          {
            inputType: "Yards",
            conversion: (x) => x*36
          },
          {
            inputType: "Centimeters",
            conversion: (x) => x*2.545
          },
          {
            inputType: "Millimeters",
            conversion: (x) => x*25.45
          },
          {
            inputType: "Meters",
            conversion: (x) => x*.02545
          },
        ]
      },
      {
        name: "Yards",
        type: "length",
        conversions: [
          {
            inputType: "Inches",
            conversion: (x) => x/36
          },
          {
            inputType: "Feet",
            conversion: (x) => x/3
          },
          {
            inputType: "Yards",
            conversion: (x) => x
          },
          {
            inputType: "Centimeters",
            conversion: (x) => x*0.109361
          },
          {
            inputType: "Millimeters",
            conversion: (x) => x*0.00109361
          },
          {
            inputType: "Meters",
            conversion: (x) => x*1.09361
          },        
        ]
      },
      {
        name: "Centimeters",
        type: "length",
        conversions: [
          {
            inputType: "Inches",
            conversion: (x) => x*2.545
          },
          {
            inputType: "Feet",
            conversion: (x) => x*30.54
          },
          {
            inputType: "Yards",
            conversion: (x) => x*91.62
          },
          {
            inputType: "Centimeters",
            conversion: (x) => x
          },
          {
            inputType: "Millimeters",
            conversion: (x) => x*10
          },
          {
            inputType: "Meters",
            conversion: (x) => x/100
          },  
        ]
      },
      {
        name: "Millimeters",
        type: "length",
        conversions: [
          {
            inputType: "Inches",
            conversion: (x) => x*25.45
          },
          {
            inputType: "Feet",
            conversion: (x) => x*305.4
          },
          {
            inputType: "Yards",
            conversion: (x) => x*916.2
          },
          {
            inputType: "Centimeters",
            conversion: (x) => x/10
          },
          {
            inputType: "Millimeters",
            conversion: (x) => x
          },
          {
            inputType: "Meters",
            conversion: (x) => x/1000
          },
        ]
      },
      {
        name: "Meters",
        type: "length",
        conversions: [
          {
            inputType: "Inches",
            conversion: (x) => x*.02545
          },
          {
            inputType: "Feet",
            conversion: (x) => x*0.3054
          },
          {
            inputType: "Yards",
            conversion: (x) => x*0.9162
          },
          {
            inputType: "Centimeters",
            conversion: (x) => x*100
          },
          {
            inputType: "Millimeters",
            conversion: (x) => x*1000
          },
          {
            inputType: "Meters",
            conversion: (x) => x
          },
        ]
      },
    ]
  }

  onTypeChange = (type) => {
    this.setState({selectedOutputType: type})
  }

  onInputTypeChange = (type) => {
    this.setState({selectedInputType: type})
  }

  onInputValueChange = (value) => {
    this.setState({inputValue: value})
  }

  onAddConversion = () => {
    const {conversions, units, selectedOutputType} = this.state;

    const newConversion = units
      .filter((unit, i) => unit.name === selectedOutputType)
      .map((unit) => unit.name);
    
    this.setState({
      conversions: [newConversion[0], ...conversions]
    })
  }

  onRemoveConversion = (index) => {
    const {conversions} = this.state

    this.setState({
      conversions: conversions.filter((conversion, i) => i !== index),
    })
  }

  render() {
    const {units, conversions, inputValue, selectedInputType} = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Unit Conversions</h2>
        </div>

        <br/>
        <br/>

        <PageHeader>Unit Converter <small>React and bootstrap demo</small></PageHeader>


        <Grid>

          <Row>         
            <Col md={12}>
              <Well>
              <p>A demo application for converting units of measurement, built using React and Bootstrap for React.</p>

              <p>Enter a number in the input box to have it converted into one or more outputs. Add additional outputs by selecting the type using the dropdown and clicking the Add output conversion button.</p>

              <p>Click on an item in the output list to remove it.</p>
            </Well>
            </Col>
            
          </Row>

          <Row>

            <Col lg={6}>
              <Panel header={"Input"}>

                <Row>
                  <Col md={6}>
                    <Input
                      id={'userInput'}
                      value={inputValue}
                      placeholder={'Input unit'}
                      onSubmitEditing={this.onInputValueChange}
                    />  
                  </Col>
                
                  <Col md={6}>
                      <TypeSelect
                        id={"inputTypeSelect"}
                        types={units}
                        onTypeChange={this.onInputTypeChange}
                      />
                  </Col>
                </Row> 
                
              </Panel>
             
            </Col>
            
            <Col lg={6}>

              <Panel header={"Output"}>
                <Row>
                  <Col md={6}>
                    <TypeSelect
                      id={"outputTypeSelect"}
                      types={units}
                      onTypeChange={this.onTypeChange}
                    />
                  </Col>

                  <Col md={6}>
                    <AddConversionButton 
                      onButtonPress={this.onAddConversion}
                      text={'Add output conversion'}
                    />
                  </Col>
                </Row>

                <br/>                

                <List 
                  list={conversions}
                  units={units}
                  inputValue={inputValue}
                  selectedInputType={selectedInputType}
                  onClickItem={this.onRemoveConversion}
                />
              </Panel>
            </Col>

          </Row>
        </Grid>

      </div>
      
    );
  }
}


// const styles = {
//   ConverterContainer: {
//     margin: "10%",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     alignItems: "stretch"
//   },
//   InputContainer: {
//     // border: "1px solid grey"
//   },
//   OutputContainer: {
//     // border: "1px solid grey"
//   }

// };

export default App;
