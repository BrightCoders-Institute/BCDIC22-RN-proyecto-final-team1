import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { COLORS } from "../themes/colors";
import { SignUpStyle } from "../themes/SignUpStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TextInputPass = (props) => {
  const { error, label, placeholder, onChangeText, keylabel } = props;
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [icon, setIcon] = useState("eye");

  const visible = () => {
    setSecureTextEntry(!secureTextEntry);
    if (icon === "eye-off") {
      setIcon("eye");
    } else {
      setIcon("eye-off");
    }
  };

  return (
    <View>
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
        secureTextEntry={secureTextEntry}
      />
      <View style={SignUpStyle.containerIcon}>
        <TouchableOpacity onPress={visible}>
          <MaterialCommunityIcons name={icon} size={24} color={COLORS.WHITE} />
        </TouchableOpacity>
      </View>
      <Text style={{ color: COLORS.RED }}>{error}</Text>
    </View>
  );
};

export default TextInputPass;
