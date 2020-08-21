import React, { useState  } from "react";
import { StyleSheet, View, Text, Dimensions, Image , TouchableOpacity, Picker, ScrollView,TextInput } from "react-native";
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

        <Text style={styles.header}>Create Lecture</Text>

        <ScrollView style={{ borderWidth:1,
        maxHeight:Dimensions.get('window').height*0.745}}>

           <Text style={more.text}>Enter the name of the Lecture</Text>
            <TextInput style={more.inputBrick}
            placeholder="Lecture Name"
            clearTextOnFocus
            editable
            maxLength={15}
            onSubmitEditing={()=> this.passwordInput.focus()}
            /> 

            <Text style={more.text}>Select Day</Text>
            <View style={{borderWidth:2,margin:20}}>
                <Picker
                selectedValue={selectedValue}
                style={{ marginLeft:15,height: 50, width: Dimensions.get('window').width*0.8}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                    <Picker.Item label="Mon" value="Mon" />
                </Picker>
            </View>

            <Text style={more.text}>Select Hour</Text>
            <View style={{borderWidth:2,margin:20}}>
                <Picker
                selectedValue={selectedValue}
                style={{ marginLeft:15,height: 50, width: Dimensions.get('window').width*0.8}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                    <Picker.Item label="9AM" value="9AM" />
                </Picker>
            </View>

            
            
            <TouchableOpacity>
                <Text style={[more.text,{color:"blue"}]}>Lecture Sylabus.pdf</Text>
            </TouchableOpacity>

            <TextInput style={{
            width: Dimensions.get('window').width*0.9,
            height: Dimensions.get('window').height*0.3,
            color: "#121212",
            borderRadius: 5,
            borderColor: "#000000",
            borderWidth: 1,
            fontFamily: "roboto-regular",
            alignSelf: "center",
            marginTop:20
            }}
            placeholder="Additional info"
            clearTextOnFocus
            editable
            maxLength={100}
            multiline
            numberOfLines={10}
            />

            <TouchableOpacity style={[styles.button,more.button]}>
                <Text style={more.caption}>Create</Text>
            </TouchableOpacity> 

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
        alignSelf: "center",
        marginBottom:30
      },
      inputBrick:{
        marginLeft:15,
        height: 50,
        width: Dimensions.get('window').width*0.90,
        borderWidth:2
      },
  })
export default LecQR;
