import React, { useState  } from "react";
import { StyleSheet, View, Text, Dimensions, Image , TouchableOpacity, Picker, Alert } from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";
import { styles } from '../components/styles';
import { ScrollView } from "react-native-gesture-handler";

function LecQRStudents(props) {
    const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
        <MaterialHeader1
        text1="Oasys"
        style={styles.materialHeader1}
        ></MaterialHeader1>

        <View style={{ flexDirection: 'row',marginTop:10}}>
            <Text style={{flex:9,alignSelf:"center",fontSize:40}}>Attended students</Text>
            <TouchableOpacity style={{flex:1,alignSelf:"center"}}
            onPress={() => Alert.alert("refreshed")}>
                <Image source={require("../icons/refresh.png")}/>
            </TouchableOpacity>  
        </View>
        <Text style={{alignSelf:"center",fontSize:20}}>256A89BG</Text>

        <ScrollView style={{maxHeight:Dimensions.get('window').height*0.55,
        width:Dimensions.get('window').width*0.9,
        alignSelf:"center",borderWidth:2}}>
            <Text style={{fontSize:24}}>Metehan ERTAN</Text>
            <Text style={{fontSize:24}}>Furkan KUSE</Text>
        </ScrollView>



        <TouchableOpacity style={[styles.button,more.button]}
        onPress={() => Alert.alert("Code is closed.")}>
            <Text style={more.caption}>Close Attendance</Text>
        </TouchableOpacity> 


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

const more = StyleSheet.create({   
    text:{
      fontSize:20,
      marginTop:15,
      marginLeft:15,
      marginBottom:10
    },
      caption: {
        color: "#fff",
        fontSize: 25,
        fontFamily: "roboto-500"
      },
      button:{
        width: Dimensions.get('window').width*0.7,
        height: Dimensions.get('window').height*0.09,
        marginTop: 20,
        alignSelf: "center"
      }
  })
export default LecQRStudents;
