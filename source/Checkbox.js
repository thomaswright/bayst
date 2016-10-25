import React from 'react'
import { IconButton } from './collator'

/**___________________________________________________________________________*/

const Checkbox = ({
  isDisabled = false,
  isChecked = false,
  color = "black",
  uncheckedColor,
  checkedColor,
  checkedIconProps,
  uncheckedIconProps,
  onToggle,
  disabledColor = "grey",
  ...props
}) => {
  const checkedPropsApplied = {
    type: "material",
    name: "check-box",
    color: (isDisabled) ? disabledColor : checkedColor || color,
    underlayColor: "transparent",
    onPress: (isDisabled) ? undefined : onToggle,
    ...props,
    ...checkedIconProps
  }
  const uncheckedPropsApplied = {
    type: "material",
    name: "check-box-outline-blank",
    color: (isDisabled) ? disabledColor : uncheckedColor || color,
    underlayColor: "transparent",
    onPress: (isDisabled) ? undefined : onToggle,
    ...props,
    ...uncheckedIconProps
  }

  const resultComp = (isChecked) ?
    <IconButton {...checkedPropsApplied}/> :
    <IconButton {...uncheckedPropsApplied}/>
  return resultComp
}

/**___________________________________________________________________________*/

const RadioButton = ({
  checkedIconProps,
  uncheckedIconProps,
  ...props
}) => {

  const resultComp = (
    <Checkbox
      {...props}
      checkedIconProps={{
        name: "radio-button-checked",
        ...checkedIconProps
      }}
      uncheckedIconProps={{
        name: "radio-button-unchecked",
        ...uncheckedIconProps
      }}/>
  )
  return resultComp
}

/**___________________________________________________________________________*/

export {
  Checkbox,
  RadioButton
}
