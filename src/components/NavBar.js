import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors } from '../style';

import AddIcon from '../assets/add.svg';
import CarIcon from '../assets/car.svg';
import ThreeDots from '../assets/threeDots.svg';

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
    color: colors.darkGray,
  },
  absolute: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    left: 0,
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
    <CarIcon height={30} width={30} style={[styles.icon, { color: colors.salmon }]} onPress={() => Actions.odometerList()} />
    <AddIcon height={40} width={40} style={[styles.icon, { marginTop: -15 }]} onPress={() => Actions.addOdometer()} />
    <ThreeDots height={30} width={30} style={styles.icon} onPress={() => Actions.readMe()} />
    <View style={styles.absolute}>
      <View style={styles.circle} />
    </View>
  </View>
);

export default NavBar;
