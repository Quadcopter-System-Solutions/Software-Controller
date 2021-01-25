import React from 'react';
import { StyleSheet, View } from 'react-native'

const radius = 225

const Circle = ({ icons=[] }) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.grid}>
                <View style={[Styles.row, Styles.rowTop]}>
                    {icons[0]}
                </View>
                <View style={[Styles.row, Styles.rowMid]}>
                    {icons[1]}
                    {icons[2]}
                </View>
                <View style={[Styles.row, Styles.rowBot]}>
                    {icons[3]}
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: radius/2,
        height: radius,
        width: radius,
    },
    grid: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    rowTop: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    rowMid: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowBot: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
})

export default Circle