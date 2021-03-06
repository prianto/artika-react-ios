import { StyleSheet, Dimensions } from 'react-native';
import { Font } from 'expo';

const wind = Dimensions.get('window');

const gutter = 12;

const ss = (wind.width <= 320) ? true : false;

const vars = {
  light: '#EAE9EF',
  dark: '#495057',
  gutter: gutter,
  windowWidth: wind.width,
  windowHeight: wind.height,

  logoSize: 36,
  statusBarHeight: 20,

  singleContainerWidth: wind.width - (gutter * 2),
  halfContainerWidth: (wind.width - (gutter * 3)) / 2,

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

  singleTitle: {
    fontSize: 18,
    lineHeight: 26
  },
  singleBody: {
    fontSize: 18,
    lineHeight: 28
  },
  singleMeta: {
    fontSize: 11,
    lineHeight: 11
  },
  singleCaption: {
    fontSize: 13,
    lineHeight: 20
  },

  title: {
    fontSize: ss ? 18 : 16,
    lineHeight: ss ? 26 : 22
  },
  excerpt: {
    fontSize: ss ? 16 : 14,
    lineHeight: ss ? 24 : 22
  },
  meta: {
    fontSize: ss ? 11 : 10,
    lineHeight: ss ? 11 : 20
  }
}

const global = {
  wrapper: {
    padding: vars.gutter,
    backgroundColor: vars.light
  },
  wrapperCards: {
    flex: ss ? 0 : 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  bodyText: {
    fontSize: vars.singleBody.fontSize,
    lineHeight: vars.singleBody.lineHeight,
    color: vars.text.color.dark
  },
  scrollView: {
    // backgroundColor: vars.dark
    backgroundColor: vars.light
  },
  scrollViewFixed: {
    marginTop: vars.logoSize + vars.gutter
  },
  headerLeftButton: {
    color: 'white',
    fontSize: vars.header.icon.fontSize
  }
};

export { global, vars, ss };
