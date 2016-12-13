import React from 'react'
import { Text, TouchableHighlight } from 'react-native'

export class HelloView extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isWelcome: true };
    this._handlePress = this._handlePress.bind(this);
  }

  render () {
    let welcomeMessage = this.state.isWelcome ? 'my beautiful' : 'ugly'
    return (
      <TouchableHighlight onPress={this._handlePress}>
        <Text style={{backgroundColor: 'grey', padding: 10}}>
          Hello, {welcomeMessage} {this.props.userName}!
        </Text>
      </TouchableHighlight>
    )
  }

  _handlePress () {
    this.setState({ isWelcome: !this.state.isWelcome });
  }
}

HelloView.propTypes = {
  userName: React.PropTypes.string
}

HelloView.defaultProps = {
  userName: 'name'
}

export default HelloView
