import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

import Data from '../data';
import styles from './Slider.style';

class Slide extends Component
{
  render () {
    return (
      <View style={styles.slide}>
        <Image
          source={{uri: this.props.dataImage}}
          resizeMode={'contain'}
          style={styles.image} />
        <TouchableOpacity onPress={this.props.dataOnPress}>
          <Text style={styles.text}>{this.props.dataTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Slider extends Component
{
  constructor (props) {
    super (props);
    this.state = {
      preparedSliders: []
    };
  }

  componentWillMount () {
    const {navigate} = this.props.dataNavigation;

    const preparedSliders = [];
    Data.slides.forEach( (item) => {
      preparedSliders.push(
        <Slide key={item.id}
          dataImage={item.image}
          dataOnPress={() => navigate('Article')}
          dataTitle={item.title} />
      );
    });
    this.setState({preparedSliders: preparedSliders});
  }

  render () {
    return (
      <Swiper style={styles.wrapper}
        showsPagination={false}
        showsButtons={true}
        prevButton={
          <Text style={styles.navigatorButton}>
            <Ionicons name={'ios-arrow-back'} size={26} />
          </Text>
        }
        nextButton={
          <Text style={styles.navigatorButton}>
            <Ionicons name={'ios-arrow-forward'} size={26} />
          </Text>
        }
      >
        {this.state.preparedSliders}
      </Swiper>
    );
  }
}

export default Slider;
