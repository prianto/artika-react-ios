import { StyleSheet } from 'react-native';

import { vars } from '../common.style';

const styles = StyleSheet.create({
  wrapper: {
    width: vars.windowWidth - (vars.gutter * 2),
    marginBottom: vars.gutter,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: vars.gutter / 4
    },
    shadowRadius: vars.gutter / 2,
    shadowOpacity: 0.1
  },
  wrapperLast: {
    marginBottom: 0
  },
  image: {
    width: vars.windowWidth - (vars.gutter),
    height: null,
    aspectRatio: 16 / 9,
    marginBottom: vars.gutter / 2
  },
  textWrapper: {
    padding: vars.gutter
  },
  title: {
    fontSize: vars.title.fontSize,
    lineHeight: vars.title.lineHeight,
    color: vars.text.color.dark,
    marginBottom: vars.gutter,
    fontWeight: 'bold'
  },
  meta: {
    fontSize: vars.meta.fontSize,
    marginBottom: vars.gutter,
    color: vars.text.color.dark
  },
  excerpt: {
    fontSize: vars.excerpt.fontSize,
    lineHeight: vars.excerpt.lineHeight,
    color: vars.text.color.dark
  }
});

export default styles;
