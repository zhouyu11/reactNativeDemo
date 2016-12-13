import React, { Component } from 'react';
import { Navigator, Text, View } from 'react-native';

import MyScene from './SceneTests/MyScene';
import MeauPage from './Meau/MeauPage';

export class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene />
        }
      />
    )
  }
}
