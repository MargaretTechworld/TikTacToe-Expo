import { Text, View, ScrollView } from "react-native";
import React from "react";
import { styles } from "../constants/styles";

const Message = ({ message }) => {
  return (
    <View style={styles.messageContainer}>
      <ScrollView style={styles.messageTextContainer}>
        <Text style={styles.messageText}>{message}</Text>
      </ScrollView>
    </View>
  );
};

export default Message;