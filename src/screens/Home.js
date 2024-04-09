import React from 'react'
import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import bg from "../datafiles/home.jpg";


const Home = ({navigation}) => {
  return (
   <View style={{flex:1}} >
    <ImageBackground style={styles.container} source={bg} > 
    <Pressable onPress={() => navigation.navigate("latquestion")} style={styles.btn}  >
  <Text style={styles.btnText} > လက်ထောက်ဗေဒင် </Text>
 </Pressable>

 <Pressable onPress={() => navigation.navigate("dream")} style={styles.btn}  >
  <Text style={styles.btnText} > အိမ်မက်အဟော </Text>
 </Pressable>
    </ImageBackground>
 
   </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#535d6cff",
        paddingTop:StatusBar.currentHeight,
        justifyContent:"center",
        alignItems:"center",
        gap:20
    },
    btn:{
      paddingVertical:10,
      width:200,
      borderRadius:12,
      borderWidth:1,
      borderColor:"#ffffff55",
      marginTop:10,
      paddingHorizontal:10
    },
    btnText:{
      color:"#fff",
      textAlign:"center",
      fontFamily:"sakar"
    }
})

export default Home