import React from 'react';
import { storiesOf } from '@storybook/react-native';

import MainControllers from './mainControllers'

import { BufferView } from '../../Particles/decorators'


storiesOf('Organisms|MainControllers', module)
    .addDecorator(BufferView)
    .add('default', () => (
        <MainControllers />
    ))
