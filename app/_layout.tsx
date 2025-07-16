import { Stack } from "expo-router"

const RootLayout = () => {
  return (
    <Stack screenOptions={{
        headerStyle:{
            backgroundColor:"white"
        },
        headerTintColor: "black",
        headerTitleStyle:{
            fontWeight: 600,
            fontSize: 20,
        },
        headerShown:false,
        
    }}>
        <Stack.Screen name="(tab)"/>
        <Stack.Screen name="index"/>
        <Stack.Screen name="about"/>

    </Stack>
  )
}

export default RootLayout
