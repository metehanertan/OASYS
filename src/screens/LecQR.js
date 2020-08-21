import React, { useState  } from "react";
import { StyleSheet, View, Text, Dimensions, Image , TouchableOpacity, Picker, Alert } from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";
import { styles } from '../components/styles';

function LecQR(props) {
    const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
        <MaterialHeader1
        text1="Oasys"
        style={styles.materialHeader1}
        ></MaterialHeader1>

        <Text style={styles.header}>Generate QR CODE</Text>

        <Text style={more.text}>Select Class</Text>
        <View style={{borderWidth:2,margin:20}}>
        <Picker
        selectedValue={selectedValue}
        style={{ marginLeft:15,height: 50, width: Dimensions.get('window').width*0.8}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        </Picker>
        </View>


        <Text style={more.text}>Select Day and time</Text>
        <View style={{borderWidth:2,margin:20}}>
        <Picker
        selectedValue={selectedValue}
        style={{ marginLeft:15,height: 50, width: Dimensions.get('window').width*0.8}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
        <Picker.Item label="Mon 9AM" value="java" />
        <Picker.Item label="Tue 1PM" value="js" />
        </Picker>
        </View>



        <TouchableOpacity style={[styles.button,more.button]}
        onPress={() => Alert.alert("Code is : 256A89BG")}>
            <Text style={more.caption}>Get Code</Text>
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
        marginTop: 41,
        alignSelf: "center"
      }
  })
export default LecQR;
