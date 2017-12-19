import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

import styles from './Card.style';

class Card extends Component
{
  render () {
    return (
      <TouchableOpacity onPress={this.props.dataOnPress}>
        <View style={[
            styles.wrapper,
            (this.props.dataLast == true ? styles.wrapperLast : null)
          ]}>
          <ImageBackground
            source={require('../assets/img/dummy.png')}
            style={styles.image}>
            <Image
              source={{uri: this.props.dataImage}}
              resizeMode={'contain'}
              style={styles.image} />
          </ImageBackground>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>{this.props.dataTitle}</Text>
            <Text style={styles.meta}>{this.props.dataMeta.toUpperCase()}</Text>
            <Text style={styles.excerpt}>{this.props.children}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Card;
