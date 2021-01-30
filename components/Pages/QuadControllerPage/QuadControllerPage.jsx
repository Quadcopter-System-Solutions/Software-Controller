import React, { useState } from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import IconButton from '../../Atoms/iconButton/iconButton';
import MainControllers from '../../Organisms/mainControllers/mainControllers';


const onClickHandler = (hello) => {
    console.log(hello)
}

export default QuadControllerPage = () => {
    const [xVec, setXVec] = useState(0.0)
    const [yVec, setYVec] = useState(0.0)

    const handlePanGesture = (x, y) => {
        setXVec(x)
        setYVec(y)
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.controllers}>
                <MainControllers onPanGesture={handlePanGesture} />
            </View>
            <View style={Styles.navBar}>
                <View style={Styles.navBarTextContainer}>
                    <View>
                        <Text style={Styles.navBarText}>X Vector: {((xVec * 100).toFixed(2))} %</Text>
                    </View>
                    <View>
                        <Text style={Styles.navBarText}>Y Vector: {((yVec * 100).toFixed(2))} %</Text>
                    </View>
                </View>
                <View style={Styles.navBarSettings}>
                <IconButton onPress={() => onClickHandler("settings")} icon={{
                    'name': 'cog',
                    'type': 'font-awesome',
                    'color': 'black'
                }}/>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    controllers: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    navBar: {
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    navBarTextContainer: {
        flexDirection: 'column'
    },
    navBarText: {
        margin: 5,
        fontWeight: "bold",
        fontSize: 13,
    },
    navBarSettings: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
})
