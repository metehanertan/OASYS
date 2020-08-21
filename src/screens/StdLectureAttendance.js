import React, { useState  } from "react";
import { StyleSheet, View, Text, Dimensions, Image , TouchableOpacity, ScrollView } from "react-native";
import { styles } from '../components/styles';
import MaterialHeader1 from "../components/MaterialHeader1";
import AssigmentStu from "../components/AssigmentStu";


function StdLectureAttendance(props) {
  return (
    <View style={styles.container}>

      <MaterialHeader1
        text1="Oasys"
        style={styles.materialHeader1}
      ></MaterialHeader1>

        <Text style={{alignSelf:"center",fontSize:30,margin:10}}>Your Attendance</Text>
        <Text style={{alignSelf:"center",fontSize:20,margin:10,color:"green"}}>8/12</Text>

        <Text style={{alignSelf:"center",fontSize:30,margin:10}}>Missing Classes</Text>

        <ScrollView style={{maxHeight:Dimensions.get('window').height*0.50,
        width:Dimensions.get('window').width*0.9, marginTop:15,
        alignSelf:"center",borderWidth:2}}>
            <AssigmentStu text1="Date" text2="Date"></AssigmentStu>
            <AssigmentStu text1="Date" text2="Date"></AssigmentStu>
            <AssigmentStu text1="Date" text2="Date"></AssigmentStu>
            <AssigmentStu text1="Date" text2="Date"></AssigmentStu>
        </ScrollView>


        <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
         <TouchableOpacity style={styles.footerItem} >
          <View>
            <Image source={require("../icons/classes.png")} style={styles.footerImage}/>
            <Text style={styles.footerWriting} >Classes</Text>
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

export default StdLectureAttendance;