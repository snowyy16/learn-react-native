import { use, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View,ScrollView, FlatList} from 'react-native';


export default function App() {

  const [students,setStudents] = useState([
    {id:1,name:"snow1",age:18},
    {id:2,name:"snowy2",age:19},
    {id:3,name:"swon3",age:20},
    {id:4,name:"hugo4",age:21},
    {id:5,name:"sonw5",age:22},
    {id:6,name:"snowy6",age:23},
    {id:7,name:"snow7",age:24},
    {id:8,name:"snow8",age:25},
    {id:9,name:"snow9",age:25},
    {id:10,name:"snow10",age:25},
  ])
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize:60}}>
        Hello world
      </Text>
      <FlatList
        data = {students}
        keyExtractor={item=> item.id + ""}
        renderItem = {({item})=>{
          return(
            <View  style={styles.name1}>
                <Text >
                  {item.name}
                </Text>
            </View>
          )
        }}
      />
      {/* <ScrollView >
          {students.map(item=>{
            return(
              <View key={item.id} style={styles.name1}>
                <Text >
                  {item.name}
                </Text>
              </View>
            )
          })}
        </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    paddingHorizontal:20,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
  name1:{
      padding:30,
      backgroundColor:"pink",
      marginBottom:30

  }
  
  
});
