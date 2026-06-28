import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';

const About = () => {
  return (
    <View style={[styles.container]}>

      <Text style={styles.title}>About</Text>
      <Link href={"/"}>Home</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 20
  }, 
  title: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: 20,
    fontWeight: "bold",
    fontSize: 30
  }
})