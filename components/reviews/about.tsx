import { StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../../utils/const";

const style = StyleSheet.create({
    about:{
        fontSize:30
    }
})
const AboutScreen = () =>{
    return (
        <View>
        <Text style={[style.about,globalStyles.globlaFont]}> About Screen</Text>
        </View>
    )
}

export default AboutScreen;