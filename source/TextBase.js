import React from 'react'
import { Text } from 'react-native'
import Base from './Base'

/**___________________________________________________________________________*/

const TextBase = ({
  text,
  ...props
}) => {
  const textBaseProps = {
    componentTag: Text,
    fontSizeRank: 4,
    fontWeightType: "regular",
    lineHeightType: "medium",
    ...props
  }

  const resultComp = (
    <Base {...textBaseProps}>
      {props.children}
      {text}
    </Base>
  )

  return resultComp
}

/**___________________________________________________________________________*/

export default TextBase
