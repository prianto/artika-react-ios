import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';
import Slider from '../components/Slider';
import Card from '../components/Card';

import styles from './Welcome.style';
import Data from '../data';

class Welcome extends Component
{
  constructor (props) {
    super(props);
    this.state = {
      preparedCards: []
    }
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={26} style={{ color: tintColor }} />
    ),
    tabBarLabel: 'Home',
    header: null
  };

  componentWillMount () {
    const { navigate } = this.props.navigation;

    preparedCards = [];
    Data.articles.forEach(function (item, index, arr) {
      preparedCards.push(
        <Card
          dataImage={item.image}
          dataMeta={item.author + ', ' + item.category + ', '  + item.published}
          dataTitle={item.title}
          dataLast={index == (arr.length - 1) ? true : false}
          key={item.id}
          dataOnPress={() => navigate('Article')}>
          {item.excerpt}
        </Card>
      );
    });
    this.setState({preparedCards: preparedCards});
  }

  render() {
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <Header />
        <ScrollView style={styles.scrollView}>
          <Slider dataNavigation={this.props.navigation} />
          <View style={[styles.wrapper, styles.wrapperCards]}>
            {this.state.preparedCards}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Welcome;
