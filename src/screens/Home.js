import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../component/Title";
import Board from "../component/Board";
import TButton from "../component/TButton";

const Home = ({ navigation }) => {
  const NavToCredit = () => navigation.navigate("Credit");
  const NavToRules = () => navigation.navigate("Rules");
  const Steps = ["0", "0", "X", "X", "0", " ", "X", " ", "0"];
  return (
    <View style={styles.homeContainer}>
      <View>
        <Title label={"Tik Tak Toe"} />
      </View>
      <View>
        <Board values={Steps} />
      </View>
      <View style={styles.buttonSection}>
        <TButton label="Rules" onPress={NavToRules} />
        <TButton label="Credit" onPress={NavToCredit} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    padding: 25,
  },
  buttonSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
