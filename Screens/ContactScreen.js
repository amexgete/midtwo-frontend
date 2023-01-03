import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function ContactScreen({ navigation }) {
  const[data,setData]=useState([])
  const fetchdata=()=>{
    axios.get('http://127.0.0.1:8000/native/employ').then((response)=>
     setData(response.data)
    )
   }
   useEffect(()=>{
   fetchdata()
  
  
   },[])
   const deleteemp=(id)=>{
    axios.delete(`http://127.0.0.1:8000/native/employDel/${id}`).then((response)=>
     setData(response.data)
    )
   }

  return (

    <View style={styles.container}>
    
      <Button title=" Home" onPress={() => navigation.popToTop()} />
      <Button title="About" onPress={() => navigation.pop()} />
      <StatusBar style="auto" />
 
     <View>
      <View style={{fontWeight: 'bold'}}>
        <Text>EMPLOY LIST</Text>
      </View>
      {data.map((value)=>{
       return <View>
                      <Text>Name:{value.name}</Text> 
                        <Text>Salary:{value.salary}</Text>
                        <Button  title="Delete"onPress={()=>deleteemp(value.id)}>delete</Button>
                  
                
                  </View>
    }
   )}
   
     </View>
      
     
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    top:30,
    left:0,
    width:'100%',
    position:'absolute',
    backgroundColor:`#b0c4de`,
    paddingHorizontal:20,
    justifyContent:'space-between',
    alignItems:'center',
    elevation:5,
    height:50,
    display:'flex',
    flexDirection:'column',
    
  },
  
  
});