import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, Image , TouchableOpacity, Alert } from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";
import { styles } from '../components/styles';

function StdMain(props) {
  return (
    <View style={styles.container}>
        <MaterialHeader1
        text1="Oasys"
        style={styles.materialHeader1}
        ></MaterialHeader1>

        <Text style={styles.header}>Scan QR CODE</Text>

        <View style={{ alignSelf:"center", borderRadius:5, margin:20,borderWidth:4 }}>
            <View style={{height: Dimensions.get('window').height*0.6,
            borderWidth:4, width: Dimensions.get('window').width*0.8, alignSelf:"center"}}></View>
            <TouchableOpacity style={{margin:10}}
            onPress={() => Alert.alert("QR Code Scanned")}>
                <Image source={require("../icons/camera.png")} style={styles.footerImage}/>
            </TouchableOpacity>  
        </View>

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
            <Image source={require("../icons/anno.png")} style={styles.footerImage}/>
            <Text style={styles.footerWriting} >Announcements</Text>
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
