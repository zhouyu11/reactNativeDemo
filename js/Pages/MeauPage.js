import React from 'react'
import { HelloView } from '../Components/HelloView'
import { View, Text } from 'react-native'

export class MeauPage extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View>
        <Text>
          React Test Project!
        </Text>
        <HelloView userName='super' />
      </View>
    )
  }
}
