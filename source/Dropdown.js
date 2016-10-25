import React, { Component } from 'react'
import { View } from 'react-native'
import { ButtonGroup } from './collator'

/**___________________________________________________________________________*/

class Dropdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      activeIndex: this.props.defaultActiveIndex || 0,
      isDropdownSelected: false
    }
    this.changeSelectedButton = this.changeSelectedButton.bind(this)
    this.selectDropdown = this.selectDropdown.bind(this)
  }
  changeSelectedButton(index) {
    this.setState({activeIndex: index})
    this.selectDropdown()
  }
  selectDropdown() {
    this.setState({isDropdownSelected: !this.state.isDropdownSelected})
  }
  render(){
    const {
      buttonGroupProps,
      ...other
    } = this.props

    let appliedButtonGroupProps = [
      ...buttonGroupProps
    ]
    appliedButtonGroupProps[this.state.activeIndex] = {
      ...appliedButtonGroupProps[this.state.activeIndex],
      isActive: true
    }

    const selecteeProps = {
      buttonGroupOnPress: this.selectDropdown,
      buttonGroupProps: [appliedButtonGroupProps[this.state.activeIndex]],
      ...other,
    }

    const dropdownProps = {
      buttonGroupOnPress: this.changeSelectedButton,
      buttonGroupProps: appliedButtonGroupProps,
      ...other,
      containerProps: {
        ...other.containerProps,
        style: {
          position: "absolute",
          zIndex: 1,
          ...(other.containerProps && other.containerProps.style),
        }
      }
    }

    return (
      <View style={{flex: 1, zIndex: 1}}>
        <ButtonGroup {...selecteeProps} />
        {this.state.isDropdownSelected && <ButtonGroup {...dropdownProps}/>}
      </View>
    )
  }
}

/**___________________________________________________________________________*/

export default Dropdown
