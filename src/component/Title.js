import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({label}) => {
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        backgroundColor: "#196400",
        padding: 18,
        borderRadius: 8,
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
        textAlign:"center"
    }
})