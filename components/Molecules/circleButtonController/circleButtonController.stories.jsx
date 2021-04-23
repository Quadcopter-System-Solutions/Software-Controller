import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CircleButtonController from './circleButtonController'

import { BufferView } from '../../Particles/decorators'

storiesOf('Molecules|CircleButtonController', module)
    .addDecorator(BufferView)
    .add('default', () => (
        <CircleButtonController />
    ))
