import { View } from "react-native";
import React from "react";
import Title from "../component/Title";
import Message from "../component/Message";
import GameRules from "../../data/gameRules";
import TButton from "../component/TButton";
import { styles } from "../constants/styles";

const Rules = ({ navigation }) => {
  const NavigateToHome = () => navigation.navigate("Home");
  return (
    <View style={styles.screenContainer}>
      <View style={styles.innerContainer}>
        <Title label={"Rules"} />
        <View>
          <Message message={GameRules} />
        </View>
        <View style={styles.buttonSection}>
          <TButton label={"Back"} onPress={NavigateToHome} />
        </View>
      </View>
    </View>
  );
};

export default Rules;
