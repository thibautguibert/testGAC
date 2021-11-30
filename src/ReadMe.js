import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { overwriteMileageReadings } from './actions/mileageReadings';
import { Button, colors, Title } from './style';
import mileageReadingsJson from './data/mileage_readings.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: colors.yellow,
  },
  text: {
    fontSize: 14,
    paddingVertical: 10,
  },
});

const ReadMe = () => {
  const dispatch = useDispatch();

  const reinitializeData = () => {
    AsyncStorage.setItem(
      'MILEAGE_READINGS',
      JSON.stringify(mileageReadingsJson),
    );
    dispatch(overwriteMileageReadings(JSON.stringify(mileageReadingsJson)));
  };

  return (
    <LinearGradient
      colors={[colors.yellow, colors.salmon]}
      style={styles.container}
    >
      <Title title="En savoir plus" />
      <Text style={styles.text}>
        Pour ajouter un relevé antérieur à un relevé déjà existant, il faut
        d’abord supprimer ce dernier.
      </Text>
      <Button title="Réinitialiser les données" onPress={reinitializeData} />
    </LinearGradient>
  );
};

export default ReadMe;
