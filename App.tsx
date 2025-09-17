import { use, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View,ScrollView, FlatList, Touchable, TouchableOpacity, Pressable, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';

interface ITodo{
  id: number,
  name:string
}
export default function App() {
  const [todo,setTodo]=useState("")
  const [listTodo,setListTodo] = useState<ITodo[]>([])
function randNumber(min:number,max:number){
  return Math.floor(Math.random()*(max-min+1))+min
}
const handleAddTodo = () => {
  if(!todo) {
    Alert.alert("Lỗi input todo","Todo không được để trống",[
      // {
      //   text :"Hủy",
      //   onPress: () => console.log("Cancel pressed"),
      //   style: "cancel"
      // },
      {
        text: "Xác nhận",
        onPress: () => console.log("Ok pressed"),
      },
    ])
    return;
  }
  setListTodo([...listTodo, { id: randNumber(2, 200000), name: todo }]);
  setTodo(""); // reset lại input
}
const deleteTodo = (id:number)=>{
  const newTodo = listTodo.filter(item => item.id !== id)
  setListTodo(newTodo)
}
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={styles.container}>
      {/* header */}
      <Text style={styles.header}>
        Todo App
      </Text>
      {/* form */}
      <View style={styles.body}>
        <TextInput style={styles.todoInput}
        value={todo}
        onChangeText={(value)=>{setTodo(value)}}
        />
        <Button title='Add todo'
        onPress={handleAddTodo}
        />
        
      </View>
      
      {/* list todo */}
      <View style={styles.body}>
        <FlatList
        keyExtractor={item=>item.id + ""}
        data={listTodo}
        renderItem={({item})=>{
          return(
            <Pressable
            style={({pressed})=>({opacity: pressed ? 0.5 : 1})}
            onPress={()=>deleteTodo(item.id)}>
              <Text style={styles.todoItem}>{item.name}</Text>
            </Pressable>

          )
        }}
        />
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    // paddingHorizontal:20,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
  header:{
    backgroundColor:"cyan",
    paddingHorizontal:20,
    textAlign:"center",
    fontSize:40
  },
  todoInput:{
    borderBottomWidth:1,
    borderBottomColor:"blue",
    padding:5,
    margin:15
  },
  body:{
    paddingHorizontal:10,
    marginBottom:10
  },
  todoItem:{
    fontSize:20,
    textAlign:"center",
    borderWidth:1,
    padding:10,
    marginBottom:15,
  }
});
