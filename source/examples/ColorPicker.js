import React, { Component, PropTypes, } from 'react'
import { ColorPicker } from '../collator'

/**___________________________________________________________________________*/

const example_ColorPicker = {
  header: "ColorPicker",
  examples:  (
    <ColorPicker
      defaultValue={"#a0a6e2"}
      onSubmit={(color) => console.log(color)}
      />
  )
}

/**___________________________________________________________________________*/

export default example_ColorPicker
