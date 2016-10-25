import { Platform } from 'react-native'

/**___________________________________________________________________________*/

const n = (key, x, s) => typeof x === 'number' ? { [key]: s[x] } : null
const q = (key, x, s) => typeof x === 'string' ? { [key]: s[x] } : null

/**___________________________________________________________________________*/

function makePaddingStyles({
  xyPaddingUseSameScale = false,
  paddingRank,
  paddingHorizontalRank,
  paddingVerticalRank,
  paddingTopRank,
  paddingBottomRank,
  paddingLeftRank,
  paddingRightRank,
  p, px, py, pt, pb, pl, pr,
  spacingScaleVertical = [],
  spacingScaleHorizontal = [],
}) {
  const sx = spacingScaleHorizontal
  const sy = xyPaddingUseSameScale ? spacingScaleHorizontal : spacingScaleVertical

  const result = {
    ...n('paddingTop', p, sy),
    ...n('paddingTop', py, sy),
    ...n('paddingTop', pt, sy),
    ...n('paddingBottom', p, sy),
    ...n('paddingBottom', py, sy),
    ...n('paddingBottom', pb, sy),
    ...n('paddingLeft', p, sx),
    ...n('paddingLeft', px, sx),
    ...n('paddingLeft', pl, sx),
    ...n('paddingRight', p, sx),
    ...n('paddingRight', px, sx),
    ...n('paddingRight', pr, sx),

    ...n('paddingTop', paddingRank, sy),
    ...n('paddingTop', paddingVerticalRank, sy),
    ...n('paddingTop', paddingTopRank, sy),
    ...n('paddingBottom', paddingRank, sy),
    ...n('paddingBottom', paddingVerticalRank, sy),
    ...n('paddingBottom', paddingBottomRank, sy),
    ...n('paddingLeft', paddingRank, sx),
    ...n('paddingLeft', paddingHorizontalRank, sx),
    ...n('paddingLeft', paddingLeftRank, sx),
    ...n('paddingRight', paddingRank, sx),
    ...n('paddingRight', paddingHorizontalRank, sx),
    ...n('paddingRight', paddingRightRank, sx),
  }
  return result
}

/**___________________________________________________________________________*/

function makeMarginStyles({
  xyMarginUseSameScale = false,
  marginRank,
  marginHorizontalRank,
  marginVerticalRank,
  marginTopRank,
  marginBottomRank,
  marginLeftRank,
  marginRightRank,
  m, mx, my, mt, mb, ml, mr,
  spacingScaleVertical = [],
  spacingScaleHorizontal = [],
}) {
  const sx = spacingScaleHorizontal
  const sy = xyMarginUseSameScale ? spacingScaleHorizontal : spacingScaleVertical

  const result = {
    ...n('marginTop', m, sy),
    ...n('marginTop', my, sy),
    ...n('marginTop', mt, sy),
    ...n('marginBottom', m, sy),
    ...n('marginBottom', my, sy),
    ...n('marginBottom', mb, sy),
    ...n('marginLeft', m, sx),
    ...n('marginLeft', mx, sx),
    ...n('marginLeft', ml, sx),
    ...n('marginRight', m, sx),
    ...n('marginRight', mx, sx),
    ...n('marginRight', mr, sx),

    ...n('marginTop', marginRank, sy),
    ...n('marginTop', marginVerticalRank, sy),
    ...n('marginTop', marginTopRank, sy),
    ...n('marginBottom', marginRank, sy),
    ...n('marginBottom', marginVerticalRank, sy),
    ...n('marginBottom', marginBottomRank, sy),
    ...n('marginLeft', marginRank, sx),
    ...n('marginLeft', marginHorizontalRank, sx),
    ...n('marginLeft', marginLeftRank, sx),
    ...n('marginRight', marginRank, sx),
    ...n('marginRight', marginHorizontalRank, sx),
    ...n('marginRight', marginRightRank, sx),
  }
  return result
}

/**___________________________________________________________________________*/

function makeBorderWidthStyles({
  borderType,
  borderTopType,
  borderBottomType,
  borderLeftType,
  borderRightType,
  b,
  bt,
  bb,
  br,
  bl,
  borderWidthTypes = {},
}) {
  const result = {
    ...q('borderWidth', b, borderWidthTypes),
    ...q('borderTopWidth', bt, borderWidthTypes),
    ...q('borderBottomWidth', bb, borderWidthTypes),
    ...q('borderLeftWidth', bl, borderWidthTypes),
    ...q('borderRightWidth', br, borderWidthTypes),

    ...q('borderWidth', borderType, borderWidthTypes),
    ...q('borderTopWidth', borderTopType, borderWidthTypes),
    ...q('borderBottomWidth', borderBottomType, borderWidthTypes),
    ...q('borderLeftWidth', borderLeftType, borderWidthTypes),
    ...q('borderRightWidth', borderRightType, borderWidthTypes),
  }
  return result
}

/**___________________________________________________________________________*/

function makeBorderRadiusStyles({
  radiusType,
  radiusTopRightType,
  radiusTopLeftType,
  radiusBottomRightType,
  radiusBottomLeftType,
  r,
  rtr,
  rtl,
  rbr,
  rbl,
  borderRadiusTypes = {},
}) {
  const result = {
    ...q('borderRadius', r, borderRadiusTypes),
    ...q('borderTopRightRadius', rtr, borderRadiusTypes),
    ...q('borderTopLeftRadius', rtl, borderRadiusTypes),
    ...q('borderBottomRightRadius', rbr, borderRadiusTypes),
    ...q('borderBottomLeftRadius', rbl, borderRadiusTypes),

    ...q('borderRadius', radiusType, borderRadiusTypes),
    ...q('borderTopRightRadius', radiusTopRightType, borderRadiusTypes),
    ...q('borderTopLeftRadius', radiusTopLeftType, borderRadiusTypes),
    ...q('borderBottomRightRadius', radiusBottomRightType, borderRadiusTypes),
    ...q('borderBottomLeftRadius', radiusBottomLeftType, borderRadiusTypes),
  }
  return result
}

