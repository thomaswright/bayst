import React from 'react'
import { View } from 'react-native'
import { TextButton, Box } from '../collator'



/**
If just text is specified, styling defaults to a box with centered,
black text, and black underlayColor.
*/
const example_justText_TextButton = (
	<TextButton
		onPress={() => console.log("Button Pressed!")}
		text={"Alabama"}
		/>
)


/**
...add color and backgroundColor
*/
const example_basicStyling_TextButton = (
	<TextButton
		onPress={() => console.log("Button Pressed!")}
		backgroundColor={"orange"}
		color={"white"}
		text={"New Mexico"}
		/>
)

/**
...add radiusType, marginRank

*/
const example_moreStyling_TextButton = (
	<TextButton
		onPress={() => console.log("Button Pressed!")}
		marginRank={2}
		radiusType={"small"}
		backgroundColor={"darkgreen"}
		color={"white"}
		text={"Oregon"}
		/>
)

/**
...change the font size, the padding, maybe add some elevation.
All base props can be specified. All get passed to the Button component,
except for those related to text (text, fontSizeRank, fontWeightType,
lineHeightType, color, and other any props passed in via textProps).
*/
const example_evenMoreStyling_TextButton = (
	<TextButton
		onPress={() => console.log("Button Pressed!")}
		underlayColor={"green"}
		marginRank={2}
		radiusType={"circle"}
		paddingVerticalRank={3}
		fontSizeRank={2}
		backgroundColor={"blue"}
		elevationRank={2}
		color={"white"}
		text={"Washington"}
		/>
)



/**
If you don't add an underlayColor, it'll take color as the underlayColor.
If you don't add a borderColor, it'll take color as the borderColor.
*/
const example_smartDefaultColor_TextButton = (
	<TextButton
		borderType={"thick"}
		onPress={() => console.log("Button Pressed!")}
		marginRank={2}
		paddingVerticalRank={3}
		fontSizeRank={2}
		radiusType={"circle"}
		backgroundColor={"white"}
		elevationRank={1}
		color={"grey"}
		text={"Oklahoma"}
		/>
)


/**
Because the Button comp wraps a View internally, you have to specify the
style of that View, via insideViewStyle, to position text.
*/
const example_positioning_TextButton = (
	<TextButton
		insideViewStyle={{justifyContent: "flex-start"}}
		onPress={() => console.log("Button Pressed!")}
		marginRank={2}
		backgroundColor={"red"}
		color={"white"}
		text={"Kansas"}
		/>
)


/**
You can pass in a theme if the theme is specified in your configuration.
Default themes for primary, secondary, default, info, warning, & error
*/
const example_primaryTheme_TextButton = (
	<TextButton
		borderType={"thick"}
		onPress={() => console.log("Button Pressed!")}
		marginRank={2}
		theme={"primary"}
		text={"North Dakota"}
		/>
)

/**
isInverted will invert the color and backgroundColor of the chosen theme.
*/
const example_invertedPrimaryTheme_TextButton = (
	<TextButton
		isInverted
		onPress={() => console.log("Button Pressed!")}
		marginRank={2}
		theme={"primary"}
		text={"South Dakota"}
		/>
)

/**
Lower level props always override themes.
*/
const example_themeOveride_TextButton = (
	<TextButton
		backgroundColor={"red"}
		onPress={() => console.log("Button Pressed!")}
		marginRank={2}
		theme={"primary"}
		text={"Michigan"}
		/>
)

/**
Wrap TextButton in a View or Box with flexDirection: "row" to make the button
only as wide as the inclosed text.
*/
const example_contentWidth_TextButton = (
	<View style={{ flexDirection: "row"}}>
		<TextButton
			onPress={() => console.log("Button Pressed!")}
			marginRank={2}
			backgroundColor={"fuchsia"}
			color={"white"}
			text={"Virginia"}
			/>
	</View>
)
/**
Add a left icon
*/
const example_leftIcon_TextButton = (
	<TextButton
		onPress={()=>{}}
		text={"Maryland"}
		leftIconProps={{name: "rowing", marginRightRank: 2}}
		underlayColor={"navy"}
		marginRank={2}
		radiusType={"small"}
		backgroundColor={"#354e66"}
		fontSizeRank={3}
		color={"white"}
		/>
)

/**
...right icon
*/
const example_rightIcon_TextButton = (
	<TextButton
		onPress={()=>{}}
		text={"Nevada"}
		rightIconProps={{name: "casino", marginLeftRank: 2}}
		underlayColor={"navy"}
		marginRank={2}
		radiusType={"small"}
		backgroundColor={"#ffbf00"}
		fontSizeRank={3}
		color={"white"}
		/>
)

/**
...both
*/
const example_bothIcons_TextButton = (
	<TextButton
		onPress={()=>{}}
		text={"Arizona"}
		leftIconProps={{name: "camera", marginRightRank: 2}}
		rightIconProps={{name: "landscape", marginLeftRank: 2}}
		underlayColor={"navy"}
		marginRank={2}
		radiusType={"small"}
		backgroundColor={"#c491df"}
		fontSizeRank={3}
		color={"white"}
		/>
)
/**
...just icon
*/
const example_justIcon_TextButton = (
	<TextButton
		onPress={()=>{}}
		leftIconProps={{name: "functions", marginRightRank: 2}}
		underlayColor={"navy"}
		marginRank={2}
		radiusType={"small"}
		backgroundColor={"blue"}
		fontSizeRank={3}
		color={"white"}
		/>
)
/**
...flexible props. See the TextButton example for examples varying
props that affect the Button. TextButton and TextButton

*/
const example_styledIcon_TextButton = (
	<TextButton
		onPress={()=>{}}
		leftIconProps={{
			name: "local-florist",
			color: "orange",
			marginRightRank: 2,
			fontSizeRank: 1
		}}
		textProps={{
			fontWeightType: "bold"
		}}
		text={"New Jersey"}
		underlayColor={"navy"}
		marginRank={2}
		radiusType={"small"}
		borderType={"thick"}
		borderColor={"navy"}
		backgroundColor={"white"}
		fontSizeRank={3}
		color={"blue"}
		/>
)

/**

*/


const example_TextButton = {
  header: "TextButton",
  examples: (
		<Box>
			{example_justText_TextButton}
			{example_moreStyling_TextButton}
			{example_evenMoreStyling_TextButton}
			{example_positioning_TextButton}
			{example_primaryTheme_TextButton}
			{example_invertedPrimaryTheme_TextButton}
			{example_leftIcon_TextButton}
			{example_rightIcon_TextButton}
			{example_bothIcons_TextButton}
			{example_justIcon_TextButton}
			{example_styledIcon_TextButton}
		</Box>
	)
}


export default example_TextButton
