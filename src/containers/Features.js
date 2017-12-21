import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';
import Card from '../components/Card';

import Data from '../data';
import styles from './Features.style';

class Features extends Component
{
  constructor (props) {
    super(props);
    this.state = {
      preparedCards: []
    }
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-star' : 'ios-star-outline'}
        size={26}
        style={{ color: tintColor }} />
    ),
    tabBarLabel: 'Features',
    header: null
  };

  componentWillMount () {
    const {navigate} = this.props.navigation;

    preparedCards = [];
    const dataArticles = Data.articles.reverse();
    dataArticles.forEach(function (item, index, arr) {
      preparedCards.push(
        <Card
          dataImage={item.image}
          dataMeta={item.author + ', ' + item.category + ', '  + item.published}
          dataTitle={item.title}
          dataLast={index == (arr.length - 1) ? true : false}
          key={item.id}
          dataOnPress={() => navigate('Article')}>{item.excerpt}</Card>
      );
    });
    this.setState({preparedCards: preparedCards});
  }

  render() {
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <ScrollView style={styles.scrollView}>
          <Header />
          <View style={[styles.wrapper, styles.wrapperCards]}>
            {this.state.preparedCards}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Features;
