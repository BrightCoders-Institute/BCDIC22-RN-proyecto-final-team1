import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { COLORS } from "../themes/colors";
import { SignUpStyle } from "../themes/SignUpStyle";

const TextInputHandle = (props) => {
  const { label, placeholder } = props;
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
    />
  );
};

export default TextInputHandle;
