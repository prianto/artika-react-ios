import { StyleSheet } from 'react-native';

import { vars, global } from '../common.style';

const styles = StyleSheet.create({
  ...global,
  searchBoxWrapper: {
    paddingBottom: 0,
    backgroundColor: 'white'
  },
  searchBox: {
    borderColor: '#aaa',
    borderWidth: 0.5,
    backgroundColor: 'white',
    paddingLeft: vars.gutter / 2,
    paddingRight: vars.gutter / 2,
    height: vars.gutter * 3
  }
});

export default styles;
