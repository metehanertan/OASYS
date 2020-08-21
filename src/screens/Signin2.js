import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Image, Dimensions } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function Signin2(props) {
  return (
    <View style={styles.container}>

      <Image
        source={require("../Images/OASYS2.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>

      <Text style={styles.signIn}>SIGN IN</Text>

      <Text style={styles.text}>Name</Text>
      <TextInput
        placeholder="Name"
        autoCapitalize="words"
        clearTextOnFocus={true}
        style={styles.textInput}
      ></TextInput>

      <Text style={styles.text}>Surname</Text>
      <TextInput
        placeholder="Surname"
        autoCapitalize="characters"
        keyboardType="default"
        returnKeyType="next"
        clearTextOnFocus={true}
        style={styles.textInput}
      ></TextInput>

      <Text style={styles.text}>E-mail</Text>
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        clearTextOnFocus={true}
        dataDetector="none"
        style={styles.textInput}
      ></TextInput>

      <Text style={styles.text}>Password</Text>
      <TextInput
        placeholder="Password"
        blurOnSubmit={true}
        caretHidden={false}
        secureTextEntry={true}
        clearButtonMode="never"
        clearTextOnFocus={true}
        style={styles.textInput}
      ></TextInput>

      <Text style={styles.text}>Password again</Text>
      <TextInput
        placeholder="Password"
        blurOnSubmit={true}
        caretHidden={false}
        secureTextEntry={true}
        clearButtonMode="never"
        clearTextOnFocus={true}
        style={styles.textInput}
      ></TextInput>

      <CupertinoButtonInfo
        text1="SIGN IN"
        style={styles.cupertinoButtonInfo1}
      ></CupertinoButtonInfo>

      <Text style={styles.login}>Login</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 307,
    height: 754,
    alignSelf: "center"
  },
  signIn: {
    color: "rgba(0,0,0,1)",
    fontSize: 35,
    fontFamily: "roboto-regular",
    margin:5,
    alignSelf: "center"
  },
  text: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  textInput: {
    width: Dimensions.get('window').width*0.7,
    height: Dimensions.get('window').height*0.07,
    color: "#121212",
    borderRadius: 5,
    borderColor: "#000000",
    borderWidth: 1,
    fontFamily: "roboto-regular",
    alignSelf: "center"
  },
  cupertinoButtonInfo1: {
    width: 138,
    height: 60,
    alignSelf: "center"
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    margin: 5
  },
  login: {
    color: "rgba(0,122,255,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    alignSelf: "center"
  }
});

export default Signin2;