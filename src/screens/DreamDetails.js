import React, { useEffect, useState } from 'react'
import { FlatList, StatusBar, StyleSheet, View , ActivityIndicator, Text } from 'react-native';
import data from "../datafiles/DreamDictionary.json";


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
            <View style={{flex:1,backgroundColor:"#535d6cff",justifyContent:"center",alignItems:"center"}} >
            <ActivityIndicator size={22} color={"#fff"} />
            </View>
        )
     }


  return (
    <View style={styles.container} >
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
    </View>
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
       backgroundColor:"#ffffff22",
       paddingVertical:10,
       paddingHorizontal:5,
       marginTop:5,
       borderRadius:4,
       flexDirection:"row"
    },
    text:{
        // flex:1,
        color:"#fff",
        fontSize:16,
        fontFamily:"sakar",
        lineHeight:24,
        textAlign:"justify"
        // backgroundColor:"gold"
    }
})

export default DreamDetails