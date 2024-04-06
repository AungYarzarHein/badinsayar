import React from 'react'
import { StatusBar, View } from 'react-native'
import MainRoute from './src/routes/MainRoute'

const App = () => {
  return (
    <View style={{flex:1}} >
      <StatusBar hidden={true} />
      <MainRoute />
    </View>
  )
}

export default App