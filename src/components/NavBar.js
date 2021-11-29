import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../style';
import { setPageName } from '../actions/pageName';

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
    color: colors.gray,
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

const NavBar = () => {
  const dispatch = useDispatch();
  const pageName = useSelector((state) => state.page.name);

  const navigate = (key) => {
    Actions[key]();
    dispatch(setPageName(key));
  };

  return (
    <View style={styles.navbar}>
      <CarIcon
        height={30}
        width={30}
        style={
          pageName === 'odometerList'
            ? [styles.icon, { color: colors.salmon }]
            : styles.icon
        }
        onPress={() => navigate('odometerList')}
      />
      <AddIcon
        height={40}
        width={40}
        style={
          pageName === 'addOdometer'
            ? [styles.icon, { marginTop: -15, color: colors.salmon }]
            : [styles.icon, { marginTop: -15 }]
        }
        onPress={() => navigate('addOdometer')}
      />
      <ThreeDots
        height={30}
        width={30}
        style={
          pageName === 'readMe'
            ? [styles.icon, { color: colors.salmon }]
            : styles.icon
        }
        onPress={() => navigate('readMe')}
      />
      <View style={styles.absolute}>
        <View style={styles.circle} />
      </View>
    </View>
  );
};

export default NavBar;
