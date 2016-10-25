import React, { Component, PropTypes, } from 'react'
import { Slider, } from 'react-native'
import chroma from 'chroma-js'
import { Box, TextButton, } from './collator'

/**___________________________________________________________________________*/

const SliderRow = ({
  color,
  value,
  maximumValue,
  minimumValue,
  onValueChange
}) => {
  const resultComp = (
    <Box
      style={{flexDirection: "row", alignItems: "center"}}
      marginRank={2}>
      <Box style={{flex: 1}} marginRightRank={3} >
        <Slider
          value={value}
          onValueChange={onValueChange}
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          />
      </Box>
      <Box
        style={{width: 40, height: 40}}
        backgroundColor={color}
        radiusType={"circle"}
        />
    </Box>
  )
  return resultComp
}

/**___________________________________________________________________________*/

class ColorPicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      hue: chroma(props.defaultValue).get('hsl.h'),
      saturation: chroma(props.defaultValue).get('hsl.s'),
      lightness: chroma(props.defaultValue).get('hsl.l'),
      color: chroma(props.defaultValue).hex(),
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onHueChange = this.onHueChange.bind(this)
    this.onSaturationChange = this.onSaturationChange.bind(this)
    this.onLightnessChange = this.onLightnessChange.bind(this)
  }
  onHueChange(value){
    this.setState({
      hue: value,
      color:  chroma.hsl(
        value,
        this.state.saturation,
        this.state.lightness
      ).hex()
    })
  }
  onSaturationChange(value){
    this.setState({
      saturation: value,
      color:  chroma.hsl(
        this.state.hue,
        value,
        this.state.lightness
      ).hex()
    })
  }
  onLightnessChange(value){
    this.setState({
      lightness: value,
      color:  chroma.hsl(
        this.state.hue,
        this.state.saturation,
        value,
      ).hex()
    })
  }
  onSubmit() {
    let resultColor
    if (this.props.colorSpace === 'rgb') {
      resultColor = chroma(this.state.color).css()
    } else if (this.props.colorSpace === 'hsl') {
      resultColor = chroma(this.state.color).css('hsl')
    } else {
      resultColor = this.state.color
    }
    this.props.onSubmit(resultColor)
  }
  onCancel() {
    this.props.onCancel()
  }
  render () {
    const submitTextButtonProps = {
      text: "Set",
      style: {flex: 1},
      backgroundColor: "blue",
      radiusType: "small",
      color: "white",
      marginRank: 2,
      elevationRank: 1,
      ...this.props.submitTextButtonProps
    }

    const cancelTextButtonProps = {
      text: "Cancle",
      style: {flex: 1},
      marginRank: 2,
      ...this.props.cancelTextButtonProps
    }

    const resultComp = (
      <Box>
        <Box
          style={{height: 100}}
          backgroundColor={this.state.color}
          />
        <SliderRow
          color={chroma.hsl(this.state.hue,1, 0.5).hex()}
          label={"hue"}
          value={chroma(this.props.defaultValue).get('hsl.h')}
          onValueChange={this.onHueChange}
          minimumValue={0}
          maximumValue={360}
          />
        <SliderRow
          color={chroma.hsl(
            this.state.hue,
            this.state.saturation,
            0.5).hex()}
          label={"chroma"}
          value={chroma(this.props.defaultValue).get('hsl.s')}
          onValueChange={this.onSaturationChange}
          minimumValue={0}
          maximumValue={1}
          />
        <SliderRow
          color={chroma.hsl(0,0,this.state.lightness).hex()}
          label={"lightness"}
          value={chroma(this.props.defaultValue).get('hsl.l')}
          onValueChange={this.onLightnessChange}
          minimumValue={0}
          maximumValue={1}
          />
        <Box style={{flexDirection: "row"}}>
          <TextButton
            onPress={this.onCancel}
            {...cancelTextButtonProps}
            />
          <TextButton
            onPress={this.onSubmit}
            {...submitTextButtonProps}
            />

        </Box>

      </Box>
    )
    return resultComp
  }
}
ColorPicker.defaultProps = {
  onCancel: (()=>{}),
  onSubmit: (()=>{}),
}

/**___________________________________________________________________________*/

export default ColorPicker
