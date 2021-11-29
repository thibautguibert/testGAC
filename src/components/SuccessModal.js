import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { colors } from '../style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparent,
  },
  popUp: {
    flex: 1,
    maxHeight: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 15,
    width: '75%',
    backgroundColor: colors.white,
    padding: 30,
    borderRadius: 20,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.salmon,
    fontWeight: '700',
  },
  closeText: {
    fontSize: 12,
    color: colors.darkGray,
    fontWeight: '500',
  },
});

const SuccessModal = () => (
  <LinearGradient
    colors={[colors.yellow, colors.salmon]}
    style={styles.container}
  >
    <View style={styles.popUp}>
      <Text style={styles.infoText}>Le relevé kilométrique a bien été ajouté !</Text>
      <View>
        <TouchableOpacity onPress={Actions.pop}>
          <Text style={styles.closeText}>Revenir à la page précédente</Text>
        </TouchableOpacity>
      </View>
    </View>
  </LinearGradient>
);

export default SuccessModal;
