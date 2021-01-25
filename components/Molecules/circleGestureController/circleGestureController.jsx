import React from 'react';
import { View } from 'react-native';
import Circle from '../../Atoms/circle/circle'
import { Icon } from 'react-native-elements';

const color = 'rgba(0, 0, 0, 0.4)'
const type = 'material-community'



const CircleGestureController = () => {
    return (
        <View>
            <Circle icons={[
                <Icon name={'chevron-up'} type={type} color={color} />,
                <Icon name={'chevron-left'} type={type} color={color} />,
                <Icon name={'chevron-right'} type={type} color={color} />,
                <Icon name={'chevron-down'} type={type} color={color} />
            ]} />
        </View>
    )
}

export default CircleGestureController