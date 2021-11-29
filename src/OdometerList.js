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
  },
});

const OdometerList = () => (
  <LinearGradient
    colors={[colors.yellow, colors.salmon]}
    style={styles.container}
  >
    <Title title="Relevés kilométriques du véhicule" />
    <ScrollView>
      <OdometerCard />
    </ScrollView>
  </LinearGradient>
);

export default OdometerList;
