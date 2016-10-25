
# Bayst

Yet another UI library.

Bayst a component library for React Native that makes it quick to build presentational components, easy to maintain style consistency across your app, and simple to modify those styles later. Styles scales are specified in the baseValue configuration, added to and overridden by setting newBaseValues via context. These scales map to specific prop indices and attributes, meaning you can build your app style focusing on semantic relations rather than rendered values.

Though you can use these components raw, it's intended that you build a set of presentational components with them, and then use that set. That is, this isn't a set of styled components, but rather components which are easy to style.

Component specs are listed below. For more guidance, see the 'examples' folder where the components pictured below are built.

Bayst is built off a modified core of [rebass](https://github.com/jxnblk/rebass). If you need a similar solution for the web, rebass is a great option.

![TextButton] : [TextButton]
![ButtonGroup] : [ButtonGroup]
![Icons] : [Icons]
![ColorPicker] : [ColorPicker]
![ListItem] : [ListItem]
![Panel] : [Panel]
![TextInputBase] : [TextInputBase]
![Checkbox] : [Checkbox]
![TextBase] : [TextBase]

## Install
```
npm i bayst --save && react-native link react-native-vector-icons
```

## Use
Use like any other component.
```jsx
import { TextButton } from 'bayst'

<TextButton
  ... // prop specs listed below
  />
```

See the 'examples' folder for further guidance. The examples pictured above are wrapped in the 'Examples' component. Render as your root comp to view.
```jsx
import { Examples } from 'bayst'

AppRegistry.registerComponent('based', () => Examples)
```

This library is platform agnostic; use on iOS or Android.


## Overview

```jsx
<Base/>
<Box/> = Based <View/>
<TextBase/> = Based <Text />
<TextInputBase/> = Based <TextInput/>
<Button/> = Based <TouchableHighlight/>
<ImageBase/> = Based <Image/>
<Icon/> = Based <Icon/> from react-native-vector-icons
<TextButton/> =  <TextBase/> + <Icon/> + <Button/>
<IconButton/> = <Icon/> or <IconBox/> + <Button/>
<SocialIcon/> = <Icon/> or <IconBox/> + color styling
<SocialIconButton/> = <IconButton/> + color styling
<Checkbox/> = <IconButton/> + <IconButton/>
<RadioButton/> = <Checkbox/> + radio button styling
<ButtonGroup/> = <TextButton/> + <Box/> + group styling
<Tab/> = <ButtonGroup/> + distinct-selection functionality
<Dropdown/> = <ButtonGroup/> + selection display functionality
<Panel/> = <Box/> + <Box/> + <TextBase/>
<ColorPicker/> = custom color picker + 2 <TextButton/>
<Paragraph/> = <TextBase/> + <Box/>
<Divider/> = <Box/> + size & color styling
<StatusBarAndSpacer/> = <StatusBar/> + <Divider/>
<ListItem/> = <Button/> + 2 <TextBase/> + <Image/> + <Icon/>
TextInputHandler = HOC for <TextInputBase/> + 2 <TextButton/>
```

## Components

### Base

```jsx
<Base
  paddingRank / p
  paddingHorizontalRank / px
  paddingVerticalRank / py
  paddingTopRank / pt
  paddingBottomRank / pb
  paddingLeftRank / pl
  paddingRightRank / pr
  marginRank / m
  marginHorizontalRank / mx
  marginVerticalRank / my
  marginTopRank / mt
  marginBottomRank / mb
  marginLeftRank / ml
  marginRightRank / mr
    // 0,1,2,3,4,5,6
    // For convenience, there's different scales available for vertical and // horizontal spacing, though you can keep the values the same

  xyPaddingUseSameScale
  xyMarginUseSameScale
    // bool, If you want to guarantee that the vertical and horizontal padding
    // or margin use the same scale, in case the scale might differ, then use
    // these bools, which specify that the horizontal scale is used for both horizontal and vertical padding/margin

  borderType / b
  borderTopType / bt
  borderBottomType / bb
  borderLeftType / bl
  borderRightType / br
  widthByBorderType
  heightByBorderType
    // "none", "hairline", "thin", "thick"

  radiusType / r
  radiusTopRightType / rtr
  radiusTopLeftType / rtl
  radiusBottomRightType / rbr
  radiusBottomLeftType / rbl
    // "none", "small", "large", "circle"

  elevationRank
   // 0,1,2,3,4,5

  backgroundColor
  color
  borderColor
    // usual hex/rgba/name web colors or baseValue named colors (see colors)

  theme
    // "primary", "secondary", "default", "info", "success", "warning", "error"

  isInverted
    // bool, will invert the theme color and backgroundColor

  fontSizeRank
  widthByFontSizeRank
  heightByFontSizeRank
    // 7,6,5,4,3,2,1,0 (small to large, like usual header sizes)

  fontWeightType
    // "light", "regular", "bold", "heavy"

  lineHeightType
    // "none", "equal", "small", "medium", "large"
    // Multiplies the font size by the associated scaler

  lineHeightAsHeightType
    // "none", "equal", "small", "medium", "large"
    // Calculates a height like with lineHeightTypes, but sets this as
    // the 'height' instead of the 'lineHeight'. Useful for TextInput.

  fontSizeScaler
    // number, if you need to scale the produced values of fontSizeRank,
    // lineHeightType, or lineHeightAsHeightType for some reason
  />
```

### Box
The Base extension of View
```jsx
<Box
  {...any Base props}
  {...any View props}
  />
```

### TextBase
The Base extension of Text
```jsx
<TextBase
  {...any Base props}
  {...any Text props}
  text={string} // accepts text as children too
  />
```

### TextInputBase
The Base extension of TextInput
```jsx
<TextInputBase
  {...any Base props}
  {...any TextInput props}
  />
```

### Button
The Base extension of TouchableHighlight. Because TouchableHighlight has to wrap a native component, this component internally wraps a View, whose props are specified with insideViewProps (e.g. for content alignment).
```jsx
<Button
  {...any Base props}
  {...any TouchableHighlight}
  insideViewProps={object}
  insideViewStyle={object}
  />
```

### ImageBase
The Based extension of Image
```jsx
<ImageBase
  {...any Base props}
  {...any Image props}
  size={number} // alternatively you can use fontSizeRank
  />
```


### Icon
The Based extension of [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) Icon component.
```jsx
<Icon
  {...any Base props} // fontSizeRank can be used for sizing
  type={string} // default: 'material', see react-native-vector-icons
  name={string} // icon name, see react-native-vector-icons
  size={number} // alternatively you can use fontSizeRank
  useIconBox={bool} // default: false, will wrap icon in a square box
  />
```

### TextButton
A regular text button with icons left and right and theming available.
```jsx
<TextButton
  {...any Text props}
  {...any Button props}
  theme={string} // will apply color and backgroundColor from defined themes
  isInverted={bool} // will invert these theme colors
  leftIconProps={object} // any Icon props
  rightIconProps={object} // any Icon props
  textProps={object}
    // any additional textProps beyond color, fontSizeRank,
    // fontWeightType, and lineHeightType
  />
```

### IconButton
Icon wrapped in a Button.
```jsx
<IconButton
  {...any Icon props}
  {...any Button props}
  iconProps={object} // for any additional props to pass to the icon
  />
```

### SocialIcon
An Icon able to specify type and color based on company name.
```jsx
<SocialIcon
  {...any Icon props} // name alone will derive type & color
  />
```

### SocialIconButton
An IconButton able to specify type and color based on company name.
```jsx
<SocialIconButton
  {...any IconButton props} // name alone will derive type & color
  />
```

### Checkbox
An IconButton with standard checkbox functionality.
```jsx
<Checkbox
  {...any IconButton props}
  isDisabled={bool}  // default: false
  isChecked={bool} // default: false
  color={string} // default: "black"
  uncheckedColor={string} // default: color
  checkedColor={string} // default: color
  disabledColor={string} // default: "grey"
  checkedIconProps={object} // any Icon props
  uncheckedIconProps={object} // any Icon props
  onToggle={() => {...}} // no args
  />
```

### RadioButton
A Checkbox styled as a radio button.
```jsx
<RadioButton
  {...any Checkbox props}
  />
```



### ButtonGroup
A group of TextButtons, with group and active/non-active styling.
```jsx
<ButtonGroup
  color={string} // the non-active button color
  backgroundColor={string} // the non-active button backgroundColor),
  underlayColor={string}
  activeColor={string}
  activeBackgroundColor={string}
  activeUnderlayColor={string}
  theme={string}
    // can specify theme instead of colors, active buttons are inverted colors
  isInverted={bool} // can invert theme
  borderType={string}
  borderColor={string}
  fontSizeRank={int}
  isVertical={bool} // default: false
  allowOverflow={bool} // default: false, makes group scrollable
  buttonGroupProps={array}
    //[{...any TextButton props, isActive={bool}, onPress={(index) => {...})}, ...]
  buttonProps={object} // any TextButton props, to style any buttons
  containerProps={object} // any Box props, to style the container
  buttonGroupOnPress={(index)=>{...}} // called when any button is pressed
  />
```

### Tabs
Single selection ButtonGroup with associated components.
```jsx
<Tabs
  {...any ButtonGroup props}
  dividerColor={string}
  hasDivider={bool}
  tabbedComponents={array} // array of components
  defaultActiveIndex={int}
  />
```

### Dropdown
Single selection ButtonGroup with regular dropdown behavior
```jsx
<Dropdown
  {...any ButtonGroup props}
  defaultActiveIndex={int}
  />
```

### Panel
A box with header.
```jsx
<Panel
  borderType={string}
  radiusType={string}
  borderColor={string}
  titleBackgroundColor={string}
  titleText={string}
  titleColor={string}
  titleTextProps={object} // any Text props
  titleBoxProps={object} // any Box props
  contentBoxProps={object} // any Box props
  containerBoxProps={object} // any Box props
  />
```

### ColorPicker
A color picker with hsl controls.
```jsx
<ColorPicker
  defaultValue={string} // default color, any color space will work
  colorSpace={string} // default: "hex", also available: "rgb", "hsl"
    //determines colorSpace string passed to onSubmit handler
  onSubmit={(colorSpaceString) => {...}}
  submitTextButtonProps={object} // any TextButton props
  cancelTextButtonProps={object} // any TextButton props
  />
```

### Paragraph
TextBase with block and indentation options.
```jsx
<Paragraph
  {...any TextBase props}
  isBlockParagraph={bool}
  isIndented={bool} // default: false
  />
```


### ListItem
Row component with Image/Icon, primary, and secondary text
```jsx
<ListItem
  onPress={()=>{...}}
  backgroundColor={string} // sets backgroundColor for whole component
  buttonProps={object} // any Button props
  iconProps={object} // any Icon props
  imageProps={object} // any Image props
  color={string} // default: "grey", any TextBase props
  fontSizeRank={int} // sets fontSizeRank for primary text
  primaryTextProps={object} // any TextBase props
  secondaryTextProps={object} // any TextBase props
  hasRightArrow={bool} // default: false
  rightArrowProps={object} // any Icon props
  hasDivider={bool} // default: true
  dividerProps={object} // any Divider props
  textContainerProps={object} // any Box props
  />
```


### Divider
A simple spacer
```jsx
<Divider
  type={string} // default: "hairline", any borderType, applied as height
  height={number} // will override type
  backgroundColor={string} //default: "grey"
  />
```

### StatusBarAndSpacer
StatusBar component with appropriately sized spacer so content doesn't run behind until scrolled.
```jsx
<StatusBarAndSpacer
  hidden={bool} // default: false //
  backgroundColor={string} // default: "transparent"
  light={bool} // default: false, color of StatusBar text
  />
```


### TextInputHandler
HOC for TextInputBase state control
```jsx
const MyPresentationalComponent = ({
  defaultValue,
  placeholder,
  onSubmit,
  onCancel,
  ...props
}) => {
  // probably something like this, but styled
  <Box>
    <Box>
      <TextInputBase
        defaultValue={defaultValue}
        placeholder={placeholder}
        onSubmit={onSubmit}
        />
    </Box>
    <Box>
      <TextButton
        text={"Accept"}
        onPress={onSubmit}
        />
      <TextButton
        text={"Cancel"}
        onPress={onCancel}
        />
    </Box>
  </Box>
}

const MyTextInputComp = TextInputHandler(MyPresentationalComponent)

<MyTextInputComp
  defaultValue={string}
  placeholder={string}
  onSubmit={(text)=>{...}}
  onCancel={()=>{...}}
  />
```

## Default Base Values
```jsx
{
  spacingScaleVertical: [0, 4, 8, 16, 32, 64],
  spacingScaleHorizontal: [0, 4, 8, 16, 32, 64],
  borderWidthTypes: {
    none: 0,
    hairline: StyleSheet.hairlineWidth || 1,
    thin: 2,
    thick: 4,
  },
  borderRadiusTypes: {
    none: 0,
    small: 3,
    large: 8,
    circle: 9999,
  },
  elevationScale: [0, 1, 2, 4, 8, 16],
  fontSizeScale: [64, 32, 24, 20, 16, 12, 10, 6],
  lineHeightTypes: {
    none: 0,
    equal: 1,
    small: 1.20,
    medium: 1.35,
    large: 1.60,
  },
  fontWeightTypes: {
    light: "300",
    regular: "500",
    bold: "700",
    heavy: "900",
  },
  colors: {
    ...colors,
    ...socialColors
  },
  colorThemes: {
    primary:   {color: colors.navy,   backgroundColor: colors.white},
    secondary: {color: colors.aqua,   backgroundColor: colors.white},
    default:   {color: colors.gray,   backgroundColor: colors.white},
    info:      {color: colors.yellow, backgroundColor: colors.white},
    success:   {color: colors.green,  backgroundColor: colors.white},
    warning:   {color: colors.maroon, backgroundColor: colors.white},
    error:     {color: colors.red,    backgroundColor: colors.white},
  },
}
```

[ButtonGroup] : (https://cloud.githubusercontent.com/assets/5634164/19631738/76ac661c-9965-11e6-8666-3b63ebaa7471.png)
[Checkbox] : (https://cloud.githubusercontent.com/assets/5634164/19631741/7b7b03d8-9965-11e6-826c-41a731521125.png)
[ColorPicker] : (https://cloud.githubusercontent.com/assets/5634164/19631744/839ad53e-9965-11e6-8642-9427baf220d9.png)
[Icon] : (https://cloud.githubusercontent.com/assets/5634164/19631746/874d1566-9965-11e6-936f-89b2cb1cba6e.png)
[ListItem] : (https://cloud.githubusercontent.com/assets/5634164/19631748/8b0b3b38-9965-11e6-948f-916b9bd3319a.png)
[Panel] : (https://cloud.githubusercontent.com/assets/5634164/19631758/a00a2e9a-9965-11e6-8b5c-24529133673a.png)
[TextBase] : (https://cloud.githubusercontent.com/assets/5634164/19631765/a563e0b6-9965-11e6-87b2-57f82600b8db.png)
[TextButton] : (https://cloud.githubusercontent.com/assets/5634164/19631767/a97101fc-9965-11e6-8c09-604f571e5515.png)
[TextInputBase] : (https://cloud.githubusercontent.com/assets/5634164/19631768/ac992710-9965-11e6-9308-bac33d8b659c.png)
