import { StyleSheet, Dimensions } from 'react-native';
import { Font } from 'expo';

const wind = Dimensions.get('window');

const vars = {
  light: '#EAE9EF',
  dark: '#495057',
  gutter: 12,
  windowWidth: wind.width,
  windowHeight: wind.height,

  header: {
    icon: {
      fontSize: 24
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  },

  text: {
    color: {
      dark: '#444',
      light: '#666'
    }
  },

  title: {
    fontSize: 18,
    lineHeight: 26
  },
  body: {
    fontSize: 18,
    lineHeight: 28
  },
  excerpt: {
    fontSize: 16,
    lineHeight: 24
  },
  meta: {
    fontSize: 11,
    lineHeight: 11
  },
  caption: {
    fontSize: 13,
    lineHeight: 20
  }
}

const global = {
  wrapper: {
    padding: vars.gutter,
    backgroundColor: vars.light
  },
  bodyText: {
    fontSize: vars.body.fontSize,
    lineHeight: vars.body.lineHeight,
    color: vars.text.color.dark
  },
  scrollView: {
    backgroundColor: vars.dark
  },
  headerLeftButton: {
    color: 'white',
    fontSize: vars.header.icon.fontSize
  }
};

export { global, vars };
