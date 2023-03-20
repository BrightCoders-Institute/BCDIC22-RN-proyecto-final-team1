import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { COLORS } from "../themes/colors";
import { SignUpStyle } from "../themes/SignUpStyle";

const TextInputHandle = ({
  label,
  placeholder,
  onChangeText,
  keylabel,
  value,
}) => {
  return (
    <TextInput
      mode="outlined"
      label={label}
      placeholder={placeholder}
      outlineColor={COLORS.LIGHT_BLUE}
      activeOutlineColor={COLORS.LIGHT_BLUE}
      style={SignUpStyle.input}
      textColor={COLORS.WHITE}
      placeholderTextColor={COLORS.WHITE}
      onChangeText={(text) => onChangeText(text, keylabel)}
      value={value}
    />
  );
};

export default TextInputHandle;
