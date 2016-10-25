import React from 'react'
import { ListItem, Box } from '../collator'

/**___________________________________________________________________________*/


/**
You have available in this comp an icon or image, the primary text,
the secondary text, and an arrow to the right
*/
const example_basic_ListItem = (
  <ListItem
    hasRightArrow
    onPress={() => console.log("List Item Pressed")}
    primaryTextProps={{text: "We're nihilists", color: "red"}}
    secondaryTextProps={{text: "We believe in nothing"}}
    fontSizeRank={4}
    iconProps={{name: "content-cut", color: "black", fontSizeRank: 2}}
    />
)

/**
You don't have to put any components you don't want.
*/
const example_justTextAndIcon_ListItem = (
  <ListItem
    primaryTextProps={{text: "Ross"}}
    iconProps={{name: "color-lens", fontSizeRank: 2}}
    />
)

/**
The text parts take any TextBase props, the icon and right arrow any
Icon props, and the image any ImageBase props.
Here, for example, we use an icon from ionicon.
Since the icon's width is less than the height
we set the widthByFontSizeRank to be the same as the icon's fontSizeRank.
Alternatively we could set useIconBox to true.
*/
const example_iconProps_ListItem = (
  <ListItem
    primaryTextProps={{text: "Ignite", fontWeightType: "light"}}
    onPress={() => console.log("List Item Pressed")}
    fontSizeRank={4}
    iconProps={{
      name: "ios-flame",
      type: "ionicon",
      color: "red",
      fontSizeRank: 2,
      widthByFontSizeRank: 2
    }}
    />
)

/**
The button accepts props too.
*/
const example_buttonProps_ListItem = (
  <ListItem
    hasRightArrow
    rightArrowProps={{color: "white"}}
    onPress={() => console.log("List Item Pressed")}
    buttonProps={{backgroundColor: "teal", underlayColor: "blue"}}
    primaryTextProps={{text: "Yes", color: "white", fontWeightType: "heavy"}}
    fontSizeRank={4}
    iconProps={{name: "edit", color: "black", fontSizeRank: 2}}
    />
)

const example_smallImage_ListItem = (
  <ListItem
    primaryTextProps={{text: "Forest"}}
    imageProps={{
      fontSizeRank: 2,
      source: require('./Orangutan.jpg')
    }}
    />
)

const example_bigImage_ListItem = (
  <ListItem
    onPress={() => console.log("List Item Pressed")}
    primaryTextProps={{text: "People"}}
    imageProps={{
      radiusType: "circle",
      fontSizeRank: 0,
      source: require('./Orangutan.jpg')
    }}
    />
)

const example_ListItem = {
  header: "ListItem",
  examples: (
    <Box>
      {example_basic_ListItem}
      {example_justTextAndIcon_ListItem}
      {example_iconProps_ListItem}
      {example_buttonProps_ListItem}
      {example_smallImage_ListItem}
      {example_bigImage_ListItem}
    </Box>
  )
}

/**___________________________________________________________________________*/

export default example_ListItem
