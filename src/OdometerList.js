import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OdometerCard from './components/OdometerCard';
import { colors, Title } from './style';
import initialMileage from './data/mileage_readings.json';
import { overwriteMileageReadings } from './actions/mileageReadings';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
    backgroundColor: colors.yellow,
    paddingBottom: 10,
  },
});

async function getItem(key) {
  const value = await AsyncStorage.getItem(key);
  return value;
}

const OdometerList = () => {
  const dispatch = useDispatch();
  const { mileageReadings, overwrittenOnLaunch } = useSelector((state) => state.mileageReadings);

  useEffect(() => {
    if (!overwrittenOnLaunch) {
      getItem('MILEAGE_READINGS').then((result) => dispatch(overwriteMileageReadings(result)));
    }
  }, []);

  return (
    <LinearGradient
      colors={[colors.yellow, colors.salmon]}
      style={styles.container}
    >
      <Title title="Relevés kilométriques du véhicule" />
      <ScrollView>
        {(mileageReadings || initialMileage.mileage_readings).map((mileage) => (
          <OdometerCard key={mileage.id} kilometers={mileage.value} date={mileage.issued_on} />
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default OdometerList;
