import React, { Component } from 'react';
import { ScrollView, Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';
import List from '../components/List';

import Data from '../data';
import styles from './Search.style';

class Search extends Component
{
  constructor (props) {
    super (props);
    this.state = {
      preparedList: []
    };
  }

  componentWillMount () {
    const { navigate } = this.props.navigation;

    const preparedList = [];
    Data.articles.forEach(function (item, index, arr) {
      const firstLast = [
        (index == 0) ? 'first' : null,
        (index == arr.length - 1) ? 'last' : null
      ];
      preparedList.push(
        <List
          key={index}
          dataOnPress={() => navigate('Article')}
          dataTitle={item.title}
          dataAuthor={item.author}
          dataCategory={item.category}
          dataPublished={item.published}
          dataExcerpt={item.excerpt}
          dataFirst={(index == 0) ? true : false}
          dataLast={(index == arr.length - 1) ? true : false} />
      );
    });
    this.setState({preparedList: preparedList});
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons name={focused ? 'ios-search' : 'ios-search-outline'} size={26} style={{ color: tintColor }} />
    ),
    tabBarLabel: 'Search',
    header: null
  };

  render() {
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <ScrollView style={styles.scrollView}>
          <Header />
          <View style={[styles.wrapper, styles.searchBoxWrapper]}>
            <TextInput
              style={styles.searchBox}
              placeholder={'Type keywords and Go!'}
              keyboardType={'web-search'}
            />
          </View>
          <View style={styles.wrapper}>
            {this.state.preparedList}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Search;
