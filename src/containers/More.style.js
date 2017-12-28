import { StyleSheet } from 'react-native';

import { vars, global } from '../common.style';

const styles = StyleSheet.create({
  ...global,
  buffer: {
    height: vars.gutter,
    backgroundColor: vars.light
  },
  moreWrapper: {
    backgroundColor: vars.light,
    borderTopColor: '#aaa',
    borderTopWidth: 0.5,
    borderBottomColor: '#aaa',
    borderBottomWidth: 0.5
  },
  menuItem: {
    paddingLeft: vars.gutter,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  menuIconWrapper: {
    backgroundColor: vars.dark,
    width: 26,
    height: 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
    menuIcon: {
      color: 'white'
    },
  nonIcon: {
    width: vars.windowWidth - (vars.gutter * 2 + 26),
    height: 30 + vars.gutter,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#aaa',
    borderBottomWidth: 0.5
  },
  nonIconLast: {
    borderBottomWidth: 0
  },
    menuLabel: {
      width: vars.windowWidth - (vars.gutter * 2 + 46),
      fontSize: vars.title.fontSize,
      color: vars.text.color.dark,
    },
    rightArrowWrapper: {
      width: 20,
    },
      rightArrow: {
        color: '#ccc'
      }
});

export default styles;
