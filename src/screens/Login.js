import React,{ Component } from 'react';
import {View, Text, StyleSheet, Image, Button, Alert, TextInput, KeyboardAvoidingView, Platform, TouchableHighlight, Dimensions} from 'react-native';

export default class Login extends Component{

  constructor(props) {
    super(props);
    this.state = { uri: require('../Images/OASYS2.png')}
  }
    
  changeLogo() {
    this.setState({
    uri: require('../Images/OASYS2rev.png')
    });
  }

  resetLogo() {
    this.setState({
    uri: require('../Images/OASYS2.png')
    });
  }

  render(navigation){
    return(
    <KeyboardAvoidingView
      behavior={Platform.Os == "ios" ? "padding" : "height"}
      style={styles.loginpage}>

      <View style={styles.loginpage}>

        <TouchableHighlight style={styles.logo} 
        onPressIn={() => this.changeLogo()} 
        onPressOut={() => this.resetLogo()}
        underlayColor="transparent"
        >
            <Image
                source={this.state.uri}
                style={styles.logo}
                resizeMode={'contain'}
            />
        </TouchableHighlight> 
        
        <Text style={{fontSize: 40 , alignSelf:'center', padding: 10}}>Login</Text>
        
        <TextInput style={styles.inputBrick}
        placeholder="Username"
        clearTextOnFocus
        editable
        maxLength={15}
        onSubmitEditing={()=> this.passwordInput.focus()}
        />

        <TextInput style={styles.inputBrick}
        placeholder="Password"
        clearTextOnFocus 
        editable
        secureTextEntry
        maxLength={15}
        ref={(input) => this.passwordInput = input}
        />
        
        <Button
          title="Login"
          onPress={() => Alert.alert("Logged in")}
        />

        <Text style={styles.text}
        onPress={() => Alert.alert("Singin")}>
        Register</Text>

        <Text style={styles.text}
        onPress={() => Alert.alert("Reset Password")}>
        Forgot Password</Text>

      </View>
      <View style={{paddingBottom: 35}} ></View>
    </KeyboardAvoidingView>
    );
  }

}

const styles = StyleSheet.create({
  loginpage:{
    alignItems:'center',
    flex:10,
    backgroundColor:'white'
  },
  logo:{
    flex:5,
    backgroundColor:'white',
    padding: 1,
    aspectRatio:1,
    maxWidth: Dimensions.get('window').width-20
  },
  inputBrick:{
    flex:0,
    height: 40,
    width: Dimensions.get('window').width-40,
    borderColor: 'gray', 
    borderWidth: 2,
  },
  text:{
    flex:0,
    fontSize: 20 ,
    alignSelf:'center' ,
    color: '#3498db',
  }
});