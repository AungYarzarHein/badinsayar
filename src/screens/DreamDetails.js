import React, { useEffect, useState } from 'react'
import { FlatList, StatusBar, StyleSheet, View , ActivityIndicator, Text, ImageBackground } from 'react-native';
import data from "../datafiles/DreamDictionary.json";
import dreamBg from "../datafiles/dream.png";



const DreamDetails = ({route,navigation}) => {
    const [dream,setDream] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(() => { 
    const text = route.params.text ;
    const arr = data.BlogDetail.filter(item => item.BlogId == text) ;
    setDream(arr);
    setTimeout(() => { setLoading(false) } ,500)

     } ,[])

     if(loading){
        return(
            <ImageBackground style={{flex:1,backgroundColor:"#535d6cff",justifyContent:"center",alignItems:"center"}} source={dreamBg} >
            <ActivityIndicator size={22} color={"#fff"} />
            </ImageBackground>
        )
     }


  return (
    <ImageBackground style={styles.container} source={dreamBg} >
    <FlatList 
    showsVerticalScrollIndicator={false}
    data={dream}
    renderItem={({item,index}) => {
           return(
            <View key={index} style={styles.card} >
                {/* <Text style={{color:"#fff"}} > ({index+1}) </Text> */}
                <Text style={styles.text} >   {item.BlogContent} </Text>
            </View>    
           )
    }}
    contentContainerStyle={{gap:5,paddingHorizontal:5,paddingVertical:50}}
    />
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#535d6cff",
        paddingTop:StatusBar.currentHeight,
        // paddingHorizontal:5
    },
    card:{
       backgroundColor:"#33333366",
       paddingVertical:10,
       paddingHorizontal:5,
       marginTop:3,
       borderRadius:4,
       flexDirection:"row",
       borderWidth:1,
       borderColor:"#ffffff33"
    },
    text:{
        // flex:1,
        color:"#fff",
        // fontSize:16,
        fontFamily:"sakar",
        lineHeight:26,
        textAlign:"justify"
        // backgroundColor:"gold"
    }
})

export default DreamDetails