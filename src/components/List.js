import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './List.style';

class List extends Component
{
  render () {
    return (
      <TouchableOpacity onPress={this.props.dataOnPress}>
        <View style={[
            styles.wrapper,
            (this.props.dataFirst ? styles.wrapperFirst : null),
            (this.props.dataLast ? styles.wrapperLast : null)
          ]}>
          <Text style={styles.title}>
            {this.props.dataTitle}
          </Text>
          <Text style={styles.meta}>
            {this.props.dataAuthor.toUpperCase()},
            {this.props.dataCategory.toUpperCase()},
            {this.props.dataPublished.toUpperCase()}
          </Text>
          <Text style={styles.excerpt}>
            {this.props.dataExcerpt}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default List;
