import React from 'react'
import { HelloView } from '../../Components/HelloView/HelloView'
import { View, Text, StyleSheet, TextInput, ScrollView, ListView, TouchableHighlight } from 'react-native'

export class MeauPage extends React.Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      text: '',
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    }
  }

  render () {
    return (
      <View style={styles.backView}>
        <View>
          <Text style={styles.title}>
            React Test Project!
          </Text>
          <HelloView userName='super' />
          <TextInput style={{height: 40}} placeholder='here to translate!' onChangeText={(text) => this.setState({text})} />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>
        <View>
          <ListView dataSource={this.state.dataSource} renderRow={(rowData) => <Text>{rowData}</Text>} />
        </View>
        <ScrollView>
          <Text style={{fontSize: 50}}>
            Scroll me plz
          </Text>
          <Text style={{fontSize: 50}}>
            If you like
          </Text>
          <Text style={{fontSize: 50}}>
            Scrolling down
          </Text>
          <Text style={{fontSize: 50}}>
            What's the best
          </Text>
          <Text style={{fontSize: 50}}>
            Framework around?
          </Text>
          <Text style={{fontSize: 50}}>
            React Native
          </Text>
        </ScrollView>
      </View>
    )
  }
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
