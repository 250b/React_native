import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useFonts,
        NotoSansKR_100Thin, NotoSansKR_300Light,
        NotoSansKR_400Regular, NotoSansKR_500Medium,
        NotoSansKR_700Bold, NotoSansKR_900Black} from '@expo-google-fonts/noto-sans-kr';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {LoginScreen} from "./src/screens/LoginScreen";
import {SignUpScreen} from "./src/screens/SignUpScreen";
import {TabNavScreen} from "./src/screens/TabNavScreen";
import {SettingNicknameScreen} from "./src/screens/SettingNicknameScreen";
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSansKR_100Thin, NotoSansKR_300Light, NotoSansKR_400Regular,
    NotoSansKR_500Medium, NotoSansKR_700Bold, NotoSansKR_900Black
  });

  if (!fontsLoaded) return null;
  return <SafeAreaProvider>
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="TabNav" component={TabNavScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center'
  },
})