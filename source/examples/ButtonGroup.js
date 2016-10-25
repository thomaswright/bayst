import React from 'react'
import { Box, ButtonGroup, Tabs, Dropdown } from '../collator'

/**
  ButtonGroup is a collection of TextButtons with some styling facilitation.
*/

/**___________________________________________________________________________*/
/**
  Specify your button details with an object array, specifying which are active
  with an isActive bool. If you want distinct selection, not having to specify
  isActive, use the Tabs component (a extension of ButtonGroup) - see example
  below.
*/
const buttonGroupProps = [
  {
    isActive: true,
    text: "Tanya",
    onPress: (() => console.log("Tanya!"))
  },
  {
    isActive: false,
    text: "Juan",
    onPress: (() => console.log("Juan!"))
  },
  {
    isActive: false,
    text: "Cynthia",
    onPress: (() => console.log("Cynthia!"))
  },
]

/**___________________________________________________________________________*/
/**
This is just another set to showcase the overflow and scrollable functionality
*/

const buttonGroupPropsLong = [
  {
    isActive: true,
    text: "Michael",
    onPress: (() => console.log("Michael!"))
  },
  {
    isActive: false,
    text: "Andre",
    onPress: (() => console.log("Andre!"))
  },
  {
    isActive: false,
    text: "Pam",
    onPress: (() => console.log("Pam!"))
  },
  {
    isActive: true,
    text: "Beau",
    onPress: (() => console.log("Beau!"))
  },
  {
    isActive: true,
    text: "Sarah",
    onPress: (() => console.log("Sarah!"))
  },
  {
    isActive: false,
    text: "Becky",
    onPress: (() => console.log("Becky!"))
  },
]

/**___________________________________________________________________________*/
/**
  The buttons are just TextButtons, so you can specify any props for TextButton
  for these buttons. Here's a set to showcase icons in the buttons.
*/
const buttonGroupPropsWithIcons = [
  {
    isActive: true,
    text: "Tanya",
    onPress: (() => console.log("Tanya!")),
    leftIconProps: {
      name: "ios-flame",
      type: "ionicon",
      fontSizeRank: 2,
      color: "red",
      marginRightRank: 2
    },
  },
  {
    isActive: false,
    rightIconProps: {
      name: "flash-on",
      fontSizeRank: 1,
      color: "yellow"
    },
    onPress: (() => console.log("Juan!"))
  },
  {
    isActive: false,
    text: "Cynthia",
    onPress: (() => console.log("Cynthia!"))
  },
]

/**___________________________________________________________________________*/


/**
activeColor and activeBackgroundColor specify the colors for buttons with
isActive true, color and backgroundColor specify for those not active.
*/
const example_justText_ButtonGroup = (
  <ButtonGroup
    fontSizeRank={4}
    color={"grey"}
    backgroundColor={"white"}
    activeColor={"blue"}
    activeBackgroundColor={"white"}
    buttonGroupProps={buttonGroupProps}
    />
)

/**
Base styling props like fontSizeRank and borderType get distributed as you
would expect.
*/
const example_basicBorder_ButtonGroup = (
  <ButtonGroup
    borderType={"hairline"}
    borderColor={"grey"}
    fontSizeRank={4}
    color={"grey"}
    backgroundColor={"white"}
    activeColor={"blue"}
    activeBackgroundColor={"white"}
    buttonGroupProps={buttonGroupProps}
    />
)

/**
additionally containerProps can be specified, with props like radiusType
smartly applied to capping button
*/
const example_containerProps1_ButtonGroup = (
  <ButtonGroup
    containerProps={{
      marginRank: 1,
      radiusType: "large"
    }}
    borderType={"thin"}
    borderColor={"blue"}
    fontSizeRank={4}
    color={"blue"}
    backgroundColor={"white"}
    activeColor={"white"}
    activeBackgroundColor={"blue"}
    buttonProps={{
      fontWeightType: "bold"
    }}
    buttonGroupProps={buttonGroupProps}
    />
)

/**
here's another example of how you might style your group
*/
const example_containerProps2_ButtonGroup = (
  <ButtonGroup
    containerProps={{
      marginRank: 1,
      radiusType: "circle"
    }}
    fontSizeRank={4}
    color={"black"}
    backgroundColor={"yellow"}
    activeColor={"white"}
    activeBackgroundColor={"orange"}
    buttonProps={{
      fontWeightType: "bold"
    }}
    buttonGroupProps={buttonGroupProps}
    />
)

