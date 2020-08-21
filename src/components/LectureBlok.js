import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";

function LectureBlok(props) {
  return (
    <TouchableOpacity style={{flex:1,borderWidth:1,
    height:Dimensions.get('window').height*0.1,flexDirection: 'row'}}>
        <Text style={{fontSize:30,marginLeft:10,flex:3}}>{props.text1 || "Lecture"}</Text>
        <Text style={{fontSize:30,marginLeft:10,flex:1,color:"green"}}>12/12</Text>
    </TouchableOpacity>
  );
}

export default LectureBlok;
