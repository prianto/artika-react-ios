import React, { Component } from 'react';
import { ScrollView, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView, Alert } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';
import styles from './Categories.style';

class Banner extends Component {
  render () {
    const { navigate } = this.props.dataNavigation;

    return (
      <TouchableOpacity
        style={[
          styles.wrapperCategories,
          (typeof this.props.dataLast !== 'undefined') ? styles.wrapperCategoriesLast : null
        ]}
        onPress={() => navigate('Category', {name: this.props.dataTxt})}>
        <ImageBackground source={{uri: this.props.dataImg}} style={styles.bgImg}>
          <View style={styles.banner}>
            <Text style={styles.bannerText}>{this.props.dataTxt}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

class Categories extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons name={focused ? 'ios-albums' : 'ios-albums-outline'} size={26} style={{ color: tintColor }} />
    ),
    tabBarLabel: 'Categories',
    header: null
  };

  render() {
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <Header />
        <ScrollView style={styles.scrollView}>
          <View style={styles.wrapper}>
            <Banner dataNavigation={this.props.navigation} dataImg={'https://picsum.photos/900/300?image=980'} dataTxt={'Nature'} />
            <Banner dataNavigation={this.props.navigation} dataImg={'https://picsum.photos/900/300?image=904'} dataTxt={'Culture'} />
            <Banner dataNavigation={this.props.navigation} dataImg={'https://picsum.photos/900/300?image=686'} dataTxt={'Social'} />
            <Banner dataNavigation={this.props.navigation} dataImg={'https://picsum.photos/900/300?image=531'} dataTxt={'Technology'} />
            <Banner dataNavigation={this.props.navigation} dataImg={'https://picsum.photos/900/300?image=625'} dataTxt={'Living'} dataLast />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Categories;
