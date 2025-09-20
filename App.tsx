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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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
  const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
              name="home" 
              component={HomeScreen}
              options={{ title: 'Overview' }}
              />
              <Stack.Screen 
              name = "review-detail" 
              component={DetailScreen}
              options={{title:'Chi tiết review'}}
              
              />
            </Stack.Navigator>
          </NavigationContainer>
    )
}
const style = StyleSheet.create({
    container:{
        paddingTop:40
    }
})
export default App