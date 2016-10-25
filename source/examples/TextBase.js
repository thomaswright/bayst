import React from 'react'
import { TextBase, Paragraph, Box } from '../collator'

const exampleText = "Merengue"
const paragraphText = `Merengue (/məˈrɛŋɡeɪ/, Spanish: [meˈɾeŋɡe]) is a style of Dominican music and dance. Partners hold each other in a closed position. The leader holds the follower's waist with the leader's right hand, while holding the follower's right hand with the leader's left hand at the follower's eye level. Partners bend their knees slightly left and right, thus making the hips move left and right. The hips of the leader and follower move in the same direction throughout the song. Partners may walk sideways or circle each other, in small steps. They can switch to an open position and do separate turns without letting go each other's hands or releasing one hand. During these turns they may twist and tie their handhold into intricate pretzels. Other choreographies are possible.`


/**___________________________________________________________________________*/

/**
  Font props are pretty straight forward.

  fontSizeRank or fs: 0,1,2,3,4,5,6
  fontWeightType or fw: "light", "regular", "bold", "heavy"
  lineHeightType or lh: "equal", "small", "medium", "large"

  color, backgroundColor, paddingRank, marginRank, borderType also apply
*/


const example_TextBase = {
  header: `TextBase`,
  examples: (
    <Box>
      <Box paddingRank={2}>
        <TextBase
          fontSizeRank={0}
          text={exampleText}/>
        <TextBase
          fontSizeRank={1}
          text={exampleText}/>
        <TextBase
          fontSizeRank={2}
          text={exampleText}/>
        <TextBase
          fontSizeRank={3}
          text={exampleText}/>
        <TextBase
          fontSizeRank={4}
          text={exampleText}/>
        <TextBase
          fontSizeRank={5}
          text={exampleText}/>
        <TextBase
          fontSizeRank={6}
          text={exampleText}/>
      </Box>

      <Box paddingRank={2}>
        <TextBase
          fontSizeRank={2}
          fontWeightType={"light"}
          text={exampleText}/>
        <TextBase
          fontSizeRank={2}
          fontWeightType={"regular"}
          text={exampleText}/>
        <TextBase
          fontSizeRank={2}
          fontWeightType={"bold"}
          text={exampleText}/>
        <TextBase
          fontSizeRank={2}
          fontWeightType={"heavy"}
          text={exampleText}/>
      </Box>

      <Box paddingRank={2}>
        <TextBase
          paddingVerticalRank={2}
          lineHeightType={"equal"}
          text={paragraphText}/>
        <TextBase
          paddingVerticalRank={2}
          lineHeightType={"small"}
          text={paragraphText}/>
        <TextBase
          paddingVerticalRank={2}
          lineHeightType={"medium"}
          text={paragraphText}/>
        <TextBase
          paddingVerticalRank={2}
          lineHeightType={"large"}
          text={paragraphText}/>
      </Box>
    </Box>
  )
}

/**___________________________________________________________________________*/

export default example_TextBase
