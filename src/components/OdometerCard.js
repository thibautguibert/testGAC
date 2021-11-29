import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../style';
import { spaceThousands } from '../utils/formatting';

import ModifyIcon from '../assets/modify.svg';
import DeleteIcon from '../assets/delete.svg';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: '100%',
    backgroundColor: colors.white,
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

const OdometerCard = ({ kilometers }) => (
  <View style={styles.card}>
    <Text style={styles.date}>Relevé du 12 Novembre 2021</Text>
    <Text style={styles.kilometers}>{spaceThousands(kilometers)}</Text>
    <View style={styles.iconsContainer}>
      <ModifyIcon height={20} width={20} style={styles.icon} />
      <DeleteIcon height={20} width={20} style={styles.icon} />
    </View>
  </View>
);

OdometerCard.propTypes = {
  kilometers: PropTypes.string,
};

OdometerCard.defaultProps = {
  kilometers: '0',
};

export default OdometerCard;
