import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Circle from './circle'

import { BufferView } from '../../Particles/decorators'

storiesOf('Atoms|Circle', module)
    .addDecorator(BufferView)
    .add('default', () => (
        <Circle />
    ))
