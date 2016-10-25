import React from 'react'
import { View, StatusBar } from 'react-native'
import { Box, } from './collator'

/**___________________________________________________________________________*/

const Divider = ({
  type = "hairline",
  height,
  backgroundColor = "grey",
}) => {
  const propsApplied = {
    backgroundColor,
    heightByBorderType: type,
    style: {
      height: height && height
    }
  }
  const resultComp = (
    <Box {...propsApplied}/>
  )
  return resultComp
}

/**___________________________________________________________________________*/
// Always equals 20, no matter device
const IOS_STATUS_BAR_HEIGHT = 20

const StatusBarAndSpacer = ({
  hidden = false,
  backgroundColor = "transparent",
  light = false
}) => {
  return (
    <View style={{backgroundColor}}>
      <StatusBar
        hidden={hidden}
        barStyle={light ? "light-content" : "default"}
      />
    {!hidden && <Divider height={IOS_STATUS_BAR_HEIGHT} backgroundColor={backgroundColor}/>}
    </View>
  )
}

/**___________________________________________________________________________*/

export {
  Divider,
  StatusBarAndSpacer
}
