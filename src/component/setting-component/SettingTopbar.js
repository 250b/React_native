import { View, StyleSheet,SafeAreaView, Pressable, Text, Image } from "react-native";

function SettingTopbar({text, pressHandler}){
    return (
        <View style={styles.container}>
            <Pressable onPress={pressHandler}>
                <Image style={styles.image} source={require('./topbarArrow.png')}/>
            </Pressable>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}
export default SettingTopbar;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom:30,
        width: 343,
        marginTop: 48
    },
    image:{
        width:36,
        height:36,
        marginRight:21,

    },
    text:{
        fontSize:34,
        fontFamily: 'NotoSansKR_700Bold',
        justifyContent:'center',
        lineHeight: 41,
    }
})