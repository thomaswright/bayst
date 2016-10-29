import React from 'react'
import { View, TouchableHighlight } from 'react-native'
import Base from './Base'

/**___________________________________________________________________________*/

const Button = ({
  insideViewProps,
  insideViewStyle,
  ...props
}) => {
  const baseProps = {
    paddingRank: 2,
    ...props,
    style: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      ...props.style
    },
  }
  const appliedinsideViewProps = {
    ...insideViewProps,
    style: {
      alignItems: "center",
      justifyContent: "center",
      flex: 0,
      ...insideViewStyle,
      ...(insideViewProps && insideViewProps.style)
    }
  }
  const resultComp = (
    <Base
      componentTag={TouchableHighlight}
      {...baseProps}>
      <View {...appliedinsideViewProps}>
        {props.children}
      </View>
    </Base>
  )
  return resultComp
}

/**___________________________________________________________________________*/

export default Button
