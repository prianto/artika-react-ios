import { StyleSheet } from 'react-native';

import { vars } from '../common.style';

const logoSize = 36;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: vars.gutter,
    height: logoSize + (vars.gutter),
    backgroundColor: vars.dark
  },
  headerColumn: {
  },

  headerColumnLeft: {
    width: '25%'
  },

  headerColumnCenter: {
    width: '50%',
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    width: logoSize,
    height: logoSize
  },
  textLogo: {
    fontWeight: vars.header.text.fontWeight,
    fontSize: vars.header.text.fontSize,
    color: 'white'
  },

  headerColumnRight: {
    width: '25%',
  },
  rightButton: {
    textAlign: 'right'
  }
});

export default styles;
