import React, { Component } from "react";
import { View, StyleSheet, Text , TouchableOpacity, Image, Dimensions } from "react-native";
import { styles } from '../components/styles';
import MaterialHeader1 from "../components/MaterialHeader1";

function StdWeek(props) {
  return (
    <View style={styles.container}>
      <MaterialHeader1
        text1="Oasys"
        style={styles.materialHeader1}
      ></MaterialHeader1>


      <Text style={styles.header}>Weekly Plan</Text>
      <View style={more.out}>
      <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={more.smallBox}><Text style={more.text}>HOURS</Text></View>
          <View style={more.box}><Text style={more.text}>9AM</Text></View>
          <View style={more.box}><Text style={more.text}>10AM</Text></View>
          <View style={more.box}><Text style={more.text}>11AM</Text></View>
          <View style={more.box}><Text style={more.text}>12AM</Text></View>
          <View style={more.box}><Text style={more.text}>1PM</Text></View>
          <View style={more.box}><Text style={more.text}>2PM</Text></View>
          <View style={more.box}><Text style={more.text}>3PM</Text></View>
          <View style={more.box}><Text style={more.text}>4PM</Text></View>
        </View>

        <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={more.smallBox}><Text style={more.text}>MON</Text></View>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={more.smallBox}><Text style={more.text}>TUE</Text></View>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={more.smallBox}><Text style={more.text}>WED</Text></View>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={more.smallBox}><Text style={more.text}>THUR</Text></View>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={more.smallBox}><Text style={more.text}>FRI</Text></View>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
          <TouchableOpacity style={more.box}></TouchableOpacity>
        </View>

      </View>

      
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
         <TouchableOpacity style={styles.footerItem} >
          <View>
            <Image source={require("../icons/anno.png")} style={styles.footerImage}/>
            <Text style={styles.footerWriting} >Announcements</Text>
          </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.footerItem} >
          <View>
            <Image source={require("../icons/qr.png")} style={styles.footerImage}/>
            <Text style={styles.footerWriting} >Generate QR</Text>
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
  out: {
    flex: 1,
    flexDirection: 'row',
    margin:15,
    marginBottom: Dimensions.get('window').height*0.09,
  },
  box: {
    flex: 1,
    borderWidth:2, 
  },
  smallBox:{
    flex: 0.5,
    borderWidth:2, 
  },
  text:{
    alignSelf:"center"
  }
})

export default StdWeek;