import { Text, View } from "react-native"

const about = () => {
  return (
   <View style={{
      backgroundColor: "darkblue",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
    <Text style={{color:"white", fontWeight:500}}>About Section</Text>
   </View>
  )
}

export default about
