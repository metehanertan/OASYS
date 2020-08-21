import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Signin from './src/screens/Signin';
import Signin2 from './src/screens/Signin2';
import StdMain from './src/screens/StdMain';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Signin"
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        title="Singin2"
        onPress={() => navigation.navigate('Signin2')}
      />
      <Button
        title="StdMain"
        onPress={() => navigation.navigate('StdMain')}
      />            
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signin2" component={Signin2} />
        <Stack.Screen name="StdMain" component={StdMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
