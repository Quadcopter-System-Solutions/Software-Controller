import React from 'react';
import { storiesOf } from '@storybook/react-native';

import QuadControllerPage from './QuadControllerPage'

import { BufferView } from '../../Particles/decorators'


storiesOf('Pages|QuadControllerPage', module)
    .addDecorator(BufferView)
    .add('default', () => (
        <QuadControllerPage />
    ))
