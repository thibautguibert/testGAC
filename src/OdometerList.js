import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OdometerCard from './components/OdometerCard';
import { colors, Title } from './style';
import initialMileage from './data/mileage_readings.json';

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
      {initialMileage.mileage_readings.map((mileage) => (
        <OdometerCard key={mileage.id} kilometers={mileage.value} date={mileage.issued_on} />
      ))}
    </ScrollView>
  </LinearGradient>
);

export default OdometerList;
