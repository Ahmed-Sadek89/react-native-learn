import { Image, StyleSheet, Text, View } from 'react-native'
import Sadek from '../assets/images/ahmed-sadek.jpeg';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View style={[styles.container]}>
      <Image
        source={Sadek}
        style={[styles.mainImage]}
      />
      <View>
        <Text style={styles.title}>Ahmed Sadek</Text>
        <Text style={styles.subtitle}>Frontend developer & Instructor</Text>
      </View>
      <View style={styles.links}>
        <Link href={"/about"} style={styles.link}>About</Link>
        <Link href={"/contact"} style={styles.link}>Contact</Link>
      </View>
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
    width: 300,
    height: 300,
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
  },
  links: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10
  },
  link: {
    textDecorationLine: "underline",
    color: "blue"
  }
})

export default index