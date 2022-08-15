import { View, StyleSheet, Pressable, Text, Image } from "react-native";

function Topbar({text, pressHandler}){
    return (
        <View style={styles.container}>
            <Pressable onPress={pressHandler}>
                <Image style={styles.image} source={require('../../image/topbarArrow.png')}/>
            </Pressable>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}
export default Topbar;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom:30,
        marginTop: 48,
        width: 343
    },
    image:{
        width:16,
        height:22,
        marginRight:25,

    },
    text:{
        fontSize:34,
        fontWeight:'bold',
        fontFamily: 'NotoSansKR_700Bold'
    }
})