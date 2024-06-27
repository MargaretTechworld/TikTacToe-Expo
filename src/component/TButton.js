import { Text, Pressable } from "react-native";
import React from "react";
import { styles } from "../constants/styles";

const TButton = ({ label, onPress }) => {
  return (
    <Pressable style={styles.gameButton} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
};

export default TButton;
