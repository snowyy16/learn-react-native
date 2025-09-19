import { Button, Text, View } from "react-native"


const HomeScreen = () =>{
    return (
        <View>
            <Text style={{fontSize:30}}> Home Screen google</Text>
            <Button title="View Detail"
            onPress={()=> alert("clicked")}/>
        </View>
    )
}

export default HomeScreen;