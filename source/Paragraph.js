import React from 'react'
import { TextBase, Box } from './collator'

/**___________________________________________________________________________*/

const Paragraph = ({
  isBlockParagraph,
  paddingVerticalRank = 2,
  isIndented = false,
  ...props
}) => {

  const indentation = isIndented ? "      " : ""

  const resultComp = (
    <Box
      paddingVerticalRank={isBlockParagraph ? paddingVerticalRank : 0}
      >
      <TextBase
        {...props}
        text={indentation + props.text}
        />
    </Box>
  )

  return resultComp
}

/**___________________________________________________________________________*/

export default Paragraph
