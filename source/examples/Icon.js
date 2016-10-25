/**
Square:
octicon
material
entypo

Not Square:
zocial
ionicon
foundation
evilicon
font-awesome
*/

import React from 'react'
import { View } from 'react-native'
import {
  Icon,
  IconButton,
  SocialIcon,
  SocialIconButton,
  Box
} from '../collator'

/**___________________________________________________________________________*/


/**
icon type defaults to "material",
*/
const example_basic_Icon = (
  <Icon
    name={"home"}
    />
)


/**
specify other icon sources with "type"
*/
const example_differentType_Icon = (
  <Icon
    name={"keyboard"}
    type={"octicon"}
    />
)

/**
All props available to TextBase are available to Icon
*/
const example_styled_Icon = (
  <Icon
    name={"pets"}
    color={"blue"}
    fontSizeRank={1}
    marginRank={2}
    paddingRank={1}
    />
)

/**
restrict to width of content by wrapping in View with flexDirection: "row"
*/
const example_wrappedContent_Icon = (
  <View style={{flexDirection: "row"}}>
    <Icon
      fontSizeRank={1}
      paddingRank={1}
      marginRank={2}
      color={"blue"}
      backgroundColor={"yellow"}
      name={"child-care"}
      />
  </View>
)

/**
Icons from some sources aren't always square. IconBox is a comp
that scales the icons by 0.78 (small enough to fit most dimension
differences) and then wraps and centers them in a box the
same height and width as the fontSize or fontSizeRank.
This is incorporated in Icon, so just specify useIconBox
should you need to square an icon.
*/
const example_basic_IconBox = (
  <View style={{flexDirection: "row"}}>
    <Icon
      useIconBox
      fontSizeRank={1}
      paddingRank={1}
      marginRank={2}
      color={"orange"}
      backgroundColor={"black"}
      name={"soundcloud"}
      type={"zocial"}
      />
  </View>
)

/**
IconButton
*/
const example_basic_IconButton = (
  <View style={{flexDirection: "row"}}>
    <IconButton
      onPress={() => console.log("Icon button pressed")}
      fontSizeRank={1}
      marginRank={2}
      paddingRank={1}
      backgroundColor={"blue"}
      color={"white"}
      name={"cloud-queue"}
      />
  </View>
)

const example_basic2_IconButton = (
  <View style={{flexDirection: "row"}}>
    <IconButton
      onPress={() => console.log("Icon button pressed")}
      fontSizeRank={1}
      marginRank={2}
      paddingRank={2}
      elevationRank={2}
      backgroundColor={"red"}
      radiusType={"circle"}
      name={"star"}
      />
  </View>
)

/**
Specify useIconBox to maintain equal dimension in case
  the icon supplied is not square.
*/

const example_useIconBox_IconButton = (
  <View style={{flexDirection: "row"}}>
    <IconButton
      useIconBox
      onPress={() => console.log("Icon button pressed")}
      fontSizeRank={1}
      marginRank={2}
      paddingRank={2}
      elevationRank={2}
      color={"red"}
      backgroundColor={"white"}
      radiusType={"circle"}
      name={"reddit"}
      type={"zocial"}
      />
  </View>
)


/**___________________________________________________________________________*/

const example_basic_SocialIcon = [
  "angellist",
  "codepen",
  "facebook",
  "foursquare",
  "github",
].map((iconName) => {
  return (
    <SocialIcon
      fontSizeRank={1}
      marginRank={2}
      paddingRank={2}
      radiusType={"circle"}
      name={iconName}
      />
  )
})

const example_background_SocialIcon = [
  "gitlab",
  "instagram",
  "linkedin",
  "medium",
  "pinterest",
].map((iconName, i) => {
  return (
    <SocialIcon
      isInverted
      fontSizeRank={1}
      marginRank={2}
      paddingRank={2}
      radiusType={ (i%2===0) ? "large" : "circle"}
      name={iconName}
      />
  )
})


const example_basic_SocialIconButton = [
  'github-alt',
  'google-plus-official',
  'soundcloud',
  'stumbleupon',
  'tumblr',
].map((iconName) => {
  return (
    <SocialIconButton
      onPress={() => console.log("Social Icon Button Pressed")}
      fontSizeRank={1}
      marginRank={2}
      paddingRank={2}
      name={iconName}
      />
  )
})

const example_background_SocialIconButton = [
  "twitch",
  "twitter",
  "vimeo",
  "wordpress",
  "youtube",
].map((iconName, i) => {
  return (
    <SocialIconButton
      onPress={() => console.log("Social Icon Button Pressed")}
      isInverted
      fontSizeRank={1}
      marginRank={2}
      paddingRank={2}
      elevationRank={2}
      radiusType={ (i%2!==0) ? "small" : "circle"}
      name={iconName}
      />
  )
})

/**___________________________________________________________________________*/

const IconRow = ({
  iconArray
}) => {
  const resultComp = (
    <View style={{flexDirection: "row"}}>
      {iconArray.map((e,i) => <View style={{height: 64}} key={i}>{e}</View>)}
    </View>
  )
  return resultComp
}


/**___________________________________________________________________________*/

/**
Your basic Icon comp, with different icon sources available,
IconBox to square un-square Icons, IconButton
when you need to press it, and SocialIcon and SocialIconButton with
icon names tied to company colors.
*/


const example_Icon = {
  header: "Icon, IconButton, SocialIcon, & SocialIconButton",
  examples: (
    <Box>
      <Box style={{flexDirection: "row"}}>
        {example_basic_Icon}
        {example_differentType_Icon}
        {example_styled_Icon}
        {example_wrappedContent_Icon}
        {example_basic_IconBox}
      </Box>
      <Box style={{flexDirection: "row"}}>
        {example_basic_IconButton}
        {example_basic2_IconButton}
        {example_useIconBox_IconButton}
      </Box>
      <Box>
        <IconRow iconArray={example_basic_SocialIcon} />
        <IconRow iconArray={example_background_SocialIcon} />
      </Box>
      <Box>
        <IconRow iconArray={example_basic_SocialIconButton} />
        <IconRow iconArray={example_background_SocialIconButton} />
      </Box>
    </Box>
  )
}

/**___________________________________________________________________________*/

export default example_Icon
