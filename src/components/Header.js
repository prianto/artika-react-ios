import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import styles from './Header.style';

class Header extends Component {
  render () {
    return (
      <View style={styles.header}>
        <View style={[styles.headerColumn, styles.headerColumnLeft]}>
          {this.props.dataLeftButton}
        </View>
        <View style={[styles.headerColumn, styles.headerColumnCenter]}>
          {
            (typeof this.props.dataCenterButton === 'undefined')
              ? <Image source={require('../assets/img/logo.png')} style={styles.logo} />
              : <Text style={styles.textLogo}>{this.props.dataCenterButton}</Text>
          }
        </View>
        <View style={[styles.headerColumn, styles.headerColumnRight]}>
          {this.props.dataRightButton}
        </View>
      </View>
    );
  }
}

export default Header;
