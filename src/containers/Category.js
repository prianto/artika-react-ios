import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';
import Card from '../components/Card';

import Data from '../data';
import styles from './Category.style';

class Category extends Component
{
  constructor (props) {
    super(props);
    this.state = {
      preparedCards: []
    }
  }

  static navigationOptions = {
    title: 'Category',
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
        <Header
          dataLeftButton={(
            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
              <Ionicons name={'ios-arrow-back'} style={styles.headerLeftButton} />
            </TouchableOpacity>
          )}
          dataCenterButton={this.props.navigation.state.params.name}
        />
        <ScrollView style={styles.scrollView}>
          <View style={[styles.wrapper, styles.wrapperCards]}>
            {this.state.preparedCards}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Category;
