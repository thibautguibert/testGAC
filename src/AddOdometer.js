import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment-timezone';
import { colors, Title, Button } from './style';

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

const AddOdometer = () => {
  const [date, setDate] = useState(new Date());
  const [kilometers, setKilometers] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const handleChange = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowCalendar(false);
  };

  return (
    <LinearGradient
      colors={[colors.yellow, colors.salmon]}
      style={styles.container}
    >
      <Title title="Ajouter un relevé" />
      <Text style={styles.subTitle}>Date du relevé</Text>
      <View style={styles.column}>
        <Button onPress={() => setShowCalendar(true)} title="Choisissez une date" />
        {showCalendar && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            display="spinner"
            onChange={handleChange}
            maximumDate={new Date()}
          />
        )}
        <Text style={styles.text}>{`La date sélectionnée est le ${moment(date).format('Do MMMM YYYY')}`}</Text>
      </View>
      <Text style={styles.subTitle}>Relevé kilométrique</Text>
      <KeyboardAvoidingView style={[styles.column, { paddingBottom: 20 }]} behavior="padding">
        <TextInput
          onChangeText={setKilometers}
          value={kilometers}
          placeholder="0"
          style={styles.input}
          keyboardType="numeric"
        />
        <Text style={styles.text}>{kilometers ? `Le relevé kilométrique est de ${kilometers} km.` : 'Entrez le relevé ci-dessus'}</Text>
      </KeyboardAvoidingView>
      <Button title="Ajoutez le relevé" width="90%" onPress={() => {}} />
    </LinearGradient>
  );
};

export default AddOdometer;
