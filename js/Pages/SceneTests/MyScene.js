import React, { Component } from 'react'
import { View, Text } from 'react-native'

export class MyScene extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const {title} = this.props;
    return (
      <View>
        <Text>
          Hi! My name is {title}.
        </Text>
      </View>
    )
  }
}

MyScene.propTypes = {
  title: React.PropTypes.string
}

MyScene.defaultProps = {
  title: 'MyScene'
}

export default MyScene;
