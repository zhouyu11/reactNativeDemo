'use strict'

import React from 'react'
import { Text, TouchableHighlight, TextInput, View } from 'react-native'

export class LoginPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      password: ''
    }
  }
  render() {
    return (
      <View>
        <Text>Login</Text>
        <View>
          <Text>
            password:
          </Text>
          <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState({password: text})} value={this.state.password} />
        </View>
      </View>
    )
  }
}

export default LoginPage;
