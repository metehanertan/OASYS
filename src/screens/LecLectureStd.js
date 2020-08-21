import React, { Component  } from "react";
import { StyleSheet, View, Text, Dimensions, Image , TouchableOpacity,Alert } from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from '../components/styles';
import LectureBlok from '../components/LectureBlok';

function StdClasses(props) {

  return (
    <View style={styles.container}>
      <MaterialHeader1
        text1="Oasys"
        style={styles.materialHeader1}
      ></MaterialHeader1>


        <View style={{ flexDirection: 'row',marginTop:10}}>
            <Text style={{flex:9,alignSelf:"center",fontSize:30,marginLeft:10}}>*Lecture Name* Students</Text>
            <TouchableOpacity style={{flex:1,alignSelf:"center"}}>
                <Image source={require("../icons/add.png")}/>
            </TouchableOpacity>
        </View>

        <ScrollView style={{ borderWidth:2,margin:10,
        maxHeight:Dimensions.get('window').height*0.7}}>
            <LectureBlok text1="Student1"></LectureBlok>
            <LectureBlok text1="Student2"></LectureBlok>
            <LectureBlok text1="Student3"></LectureBlok>
            <LectureBlok text1="Student4"></LectureBlok>
            <LectureBlok text1="Student5"></LectureBlok>
            <LectureBlok text1="Student"></LectureBlok>
            <LectureBlok text1="Student"></LectureBlok>
            <LectureBlok text1="Student"></LectureBlok>
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
            <Image source={require("../icons/anno.png")} style={styles.footerImage}/>
            <Text style={[styles.footerWriting,{fontSize:17}]} >Announcement</Text>
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

export default StdClasses;
