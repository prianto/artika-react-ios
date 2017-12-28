import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';
import styles from './More.style';

class Button extends Component
{
  render () {
    const {navigate} = this.props.dataNavigation;
    return (
      <TouchableOpacity onPress={() => navigate(this.props.dataScreen, {name: this.props.dataName})}>
        <View style={styles.menuItem}>
          <View style={styles.menuIconWrapper}>
            <Ionicons name={this.props.dataIcon} size={20} style={styles.menuIcon} />
          </View>
          <View style={[styles.nonIcon, this.props.dataLast]}>
            <Text style={styles.menuLabel}>{this.props.dataName}</Text>
            <View style={styles.rightArrowWrapper}>
              <Ionicons name={'ios-arrow-forward'} size={20} style={styles.rightArrow} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

class More extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons name={focused ? 'ios-more' : 'ios-more-outline'} size={26} style={{ color: tintColor }} />
    ),
    tabBarLabel: 'More',
    header: null
  };

  render() {
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <Header />
        <View style={styles.scrollView}>
          <View style={styles.buffer}></View>
          <View style={styles.moreWrapper}>
            <Button dataNavigation={this.props.navigation} dataScreen="Info" dataName="Privacy Policy" dataIcon="ios-lock" dataLast={null} />
            <Button dataNavigation={this.props.navigation} dataScreen="Info" dataName="About Us" dataIcon="ios-glasses" dataLast={null} />
            <Button dataNavigation={this.props.navigation} dataScreen="Contact" dataName="Contact Us" dataIcon="ios-mail" dataLast={styles.nonIconLast} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default More;
