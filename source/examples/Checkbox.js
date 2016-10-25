import React, { Component } from 'react'
import { Checkbox, RadioButton, Box } from '../collator'

/**___________________________________________________________________________*/

class Checkbox1 extends Component {
  state = {isChecked: false}
  render () {
    return (
      <Checkbox
        isChecked={this.state.isChecked}
        onToggle={() => this.setState({isChecked: !this.state.isChecked})}
        />
    )
  }
}

class RadioButton1 extends Component {
  state = {isChecked: false}
  render () {
    return (
      <RadioButton
        isChecked={this.state.isChecked}
        onToggle={() => this.setState({isChecked: !this.state.isChecked})}
        />
    )
  }
}


class Checkbox2 extends Component {
  state = {isChecked: false}
  render () {
    return (
      <Checkbox
        isChecked={this.state.isChecked}
        onToggle={() => this.setState({isChecked: !this.state.isChecked})}
        color={"blue"}
        />
    )
  }
}


class Checkbox3 extends Component {
  state = {isChecked: false}
  render () {
    return (
      <Checkbox
        isChecked={this.state.isChecked}
        onToggle={() => this.setState({isChecked: !this.state.isChecked})}
        color={"blue"}
        fontSizeRank={2}
        />
    )
  }
}


class Checkbox4 extends Component {
  state = {isChecked: false}
  render () {
    return (
      <Checkbox
        isDisabled
        isChecked={this.state.isChecked}
        onToggle={() => this.setState({isChecked: !this.state.isChecked})}
        color={"blue"}
        fontSizeRank={2}
        disabledColor={"#ddd"}
        />
    )
  }
}


class Checkbox5 extends Component {
  state = {isChecked: false}
  render () {
    return (
      <Checkbox
        isChecked={this.state.isChecked}
        onToggle={() => this.setState({isChecked: !this.state.isChecked})}
        color={"blue"}
        fontSizeRank={2}
        disabledColor={"#ddd"}
        uncheckedColor={"black"}
        checkedColor={"red"}
        />
    )
  }
}


class Checkbox6 extends Component {
  state = {isChecked: false}
  render () {
    return (
      <Checkbox
        isChecked={this.state.isChecked}
        onToggle={() => this.setState({isChecked: !this.state.isChecked})}
        color={"blue"}
        fontSizeRank={2}
        disabledColor={"#ddd"}
        uncheckedColor={"black"}
        checkedColor={"red"}
        checkedIconProps={{
          type: "font-awesome",
          name: "check-square-o",
        }}
        uncheckedIconProps={{
          type: "font-awesome",
          name: "square-o",
        }}
        />
    )
  }
}


/**___________________________________________________________________________*/

const example_Checkbox = {
  header: "Checkbox & RadioButton",
  examples: (
    <Box style={{flexDirection: "row"}}>
      <Checkbox1 />
      <Checkbox2 />
      <Checkbox3 />
      <Checkbox4 />
      <Checkbox5 />
      <Checkbox6 />
      <RadioButton1 />
    </Box>
  )
}

/**___________________________________________________________________________*/

export default example_Checkbox


/**
Some other fonts names to use -

material: {
  checked: [
    check-circle,
    check,
    check-box,
    radio-button-checked,
  ],
  unchecked: [
    check-box-outline-blank,
    radio-button-unchecked,
  ]
},
font-awesome: {
  checked: [
    check,
    check-square-o,
    check-square,
    check-circle-o,
    check-circle,
  ],
  unchecked: [
    square,
    square-o,
    circle,
    circle-o,
  ]
}
*/
