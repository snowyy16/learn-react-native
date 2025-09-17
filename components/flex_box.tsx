// Trong React Native (Flexbox):

// justifyContent → căn chỉnh theo trục chính (main axis).

// alignItems → căn chỉnh theo trục phụ (cross axis).

// Mà trục chính/phụ phụ thuộc vào flexDirection:

// Mặc định flexDirection: "column" → trục chính là dọc (vertical), trục phụ là ngang (horizontal).

// Nếu flexDirection: "row" → ngược lại.



import { StyleSheet, Text, View } from "react-native"
const style = StyleSheet.create({
    container: {
        marginTop:30,
        borderWidth:1,
        borderColor:"red",
        //justify: ox (row) // oy (column)
        flex:1
        
    },
    item1:{
        backgroundColor:"violet",
        padding:30,
        
    },
    item2:{
        backgroundColor:"orange",
        padding:30,
       
    },
    item3:{
        backgroundColor:"cyan",
        padding:30,
        
    },
    item4:{
        backgroundColor:"green",
        padding:30,
      
    },
})
 const FlexBox = () =>{
    return(
        <View style={style.container}>
            <View style={style.item1}>
                <Text>item 1</Text>
            </View>

            <View style={style.item2}>
                <Text>item 2</Text>
            </View>

            <View style={style.item3}>
                <Text>item 3</Text>
            </View>

            <View style={style.item4}>
                <Text>item 4</Text>
            </View>
        </View>
    )
 }
 export default FlexBox