import { Text, View } from "react-native";
import React from "react";
import { styles } from "../constants/styles";

const Title = ({ label }) => {
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
    </View>
  );
};

export default Title;
