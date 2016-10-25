import React, { Component } from 'react'
import { TextInput } from 'react-native'
import Base from './Base'

/**___________________________________________________________________________*/

const TextInputBase = ({
  style,
  ...props
}) => {

  const textInputProps = {
    componentTag: TextInput,
    autoFocus: true,
    fontWeightType: "regular",
    fontSizeRank: 4,
    lineHeightAsHeightType: "medium",
    ...props,
    style: {
      flex: 1,
      ...(props && props.style)
    }
  }

  const resultComp = (
    <Base {...textInputProps}/>
  )

  return resultComp
}

/**___________________________________________________________________________*/

export default TextInputBase
