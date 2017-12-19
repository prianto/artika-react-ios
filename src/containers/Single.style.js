import { StyleSheet } from 'react-native';

import { vars, global } from '../common.style';

const tagsStyles = {
};

const classesStyles = {
  'caption': {
    fontSize: vars.caption.fontSize,
    lineHeight: vars.caption.lineHeight,
    color: vars.text.color.light,
    marginBottom: 0
  },
  'paragraph': {
    fontSize: vars.body.fontSize,
    lineHeight: vars.body.lineHeight,
    color: vars.text.color.dark,
    marginTop: 0,
    marginBottom: vars.gutter
  }
}

const styles = StyleSheet.create({
  ...global,
  title: {
    fontSize: vars.title.fontSize,
    lineHeight: vars.title.lineHeight,
    color: vars.text.color.dark,
    marginBottom: vars.gutter / 2,
    fontWeight: 'bold'
  },
  meta: {
    fontSize: vars.meta.fontSize,
    color: vars.text.color.light,
    marginBottom: vars.gutter / 2
  },
  buffer: {
    height: vars.gutter
  }
});

export {styles, tagsStyles, classesStyles};
