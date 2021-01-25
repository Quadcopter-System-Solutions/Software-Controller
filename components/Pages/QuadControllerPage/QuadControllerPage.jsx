import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import IconButton from '../../Atoms/iconButton/iconButton';
import MainControllers from '../../Organisms/mainControllers/mainControllers';


const onClickHandler = (hello) => {
    console.log(hello)
}

const QuadControllerPage = () => {
    return (
        <View style={Styles.container}>
            <MainControllers style={Styles.controllers} />
            <View style={Styles.navBar}>
                <IconButton onPress={() => onClickHandler("settings")} icon={{
                    'name': 'cog',
                    'type': 'font-awesome',
                    'color': 'black'
                }}/>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    controllers: {
        alignSelf: 'center'
    },
    navBar: {
        alignSelf: 'flex-end'
    }
})

export default QuadControllerPage