import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

export const colors = {
  yellow: '#F7C625',
  salmon: '#F48451',
  white: '#FFFFFF',
  gray: '#999999',
  darkGray: '#4D4B4B',
  black: '#000000',
  transparent: 'rgba(0,0,0,0.2)',
};

const titleStyle = {
  fontSize: 20,
  color: colors.white,
  textAlign: 'center',
  fontWeight: 'bold',
  padding: 15,
};

const buttonStyle = (backgroundColor, width) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  maxHeight: 40,
  width,
  backgroundColor,
  borderRadius: 25,
  margin: 15,
});

const buttonText = (textColor) => ({
  color: textColor,
  fontSize: 14,
  fontWeight: 'bold',
  textAlign: 'center',
  textTransform: 'uppercase',
});

export const Title = ({ title }) => <Text style={titleStyle}>{title}</Text>;

Title.propTypes = { title: PropTypes.string };
Title.defaultProps = { title: '' };

export const Button = ({
  title,
  backgroundColor,
  width,
  textColor,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={buttonStyle(backgroundColor, width)}
    activeOpacity={0.9}
  >
    <View>
      <Text style={buttonText(textColor)}>{title}</Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};
Button.defaultProps = {
  title: '',
  backgroundColor: colors.white,
  textColor: colors.salmon,
  width: '70%',
};
