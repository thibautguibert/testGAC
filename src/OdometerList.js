import React from 'react';
import {
  ScrollView, Text, StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, Title } from './style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: colors.yellow,
  },
  text: {
    fontSize: 20,
  },
});

const OdometerList = () => (
  <LinearGradient colors={[colors.yellow, colors.salmon]} style={styles.container}>
    <Title title="Relevés kilométriques du véhicule" />
    <ScrollView>
      <Text style={styles.text}>une liste de kilomètres</Text>
    </ScrollView>
  </LinearGradient>
);

export default OdometerList;