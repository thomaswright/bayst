import React, { Component } from 'react'
import { View } from 'react-native'
import { ButtonGroup, Divider } from './collator'

/**___________________________________________________________________________*/

class Tabs extends Component{
  constructor(props){
    super(props)
    this.state = {
      activeIndex: this.props.defaultActiveIndex || 0
    }
    this.changeTab = this.changeTab.bind(this)
  }
  changeTab(index) {
    this.setState({activeIndex: index})
  }
  render(){
    const {
      buttonGroupProps,
      dividerColor,
      hasDivider,
      tabbedComponents,
      ...other
    } = this.props

    let appliedButtonGroupProps = [
      ...buttonGroupProps
    ]
    appliedButtonGroupProps[this.state.activeIndex] = {
      ...appliedButtonGroupProps[this.state.activeIndex],
      isActive: true
    }

    const resultComp = (
      <View style={{flex: 1}}>
        <ButtonGroup
          buttonGroupOnPress={this.changeTab}
          buttonGroupProps={appliedButtonGroupProps}
          {...other}
          />

        {
          hasDivider &&
          <Divider
            type={"thick"}
            backgroundColor={
              dividerColor ||
              appliedButtonGroupProps[this.state.activeIndex].color ||
              other.activeColor
            }
            />
        }
        {tabbedComponents[this.state.activeIndex]}
      </View>
    )

    return resultComp
  }
}

export default Tabs
