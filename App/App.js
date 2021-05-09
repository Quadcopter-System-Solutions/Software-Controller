import React from "react";
import { Grid } from "react-native-easy-grid";
import QuadControllerPage from "./components/Pages/QuadControllerPage/QuadControllerPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const App = () => {
  return (
    <Grid>
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
