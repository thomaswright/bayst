import React from 'react'
import { TextInputHandler, TextInputBase, Box, TextButton  } from '../collator'

/**___________________________________________________________________________*/

const TextInputAndTwoButtonsPresentational1 = ({
  defaultValue,
  placeholder,
  onSubmit,
  onCancel,
  onChangeText,
  ...props
}) => {
  const resultComp = (
    <Box
      style={{
        flexDirection: 'row',
      }}
      marginRank={2}>
    <Box style={{flex: 0.3}} />
    <Box style={{flex: 1,}} >
      <Box
        marginRank={2}
        borderBottomType={"thin"}
        style={{flex: 1, flexDirection: 'row',}} >
        <TextInputBase
          marginRank={2}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onSubmit={onSubmit}
          />
      </Box>
      <Box
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
        <TextButton
          text={"Accept"}
          onPress={onSubmit}
          />
        <TextButton
          text={"Cancel"}
          onPress={onCancel}
          />
      </Box>
    </Box>
    <Box style={{flex: 0.3}} />
    </Box>
  )
  return resultComp
}

/**___________________________________________________________________________*/

const TextInputAndTwoButtonsPresentational2 = ({
  defaultValue,
  placeholder,
  onSubmit,
  onCancel,
  onChangeText,
  ...props
}) => {
  const resultComp = (
    <Box
      style={{
        flexDirection: 'row',
      }}
      marginRank={2}
      >
    <Box style={{flex: 0.3}} />
    <Box style={{flex: 1}} >
      <Box
        marginVerticalRank={2}
        radiusType={"circle"}
        backgroundColor={"aqua"}
        style={{flex: 1, flexDirection: 'row',}} >
        <TextInputBase
          marginRank={1}
          marginLeftRank={3}
          color={"blue"}
          onChangeText={onChangeText}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onSubmit={onSubmit}
          />
      </Box>
      <Box
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
        <TextButton
          text={"Accept"}
          fontWeightType={"bold"}
          backgroundColor={"blue"}
          color={"white"}
          elevationRank={2}
          radiusType={"small"}
          style={{flex: 1}}
          onPress={onSubmit}
          />
        <TextButton
          text={"Cancel"}
          style={{flex: 1}}
          onPress={onCancel}
          />

      </Box>
    </Box>
    <Box style={{flex: 0.3}} />
    </Box>
  )
  return resultComp
}

/**___________________________________________________________________________*/

const TextInputAndTwoButtonsPresentational3 = ({
  defaultValue,
  placeholder,
  onSubmit,
  onCancel,
  onChangeText,
  ...props
}) => {
  const resultComp = (
    <Box
      style={{
        flexDirection: 'row',
        alignItems: "stretch"
      }}
      marginRank={2}
      >
      <Box
        borderType={"thick"}
        borderColor={"red"}
        backgroundColor={"white"}
        style={{flex: 1, flexDirection: 'row', alignItems: "center"}} >
        <TextInputBase
          style={{alignSelf: "center"}}
          marginRank={1}
          color={"black"}
          onChangeText={onChangeText}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onSubmit={onSubmit}
          />
      </Box>
      <Box
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          flex: 1
        }}>
        <TextButton
          text={"Accept"}
          backgroundColor={"black"}
          color={"white"}
          fontWeightType={"bold"}
          style={{flex: 1}}
          onPress={onSubmit}
          />
        <TextButton
          text={"Cancel"}
          fontWeightType={"bold"}
          backgroundColor={"grey"}
          color={"white"}
          style={{flex: 1}}
          onPress={onCancel}
          />

      </Box>
    </Box>
  )
  return resultComp
}

/**___________________________________________________________________________*/

const TextInputAndTwoButtons1 = TextInputHandler(TextInputAndTwoButtonsPresentational1)
const TextInputAndTwoButtons2 = TextInputHandler(TextInputAndTwoButtonsPresentational2)
const TextInputAndTwoButtons3 = TextInputHandler(TextInputAndTwoButtonsPresentational3)

/**___________________________________________________________________________*/

const example_TextInputHandler = {
  header: "TextInputBase & TextInputHandler",
  examples: (
    <Box>
      <TextInputAndTwoButtons1
        placeholder={"Hey Good Looking"}
        onSubmit={(newText) => {console.log(newText)}}
        onCancel={() => {}}
        />
      <TextInputAndTwoButtons2
        placeholder={"Hey Good Looking"}
        onSubmit={(newText) => {console.log(newText)}}
        onCancel={() => {}}
        />
      <TextInputAndTwoButtons3
        placeholder={"Hey Good Looking"}
        onSubmit={(newText) => {console.log(newText)}}
        onCancel={() => {}}
        />
    </Box>
  )
}

/**___________________________________________________________________________*/

export default example_TextInputHandler
