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
import {Image, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

export const TabNavScreen = ()=> {
    return(
        <Tab.Navigator screenOptions={{headerShown: false,tabBarShowLabel: false, 
            tabBarStyle: {height:94, borderTopWidth: 0, }}}>
            <Tab.Screen
                name="Home"
                component={HomeScreen} 
                options={{tabBarIcon:({focused})=>
                (focused?<Image source ={require("./activeHomeIcon.png")} style={styles.icon}/>
                :<Image source ={require("./homeIcon.png")} style={styles.icon}/>)}}
                />
            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{tabBarIcon:({focused})=>
                (focused?<Image source ={require("./activeMapIcon.png")} style={styles.icon}/>
                :<Image source ={require("./mapIcon.png")} style={styles.icon}/>)}}
            />
            <Tab.Screen
                name="Record" 
                component={RecordScreen}
                options={{tabBarIcon:({focused})=>
                (focused?<Image source ={require("./activeRecordIcon.png")} style={styles.icon}/>
                :<Image source ={require("./recordIcon.png")} style={styles.icon}/>)}}
            />
            <Tab.Screen
                name="Community"
                component={CommunityScreen}
                options={{tabBarIcon:({focused})=>
                (focused?<Image source ={require("./activeCommunityIcon.png")} style={styles.icon}/>
                :<Image source ={require("./communityIcon.png")} style={styles.icon}/>)}}
                />
            <Tab.Screen
                name="Setting"
                component={SettingScreen}
                options={{tabBarIcon:({focused})=>
                (focused?<Image source ={require("./activeSettingIcon.png")} style={styles.icon}/>
                :<Image source ={require("./settingIcon.png")} style={styles.icon}/>)}}
            />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    icon:{
        width:44,
        height:44,
        marginBottom:40,
        marginTop:10
    }
})