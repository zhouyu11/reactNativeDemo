import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, Navigator} from "react-native";
import {MeauPage} from "./js/Pages/Meau/MeauPage";

export default class rnTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    };
    this.renderScene = this.renderScene.bind(this);

  }

  render() {
    return (
        <Navigator
            style={{flex: 1}}
            initialRoute={{ component: MeauPage }}
            renderScene={this.renderScene}/>
    )
  }

  renderScene(route, navigator) {
    if (route.component === MeauPage) {
      return <route.component navigator={navigator}
                              title='title' {...route.passProps} />;
    }

    return <route.component navigator={navigator} {...route.passProps}/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('rnTest', () => rnTest)
