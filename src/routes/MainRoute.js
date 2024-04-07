import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home';
import Dream from '../screens/Dream';
import DreamDetails from '../screens/DreamDetails';
import LatHtaukQuestion from '../screens/LatHtaukQuestion';
import LatHtaukNumber from '../screens/LatHtaukNumber';
import LatHtaukAnswer from '../screens/LatHtaukAnswer';


const Stack = createNativeStackNavigator();


const MainRoute = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false,animation:"fade",animationTypeForReplace:"push",presentation:"transparentModal"}} >
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='dream' component={Dream} />
            <Stack.Screen name='dreamdetails' component={DreamDetails} />
            <Stack.Screen name='latquestion' component={LatHtaukQuestion} />
            <Stack.Screen name='latnumber' component={LatHtaukNumber} />
            <Stack.Screen name='latanswer' component={LatHtaukAnswer} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainRoute