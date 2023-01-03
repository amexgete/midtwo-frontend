import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View,Text } from 'react-native';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
export default function HomeScreen({ navigation }) {
  const[data,setData]=useState([])
  const fetchdata=()=>{
    axios.get('http://127.0.0.1:8000/native/student').then((response)=>
     setData(response.data)
    )
   }
   useEffect(()=>{
   fetchdata()
  
  
   },[])
   
   const deletestu=(id)=>{
    axios.delete(`http://127.0.0.1:8000/native/studentDel/${id}`).then((response)=>
     setData(response.data)
    )
   }
  return (
    <View style={styles.container}>
       <View>
      <Button 
        title="About"
        onPress={() => navigation.navigate("About")}
      />
      
      <Button 
        title="Contact"
        onPress={() => navigation.navigate("Contact")}
      />
      <StatusBar style="auto" />
      </View>
     
      <View style={{font: 'bold'}}>
        <Text>STUDENT LIST</Text>
      </View>
     <View>
     
      {data.map((value)=>{
       return <View>
               <Text>Name: {value.name}</Text>
                   <Text>Grade:{value.grade}</Text>
                  <Button  title="Delete" onPress={()=>deletestu(value.id)}>Delete</Button>
                
                  </View>
    }
   )}
   
     </View>
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
       top:30,
       left:0,
       width:'50%',
       backgroundColor:`#708090`,
       elevation:5,
       height:50,
       display:'flex',
       flexDirection:'column',
       paddingHorizontal:50,
       alignItems:'center',
       justifyContent:'space-between',
      }
});