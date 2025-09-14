import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.header}>Land dau su dung</Text>
      </View>
      <Text style={styles.hello1}>Hello world 1</Text>
      <Text>Hello world 2!</Text>
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
    borderRadius:8,
    borderWidth:1,
    gap:10
  },
  header:{
    fontFamily:"bold",
    fontSize:50,
    padding:5,
    justifyContent:"center",
    alignItems:'center',
    color:'cyan'
  }
});
