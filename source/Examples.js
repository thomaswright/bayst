import React, { Component } from 'react'
import { ScrollView, } from 'react-native'
import exampleTextBase from './examples/TextBase'
import exampleParagraph from './examples/Paragraph'
import exampleIcon from './examples/Icon'
import exampleTextButton from './examples/TextButton'
import exampleButtonGroup from './examples/ButtonGroup'
import exampleCheckbox from './examples/Checkbox'
import exampleListItem from './examples/ListItem'
import examplePanel from './examples/Panel'
import exampleTextInputHandler from './examples/TextInputHandler'
import exampleColorPicker from './examples/ColorPicker'

import { TextBase, Box, StatusBarAndSpacer } from './collator'

/**___________________________________________________________________________*/

const ExampleBlock = ({
  block
}) => {
  const resultComp = (
    <Box>
      <TextBase
        paddingRank={2}
        fontWeightType={"heavy"}
        backgroundColor={"blue"}
        color={"white"}
        fontSizeRank={2}
        text={block.header}
        />
      <Box >
        {block.examples}
      </Box>
    </Box>
  )
  return resultComp
}

/**___________________________________________________________________________*/

const ExamplesCollection = () => {
  const resultComp = (
    <ScrollView style={{flex: 1}}>
      <StatusBarAndSpacer light={false}/>
      <TextBase
        paddingRank={2}
        fontWeightType={"heavy"}
        fontSizeRank={1}
        text={"Examples"}
        />
      {
        [
          exampleTextButton,
          exampleIcon,
          exampleButtonGroup,
          exampleCheckbox,
          exampleListItem,
          examplePanel,
          exampleTextInputHandler,
          exampleColorPicker,
          exampleTextBase,
          exampleParagraph,
        ].map((e,i) => {
          return (
            <ExampleBlock
              key={i}
              block={e}
              />
          )
        })
      }
    </ScrollView>
  )
  return resultComp
}

/**___________________________________________________________________________*/

class Examples extends Component {
  static childContextTypes = {
    newBaseValues: React.PropTypes.object
  }
  getChildContext () {
    return {
      newBaseValues: {

      }
    }
  }
  render() {
    return (
      <ExamplesCollection style={{flex: 1}}/>
    )
  }
}

/**___________________________________________________________________________*/

export default Examples
