import React, { useState  } from "react";
import { StyleSheet, View, Text, Dimensions, Image , TouchableOpacity, Alert } from "react-native";
import { styles } from '../components/styles';
import { ScrollView } from "react-native-gesture-handler";
import AssigmentStu from "../components/AssigmentStu";
import MaterialHeader1 from "../components/MaterialHeader1";

function StdLectureAllAssigments(props) {
    const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>

      <MaterialHeader1
        text1="Oasys"
        style={styles.materialHeader1}
      ></MaterialHeader1>

        <View style={{ flexDirection: 'row',marginTop:10}}>
            <Text style={{flex:9,alignSelf:"center",fontSize:30,margin:10}}>*Lecture Name* Assigments</Text>
        </View>

        <Text style={{marginLeft:10}}>Click to an assigment to see their details.</Text>
        <ScrollView style={{maxHeight:Dimensions.get('window').height*0.55,
        width:Dimensions.get('window').width*0.9, marginTop:15,
        alignSelf:"center",borderWidth:2}}>
            <AssigmentStu text1="Assigment" text2="Date"></AssigmentStu>
            <AssigmentStu text1="Assigment" text2="Date"></AssigmentStu>
            <AssigmentStu text1="Assigment" text2="Date"></AssigmentStu>
            <AssigmentStu text1="Assigment" text2="Date"></AssigmentStu>
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
           <Image source={require("../icons/classes.png")} style={styles.footerImage}/>
            <Text style={styles.footerWriting} >Classes</Text>
          </View>
         </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

export default StdLectureAllAssigments;