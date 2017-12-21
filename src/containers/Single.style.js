import { StyleSheet } from 'react-native';

import { vars, global } from '../common.style';

const tagsStyles = {
};

const classesStyles = {
  'caption': {
    fontSize: vars.singleCaption.fontSize,
    lineHeight: vars.singleCaption.lineHeight,
    color: vars.text.color.light,
    marginBottom: 0
  },
  'paragraph': {
    fontSize: vars.singleBody.fontSize,
    lineHeight: vars.singleBody.lineHeight,
    color: vars.text.color.dark,
    marginTop: 0,
    marginBottom: vars.gutter
  }
}

const styles = StyleSheet.create({
  ...global,
  title: {
    fontSize: vars.singleTitle.fontSize,
    lineHeight: vars.singleTitle.lineHeight,
    color: vars.text.color.dark,
    marginBottom: vars.gutter / 2,
    fontWeight: 'bold'
  },
  meta: {
    fontSize: vars.singleMeta.fontSize,
    color: vars.text.color.light,
    marginBottom: vars.gutter / 2
  },
  buffer: {
    height: vars.gutter
  }
});

export {styles, tagsStyles, classesStyles};
