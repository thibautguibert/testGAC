import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
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
    fontSize: 14,
    paddingVertical: 10,
  },
});

const ReadMe = () => (
  <LinearGradient
    colors={[colors.yellow, colors.salmon]}
    style={styles.container}
  >
    <Title title="En savoir plus" />
    <ScrollView>
      <Text style={styles.text}>Pour ajouter un relevé antérieur à un relevé déjà existant, il faut d'abord supprimer ce dernier.</Text>
    </ScrollView>
  </LinearGradient>
);

export default ReadMe;
