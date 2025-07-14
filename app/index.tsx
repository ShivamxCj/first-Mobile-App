import { Text, View } from 'react-native'

const Index = () => {
  return (
    <View style={{
      backgroundColor: "darkblue",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text style={{
        fontSize:30, fontWeight:700, color:"white",
      }}>My first app</Text>

      <Text style={{
        fontSize:17, fontWeight:500, color:"gray",
      }}>Trying App developement</Text>
    </View>
  )
}

export default Index
