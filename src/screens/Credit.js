import { View } from "react-native";
import React from "react";
import Title from "../component/Title";
import Message from "../component/Message";
import GameCredits from "../../data/gameCredits";
import TButton from "../component/TButton";
import { styles } from "../constants/styles";

const Credit = ({ navigation }) => {
  const NavigateToHome = () => navigation.navigate("Home");

  return (
    <View style={styles.screenContainer}>
      <View style={styles.innerContainer}>
        <Title label={"Credit"} />
        <View>
          <Message message={GameCredits} />
        </View>
        <View style={styles.buttonSection}>
          <TButton label={"Back"} onPress={NavigateToHome} />
        </View>
      </View>
    </View>
  );
};

export default Credit;
