import { StyleSheet, View } from 'react-native'
import React from 'react'
import Title from '../component/Title'
import Message from '../component/Message'
import GameRules from '../../data/gameRules'
import TButton from '../component/TButton'


const Rules = ({navigation}) => {
  const NavigateToHome=() => navigation.navigate("Home")
  return (
    <View style={styles.rulesContainer}>
      <Title label={"Rules"} />
      <View>
        <Message  message={GameRules}/>
      </View>
      <View style={styles.buttonSection}>
        <TButton label={"Back"} onPress={NavigateToHome}/>
      </View>
    </View>
  )
}

export default Rules

const styles = StyleSheet.create({
  rulesContainer: {
    padding: 25,
  },
  buttonSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
})