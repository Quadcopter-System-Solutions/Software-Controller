import React from 'react';
import { StyleSheet, View } from 'react-native'
import IconButton from '../../Atoms/iconButton/iconButton'
import Circle from '../../Atoms/circle/circle'

const color = 'black'
const type = 'material-community'
const size = 42

const onClickHandler = (hello) => {
    console.log(hello)
}

const CircleButtonController = ({ icons=[] }) => {
    return (
        <Circle icons={[
            <IconButton onPress={() => onClickHandler("up")} icon={{
                'name': 'arrow-up-drop-circle-outline',
                'type': type,
                'color': color,
                'size': size
            }}/>,
            <IconButton onPress={() => onClickHandler("left")} icon={{
                'name': 'rotate-left',
                'type': type,
                'color': color,
                'size': size
            }}/>,
            <IconButton onPress={() => onClickHandler("right")}  icon={{
                'name': 'rotate-right',
                'type': type,
                'color': color,
                'size': size
            }}/>,
            <IconButton onPress={() => onClickHandler("down")}  icon={{
                'name': 'arrow-down-drop-circle-outline',
                'type': type,
                'color': color,
                'size': size
            }}/>,
        ]} />
    )
}

const Styles = StyleSheet.create({

})

export default CircleButtonController