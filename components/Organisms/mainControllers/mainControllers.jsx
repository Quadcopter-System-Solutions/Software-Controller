import React from 'react';
import { StyleSheet, View } from 'react-native';
import CircleButtonController from '../../Molecules/circleButtonController/circleButtonController';
import CircleGestureController from '../../Molecules/circleGestureController/circleGestureController';


const MainControllers = () => {
    return (
        <View style={Styles.container}>
            <CircleGestureController />
            <CircleButtonController />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default MainControllers