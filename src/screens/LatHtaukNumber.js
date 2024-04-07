import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import Nam from "../datafiles/LatHtaukList.json";


const { width , height } = Dimensions.get("window");
const cardWidth = (width -12)/7 ;

const myanToEng = {
    "၁":1,
    "၂":2,
    "၃":3,
    "၄":4,
    "၅":5,
    "၆":6,
    "၇":7,
    "၈":8,
    "၉":9,
    "၁၀":10
}


const LatHtaukNumber = ({route,navigation}) => {
    const [loading,setLoading] = useState(true);
    const {questionName,questionNo} = route.params
    

    console.log("Nama")

    const onPressHandler = (text) => {
        const answerId = myanToEng[text] ;
        navigation.replace("latanswer",{questionName,questionNo,answerId})

    }

    useEffect(() => { 
        setTimeout(() => setLoading(false) ,300)
     } ,[])


    if(loading){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#535d6cff"}} >
                <ActivityIndicator size={22} color={"#fff"} />
            </View>
        )
    }



  return (
    <View style={styles.container} >
        <View style={{paddingTop:15,paddingHorizontal:5}} >
            <Text style={{fontFamily:"sakar",color:"#fff",paddingVertical:10,textAlign:"center",fontSize:16,lineHeight:26}} > {questionName} </Text>
        </View>
       <FlatList 
       showsVerticalScrollIndicator={false}
       data={Nam.numberList}
       numColumns={7}
       contentContainerStyle={{gap:1,alignItems:"center"}}
       renderItem={({item,index}) => {
        return(
            <Pressable onPress={() => onPressHandler(item)} style={styles.card} >
                <Text style={{color:"#fff"}} > {item} </Text>
            </Pressable>
        )
       }}
       ListHeaderComponent={() => {
        return(
            <View style={styles.listHeader} >
                <Text style={styles.listHeaderText} > မျက်လုံးမှိတ်၍ ထောက်ပါ </Text>
            </View>
        )
       }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#535d6cff",
        justifyContent:"center",
        alignItems:"center",
        // paddingHorizontal:5,
        paddingTop:StatusBar.currentHeight
    },
    card:{
        width:cardWidth,
        height:cardWidth,
        backgroundColor:"#ffffff22",
        marginHorizontal:0.5,
        justifyContent:"center",
        alignItems:"center",
        // borderWidth:.5,
        // borderColor:"#ffffff",
        // borderRadius:4
    },
    listHeader:{
        width:width,
        // backgroundColor:"gold"
    },
    listHeaderText:{
        textAlign:"center",
        fontFamily:"tangu",
        fontSize:16,
        color:"gold",
        paddingVertical:10
    }
})

export default LatHtaukNumber