/**
apply any TextButton props to buttonProps to apply them to all buttons
*/
const example_buttonProps_ButtonGroup = (
  <ButtonGroup
    containerProps={{
      marginRank: 1,
    }}
    fontSizeRank={4}
    color={"#006400"}
    backgroundColor={"white"}
    activeColor={"white"}
    activeBackgroundColor={"#006400"}
    buttonProps={{
      marginRank: 1,
      borderType: "thin",
      borderColor: "#006400",
      fontWeightType: "bold"
    }}
    buttonGroupProps={buttonGroupProps}
    />
)

/**
The buttons are just TextButtons, so all the same props apply, including
leftIconProps and rightIconProps. For individual buttons these can be
specified in the buttonGroupProps.
*/
const example_buttonGroupProps_ButtonGroup = (
  <ButtonGroup
    containerProps={{
      marginRank: 1,
    }}
    fontSizeRank={4}
    color={"teal"}
    backgroundColor={"white"}
    activeColor={"white"}
    activeBackgroundColor={"teal"}
    buttonProps={{
      paddingVerticalRank: 1,
      marginRank: 1,
      borderType: "thin",
      borderColor: "teal",
      fontWeightType: "bold",
      radiusType: "circle"
    }}
    buttonGroupProps={buttonGroupPropsWithIcons}
    />
)

/**
apply theme, active and non-active coloring handled automatically,
with active as set to inverted coloring
*/
const example_theme_ButtonGroup = (
  <ButtonGroup
    containerProps={{
      marginRank: 1,
    }}
    fontSizeRank={4}
    theme={"secondary"}
    buttonProps={{
      marginRank: 1,
      borderType: "thin",
      fontWeightType: "bold"
    }}
    buttonGroupProps={buttonGroupProps}
    />
)

/**
Can invert the theme too
*/
const example_themeInverted_ButtonGroup = (
  <ButtonGroup
    containerProps={{
      marginRank: 1,
    }}
    fontSizeRank={4}
    isInverted
    theme={"error"}
    buttonProps={{
      marginRank: 1,
      borderType: "thin",
      fontWeightType: "bold"
    }}
    buttonGroupProps={buttonGroupProps}
    />
)

/**
apply allowOverflow to make a scrollable group
*/
const example_scrollable_ButtonGroup = (
  <ButtonGroup
    allowOverflow
    containerProps={{
      marginRank: 1,
    }}
    fontSizeRank={4}
    color={"fuchsia"}
    backgroundColor={"white"}
    activeColor={"black"}
    activeBackgroundColor={"fuchsia"}
    buttonProps={{
      marginRank: 1,
      borderType: "thin",
      borderColor: "fuchsia",
      fontWeightType: "bold"
    }}
    buttonGroupProps={buttonGroupPropsLong}
    />
)

/**
apply isVertical to make the group stack vertically
*/
const example_basicVertical_ButtonGroup = (
  <ButtonGroup
    isVertical
    fontSizeRank={4}
    color={"grey"}
    backgroundColor={"white"}
    activeColor={"red"}
    activeBackgroundColor={"white"}
    buttonGroupProps={buttonGroupProps}
    />
)

/**
the same style flexibility is available when vertical
*/
const example_styledVertical_ButtonGroup = (
  <ButtonGroup
    isVertical
    containerProps={{
      marginRank: 1,
      radiusType: "small"
    }}
    borderType={"hairline"}
    borderColor={"navy"}
    fontSizeRank={4}
    color={"navy"}
    backgroundColor={"aqua"}
    activeColor={"white"}
    activeBackgroundColor={"navy"}
    buttonProps={{
      fontWeightType: "bold"
    }}
    buttonGroupProps={buttonGroupProps}
    />
)

/**
can also allowOverflow when verticle
*/
const example_scrollableVertical_ButtonGroup = (
  <Box style={{height: 200}}>
    <ButtonGroup
      isVertical
      allowOverflow
      containerProps={{
        marginRank: 1,
      }}
      fontSizeRank={4}
      color={"green"}
      backgroundColor={"white"}
      activeColor={"black"}
      activeBackgroundColor={"green"}
      buttonProps={{
        marginRank: 1,
        borderType: "thin",
        borderColor: "green",
        fontWeightType: "bold"
      }}
      buttonGroupProps={buttonGroupPropsLong}
      />
  </Box>
)

