import React from 'react'
import { Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Home = ({navigation}) => {
  return (
   <View style={styles.container} >
 <Pressable onPress={() => navigation.navigate("dream")} style={{width:120,paddingVertical:10,backgroundColor:"gold"}}  >
  <Text> To Dream </Text>
 </Pressable>
   </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f2f2f2",
        paddingTop:StatusBar.currentHeight,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default Home