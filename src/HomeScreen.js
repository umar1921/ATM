import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import CustomeButton from '../components/CustomButton'
import { FontAwesome5 } from '@expo/vector-icons';

import colors from '../config/Colors'
import Screen from '../components/Screen'

const HomeScreen = ({ navigation }) => {

    return (
        <Screen>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welTxt}>Welcome</Text>
            </View>
            <View style={styles.buttonsGroup}>
                <View style={styles.innerView}>
                    <CustomeButton onPress={() => navigation.navigate('Withdrawal')} text='Withdrawal' />
                    <CustomeButton onPress={() => navigation.navigate('Deposit')} text='Deposit' />
                    <CustomeButton text='Amount' />
                </View>
                <View style={styles.circleCenter}>
                    <FontAwesome5 name="unlock-alt" size={50} color={Colors.primary} />
                </View>
                <View style={styles.innerView}>
                    <CustomeButton onPress={() => navigation.navigate('Balance')} text='Balance' />
                    <CustomeButton onPress={() => navigation.navigate('FastCash')} text='Fast Cash' />
                    <CustomeButton text='Others' />
                </View>
            </View>
        </Screen>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    welcomeContainer: {
        alignItems: 'center',
        paddingBottom: 20
    },
    welTxt: {
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.primary
    },
    buttonsGroup: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
    },
    circleCenter: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderColor: colors.primary,
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userTxt: {
        fontSize: 24,
        color: colors.primary
    },
})