import React, { Component } from 'react';
import { Platform } from 'react-native';

import Main from './src/Main';

const majorVersionIOS = parseInt(Platform.Version, 10);

class App extends Component {
  render () {
    if (Platform.OS == 'ios' && majorVersionIOS > 9) {
      return (
          <Main />
      );
    } else {
      return null;
    }
  }
}

export default App;
