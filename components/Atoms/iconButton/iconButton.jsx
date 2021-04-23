import React from 'react';
import { TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'

const IconButton = ({ onPress = () => { }, icon = {} }) => {
    var buttonIcon
    if(icon['type']){
        buttonIcon = <ButtonIcon name={icon['name']} type={icon['type']} color={icon['color']} size={icon['size']} />
    }else {
        buttonIcon = <ButtonIcon name={icon['name']} color={icon['color']} size={icon['size']} />
    }
    return (
        <TouchableOpacity onPress={onPress}>
            {buttonIcon}
        </TouchableOpacity>
    )
}

const ButtonIcon = ({ name, type='material-community', color='black', size }) => {
    return(
        <Icon
            name={name}
            type={type}
            color={color}
            size={size}
        />
    )
}

export default IconButton