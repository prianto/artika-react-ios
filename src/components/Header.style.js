import { StyleSheet } from 'react-native';

import { vars } from '../common.style';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: vars.gutter,
    height: vars.logoSize + vars.gutter,
    backgroundColor: vars.dark
  },
  headerFixed: {
    position: 'absolute',
    top: vars.statusBarHeight,
    left: 0,
    right: 0,
    zIndex: 1,

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: vars.gutter / 4
    },
    shadowRadius: vars.gutter / 2,
    shadowOpacity: 0.5
  },
  headerColumn: {
  },

  headerColumnLeft: {
    width: '25%'
  },

  headerColumnCenter: {
    width: '50%',
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    width: vars.logoSize,
    height: vars.logoSize
  },
  textLogo: {
    fontWeight: vars.header.text.fontWeight,
    fontSize: vars.header.text.fontSize,
    color: 'white'
  },

  headerColumnRight: {
    width: '25%',
  },
  rightButton: {
    textAlign: 'right'
  }
});

export default styles;
