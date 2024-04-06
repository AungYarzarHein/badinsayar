import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, Pressable, StatusBar, StyleSheet, Text, View , ActivityIndicator } from 'react-native'
import PagerView from 'react-native-pager-view';
import dreamHeader from "../datafiles/DreamHeader.json";
import DreamWithWord from '../screenComponents/DreamWithWord';


const { width , height } = Dimensions.get("window") ;

const Dream = ({navigation}) => {
  const ref = useRef(PagerView);
  const [loading,setLoading] = useState(true);
  const onSearchDreamBtn = () => ref.current.setPage(0);
  const onSearchDreamByLetter = () => ref.current.setPage(1) ;

  useEffect(() => {
    setTimeout(() => { setLoading(false) } ,200)
  },[])


  if(loading) {
    return(
        <View style={{flex:1,backgroundColor:"#fff",justifyContent:"center",alignItems:"center"}} >
            <ActivityIndicator size={22} color={"red"} />
        </View>
    )
   }



  return (
   <View style={styles.container} >
<PagerView initialPage={0} scrollEnabled={false} ref={ref} style={styles.pagerview}  >

 <View key={1} style={styles.page} >
<DreamWithWord />
 </View>

 <View key={2} style={styles.page} >
  <FlatList 
     showsVerticalScrollIndicator={false}
     numColumns={2}
     data={dreamHeader.BlogHeader} 
     contentContainerStyle={{paddingVertical:20,backgroundColor:"#f2f2f2",gap:5,paddingHorizontal:4}}
     renderItem={({item,index}) => {
      return(
        <Pressable key={index} onPress={() => navigation.navigate("dreamdetails",{text:item.BlogId})} style={styles.letterCard} > 
        <Text style={styles.cardTitle}  > {item.BlogTitle.slice(0,5)} </Text>
         <Text style={{textAlign:"center"}} > {item.BlogTitle.slice(5).split(" ").join("")} </Text>
        </Pressable>
      )
     } }

  />
 </View>
</PagerView>

<View style={styles.btnContainer} >
<Pressable style={styles.btn} onPress={onSearchDreamBtn} >
  <Text style={styles.btnText} > Helo </Text>
</Pressable>

<Pressable style={styles.btn} onPress={onSearchDreamByLetter} >
  <Text style={styles.btnText} > Helooo </Text>
</Pressable>
</View>
   </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f2f2f2",
        paddingTop:StatusBar.currentHeight
    },
    pagerview:{
      flex:1,
      // backgroundColor:"gold"
    },
    page:{
      flex:1,
      // backgroundColor:"green"
    },
    btnContainer:{
      padding:5,
      flexDirection:"row",
      backgroundColor:"#f9f9f9"
    },
    btn:{
      width: (width-15)/2,
      backgroundColor:"red",
      borderRadius:6,
      borderWidth:3,
      borderColor:"#ffffff55"
    },
    btnText:{
      paddingVertical:10,
      textAlign:"center",
      color:"#fff"
    },
    letterCard:{
      width:(width-18)/2 ,
      height:(width-15)/2,
      backgroundColor:"#fff",
      marginHorizontal:3,
      borderRadius:6,
      borderWidth:1,
      borderColor:"#33333311",
      justifyContent:"center",
      alignItems:"center",
      gap:5
    },
    cardTitle:{
      fontSize:36,
      color:"#333"

    }
})

export default Dream