import React from 'react'
import { Image } from 'react-native'
import Base from './Base'
import { Button } from './collator'

/**___________________________________________________________________________*/

const ImageBase = ({
  fontSizeRank = 3,
  size,
  ...props
}) => {
  const appliedSize = size ?
    { style: { height: size, width: size } } :
    { heightByFontSizeRank: fontSizeRank, widthByFontSizeRank: fontSizeRank }

  const imageBaseProps = {
    componentTag: Image,
    ...appliedSize,
    ...props,
  }

  const resultComp = (
    <Base {...imageBaseProps}/>
  )
  return resultComp
}

/**___________________________________________________________________________*/

export default ImageBase
