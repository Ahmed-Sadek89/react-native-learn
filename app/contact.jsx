import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';

const Contact = () => {
  return (
    <View style={[styles.container]}>

      <Text style={styles.title}>Contact</Text>
      <Link href={"/"}>Home</Link>
    </View>
  )
}

export default Contact

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