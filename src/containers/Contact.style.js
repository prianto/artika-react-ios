import { StyleSheet, StatusBar } from 'react-native';

import { vars, global } from '../common.style';

const styles = StyleSheet.create({
  ...global,
  footer: {
    height: 49,
    backgroundColor: '#F7F7F7',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 0.5,
    borderTopColor: '#aaa'
  },
  footerButton: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerButtonLabel: {
    fontSize: vars.title.fontSize,
    fontWeight: 'bold',
    color: '#555'
  },
  inputWrapper: {
    marginBottom: vars.gutter
  },
  input: {
    borderColor: '#aaa',
    borderWidth: 0.5,
    backgroundColor: 'white',
    paddingLeft: vars.gutter / 2,
    paddingRight: vars.gutter / 2,
    height: vars.gutter * 3
  }
});

export default styles;
