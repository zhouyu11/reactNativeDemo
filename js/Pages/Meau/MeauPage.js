import React from 'react'
import { HelloView } from '../../Components/HelloView/HelloView'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export class MeauPage extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.backView}>
        <Text style={styles.title}>
          React Test Project!
        </Text>
        <HelloView userName='super' navigator={this.props.navigator} />
      </View>
    )
  }
}

MeauPage.propTypes = {
  navigator: React.PropTypes.object
}

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontSize: 20
  },
  backView: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  inputText: {
    padding: 1,
    fontSize: 40
  }
})
