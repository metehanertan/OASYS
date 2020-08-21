import React, { Component } from "react";
import { TouchableOpacity, Text, Dimensions } from "react-native";

function AssigmentStu(props) {
  return (
    <TouchableOpacity style={{flex:1,borderWidth:1,
    height:Dimensions.get('window').height*0.1,flexDirection: 'row'}}>
        <Text style={{fontSize:30,marginLeft:10,flex:3}}>{props.text1 || ""}</Text>
        <Text style={{fontSize:30,marginLeft:10,flex:1}}>{props.text2 || ""}</Text>
    </TouchableOpacity>
  );
}

export default AssigmentStu;