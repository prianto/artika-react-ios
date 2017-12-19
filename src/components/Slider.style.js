import { StyleSheet } from 'react-native';

import { vars } from '../common.style';

const styles = StyleSheet.create({
  wrapper: {
    height: vars.windowWidth * 9 / 16,
    backgroundColor: 'white'
  },
  slide: {
    display: 'flex'
  },
  image: {
    width: vars.windowWidth,
    height: null,
    aspectRatio: 16 / 9
  },
  text: {
    color: 'white',
    fontSize: vars.title.fontSize,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: vars.gutter,
    backgroundColor: 'rgba(0,0,0,0.25)',
    fontWeight: 'bold'
  },
  navigatorButton: {
    color: 'rgba(0,0,0,0.25)',
  }
});

export default styles;
