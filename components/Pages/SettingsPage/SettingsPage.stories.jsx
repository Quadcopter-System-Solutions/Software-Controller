import React from 'react';
import { storiesOf } from '@storybook/react-native';

import SettingsPage from './SettingsPage'


storiesOf('Pages|SettingsPage', module)
    .add('default', () => (
        <SettingsPage />
    ))
