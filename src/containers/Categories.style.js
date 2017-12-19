import { StyleSheet } from 'react-native';

import { vars, global } from '../common.style';

const styles = StyleSheet.create({
  ...global,
  wrapperCategories: {
    width: vars.windowWidth - (vars.gutter * 2),
    height: (vars.windowWidth - (vars.gutter * 2)) / 3,
    marginBottom: vars.gutter
  },
  wrapperCategoriesLast: {
    marginBottom: 0
  },
  bgImg: {
    width: vars.windowWidth - (vars.gutter * 2),
    height: (vars.windowWidth - (vars.gutter * 2)) / 3,
    marginBottom: vars.gutter,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: vars.gutter / 4
    },
    shadowRadius: vars.gutter / 2,
    shadowOpacity: 0.2,
    opacity: 0.75
  },
  banner: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bannerText: {
    color: 'white',
    fontSize: vars.title.fontSize,
    fontWeight: 'bold'
  }
});

export default styles;
