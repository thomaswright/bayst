import React from 'react'
import { ScrollView, View, } from 'react-native'
import { Box, TextButton, } from './collator'

/**___________________________________________________________________________*/

function nullFunction () {}

/**___________________________________________________________________________*/

const ButtonGroup = ({
  activeUnderlayColor,
  underlayColor,
  activeBackgroundColor,
  backgroundColor,
  activeColor,
  color,
  borderType,
  borderColor,

  fontSizeRank,
  theme,
  isInverted,
  isVertical = false,
  allowOverflow = false,
  buttonGroupProps,
  buttonProps,
  containerProps,
  buttonGroupOnPress = nullFunction
}) => {
  const BUTTON_MIN_WIDHT = 80
  const lastIndex = buttonGroupProps.length - 1
  const radiusTypeApplied = (containerProps && containerProps.radiusType) ?
    containerProps.radiusType : null

  const buttonList = (
    <Box
      {...containerProps}
      style={{
        flexDirection: isVertical ? "column" : "row",
        flex: 0,
        ...(containerProps && containerProps.style)
      }}>
      {
        buttonGroupProps.map((button, index) => {
          const directionStyling = isVertical ?
            {
              radiusTopLeftType: index === 0 ? radiusTypeApplied : null,
              radiusTopRightType: index === 0 ? radiusTypeApplied : null,
              radiusBottomLeftType: index === lastIndex ? radiusTypeApplied : null,
              radiusBottomRightType: index === lastIndex ? radiusTypeApplied : null,
              borderBottomType: borderType ?
                (index === lastIndex ? borderType : "none") :
                null
            } :
            {
              radiusTopLeftType: index === 0 ? radiusTypeApplied : null,
              radiusBottomLeftType: index === 0 ? radiusTypeApplied : null,
              radiusTopRightType: index === lastIndex ? radiusTypeApplied : null,
              radiusBottomRightType: index === lastIndex ? radiusTypeApplied : null,
              borderRightType: borderType ?
                (index === lastIndex ? borderType : "none") :
                null
            }

          const defaultBackgroundColor = theme === undefined ?
            "white" : undefined
          const defaultColor = theme === undefined ?
            "grey" : undefined
          const defaultUnderlay = theme === undefined ?
            "rgba(255, 255, 255, 0.5)" : undefined

          return (
            <TextButton
              key={index}
              paddingVerticalRank={3}
              {...directionStyling}
              borderType={borderType}
              borderColor={borderColor}
              theme={theme}
              isInverted={theme && (
                isInverted ? button.isActive : !button.isActive
              )}
              {...buttonProps}
              {...button}
              style={{
                flex: allowOverflow ? 0 : 1,
                minWidth: BUTTON_MIN_WIDHT,
                ...(buttonProps && buttonProps.style),
                ...button.style
              }}
              fontSizeRank={button.fontSizeRank || fontSizeRank}
              onPress={() => {
                buttonGroupOnPress(index)
                if (button.onPress) {
                  button.onPress(index)
                }
              }}
              underlayColor={
                button.isActive ?
                button.underlayColor || activeUnderlayColor || underlayColor:
                underlayColor || defaultUnderlay}
              backgroundColor={(
                button.isActive ?
                button.backgroundColor || activeBackgroundColor :
                backgroundColor || defaultBackgroundColor
              )}
              color={(
                button.isActive ?
                button.color || activeColor :
                color || defaultColor
              )}
              />
          )
        })
      }
    </Box>
  )
  const resultComp = (allowOverflow) ?
    (
      <ScrollView horizontal={!isVertical} style={{flex: 1}}>
        {buttonList}
      </ScrollView>
    ) :
    (
      <View >
        {buttonList}
      </View>
    )

  return resultComp
}

/**___________________________________________________________________________*/

export default ButtonGroup
