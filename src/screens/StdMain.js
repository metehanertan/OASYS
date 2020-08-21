import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, Image , TouchableOpacity } from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from '../components/styles';
import AnnoBlock from '../components/AnnoBlock';

function StdMain(props) {
  return (
    <View style={styles.container}>
      <MaterialHeader1
        text1="Oasys"
        style={styles.materialHeader1}
      ></MaterialHeader1>

      <Text style={styles.header}>Anouncements</Text>

      <ScrollView style={{margin:10,maxHeight:Dimensions.get('window').height*0.7}}> 
        <AnnoBlock text1="anno1"></AnnoBlock>
        <AnnoBlock text1="anno2"></AnnoBlock>
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
            <Image source={require("../icons/classes.png")} style={styles.footerImage}/>
            <Text style={styles.footerWriting} >Classes</Text>
          </View>
         </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

export default StdMain;
