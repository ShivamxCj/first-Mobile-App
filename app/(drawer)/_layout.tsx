import React from 'react'
import { View } from 'react-native'
import {GestureHandlerRootView} from "react-native-gesture-handler"
import { Drawer } from 'expo-router/drawer';


const drawerRoot = () => {
  return (
    <GestureHandlerRootView>
      <Drawer/>
    </GestureHandlerRootView>
  )
}

export default drawerRoot
