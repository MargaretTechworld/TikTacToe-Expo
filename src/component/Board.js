import { FlatList, Text, View } from "react-native";
import React from "react";
import { styles } from "../constants/styles";

const Board = ({ values }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemStyles}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.boardContainer}>
      <FlatList data={values} renderItem={renderItem} numColumns={3} />
    </View>
  );
};

export default Board;