/**
  ButtonGroup makes it easy to make dropdown menus
*/
const example_dropdownMenu_ButtonGroup = (
  <ButtonGroup
    containerProps={{
      marginRank: 1,
      width: 200,
      radiusType: "small"
    }}
    isVertical
    borderType={"hairline"}
    borderColor={"grey"}
    fontSizeRank={4}
    color={"grey"}
    backgroundColor={"white"}
    buttonProps={{
      paddingVerticalRank: 1,
      insideViewProps: {
        style: {
          justifyContent: "flex-start"
        }
      }
    }}
    activeColor={"black"}
    activeBackgroundColor={"white"}
    buttonGroupProps={buttonGroupProps}
    />
)

/**___________________________________________________________________________*/
/**
  Managing the buttonGroupProps and which buttons isActive is your logic comp's
  responsibilty. But to help with a common scenario, there's a Tabs comp that
  facilitates distinct selection of the ButtonGroup, no need to specify
  isActive, though you can specify the defaultActiveIndex. It's just a
  ButtonGroup so you get all the same variability.
*/

const tabButtonGroupProps = [
  {
    text: "Sami",
    color: "fuchsia",
    onPress: (() => console.log("red!"))
  },
  {
    text: "Will",
    color: "navy",
    onPress: (() => console.log("blue!"))
  },
  {
    text: "Trish",
    color: "maroon",
    onPress: (() => console.log("blue!"))
  },
]

const tabComponents = [
  (<Box style={{height: 60,}} backgroundColor={"pink"} />),
  (<Box style={{height: 60,}} backgroundColor={"aqua"} />),
  (<Box style={{height: 60,}} backgroundColor={"gray"} />)
]

const example_Tabs = (
  <Tabs
    hasDivider
    fontSizeRank={4}
    color={"grey"}
    backgroundColor={"white"}
    activeColor={"red"}
    activeBackgroundColor={"white"}
    buttonGroupProps={tabButtonGroupProps}
    tabbedComponents={tabComponents}
    />
)


/**___________________________________________________________________________*/
/**
  Similar to Tabs, there's a Dropdown comp that wraps
  a ButtonGroup and displays just the active one.
  Dropdowns that trigger via a button outside the set are easy too,
  just set up a comp with this.state.showDropdown bool, tie to the
  trigger action, and, to make it overlay, add your containerProps
  style: {position: "absolute", zIndex: 1}.
  Just like Tabs, all the props are the same as ButtonGroup and the
  buttonProps are all TextButtons props. Hurray for composition!
*/

const dropDownButtonGroupProps = [
  {
    text: "Sami",
    color: "fuchsia",
    onPress: (() => console.log("red!"))
  },
  {
    text: "Will",
    color: "blue",
    onPress: (() => console.log("blue!"))
  },
  {
    text: "Trish",
    color: "purple",
    onPress: (() => console.log("blue!"))
  },
]


const example_Dropdown = (
  <Dropdown
    containerProps={{
      marginRank: 1,
      width: 200,
      radiusType: "small",
    }}
    isVertical
    borderType={"hairline"}
    borderColor={"grey"}
    fontSizeRank={4}
    color={"grey"}
    backgroundColor={"white"}
    buttonProps={{
      paddingVerticalRank: 1,
      insideViewProps: {
        style: {
          justifyContent: "flex-start"
        }
      }
    }}
    activeColor={"black"}
    activeBackgroundColor={"white"}
    buttonGroupProps={dropDownButtonGroupProps}
    />
)

/**___________________________________________________________________________*/

const example_ButtonGroup = {
  header:  "ButtonGroup, Dropdown, & Tabs",
  examples: (
    <Box>
      {example_justText_ButtonGroup}
      {example_containerProps1_ButtonGroup}
      {example_containerProps2_ButtonGroup}
      {example_buttonProps_ButtonGroup}
      {example_buttonGroupProps_ButtonGroup}
      {example_theme_ButtonGroup}
      {example_themeInverted_ButtonGroup}
      {example_scrollable_ButtonGroup}
      {example_styledVertical_ButtonGroup}
      {example_scrollableVertical_ButtonGroup}
      {example_Dropdown}
      {example_Tabs}

    </Box>
  )
}

/**___________________________________________________________________________*/

export default example_ButtonGroup
