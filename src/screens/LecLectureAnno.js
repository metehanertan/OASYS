import React, { Component  } from "react";
import { StyleSheet, View, Text, Dimensions, TextInput , TouchableOpacity } from "react-native";
import { styles } from '../components/styles';
import MaterialHeader1 from "../components/MaterialHeader1";

function LecLectureAnno(props) {

  return (
    <View style={styles.container}>
      <MaterialHeader1
        text1="Oasys"
        style={styles.materialHeader1}
      ></MaterialHeader1>


        <Text style={{alignSelf:"center",fontSize:30,marginLeft:10}}>*Lecture Name* Announcement</Text>
        <TextInput style={{
            width: Dimensions.get('window').width*0.9,
            height: Dimensions.get('window').height*0.6,
            color: "#121212",
            borderRadius: 5,
            borderColor: "#000000",
            borderWidth: 1,
            fontFamily: "roboto-regular",
            alignSelf: "center"
        }}
        placeholder="Announcement"
        clearTextOnFocus
        editable
        maxLength={100}
        multiline
        numberOfLines={10}
        />
        <Text>Max 100 characters.</Text>
        <TouchableOpacity style={[styles.button,
          {margin:15,height: Dimensions.get('window').height*0.08}]}>
            <Text style={styles.caption}>Send</Text>
        </TouchableOpacity>

    </View>
  );
}

export default LecLectureAnno;
