import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home';
import Dream from '../screens/Dream';
import DreamDetails from '../screens/DreamDetails';


const Stack = createNativeStackNavigator();


const MainRoute = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false,animation:"fade",animationTypeForReplace:"push",presentation:"transparentModal"}} >
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='dream' component={Dream} />
            <Stack.Screen name='dreamdetails' component={DreamDetails} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainRoute