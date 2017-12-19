import { StyleSheet } from 'react-native';

import { vars, global } from '../common.style';

const styles = StyleSheet.create({
  ...global,
  wrapper: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#999',
    borderTopWidth: 0.5,
    borderTopColor: 'white',
    paddingBottom: vars.gutter,
    paddingTop: vars.gutter
  },
  wrapperFirst: {
    borderTopWidth: 0,
    marginTop: 0,
    paddingTop: 0
  },
  wrapperLast: {
    borderBottomWidth: 0,
    paddingBottom: 0,
    marginBottom: 0
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
    color: vars.text.color.light,
    marginBottom: vars.gutter
  },
  excerpt: {
    fontSize: vars.excerpt.fontSize,
    lineHeight: vars.excerpt.lineHeight,
    color: vars.text.color.dark
  }
});

export default styles;
