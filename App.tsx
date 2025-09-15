import { use, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {

  const [number,setNumber] = useState(0)
  const [name,setName]=useState("")
  const [age,setAge]=useState(0)

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name1}>Name: {name}</Text>
        <TextInput 
        multiline
        onChangeText={(value)=>{setName(value)}}
        style={styles.border1}
        />
       
        <Text style={styles.age1}>Age: {age}</Text>
        <TextInput
        style={styles.border1}
        onChangeText={(value)=>setAge(+value)}
        keyboardType='numeric'
        maxLength={2}
        />
        <Text style={styles.count1}>
          count = {number}
        </Text>
         <View>
          <Button color={"red"} 
          title='increase' onPress={()=>setNumber(number+1)}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10
  },
  count1:{
    color: 'blue',
    fontSize:40,
    borderColor:'green',
    fontWeight:600,
    gap:10
  },
  name1:{
    color:"red",
    fontSize:40,
    fontWeight:300
  },
  border1:{
    borderColor:"blue",
    borderWidth:1,
    width:200,
    padding:15
  },
  age1:{
   color:"red",
    fontSize:40,
    fontWeight:300
  }
  
});
