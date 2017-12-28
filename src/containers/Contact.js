import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';

import styles from './Contact.style';

class Contact extends Component
{
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <SafeAreaView style={{flex: 1}} forceInset={{ horizontal: 'always', top: 'always' }}>
        <Header dataLeftButton={(
          <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
            <Ionicons name={'ios-arrow-back'} style={styles.headerLeftButton} />
          </TouchableOpacity>
        )}
        dataCenterButton='Contact Us' />
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder={'Your Name'}
                keyboardType={'name-phone-pad'} />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder={'Email'}
                keyboardType={'email-address'} />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder={'Phone'}
                keyboardType={'phone-pad'} />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder={'Subject'}
                keyboardType={'default'} />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, {height: 80}]}
                placeholder={'Message'}
                keyboardType={'default'}
                multiline={true} />
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => Alert.alert('Message Sent!', 'We\'ll reply you soon. Thank you.')}>
            <Text style={styles.footerButtonLabel}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Contact;
