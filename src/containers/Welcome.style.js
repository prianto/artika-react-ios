import { StyleSheet, Dimensions } from 'react-native';

import { vars, global } from '../common.style';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  ...global
});

export default styles;
