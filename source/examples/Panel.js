import React from 'react'
import { Panel, TextBase, Box } from '../collator'

/**___________________________________________________________________________*/

const example_Panel = {
  header: "Panel",
  examples: (
    <Box>
      <Panel
        containerBoxProps={{marginRank: 3}}
        titleText={"Panel Title"}>
        <TextBase text={'TextBase component within panel body.'}/>
      </Panel>
      <Panel
        containerBoxProps={{marginRank: 3}}
        borderType={"thin"}
        titleText={"Panel Title"}>
        <TextBase text={'TextBase component within panel body.'}/>
      </Panel>
      <Panel
        containerBoxProps={{
          marginRank: 3,
          elevationRank: 2
        }}
        radiusType={"large"}
        borderType={"thick"}
        titleBackgroundColor={"red"}
        titleColor={"white"}
        titleTextProps={{
          fontWeightType: "heavy",
          fontSizeRank: 2,
        }}
        titleBoxProps={{
          style: {
            alignItems: "center",
          }
        }}
        borderColor={"red"}
        titleText={"PANEL TITLE"}>
        <TextBase text={'TextBase component within panel body.'}/>
      </Panel>
    </Box>
  )
}

export default example_Panel
