import React from "react";
import {View, TextInput, StyleSheet, TouchableHighlight, Text} from "react-native";

const styles = StyleSheet.create({
  backView: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  searchBar: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 10,
    flexDirection: 'row',
  },
  searchInput: {
    flex: 4,
    justifyContent: 'center',
  },
  searchButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchResult: {
    flex: 10
  }
});

export class SearchBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchInput: ''};
    this.handleChangeText = this._handleChangeText.bind(this);
  }

  render() {
    return (
        <View style={styles.backView}>
          <View style={styles.searchBar}>
            <TextInput
                style={styles.searchInput}
                value={this.state.searchInput}
                onChangeText={this.handleChangeText}
                placeholder="please input book name"
                autoFocus="true"
            >
            </TextInput>
            <TouchableHighlight style={styles.searchButton} activeOpacity={0.5} underlayColor="#ccc"><Text>Search</Text></TouchableHighlight>
          </View>
          <View style={styles.searchResult}>

          </View>
        </View>
    )
  }

  _handleChangeText = (text) => {
    this.setState({searchInput: text});
  };

  _handleSearch = () => {

  };
}
