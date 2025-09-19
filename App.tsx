import { StyleSheet, Text, View } from "react-native"
import HomeScreen from "./components/reviews/home"
import DetailScreen from "./components/reviews/detail"
import AboutScreen from "./components/reviews/about"

// Rest of the import statements

// Rest of the import statements

import { useFonts } from 'expo-font';


import * as SplashScreen from 'expo-splash-screen';

import {useEffect} from 'react';
import { OPENSANS_REGULAR } from "./utils/const";


SplashScreen.preventAutoHideAsync();


const App = () => {
    const [loaded, error] = useFonts({
       [OPENSANS_REGULAR] : require('./assets/fonts/OpenSans-Regular.ttf')
    
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
    return (
        <View style={style.container}>
            <HomeScreen/>
            <DetailScreen/>
            <AboutScreen/>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        paddingTop:40
    }
})
export default App