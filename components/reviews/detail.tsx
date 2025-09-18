import { StyleSheet, Text, View } from "react-native"

const style = StyleSheet.create({
    review:{
        fontSize:30,
        fontFamily:'OpenSans-Regular'
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