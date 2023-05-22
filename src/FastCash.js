import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React, { useContext } from 'react'
import { FlatGrid } from 'react-native-super-grid'

import { AmountContext } from '../context/AmountContext'

import Screen from '../components/Screen'
import colors from '../config/Colors'

var dataList = [
    {
        id: 0,
        value: 100,
        isEnabled: true
    },
    {
        id: 1,
        value: 200,
        isEnabled: true
    },
    {
        id: 2,
        value: 300,
        isEnabled: true
    },
    {
        id: 3,
        value: 500,
        isEnabled: true
    }
]
const FastCashData = () => {
    const { amount, saveAmount } = useContext(AmountContext)

    const handleSelectItem = (item) => {
        const newTotal = parseInt(amount) - parseInt(item)
        saveAmount(newTotal)
    };

    return (
        <Screen>
            <View style={styles.heading}>
                <Text style={styles.titleTxt}>Select Amount</Text>
            </View>
            <View style={styles.btnGroup}>
                <FlatGrid
                    data={dataList}
                    renderItem={({ item }) => {
                        if (item.value < amount) {
                            item.isEnabled = true
                        }
                        else {
                            item.isEnabled = false
                        }
                        return (
                            <TouchableHighlight
                                disabled={!item.isEnabled}
                                activeOpacity={.6}
                                underlayColor={colors.white_color}
                                style={[styles.btnNormal, {
                                    backgroundColor: !item.isEnabled ? '#dedede' : null,
                                    borderColor: !item.isEnabled ? '#dedede' : colors.primary
                                }]}
                                onPress={() => handleSelectItem(item.value)}>
                                <Text style={[styles.itemsTxt, {
                                    color: !item.isEnabled ? '#898989' : colors.primary
                                }]}>{item.value}</Text>
                            </TouchableHighlight>
                        )
                    }}
                />
            </View>
            <Text style={{
                textAlign: 'center',
                fontSize: 20,
                color: colors.primary
            }}>Balance Is: <Text style={styles.amountStyle}>{amount}</Text> </Text>
        </Screen>
    )
}

export default FastCashData

const styles = StyleSheet.create({
    btnGroup: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnNormal: {
        borderRadius: 5,
        borderColor: colors.primary,
        borderWidth: 2,
        margin: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemsTxt: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: '600'
    },
    btnCheckBalance: {
        paddingHorizontal: 20,
        alignSelf: 'center',
        width: '50%'
    },
    heading: {
        alignItems: 'center',
    },
    titleTxt: {
        color: colors.primary,
        fontSize: 35,
        paddingBottom: 10
    },
    amountStyle: {
        fontWeight: '700'
    }
})