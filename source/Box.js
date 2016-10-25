import React from 'react'
import { View } from 'react-native'
import Base from './Base'

/**___________________________________________________________________________*/

const Box = ({
  ...props
}) => {
  const resultComp = (
    <Base
      componentTag={View}
      {...props}
      />
  )
  return resultComp
}

/**___________________________________________________________________________*/

export default Box
