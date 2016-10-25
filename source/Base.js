import React, {Component, PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import _ from 'lodash'
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native'
import {
  makePaddingStyles,
  makeMarginStyles,
  makeBorderWidthStyles,
  makeBorderRadiusStyles,
  makeElevationStyles,
  makeFontStyles,
  makeColorStyle,
  assignColor,
  makeDimensionStyles,
} from './makeStyles'
import baseValues from './baseValues'

/**___________________________________________________________________________*/

function mapArrayToObject(a, callback) {
  let newObject = {}
  a.map((e, i) => {
    newObject = {
      ...newObject,
      ...callback(e, i, a)
    }
  })
  return newObject
}

function makeArrayOfIndices(arr) {
  return arr.map((e,i) => i)
}

function makeArrayOfKeys(obj) {
  return Object.keys(obj).map((k,i) => k)
}

/**___________________________________________________________________________*/

class Base extends Component {
  constructor (props, { newBaseValues }) {
    super()
    const { pureRender } = { ...baseValues, ...newBaseValues }
    if (pureRender) {
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
  }
  render () {
    const {
      componentTag,
      baseRef,
      style,
      className,
      xyPaddingUseSameScale,
      xyMarginUseSameScale,
      paddingRank,
      paddingHorizontalRank,
      paddingVerticalRank,
      paddingTopRank,
      paddingBottomRank,
      paddingLeftRank,
      paddingRightRank,
      p, px, py, pt, pb, pl, pr,
      marginRank,
      marginHorizontalRank,
      marginVerticalRank,
      marginTopRank,
      marginBottomRank,
      marginLeftRank,
      marginRightRank,
      m, mx, my, mt, mb, ml, mr,
      borderType,
      borderTopType,
      borderBottomType,
      borderLeftType,
      borderRightType,
      b, bt, bb, br, bl,
      radiusType,
      radiusTopRightType,
      radiusTopLeftType,
      radiusBottomRightType,
      radiusBottomLeftType,
      r, rtr, rtl, rbr, rbl,
      elevationRank,
      widthByFontSizeRank,
      heightByFontSizeRank,
      widthByBorderType,
      heightByBorderType,
      isInverted,
      backgroundColor,
      color,
      borderColor,
      theme,
      fontSizeRank,
      fontWeightType,
      lineHeightType,
      lineHeightAsHeightType,
      fontSizeScaler,
      ...componentProps
    } = this.props

    const AppliedComponent = componentTag || View
    /**
      isColorfulComponent bool helps with coloring. We don't pass along the
      "color" prop to the root TouchableHighlight or View, but can still use
      it in our comps so that we have a backup color for borderColor. Also used
      for the isInverted theme bool functionality. Check out makeColorStyle for
      more detail.
    */
    const isColorfulComponent = (
      AppliedComponent !== TouchableHighlight &&
      AppliedComponent !== View
    )

    /**
      Applied baseValues
    */
    const { newBaseValues } = this.context || {}
    const {
      spacingScaleVertical,
      spacingScaleHorizontal,
      borderWidthTypes,
      borderRadiusTypes,
      elevationScale,
      fontSizeScale,
      lineHeightTypes,
      fontWeightTypes,
      fontColors,
      colors,
      colorThemes,
    } = {
      ...baseValues,
      ...newBaseValues
    }

    /**
      Context Style
    */
    const keys = className ? name.split(' ') : []
    const contextStyle = keys.reduce((a, key) => (
      assign(a, (newBaseValues ? newBaseValues[key] : {}))
    ), {})

    /**
      Props Style
    */
    const propStyle = {
      ...makePaddingStyles({
        xyPaddingUseSameScale,
        paddingRank,
        paddingHorizontalRank,
        paddingVerticalRank,
        paddingTopRank,
        paddingBottomRank,
        paddingLeftRank,
        paddingRightRank,
        p, px, py, pt, pb, pl, pr,
        spacingScaleVertical,
        spacingScaleHorizontal,
      }),
      ...makeMarginStyles({
        xyMarginUseSameScale,
        marginRank,
        marginHorizontalRank,
        marginVerticalRank,
        marginTopRank,
        marginBottomRank,
        marginLeftRank,
        marginRightRank,
        m, mx, my, mt, mb, ml, mr,
        spacingScaleVertical,
        spacingScaleHorizontal,
      }),
      ...makeBorderWidthStyles({
        borderType,
        borderTopType,
        borderBottomType,
        borderLeftType,
        borderRightType,
        b, bt, bb, br, bl,
        borderWidthTypes,
      }),
      ...makeBorderRadiusStyles({
        radiusType,
        radiusTopRightType,
        radiusTopLeftType,
        radiusBottomRightType,
        radiusBottomLeftType,
        r, rtr, rtl, rbr, rbl,
        borderRadiusTypes,
      }),
      ...makeElevationStyles({
        elevationRank,
        elevationScale,
      }),
      ...makeFontStyles({
        fontSizeRank,
        fontWeightType,
        lineHeightType,
        lineHeightAsHeightType,
        fontSizeScaler,
        fontSizeScale,
        lineHeightTypes,
        fontWeightTypes,

      }),
      ...makeColorStyle({
        color,
        backgroundColor,
        borderColor,
        theme,
        isInverted,
        isColorfulComponent,
        colors,
        colorThemes,
      }),
      ...makeDimensionStyles({
        widthByFontSizeRank,
        heightByFontSizeRank,
        widthByBorderType,
        heightByBorderType,
        fontSizeScale,
        borderWidthTypes,
      }),
    }
    /** Style override order */
    let appliedStyle = {
      ...contextStyle,
      ...propStyle,
    }
    /**
      if underlayColor is not specified,
      this will set it to whatever "color" is
    */
    let restyledProps = {}
    if (
      AppliedComponent === TouchableHighlight &&
      !componentProps.underlayColor
    ) {
      restyledProps.underlayColor = (
        assignColor({
          color,
          theme,
          colors,
          colorThemes,
          themePart: (isInverted) ? "backgroundColor" : "color"
        })
      )
    }

    if ( AppliedComponent === Image && radiusType === "circle" ) {
      const appliedHeight = (
        style && style.height || appliedStyle && appliedStyle.height
      )
      restyledProps.borderRadius = appliedHeight / 2
    }


    const resultComp = (
      <AppliedComponent
        {...componentProps}
        ref={ref => baseRef(ref)}
        style={[appliedStyle, style]}
        {...restyledProps}
        >
        {componentProps.children}
      </AppliedComponent>
    )
    return resultComp
  }
}

/**___________________________________________________________________________*/

Base.contextTypes = {
  newBaseValues: PropTypes.object
}
/**___________________________________________________________________________*/

Base.defaultProps = {
  baseRef: x => x
}
/**___________________________________________________________________________*/

const spacingProps = [
  "paddingRank",
  "paddingHorizontalRank",
  "paddingVerticalRank",
  "paddingTopRank",
  "paddingBottomRank",
  "paddingLeftRank",
  "paddingRightRank",
  "p", "pt", "pr", "pb", "pl", "px", "py",
  "marginRank",
  "marginHorizontalRank",
  "marginVerticalRank",
  "marginTopRank",
  "marginBottomRank",
  "marginLeftRank",
  "marginRightRank",
  "m", "mt", "mr", "mb", "ml", "mx", "my",
]
const spacingPropTypes = mapArrayToObject(spacingProps, (e, i, a) => {
  return {[e]: PropTypes.oneOf(makeArrayOfIndices(baseValues.spacingScaleHorizontal))}
})
const borderProps = [
  "borderType",
  "borderTopType",
  "borderBottomType",
  "borderLeftType",
  "borderRightType",
  "b", "bt", "bb", "br", "bl",
]
const borderPropTypes = mapArrayToObject(borderProps, (e, i, a) => {
  return { [e]: PropTypes.oneOf(makeArrayOfKeys(baseValues.borderWidthTypes)) }
})
const radiusProps = [
  "radiusType",
  "radiusTopRightType",
  "radiusTopLeftType",
  "radiusBottomRightType",
  "radiusBottomLeftType",
  "r", "rtr", "rtl", "rbr", "rbl",
]
const radiusPropTypes = mapArrayToObject(radiusProps, (e, i, a) => {
  return {
    [e]: PropTypes.oneOf(makeArrayOfKeys(baseValues.borderRadiusTypes))
  }
})
const fontSizePropValues = makeArrayOfIndices(baseValues.fontSizeScale)
const lineHeightPropValues = makeArrayOfKeys(baseValues.lineHeightTypes)
const fontWeightPropValues = makeArrayOfKeys(baseValues.fontWeightTypes)
const themePropValues = makeArrayOfKeys(baseValues.colorThemes)
const elevationPropValues = makeArrayOfIndices(baseValues.elevationScale)

Base.propTypes = {
  componentTag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element
  ]),
  className: PropTypes.string,
  baseStyle: PropTypes.object,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  baseRef: PropTypes.func,
  xyPaddingUseSameScale: PropTypes.bool,
  xyMarginUseSameScale: PropTypes.bool,
  ...spacingPropTypes,
  ...borderPropTypes,
  ...radiusPropTypes,
  elevationRank: PropTypes.oneOf(elevationPropValues),
  fontSizeRank: PropTypes.oneOf(fontSizePropValues),
  widthByFontSizeRank: PropTypes.oneOf(fontSizePropValues),
  heightByFontSizeRank: PropTypes.oneOf(fontSizePropValues),
  lineHeightAsHeightType: PropTypes.oneOf(lineHeightPropValues),
  lineHeightType: PropTypes.oneOf(lineHeightPropValues),
  fontWeightType: PropTypes.oneOf(fontWeightPropValues),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  theme: PropTypes.oneOf(themePropValues),
  isInverted: PropTypes.bool,
}

/**___________________________________________________________________________*/

export default Base
