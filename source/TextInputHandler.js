import React, {Component} from 'react'

/**___________________________________________________________________________*/

const TextInputHandler = (PresentationalComp) => {
  class TextInputComp extends Component{
    constructor(props){
      super(props)
      this.state = {
        text: this.props.defaultValue
      }
      this.onChangeText = this.onChangeText.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }
    onChangeText(text){
      this.setState({text: text})
    }
    onSubmit() {
      this.props.onSubmit(this.state.text)
    }
    render(){
      return (
        <PresentationalComp
          {...this.props}
          {...this.state}
          value={this.state.text}
          onChangeText={this.onChangeText}
          onSubmit={this.onSubmit}
          />
      )
    }
  }
  return TextInputComp
}

/**___________________________________________________________________________*/

export default TextInputHandler
