import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import HTML from 'react-native-render-html';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';

import Data from '../data';
import { vars } from '../common.style';
import {styles, tagsStyles, classesStyles} from './Single.style';

class SingleInfo extends Component
{
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <Header
          dataLeftButton={(
            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
              <Ionicons name={'ios-arrow-back'} style={styles.headerLeftButton} />
            </TouchableOpacity>
          )}
          dataCenterButton={this.props.navigation.state.params.name}
        />
        <ScrollView style={styles.scrollView}>
          <View style={[styles.wrapper, {backgroundColor: 'white'}]}>
            <HTML
              html={Data.info.content}
              classesStyles={classesStyles}
              tagsStyles={tagsStyles}
              imagesMaxWidth={Dimensions.get('window').width - (vars.gutter * 2)} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default SingleInfo;
