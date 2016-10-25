import React, { Component } from 'react'
import { View } from 'react-native'
import {
  Icon,
  Button,
  ImageBase,
  TextBase,
  Divider,
  Box,
} from './collator'

/**___________________________________________________________________________*/

const RANK_OF_SMALLEST_FONT_SIZE = 7

/**___________________________________________________________________________*/

const ListItem = ({
  hasDivider = true,
  onPress,
  hasRightArrow,
  buttonProps,
  iconProps,
  imageProps,
  primaryTextProps,
  secondaryTextProps,
  rightArrowProps,
  backgroundColor,
  color = "grey",
  fontSizeRank,
  dividerProps,
  textContainerProps,
}) => {
  const appliedButtonProps = {
    onPress: onPress,
    paddingHorizontalRank: 0,
    backgroundColor,
    ...buttonProps,
    insideViewProps: {
      style: {
        flexDirection: "row",
        alignItems: "center",
        ...(buttonProps && buttonProps.insideViewStyle)
      }
    },
  }
  const primaryTextPropsApplied = {
    color: color,
    numberOfLines: 1,
    ...primaryTextProps,
    fontSizeRank: (
      (primaryTextProps && primaryTextProps.fontSizeRank) ||
      fontSizeRank ||
      4
    ),
  }
  const secondaryTextPropsApplied = {
    color: color,
    numberOfLines: 1,
    ...secondaryTextProps,
    fontSizeRank: (
      (secondaryTextProps && secondaryTextProps.fontSizeRank) ||
      Math.min(fontSizeRank + 2, RANK_OF_SMALLEST_FONT_SIZE)
    ),
  }
  const iconPropsAppied = {
    marginHorizontalRank: 3,
    ...iconProps,
    color: (iconProps && iconProps.color) || color,
  }
  const imagePropsApplied = {
    marginHorizontalRank: 3,
    ...imageProps,
  }
  // maybe replace with named icon
  const rightArrowPropsApplied = {
    paddingRank: 2,
    name: "keyboard-arrow-right",
    ...rightArrowProps,
    color: (rightArrowProps && rightArrowProps.color) || color,
  }
  const textContainerPropsApplied = {
    paddingLeftRank: (iconProps || imageProps) ? 0 : 2,
    ...textContainerProps,
    style: {
      flex: 1,
      ...(textContainerProps && textContainerProps.style)
    }
  }
  const resultComp = (
    <View>
      <Button {...appliedButtonProps}>
        {imageProps && <ImageBase {...imagePropsApplied}/>}
        {iconProps && <Icon {...iconPropsAppied}/>}
        <Box {...textContainerPropsApplied}>
          {primaryTextProps && <TextBase {...primaryTextPropsApplied} />}
          {secondaryTextProps && <TextBase {...secondaryTextPropsApplied} />}
        </Box>
        {hasRightArrow && <Icon {...rightArrowPropsApplied} /> }
      </Button>
      {hasDivider && <Divider {...dividerProps}/>}
    </View>

  )
  return resultComp
}

/**___________________________________________________________________________*/

export default ListItem
