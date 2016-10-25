import React, { Component } from 'react'
import { Icon, IconButton } from './collator'

/**___________________________________________________________________________*/

const SocialIconButton = ({
  isInverted,
  name,
  ...props
}) => {

  const colorApplied = (isInverted) ? "white" : name
  const backgroundColorApplied = (isInverted) ? name : "transparent"

  const resultComp = (
    <IconButton
      useIconBox
      name={name}
      backgroundColor={backgroundColorApplied}
      color={colorApplied}
      type={"font-awesome"}
      {...props}
      />
  )

  return resultComp
}

/**___________________________________________________________________________*/

const SocialIcon = ({
  isInverted,
  name,
  ...props
}) => {

  const colorApplied = (isInverted) ? "white" : name
  const backgroundColorApplied = (isInverted) ? name : "transparent"

  const resultComp = (
    <Icon
      useIconBox
      name={name}
      backgroundColor={backgroundColorApplied}
      color={colorApplied}
      type={"font-awesome"}
      {...props}
      />
  )

  return resultComp
}

/**___________________________________________________________________________*/

export {
  SocialIconButton,
  SocialIcon
}
