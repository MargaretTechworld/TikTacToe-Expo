import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const TButton = ({label, onPress}) => {
  return (
    <Pressable style={styles.gameButton} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  )
}

export default TButton

const styles = StyleSheet.create({
    gameButton: {
        backgroundColor: "blue",
        padding:10,
        paddingLeft: 30,
        paddingRight:30,
        borderRadius: 20,
    },
    buttonLabel: {
        color:"white",
        fontSize:20,
        fontWeight: "600"
    }
})