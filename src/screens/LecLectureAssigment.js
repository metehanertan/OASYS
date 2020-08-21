import React, { useState  } from "react";
import { StyleSheet, View, Text, Dimensions, Image , TouchableOpacity, Picker, Alert } from "react-native";
import { styles } from '../components/styles';
import { ScrollView } from "react-native-gesture-handler";
import AssigmentStu from "../components/AssigmentStu";
import MaterialHeader1 from "../components/MaterialHeader1";

function LecLectureAssigment(props) {
    const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <MaterialHeader1
      text1="Oasys"
      style={styles.materialHeader1}
      ></MaterialHeader1>

      <Text style={{fontSize:24}}>Assigment info</Text>
      <Text style={{color:"blue",fontSize:20,margin:20}}>AssigmentDocument.pdf</Text>
      <Text>Click to a student to download their assigment.</Text>
      <ScrollView style={{maxHeight:Dimensions.get('window').height*0.55,
      width:Dimensions.get('window').width*0.9, marginTop:15,
      alignSelf:"center",borderWidth:2}}>
        <AssigmentStu text1="Student" text2="Date"></AssigmentStu>
        <AssigmentStu text1="Student" text2="Date"></AssigmentStu>
        <AssigmentStu text1="Student" text2="Date"></AssigmentStu>
        <AssigmentStu text1="Student" text2="Date"></AssigmentStu>
      </ScrollView>

      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
         <TouchableOpacity style={styles.footerItem} >
          <View>
            <Image source={require("../icons/attendance.png")} style={styles.footerImage}/>
            <Text style={styles.footerWriting} >EditClass</Text>
          </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.footerItem} >
          <View>
            <Image source={require("../icons/question.png")} style={styles.footerImage}/>
            <Text style={styles.footerWriting} >Students</Text>
          </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.footerItem} >
          <View>
            <Image source={require("../icons/anno.png")} style={styles.footerImage}/>
            <Text style={[styles.footerWriting,{fontSize:14}]} >Announcement</Text>
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

export default LecLectureAssigment;
