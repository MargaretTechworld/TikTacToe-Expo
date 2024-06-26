import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Board = ({ values }) => {
    const renderItem = ({ item }) => (
        <View style={styles.itemStyles}>
        <Text style={styles.itemText}>{item}</Text>
        </View>
     
    );
  
    return (
    <View style={styles.boardContainer}>
      <FlatList
        data={values}
        renderItem={renderItem}
        numColumns={3}
      />
       </View>
    );
  };
  
  export default Board;

const styles = StyleSheet.create({
    boardContainer:{
        padding: 20,
        backgroundColor: "#F78C00",
        borderRadius: 5,
        marginTop:60,
        marginBottom:60,
        borderWidth: 2,
        borderColor: '#0B147C',
    },
    itemStyles:{
        borderWidth: 1.5,
        borderColor: '#0B147C',
        backgroundColor: "#238000",
        padding: 5,
        flex: 1,
    },
    itemText: {
        fontSize: 54,
        fontWeight: 700,
        textAlign: 'center',
        color: "#FDFF00"
      },

})