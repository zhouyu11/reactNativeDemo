import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

import { MeauPage } from './js/Pages/Meau/MeauPage'

export default class rnTest extends Component {
  render () {
    return (
      <View style={styles.container}>
        <MeauPage />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

AppRegistry.registerComponent('rnTest', () => rnTest)
