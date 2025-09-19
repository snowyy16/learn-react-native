import { Button, Text, View } from "react-native"


const HomeScreen = (props:any) =>{ 
    const {navigation}=  props
    return (
        <View>
            <Text style={{fontSize:30}}> Home Screen google</Text>
            <Button title="View Detail"
            onPress={()=> navigation.navigate("review-detail")}/>
        </View>
    )
}

export default HomeScreen;