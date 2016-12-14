'use strict';

import React from 'react';
import {Text, TouchableHighlight, TextInput, View, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import HttpUtils from '../../Utils/HttpUtils';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: ''
    };

    this._handlePress = this
      ._handlePress
      .bind(this);
    this._handleLogIn = this._handleLogIn.bind(this);
  }
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.content}>
          <Text>password:</Text>
          <TextInput
            style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}/>
          <Button
            style={{
            fontSize: 20,
            color: 'green'
          }}
            styleDisabled={{
            color: 'red'
          }}
            onPress={() => this._handleLogIn()}>
            Log In!
          </Button>
        </View>
      </View>
    )
  }

  _handlePress() {
    this.setState({password: 'log in'});
  }

  _handleLogIn() {
    let httpUtils = new HttpUtils();
    httpUtils
      .init()
      .setUrl('/api/v1/auth')
      .setMethod('POST')
      .setReturnType('json')
      .setParams({
        type: 'TEMPORARY', username: 'pda', password: '912931'
        //912931
      })
      .dofetch()
      .then((data) => {
        this.setState({password: 'ok'});
      })
      .catch((err) => {
        console.log(err);
        this.setState({password: 'err'})
      });
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  title: {
    flex: 1,
    alignSelf: 'center'
  },
  content: {
    flex: 10
  }
})

export default LoginPage;
