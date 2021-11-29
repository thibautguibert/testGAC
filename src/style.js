import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

export const colors = {
  yellow: '#F7C625',
  salmon: '#F48451',
  white: '#FFFFFF',
  gray: '#999999',
  darkGray: '#4D4B4B',
  black: '#000000',
};

const titleStyle = {
  fontSize: 20,
  color: colors.white,
  textAlign: 'center',
  fontWeight: 'bold',
  padding: 15,
  marginBottom: 20,
};

export const Title = ({ title }) => <Text style={titleStyle}>{title}</Text>;

Title.propTypes = { title: PropTypes.string };
Title.defaultProps = { title: '' };
