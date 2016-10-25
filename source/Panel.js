import React, { Component } from 'react'
import { Box, TextBase } from './collator'

/**___________________________________________________________________________*/

const Panel = ({
  borderType = "none",
  radiusType,
  borderColor,
  titleBackgroundColor,
  titleText,
  titleColor,
  titleTextProps,
  titleBoxProps,
  contentBoxProps,
  containerBoxProps,
  ...props
}) => {

  const containerBoxPropsApplied = {
    radiusType: radiusType,
    ...containerBoxProps,
  }

  const titleBoxPropsApplied = {
    backgroundColor: titleBackgroundColor,
    borderColor: borderColor || titleBackgroundColor,
    borderType: borderType,
    radiusTopLeftType: radiusType,
    radiusTopRightType: radiusType,
    paddingRank: 2,
    ...titleBoxProps,
  }

  const titleTextPropsApplied = {
    text: titleText,
    color: titleColor,
    ...titleTextProps,
  }

  const contentBoxPropsApplied = {
    paddingRank: 2,
    borderType: borderType,
    borderTopType: "none",
    borderColor: borderColor || titleBackgroundColor,
    radiusBottomLeftType: radiusType,
    radiusBottomRightType: radiusType,
    ...contentBoxProps,
  }

  const resultComp = (
    <Box {...containerBoxPropsApplied}>
      <Box {...titleBoxPropsApplied}>
        <TextBase {...titleTextPropsApplied}/>
      </Box>
      <Box {...contentBoxPropsApplied}>
        {props.children}
      </Box>
    </Box>
  )
  return resultComp
}

/**___________________________________________________________________________*/

export default Panel
