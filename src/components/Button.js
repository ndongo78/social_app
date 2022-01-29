import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from "./Dimensions"

const Buttons = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height:  windowHeight / 15,
    backgroundColor: '#6805F2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: '800',
    color: '#ffffff',
  },
});