/**___________________________________________________________________________*/

function makeElevationStyles({
  elevationRank,
  elevationScale = []
}) {
  if (typeof elevationRank == "number" && elevationScale[elevationRank]) {
    const elevationApplied = elevationScale[elevationRank]
    return {
      ...Platform.select({
        ios: {
          shadowColor: 'rgba(0,0,0,0.5)',
          shadowOffset: {height: elevationApplied, width: elevationApplied},
          shadowOpacity: elevationApplied,
          shadowRadius: elevationApplied
        },
        android: {
          elevation: elevationApplied
        }
      })
    }
  } else {
    return {}
  }
}


/**___________________________________________________________________________*/

function makeFontStyles({
  fontSizeRank,
  fontWeightType,
  lineHeightType,
  lineHeightAsHeightType,
  fontSizeScaler,
  fontSizeScale = [],
  lineHeightTypes = {},
  fontWeightTypes = {},
}) {
  const scaler = fontSizeScaler || 1
  let result = {}
  if (typeof fontSizeRank == "number" && fontSizeScale[fontSizeRank]) {
    result.fontSize = scaler * fontSizeScale[fontSizeRank]
    if (typeof lineHeightType == "string" && lineHeightTypes[lineHeightType] ) {
      result.lineHeight = scaler * Math.round(fontSizeScale[fontSizeRank] * lineHeightTypes[lineHeightType])
    }
    if (typeof lineHeightAsHeightType == "string" && lineHeightTypes[lineHeightAsHeightType] ) {
      result.height = scaler * Math.round(fontSizeScale[fontSizeRank] * lineHeightTypes[lineHeightAsHeightType])
    }
  }
  if (typeof fontWeightType === "string" && fontWeightTypes[fontWeightType]) {
    result.fontWeight = fontWeightTypes[fontWeightType]
  }

  return result
}

/**___________________________________________________________________________*/


function makeColorStyle({
  color,
  backgroundColor,
  borderColor,
  theme,
  isInverted,
  isColorfulComponent,
  colors = {},
  colorThemes = {},
}) {
  let result = {}
  const colorApplied = assignColor({
    color: color,
    colors,
    theme,
    colorThemes,
    themePart: (isInverted) ? "backgroundColor" : "color"
  })
  const backgroundColorApplied = assignColor({
    color: backgroundColor,
    colors,
    theme,
    colorThemes,
    themePart: (isInverted) ? "color" : "backgroundColor"
  })
  //see notes below for why isUsingThemeForBackground is calculated
  const isUsingThemeForBackground = findIfUsingTheme({
    color: backgroundColor,
    colors,
    theme,
    colorThemes,
    themePart: (isInverted) ? "color" : "backgroundColor"
  })
  const borderColorApplied = assignColor({
    color: borderColor || color,
    colors,
    theme,
    colorThemes,
    themePart: (isInverted) ? "backgroundColor" : "color"
  })

  // don't apply color for View or TouchableHighlight
  // ie comps which !isColorfulComponent
  if (colorApplied && isColorfulComponent) {
    result.color = colorApplied
  }

  // if using theme and the comp isColorfulComponent, then don't apply backgroundColor
  // this is so that background boxes don't form around, say, Text
  if (backgroundColorApplied && !(isUsingThemeForBackground && isColorfulComponent)) {
    result.backgroundColor = backgroundColorApplied
  }

  if (borderColorApplied) {
    result.borderColor = borderColorApplied
  } else if (colorApplied) {
    result.borderColor = colorApplied
  }

  return result
}

function assignColor({
  color,
  theme,
  themePart,
  colors = {},
  colorThemes = {},
}) {
  // order of succession:
  //   named color in baseValues,
  //   color string itself,
  //   color from theme if theme supplied,
  // then none at which point it will fall back on the system defaults,
  // usually black for "color", transparent for "background",
  // and black for "borderColor"

  let result
  if (color && colors[color]) {
    result = colors[color]
  } else if (typeof color === 'string') {
    result = color
  } else if (theme && colorThemes[theme] && colorThemes[theme][themePart]) {
    result = colorThemes[theme][themePart]
  } else {
    result = null
  }
  return result
}

function findIfUsingTheme({
  color,
  theme,
  themePart,
  colors = {},
  colorThemes = {},
}) {
  if (color && colors[color]) {
    return false
  } else if (typeof color === 'string') {
    return false
  } else if (theme && colorThemes[theme] && colorThemes[theme][themePart]) {
    return true
  } else {
    return false
  }
}


function getOppositeColor(asdf){
  return "green"
}


/**___________________________________________________________________________*/

function makeDimensionStyles({
  widthByFontSizeRank,
  heightByFontSizeRank,
  widthByBorderType,
  heightByBorderType,
  fontSizeScale = [],
  borderWidthTypes = {},
}) {

  const result = {
    ...n('width', widthByFontSizeRank, fontSizeScale),
    ...n('height', heightByFontSizeRank, fontSizeScale),
    ...n('width', widthByBorderType, borderWidthTypes),
    ...n('height', heightByBorderType, borderWidthTypes),
  }

  return result
}
/**___________________________________________________________________________*/

export {
  makePaddingStyles,
  makeMarginStyles,
  makeBorderWidthStyles,
  makeBorderRadiusStyles,
  makeElevationStyles,
  makeFontStyles,
  makeColorStyle,
  assignColor,
  makeDimensionStyles,
}
