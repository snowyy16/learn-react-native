import { StyleSheet, Text, View } from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const";

const style = StyleSheet.create({
    review:{
        fontSize:30,
        fontFamily: OPENSANS_REGULAR
    }
})
const DetailScreen = () =>{
    return (
        <View>
            <Text style={style.review}> Detail Screen google</Text>
        </View>
    )
}

export default DetailScreen;