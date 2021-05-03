import React from 'react';
import { Text, View , SafeAreaView, StyleSheet} from 'react-native';
import QuadControllerPage from '../components/Pages/QuadControllerPage/QuadControllerPage'


const YourApp = () => {
  return (
    <SafeAreaView style={ Styles.container }>
      <QuadControllerPage />
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})


// export default YourApp;
export {default} from '../storybook';
