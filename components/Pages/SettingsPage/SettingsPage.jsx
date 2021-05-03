import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';

import SettingsField from '../../Molecules/settingsField/settingsField'

export default SettingsPage = () => {
    return (
        <View style={Styles.container}>
            <Text>Settings Page</Text>
            <SettingsField />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
})
