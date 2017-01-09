import React from "react";
import {View, Text, StyleSheet, TouchableHighlight} from "react-native";
import {SearchBook} from "../SearchBook/SearchBook";

const styles = StyleSheet.create({
  backView: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10
  },
  SearchBook: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#222',
    borderWidth: 1,
    borderRadius: 3
  }
});

export class MainMenu extends React.Component {
  constructor(props) {
    super(props)
    this.handlePress = this._handlePress.bind(this);
    this.navigate = this._navigate.bind(this);
  }

  render() {
    return (
        <View style={styles.backView}>
          <View style={{flex:0.5}}></View>
          <TouchableHighlight style={styles.SearchBook} activeOpacity={0.5} underlayColor="#ccc"
                              onPress={this.navigate}>
            <Text>Search Book</Text>
          </TouchableHighlight>
          <View style={{flex:15}}></View>
        </View>
    )
  };

  _handlePress = () => {
    console.log('hello world');
  };

  _navigate() {
    this.handlePress();
    this.props.navigator.push({
      component: SearchBook
    })
  }

}

MainMenu.propTypes = {
  navigator: React.PropTypes.object
};


