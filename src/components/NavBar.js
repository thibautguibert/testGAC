import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors } from '../style';

const styles = StyleSheet.create({
  navbar: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxHeight: 65,
    backgroundColor: colors.white,
  },
  icon: {
    zIndex: 1,
    position: 'relative',
    height: 35,
    width: 35,
  },
  absolute: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    left: 10,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: 90,
    width: 90,
    borderRadius: 50,
    backgroundColor: colors.white,
  },
});

const NavBar = () => (
  <View style={styles.navbar}>
    <Text style={styles.icon} onPress={() => Actions.odometerList()}>Car</Text>
    <Text style={styles.icon} onPress={() => Actions.addOdometer()}>Plus</Text>
    <Text>...</Text>
    <View style={styles.absolute}>
      <View style={styles.circle} />
    </View>
  </View>
);

export default NavBar;
