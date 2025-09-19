import { Button, StyleSheet, Text, View } from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const";
import { useNavigation, NavigationProp } from "@react-navigation/native";

const style = StyleSheet.create({
    review:{
        fontSize:30,
        fontFamily: OPENSANS_REGULAR
    }
})
const DetailScreen = () =>{
    const navigation: NavigationProp<RootStackParamList> = useNavigation()
    return (
        <View>
            <Text style={style.review}> Detail Screen google</Text>
            <Button title="Go home"
            onPress={()=>navigation.navigate("home")}
            />
        </View>
    )
}

export default DetailScreen;