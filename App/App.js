import React from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Col, Row, Grid } from "react-native-easy-grid";
import QuadControllerPage from "./components/Pages/QuadControllerPage/QuadControllerPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const App = () => {
  const insets = useSafeAreaInsets();

  return (
    <Grid style={{ paddingLeft: insets.bottom, paddingRight: insets.top }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStatusBarHeight: 0,
          }}
        >
          <Stack.Screen
            name="QuadSquad Controller"
            component={QuadControllerPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Grid>
  );
};
