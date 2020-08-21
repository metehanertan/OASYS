import React, { Component } from "react";
import { Image, TouchableOpacity, Text, Dimensions } from "react-native";

function AnnoBlock(props) {
  return (
    <TouchableOpacity style={{flex:1,borderWidth:1,
    height:Dimensions.get('window').height*0.1,flexDirection: 'row'}}>
        <Image source={require("../icons/anno.png")}
         style={{height:Dimensions.get('window').height*0.07,}}/>
        <Text style={{fontSize:30,marginLeft:10,flex:3}}>{props.text1 || "Announcement"}</Text>
    </TouchableOpacity>
  );
}

export default AnnoBlock;
