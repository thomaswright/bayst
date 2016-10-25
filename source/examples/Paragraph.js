import React from 'react'
import { Paragraph, Box } from '../collator'

/**___________________________________________________________________________*/
/**
  Paragraph wraps TextBase and adds the two props isBlockParagraph, which gives
  the text a default paddingVerticalRank of 2, and isIndented, which adds 6
  spaces to the front of the passed in text. Otherwise takes all the same
  props as TextBase.
*/

const paragraph1Text = `The earliest roots of the Cuban Mambo can be traced to the "Danzón de Nuevo Ritmo" (Danzón with a new rhythm) made popular by the orchestra "Arcaño y sus Maravillas" conducted by famous bandleader Antonio Arcaño.`
const paragraph2Text = `Antonio Arcaño was the first to denominate a section of the popular Cuban Danzón as a "Mambo." In 1910, José Urfé added a montuno (typical Son improvised closing section) as a final part of his El Bombín de Barretto. This was a swinging section consisting of a repeated musical phrase, which introduced some elements of the son into the Danzón. During the mid-to-late 1930s, some members of the Arcaño group were saying vamos a mambear (let's mambo), when referring to the Montuno or final improvisation of the Danzón. It was Arcaño's cellist, Orestes López, who created the first Danzón called "Mambo" (1938). In this piece, some syncopated motives, taken from the Son style, were combined with improvised flute passages.`
const paragraph3Text = `Mambo is a type of syncopated Montuno that possesses the rhythmic charm, informality and eloquence of the Cuban people. The pianist attacks the mambo, the flute picks it up and improvises, the violin executes rhythmic chords in double stops, the double bass inserts a "tumbao", the "timbalero" plays de cow-bell, the güiro scrapes and plays the "maracas" rhythm, the indispensable "tumba" (Conga drum) reaffirms the bass "tumbao" and strengthens the ‘timbal’.`

const example_Paragraph = {
  header: `Paragraph`,
  examples: (
    <Box paddingRank={2}>
      <Paragraph
        isBlockParagraph
        lineHeightType={"medium"}
        text={paragraph1Text}/>
      <Paragraph
        isBlockParagraph
        lineHeightType={"medium"}
        text={paragraph2Text}/>
      <Paragraph
        isBlockParagraph
        lineHeightType={"medium"}
        text={paragraph3Text}/>
      <Paragraph
        isIndented
        lineHeightType={"medium"}
        text={paragraph1Text}/>
      <Paragraph
        isIndented
        lineHeightType={"medium"}
        text={paragraph2Text}/>
      <Paragraph
        isIndented
        lineHeightType={"medium"}
        text={paragraph3Text}/>
    </Box>
  )
}

/**___________________________________________________________________________*/

export default example_Paragraph
