import React from 'react'
import { Icon, Button, TextBase } from './collator'

/**___________________________________________________________________________*/

// truthy supersession with zeros allowed
function superseder(arr) {
	let result
  arr.forEach((e) => {
    if ((e || e === 0) && result === undefined) {
      result = e
    }
  })
  return result
}

/**___________________________________________________________________________*/

// icons are just Icon comps and have all the Icon props available
// similarly text is just TextBase, and any props beyond those explicit here
// get passed to the button, a Button.

const TextButton = ({
  text,
  fontSizeRank,
  fontWeightType,
  lineHeightType,
  color,
  theme,
  isInverted,
  textProps,
  leftIconProps,
  rightIconProps,
	insideViewProps,
	insideViewStyle,
  ...props,
}) => {

  const textPropsApplied = {
    text,
    fontSizeRank,
    fontWeightType,
    lineHeightType,
    color,
    theme,
    isInverted,
    ...textProps,
  }

  const leftIconPropsApplied = {
    ...leftIconProps,
    fontSizeRank: superseder([
      leftIconProps && leftIconProps.fontSizeRank,
      fontSizeRank]),
    color: (leftIconProps && leftIconProps.color) || color,
  }

  const rightIconPropsApplied = {
    ...rightIconProps,
    fontSizeRank: superseder([
      rightIconProps && rightIconProps.fontSizeRank,
      fontSizeRank]),
    color: (rightIconProps && rightIconProps.color) || color,
  }

  const buttonProps = {
    color,
    theme,
    isInverted,
    ...props,
    insideViewProps: {
      ...insideViewProps,
      style: {
        flexDirection: "row",
        justifyContent: "center",
				...insideViewStyle,
        ...(insideViewProps && insideViewProps.style)
      },
    },
  }

  const resultComp = (
    <Button {...buttonProps} >
      {leftIconProps && <Icon {...leftIconPropsApplied}/>}
      {text && <TextBase {...textPropsApplied}/>}
      {rightIconProps && <Icon {...rightIconPropsApplied}/>}
    </Button>
  )

  return resultComp
}

/**___________________________________________________________________________*/

export default TextButton
