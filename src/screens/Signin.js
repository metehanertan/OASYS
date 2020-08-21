import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function Signin(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../Images/OASYS2.png")}
        resizeMode="contain"
        style={styles.logo}
      ></Image>
      <Text style={styles.signIn}>SIGN IN</Text>
      <CupertinoButtonInfo
        text1="Student"
        style={styles.cupertinoButtonInfo}
      ></CupertinoButtonInfo>
      <CupertinoButtonInfo
        text1="Teacher"
        style={styles.cupertinoButtonInfo1}
      ></CupertinoButtonInfo>
      <Text style={styles.login}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center"
  },
  signIn: {
    color: "#121212",
    fontSize: 56,
    fontFamily: "roboto-regular",
    alignSelf: "center"
  },
  cupertinoButtonInfo: {
    width: Dimensions.get('window').width*0.7,
    height: Dimensions.get('window').height*0.15,
    marginTop: 41,
    alignSelf: "center"
  },
  cupertinoButtonInfo1: {
    width: Dimensions.get('window').width*0.7,
    height: Dimensions.get('window').height*0.15,
    marginTop: 23,
    alignSelf: "center"
  },
  login: {
    width: 67,
    height: 34,
    color: "rgba(0,122,255,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    marginTop: 21,
    alignSelf: "center"
  }
});

export default Signin;