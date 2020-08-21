import React, { Component  } from "react";
import { StyleSheet, View, Text, Dimensions, Image , TouchableOpacity } from "react-native";
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
            <Text style={{flex:9,alignSelf:"center",fontSize:30,marginLeft:10}}>Your Classes</Text>
            <TouchableOpacity style={{flex:1,alignSelf:"center"}}>
                <Image source={require("../icons/add.png")}/>
            </TouchableOpacity>
        </View>

        <ScrollView style={{ borderWidth:2,margin:10,
        maxHeight:Dimensions.get('window').height*0.7}}>
            <LectureBlok text1="CSE3035"></LectureBlok>
            <LectureBlok text1="CSE3038"></LectureBlok>
            <LectureBlok text1="IE3058"></LectureBlok>
            <LectureBlok text1="CSE3047"></LectureBlok>
            <LectureBlok text1="CSE3029"></LectureBlok>
            <LectureBlok text1="CSE3010"></LectureBlok>
            <LectureBlok text1="CSE2085"></LectureBlok>
            <LectureBlok text1="CSE3001"></LectureBlok>
        </ScrollView>


      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
         <TouchableOpacity style={styles.footerItem} >
          <View>
            <Image source={require("../icons/callender.png")} style={styles.footerImage}/>
            <Text style={styles.footerWriting} >Weekly Plan</Text>
          </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.footerItem} >
          <View>
            <Image source={require("../icons/qr.png")} style={styles.footerImage}/>
            <Text style={styles.footerWriting} >Scan QR</Text>
          </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.footerItem} >
          <View>
            <Image source={require("../icons/anno.png")} style={styles.footerImage}/>
            <Text style={styles.footerWriting} >Announcements</Text>
          </View>
         </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

export default StdClasses;
