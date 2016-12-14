import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

export class MyScene extends Component {
  constructor(props) {
    super(props)
    this._navigate = this._navigate.bind(this);
  }
  render() {
    const {title} = this.props
    return (
      <View>
        <Text>Hi! My name is {title}.</Text>
        <TouchableHighlight onPress={this._navigate}>
          <Text>hello</Text>
        </TouchableHighlight>
      </View>
    )
  }

  _navigate() {
    this.props.navigator.pop();
  }
}

MyScene.propTypes = {
  title: React.PropTypes.string,
  navigator: React.PropTypes.object
}

MyScene.defaultProps = {
  title: 'MyScene'
}

export default MyScene
