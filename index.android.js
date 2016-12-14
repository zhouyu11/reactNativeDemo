import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, Navigator} from "react-native";
import {LoginPage} from "./js/Pages/LoginPage/LoginPage";

export default class rnTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    };
    this.renderScene = this.renderScene.bind(this);
    this.handleChangeCurrentUser = this.handleChangeCurrentUser.bind(this);
  }

  render() {
    return (<Navigator
            style={{
        flex: 1
      }}
            initialRoute={{ component: LoginPage }}
            renderScene={this.renderScene}/>
    )
  }

  renderScene(route, navigator) {
    if (route.component === LoginPage) {
      return <route.component navigator={navigator} onHandleChangeCurrentUser={this.handleChangeCurrentUser}
                              title='title' {...route.passProps} />;
    }
    return <route.component navigator={navigator} {...route.passProps}/>;
  }

  handleChangeCurrentUser(user) {
    this.setState({currentUser: user});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('rnTest', () => rnTest)
