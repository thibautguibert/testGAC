import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, Title } from './style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});

const AddOdometer = () => (
  <LinearGradient
    colors={[colors.yellow, colors.salmon]}
    style={styles.container}
  >
    <Title title="Ajouter un relevé" />
    <Text>une LinearGradient pour ajouter un relevé kilométrique</Text>
  </LinearGradient>
);

export default AddOdometer;
