import * as React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import SettingMenu from '../setting-component/SettingMenu';

export const SettingScreen = ({navigation}) => {
    return <SafeAreaView style={styles.container}>
        <Text style={styles.pageTitle}>설정</Text>
        <SettingMenu text={'닉네임 변경하기'}/>
        <SettingMenu text={'로그아웃'}/>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    pageTitle:{
        fontFamily: 'NotoSansKR_700Bold',
        fontSize:34,
        width: 343,
        height: 41,
        textAlign:'left',
        marginBottom:30,
        marginTop: 48,
        lineHeight:41
    }
})