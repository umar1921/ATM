import { Keyboard, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import colors from "../config/Colors";

const CustomButton = ({ onPress, text, style, disabled }) => {

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={.8}
      onPress={onPress}
      style={[styles.container, style]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.primary,
    marginVertical: 10,
    width: '100%',
    height: 35
  },
  text: {
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10
  },
});
