import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {HomeScreen} from "./HomeScreen";
import {MapScreen} from "./MapScreen"
import {RecordScreen} from "./RecordScreen";
import {CommunityScreen} from "./CommunityScreen";
import {SettingScreen} from "./SettingScreen";

const Tab = createBottomTabNavigator();

export const TabNavScreen = ()=> {
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Map" component={MapScreen}/>
            <Tab.Screen name="Record" component={RecordScreen}/>
            <Tab.Screen name="Community" component={CommunityScreen}/>
            <Tab.Screen name="Setting" component={SettingScreen}/>
        </Tab.Navigator>
    )
}
