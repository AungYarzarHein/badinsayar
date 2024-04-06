import React, { useEffect, useState  } from 'react'
import { ActivityIndicator, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import dreamData from "../datafiles/DreamDictionary.json";


const DreamWithWord = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState("") ;
    const [text,setText] = useState(null)

 
  useEffect(() => { 
     setTimeout(() => { 
        // setLoading(false);
        setMessage("Please enter a word")
      } ,300)
   } ,[])


   const searchData =  (text) => {
    console.log("preaa")
    if(!text){
     setData([]);
     setMessage("You do not enter any word");
     return ;
    }
    setLoading(true);
    const arr =  dreamData.BlogDetail.filter(item => item.BlogContent.includes(text));
    setData(arr);
    setTimeout(() => setLoading(false) ,500)
    
   }


  

  

  return (
    <View style={styles.container} >
      <View style={styles.btnContainer} >
       <TextInput style={styles.textinput} onChangeText={(val) => setText(val)} />
       <Pressable style={styles.btn} onPress={() => searchData(text)} >
        <Text style={{textAlign:"center",color:"#333"}} > Search </Text>
       </Pressable>
      </View>

      {
        loading ? ( <View style={{flex:1,backgroundColor:"#fff",justifyContent:"center",alignItems:"center"}} >
        <ActivityIndicator size={22} color={"red"} />
    </View>) : <View showsVerticalScrollIndicator={false} >
        {
            data.length > 0 ?   (<FlatList 
              showsVerticalScrollIndicator={false}
              data={data}
              contentContainerStyle={{paddingBottom:100}}
              renderItem={({item,index}) => {
                return(
                  <View key={item.BlogContent} style={styles.card} >
                        <Text style={styles.text} > {item.BlogContent} </Text>
                  </View>
                )
              }}
              />)  : ( <Text style={{paddingTop:100,textAlign:"center"}} > {message} </Text>  ) 
        }
      </View>
      }
    </View>
  )
}





const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"blue",
        paddingHorizontal:5
    },
    btnContainer:{
      paddingHorizontal:5,
      flexDirection:"row",
      // backgroundColor:"blue",
      margin:5,
      gap:5,
      justifyContent:"center",
      alignItems:"center"
     
    },
    textinput:{
      flex:1,
      paddingVertical:6,
      paddingHorizontal:14,
      fontSize:16,
      // height:36,
      borderRadius:6,
      borderWidth:1,
      borderColor:"#33333333",
      textAlign:"center",
      // backgroundColor:"red"
    },
    btn:{
      minWidth:80,
      height:40,
      paddingHorizontal:10,
      // paddingVertical:6,
      borderRadius:6,
      backgroundColor:"gold",
      alignItems:"center",
      justifyContent:"center",
      borderWidth:1,
      borderColor:"#33333333"
    },
    card:{
      backgroundColor:"#fff",
      paddingVertical:10,
      paddingHorizontal:5,
      marginTop:5
   },
   text:{
       color:"#333",
       fontSize:16,
       lineHeight:26
   }
})

export default DreamWithWord