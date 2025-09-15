import { use, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
export default function App() {

  const [number,setNumber] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.hello1}>
         count = {number}
      </Text>
      <View>
        <Button color={"red"} 
        title='increase' onPress={()=>setNumber(number+1)}/>

        
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
  hello1:{
    color: 'blue',
    fontSize:40,
    borderColor:'green',
    fontWeight:600,
    gap:10
  },
  
});
