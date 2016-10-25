import React, { Component } from 'react'
import { View } from 'react-native'
import Base from './Base'
import { Box, Button, TextBase } from './collator'

import EntypoIcon from 'react-native-vector-icons/Entypo'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import OcticonIcon from 'react-native-vector-icons/Octicons'
import ZocialIcon from 'react-native-vector-icons/Zocial'

/**___________________________________________________________________________*/

const getIconType = (type) => {
  switch (type) {
    case 'entypo': return EntypoIcon
    case 'evilicon': return EvilIcon
    case 'font-awesome': return FAIcon
    case 'foundation': return FoundationIcon
    case 'ionicon': return Ionicon
    case 'material': return MaterialIcon
    case 'octicon': return OcticonIcon
    case 'zocial': return ZocialIcon
    default:return MaterialIcon
  }
}

/**___________________________________________________________________________*/

const IconBase = ({
  type,
  fontSizeRank = 4,
  name,
  style,
  ...props
}) => {
  // the Icon comps build on Text
  const resultComp = (
    <Base
      componentTag={type && getIconType(type) || getIconType('material')}
      fontSizeRank={fontSizeRank}
      name={name}
      style={[{textAlign: "center"}, style]}
      {...props}
      />
  )
  return resultComp
}

/**___________________________________________________________________________*/

// fits non-square icons into a square the size of the font size
const IconBox = ({
  type,
  name,
  color,
  fontSizeRank = 2,
  size,
  style,
  ...props
}) => {
  const SCALER = 0.78
  const sizeApplied = size ? {size: size * SCALER} : {fontSizeScaler: SCALER}
  const iconPropsApplied = {
    type,
    name,
    color,
    fontSizeRank,
    ...sizeApplied
  }
  const appliedDimensions = size ? {
    width: size,
    height: size
  } : {
    widthByFontSizeRank: fontSizeRank,
    heightByFontSizeRank: fontSizeRank,
  }
  const insideBoxProps = {
    ...appliedDimensions,
    style: {
      justifyContent: "center",
    },
  }
  const boxProps = {
    style: {
      justifyContent: "center",
      alignItems: "center",
      ...style
    },
    ...props
  }
  const resultComp = (
    <Box {...boxProps} >
      <Box {...insideBoxProps}>
        <IconBase {...iconPropsApplied} />
      </Box>
    </Box>
  )
  return resultComp
}

/**___________________________________________________________________________*/

const Icon = ({
  useIconBox,
  ...props
}) => {
  const AppliedIcon =  useIconBox ? IconBox : IconBase
  return <AppliedIcon {...props} />
}

/**___________________________________________________________________________*/


const IconButton = ({
  //isCircle
  useIconBox,
  type,
  fontSizeRank,
  name,
  size,
  color,
  iconProps,
  ...props
}) => {
  const buttonProps = {
    style: {flex: 0},
    ...props
  }
  const iconPropsApplied = {
    type,
    fontSizeRank,
    name,
    size,
    color,
    useIconBox,
    ...iconProps
  }

  const resultComp = (
    <Button {...buttonProps}>
      <Icon {...iconPropsApplied}/>
    </Button>
  )
  return resultComp
}

/**___________________________________________________________________________*/

export {
  Icon,
  IconButton,
}
