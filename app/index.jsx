import { Image, StyleSheet, Text, View } from 'react-native'
import Sadek from '../assets/images/ahmed-sadek.jpeg';

const index = () => {
  return (
    <View style={[styles.container]}>
      <Image 
        source={Sadek}
        style={[styles.mainImage]}
      />
      <Text style={styles.title}>Ahmed Sadek</Text>
      <Text style={styles.subtitle}>Frontend developer & Instructor</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 20
  },
  mainImage: {
    width:300,
    height:300,
    borderRadius: 20,
  },  
  title: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: 20,
    fontWeight: "bold",
    fontSize: 30
  },
  subtitle: {
    fontSize: 20,
    color: "#333",
    textDecorationLine: "underline"
  }
})

export default index