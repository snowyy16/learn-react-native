import { Button, StyleSheet, Text, View } from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const";
import { useNavigation,RouteProp ,NavigationProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const style = StyleSheet.create({
    review:{
        fontSize:30,
        fontFamily: OPENSANS_REGULAR
    },
     reviewText:{
        fontSize:20,
        fontFamily: OPENSANS_REGULAR,
        fontWeight:'bold',
        padding:15
    }
})
const DetailScreen = () =>{
    const navigation: NavigationProp<RootStackParamList> = useNavigation()
    const route: RouteProp<RootStackParamList, 'review-detail'> = useRoute()
    return (
        <View>
            <Text style={style.reviewText}>ID: {route.params?.id}</Text>
            <Text style={style.reviewText}>Nội dung: {route.params?.title}</Text>
            <Text style={style.reviewText}>Rating: {route.params?.star}</Text>
            <Button title="Go home"
            onPress={()=>navigation.navigate("home")}
            />
        </View>
    )
}

export default DetailScreen;