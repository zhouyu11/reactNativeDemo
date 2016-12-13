import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import { MyScene } from '../../Pages/SceneTests/MyScene'

export class HelloView extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isWelcome: true }
    this._handlePress = this._handlePress.bind(this);
    this._navigate = this._navigate.bind(this);
  }

  render () {
    let welcomeMessage = this.state.isWelcome ? 'my beautiful' : 'ugly'
    return (
      <TouchableHighlight onPress={this._navigate}>
        <Text style={{backgroundColor: 'grey', padding: 10}}>
          Hello,
          {welcomeMessage}
          {this.props.userName}!
        </Text>
      </TouchableHighlight>
    )
  }

  _handlePress () {
    this.setState({ isWelcome: !this.state.isWelcome })
  }

  _navigate () {
    this.props.navigator.push({
      component: MyScene,
      passProps: {
        title: 'spiderMan'
      }
    })
  }
}

HelloView.propTypes = {
  userName: React.PropTypes.string,
  navigator: React.PropTypes.object
}

HelloView.defaultProps = {
  userName: 'name'
}

export default HelloView
