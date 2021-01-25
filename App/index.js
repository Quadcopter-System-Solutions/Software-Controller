import React from 'react';
import { Text, View } from 'react-native';
import QuadControllerPage from '../components/Pages/QuadControllerPage/QuadControllerPage'


const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <QuadControllerPage />
    </View>
  );
}

export default YourApp;
// export {default} from '../storybook';
