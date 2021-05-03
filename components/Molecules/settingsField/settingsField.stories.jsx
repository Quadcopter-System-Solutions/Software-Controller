import React from 'react';
import { storiesOf } from '@storybook/react-native';

import SettingsField from './settingsField'

import { BufferView } from '../../Particles/decorators'

storiesOf('Molecules|SettingsField', module)
    .addDecorator(BufferView)
    .add('default', () => (
        <SettingsField />
    ))
