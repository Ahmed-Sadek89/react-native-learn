import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
    return (
        // <View style={{flex: 1}}>
        //     <Slot />
        //     <Text>Ahmed Sadek</Text>
        // </View>
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#ddd" },
                headerTintColor: "#333",
            }}
        >
            <Stack.Screen name='index' options={{ title: "Homepage" }} />
            <Stack.Screen name='about' options={{ title: "About page" }} />
            <Stack.Screen name='contact' options={{ title: "Contact page", headerShown: false }} />
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({})