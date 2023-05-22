import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import { AmountContext } from '../context/AmountContext'

import colors from '../config/Colors'
import Screen from '../components/Screen'

const Balance = () => {
    const { amount } = useContext(AmountContext)
    formatedTotalAmount = amount.toLocaleString('ur-PK', { currency: 'PKR', style: 'currency' }); // or en-PK
    return (
        <Screen>
            <View style={styles.innerContainer}>
                <Text style={styles.balanceTxt}>Your Balance is:</Text>
                <Text style={styles.balance}>{formatedTotalAmount}</Text>
            </View>

        </Screen>
    )
}

export default Balance

const styles = StyleSheet.create({
    innerContainer: {
        alignItems: 'center',
    },
    balanceTxt: {
        fontSize: 25,
        color: colors.primary
    },
    balance: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.primary
    }
})