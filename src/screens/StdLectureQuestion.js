import React, { useState  } from "react";
import { StyleSheet, View, Text, Dimensions, Image , TouchableOpacity, TextInput } from "react-native";
import { styles } from '../components/styles';
import MaterialHeader1 from "../components/MaterialHeader1";

function StdLectureQuestion(props) {
  return (
    <View style={styles.container}>

      <MaterialHeader1
        text1="Oasys"
        style={styles.materialHeader1}
      ></MaterialHeader1>

        <Text style={{alignSelf:"center",fontSize:30,margin:10}}>Ask your Question</Text>
        <TextInput style={{
            width: Dimensions.get('window').width*0.9,
            height: Dimensions.get('window').height*0.3,
            color: "#121212",
            borderRadius: 5,
            borderColor: "#000000",
            borderWidth: 1,
            fontFamily: "roboto-regular",
            alignSelf: "center",
            marginTop:20
        }}
        placeholder="Your Question"
        clearTextOnFocus
        editable
        maxLength={100}
        multiline
        numberOfLines={10}
        />

        <TouchableOpacity style={[styles.button,
        {margin:15,height: Dimensions.get('window').height*0.08}]}>
            <Text style={styles.caption}>Send</Text>
        </TouchableOpacity>

        <Text>Your question and contact information will be mailed to this lectures' lecturer.</Text>

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
            <Image source={require("../icons/classes.png")} style={styles.footerImage}/>
            <Text style={styles.footerWriting} >Classes</Text>
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

export default StdLectureQuestion;