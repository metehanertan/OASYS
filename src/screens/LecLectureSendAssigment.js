import React, { Component  } from "react";
import { StyleSheet, View, Text, Dimensions, TextInput , TouchableOpacity } from "react-native";
import { styles } from '../components/styles';
import MaterialHeader1 from "../components/MaterialHeader1";

function LecLectureSendAssigment(props) {

  return (
    <View style={styles.container}>
      <MaterialHeader1
        text1="Oasys"
        style={styles.materialHeader1}
      ></MaterialHeader1>
        <Text style={{alignSelf:"center",fontSize:30,margin:10}}>*Lecture Name* Assigment</Text>
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
        placeholder="Additional info"
        clearTextOnFocus
        editable
        maxLength={100}
        multiline
        numberOfLines={10}
        />
        <Text>Max 100 characters.</Text>

        <Text style={{color:"blue",fontSize:20,margin:20}}>AssigmentDocument.pdf</Text>

        <TouchableOpacity style={[styles.button,
        {margin:15,height: Dimensions.get('window').height*0.08}]}>
            <Text style={styles.caption}>Send</Text>
        </TouchableOpacity>

    </View>
  );
}

export default LecLectureSendAssigment;
