import { StyleSheet } from 'react-native';

import { vars, ss } from '../common.style';

const styles = StyleSheet.create({
  wrapper: {
    width: ss ? vars.singleContainerWidth : vars.halfContainerWidth,
    flex: ss ? null : 1,
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
    marginBottom: ss ? 0 : vars.gutter
  },
  image: {
    width: ss ? vars.singleContainerWidth : vars.halfContainerWidth,
    height: ss ? vars.singleContainerWidth * 9 / 16 : vars.halfContainerWidth * 9 / 16,
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
    lineHeight: vars.meta.lineHeight,
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
