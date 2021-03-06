import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { colors } from '../style';
import { dateFormatting, spaceThousands } from '../utils/formatting';
import { deleteMileage } from '../actions/mileageReadings';

import ModifyIcon from '../assets/modify.svg';
import DeleteIcon from '../assets/delete.svg';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: '100%',
    backgroundColor: colors.white,
    marginVertical: 15,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.8,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  date: {
    color: colors.yellow,
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  kilometers: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    marginLeft: 15,
    color: colors.darkGray,
  },
});

const OdometerCard = ({ kilometers, date, id, index }) => {
  const dispatch = useDispatch();
  const onDeletePress = () => {
    dispatch(deleteMileage(id));
  };

  return (
    <View style={styles.card}>
      <Text style={styles.date}>{`Relevé du ${dateFormatting(date)}`}</Text>
      <Text style={styles.kilometers}>{`${spaceThousands(kilometers)} km`}</Text>
      <View style={styles.iconsContainer}>
        <ModifyIcon height={20} width={20} style={styles.icon} onPress={() => Actions.push('modifyOdometer', { issuedOn: date, value: kilometers, id, index })} />
        <DeleteIcon height={20} width={20} style={styles.icon} onPress={onDeletePress} />
      </View>
    </View>
  );
};

OdometerCard.propTypes = {
  kilometers: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

OdometerCard.defaultProps = {
  kilometers: '0',
  date: '??? (erreur de date)',
};

export default OdometerCard;
