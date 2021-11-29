import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OdometerCard from './components/OdometerCard';
import { colors, Title } from './style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
    backgroundColor: colors.yellow,
    paddingBottom: 10,
  },
});

const OdometerList = () => (
  <LinearGradient
    colors={[colors.yellow, colors.salmon]}
    style={styles.container}
  >
    <Title title="Relevés kilométriques du véhicule" />
    <ScrollView>
      <OdometerCard kilometers="18 400" />
      <OdometerCard kilometers="22 700" />
      <OdometerCard kilometers="25 900" />
      <OdometerCard kilometers="25 900" />
    </ScrollView>
  </LinearGradient>
);

export default OdometerList;
