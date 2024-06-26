import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Message = ({message}) => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
    messageContainer: {
        backgroundColor: "#333333",
        marginTop: 25,
        marginBottom:25,
        borderRadius:8,
        padding: 8,
        borderWidth: 2,
        borderColor: '#0B147C',

      },
    messageText: {
        color: "#ffff"
    },
})