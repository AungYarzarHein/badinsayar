import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import data from "../datafiles/MinTheinKha.LatHtaukBayDin.json";




const LatHtaukAnswer = ({route,navigation}) => {
    const { questionName,questionNo,answerId} = route.params;
    const answer = data.answers.filter(item => item.questionNo == questionNo && item.answerNo == answerId) ;
    
    
  return (
    <View style={styles.container} >
        <Text style={{color:"gold",paddingVertical:10,fontSize:18,marginTop:50,fontFamily:"sakar"}} > မေးမြန်းထားသောအကြောင်းအရာ </Text>
       <Text style={styles.question} > {questionName} </Text>
       <Text style={{color:"gold",paddingVertical:10,fontSize:18,marginTop:50,fontFamily:"sakar"}} > ဟောပြောချက် </Text>
       <Text style={styles.question} > {answer[0].answerResult} </Text>
    
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#535d6cff",
        // justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:10,
        paddingTop:StatusBar.currentHeight
    },
    question:{
        fontFamily:"sakar",
        fontSize:14,
        color:"#fff",
        lineHeight:26,
        textAlign:"center"
    }
})

export default LatHtaukAnswer