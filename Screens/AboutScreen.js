import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
export default function AboutScreen({ navigation, route }) {
  const[data,setData]=useState([])
  const fetchdata=()=>{
    axios.get('http://127.0.0.1:8000/native/teacher').then((response)=>
     setData(response.data)
    )
   }
   useEffect(()=>{
   fetchdata()
   },[])
   const deleteteach=(id)=>{
    axios.delete(`http://127.0.0.1:8000/native/teacherDel/${id}`).then((response)=>
     setData(response.data)
    )
   }
  return (
    <View style={styles.container}>
      <View>
      <Button 
        title='contact'
        onPress={() => navigation.push("Contact")}
      />
      <Button 
        title='Home'
        onPress={() => {
          navigation.dispatch(
            StackActions.replace("Home")
          );
        }}
      />
      <StatusBar style="auto" />
      </View>
      <View style={{fontWeight: 'bold'}}>
        <Text>TEACHERS LIST</Text>
      </View>
      <View>
     
      {data.map((value)=>{
       return <View>
               <Text>Name:{value.name}</Text>
                  <Text>Salary:{value.salary}</Text>
                  <Button  title="Delete"onPress={()=>deleteteach(value.id)}>delete</Button>
                
            </View>
    }
   )}

     </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
       backgroundColor:`#f8f8ff`,
       paddingHorizontal:50,
      top:30,
    left:0,
    width:'100%',
    position:'absolute',
    backgroundColor:`#f8f8ff`,
  
    justifyContent:'space-between',
    alignItems:'center',
    elevation:5,
    height:50,
    display:'flex',
    flexDirection:'column',
  },
  
});