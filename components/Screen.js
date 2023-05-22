import { StyleSheet, StatusBar, Platform, SafeAreaView } from 'react-native'
import React from 'react'

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.container, style]}>
            {children}
        </SafeAreaView>
    )
}
export default Screen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 200,
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})