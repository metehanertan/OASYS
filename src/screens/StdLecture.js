import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, Image , TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from '../components/styles';
import AnnoBlock from '../components/AnnoBlock';
import MaterialHeader1 from "../components/MaterialHeader1";

function StdLecture(props) {
  return (
    <View style={styles.container}>
      <MaterialHeader1
        text1="Oasys"
        style={styles.materialHeader1}
      ></MaterialHeader1>

      <ScrollView>
        <Text style={styles.header}>Lecture Name</Text>
        <Text style={{color:"blue",fontSize:20}}>sylabus.pdf</Text>
        <Text style={{fontSize:20, marginLeft:5}}>Info and stuff</Text>

        <ScrollView style={{margin:10,maxHeight:Dimensions.get('window').height*0.7}}> 
          <AnnoBlock text1="anno1"></AnnoBlock>
          <AnnoBlock text1="anno2"></AnnoBlock>
        </ScrollView>

      </ScrollView>

      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
         <TouchableOpacity style={styles.footerItem} >
          <View>
            <Image source={require("../icons/attendance.png")} style={styles.footerImage}/>
            <Text style={styles.footerWriting} >Attendance</Text>
          </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.footerItem} >
          <View>
            <Image source={require("../icons/question.png")} style={styles.footerImage}/>
            <Text style={styles.footerWriting} >Question</Text>
          </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.footerItem} >
          <View>
            <Image source={require("../icons/assigment.png")} style={styles.footerImage}/>
            <Text style={styles.footerWriting} >Assigment</Text>
          </View>
         </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

export default StdLecture;
