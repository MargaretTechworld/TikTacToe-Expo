import { StyleSheet, Text, View } from 'react-native'
import Title from '../component/Title'
import Message from '../component/Message'
import GameCredits from '../../data/gameCredits'
import TButton from '../component/TButton'
import React from 'react'

const Credit = ({navigation}) => {
  const NavigateToHome=() => navigation.navigate("Home")
 
  return (
    <View style={styles.creditContainer}>
      <Title label={"Credit"} />
      <View>
        <Message  message={GameCredits}/>
      </View>
      <View style={styles.buttonSection}>
        <TButton label={"Back"} onPress={NavigateToHome}/>
      </View>
    </View>
  )
}

export default Credit

const styles = StyleSheet.create({
  creditContainer: {
    padding: 25,
  },
  buttonSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
})