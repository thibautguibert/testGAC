import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment-timezone';
import { colors, Title, Button } from './style';
import { updateMileage } from './actions/mileageReadings';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  subTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '70%',
    backgroundColor: colors.white,
    color: colors.salmon,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 7,
    margin: 15,
    borderRadius: 25,
  },
});

const ModifyOdometer = ({ issuedOn, value, id, index }) => {
  const dispatch = useDispatch();
  const { mileageReadings } = useSelector((state) => state.mileageReadings);
  const nextMileageValue = (mileageReadings[index + 1] || {}).value || 10000000;
  const [kilometers, setKilometers] = useState(value);

  const submitUpdatedMileage = () => {
    const updatedMileAge = {
      id,
      issued_on: issuedOn,
      value: kilometers,
    };
    if (kilometers === '') {
      Actions.push('errorModal', { errorType: 'km0' });
    } else if (kilometers >= nextMileageValue) {
      Actions.push('errorModal', { errorType: 'kmPlus' });
    } else {
      dispatch(updateMileage(updatedMileAge, index));
      Actions.successModal();
    }
  };

  return (
    <LinearGradient
      colors={[colors.yellow, colors.salmon]}
      style={styles.container}
    >
      <Title title="Modifier le relevé" />
      <Text style={styles.subTitle}>Date du relevé</Text>
      <View style={styles.column}>
        <Text style={styles.text}>
          {`La date sélectionnée est le ${moment(issuedOn).format('Do MMMM YYYY')}. Pour modifier la date, veuillez plutôt supprimer le relevé`}
        </Text>
      </View>
      <Text style={styles.subTitle}>Relevé kilométrique</Text>
      <KeyboardAvoidingView
        style={[styles.column, { paddingBottom: 20 }]}
        behavior="padding"
      >
        <TextInput
          onChangeText={setKilometers}
          value={kilometers}
          placeholder="0"
          style={styles.input}
          keyboardType="numeric"
        />
        <Text style={styles.text}>
          {kilometers
            ? `Le relevé kilométrique est de ${kilometers} km.`
            : 'Entrez le relevé ci-dessus'}
        </Text>
      </KeyboardAvoidingView>
      <Button
        title="Modifiez le relevé"
        width="90%"
        onPress={submitUpdatedMileage}
      />
    </LinearGradient>
  );
};

ModifyOdometer.propTypes = {
  issuedOn: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default ModifyOdometer;
