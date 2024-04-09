import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, StatusBar, StyleSheet, Text, View , ActivityIndicator, TextInput, ImageBackground } from 'react-native';
import question from "../datafiles/LatHtaukQuestion.json";
import bg from "../datafiles/home.jpg"



const LatHtaukQuestion = ({navigation}) => {
    const [loading,setLoading] = useState(true);
    const [searchText,setSearchText] = useState("");
    const [questionData,setQuestionData] = useState(question.questions);


    const onPressQuestion = (obj) => {
        navigation.navigate("latnumber",obj);
    }

   

    const onSearchHandler = (text) => {
        
        const arr = question.questions.filter(item => item.questionName.includes(text));
        setQuestionData(arr);
    }


    useEffect(() => { 
        setTimeout(() => setLoading(false) , 300)
     } ,[])



    if(loading){
        return(
            <ImageBackground style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#535d6cff"}} source={bg} >
                <ActivityIndicator size={22} color={"#fff"} />
            </ImageBackground>
        )
    }

  return (
   <ImageBackground style={styles.container} source={bg} >
    <View style={styles.searchBar} >
     <TextInput style={styles.inputtext} placeholder='Type something' placeholderTextColor={"#ffffff88"} onChangeText={val => setSearchText(val)} />
     <Pressable style={styles.btn} onPress={() => onSearchHandler(searchText)} >
        <Text style={styles.btnText} > Search </Text>
     </Pressable>
    </View>

    <FlatList
    showsVerticalScrollIndicator={false}
    data={questionData}
    contentContainerStyle={{gap:10,paddingTop:30,paddingBottom:100}}
    renderItem={({item,index}) => {
        return(
            <Pressable key={item.questionName} onPress={() => onPressQuestion(item)} style={styles.card} >
                <Text style={styles.text} > {item.questionName} </Text>
            </Pressable>
        )
    }}
    />
   </ImageBackground>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#535d6cff",
        paddingHorizontal:5,
        paddingTop:StatusBar.currentHeight
    },
    card:{
      backgroundColor:"#535d6c77",
        borderWidth:1,
        borderRadius:4,
        borderColor:"#ffffff33",
        padding:5
    },
    text:{
        fontFamily:"sakar",
        paddingVertical:5,
        color:"#fff",
        fontSize:14,
        lineHeight:24
    },
    searchBar:{
        flexDirection:"row",
        justifyContent:"space-between",
        // backgroundColor:"gold",
        alignItems:"center",
        paddingVertical:5,
        gap:5
    },
    inputtext:{
        // backgroundColor:"red",
        flex:1,
        borderWidth:1,
        borderColor:"#ffffff44",
        borderRadius:6,
        paddingVertical:6,
        textAlign:"center",
        fontSize:16,
        color:"#fff"
    },
    btn:{
        paddingHorizontal:15,
        borderRadius:6,
        backgroundColor:"#333",
        borderWidth:2,
        borderColor:"#ffffff33"
    },
    btnText:{
        paddingVertical:8,
        fontSize:16,
        color:"#fff"
    }
})

export default LatHtaukQuestion