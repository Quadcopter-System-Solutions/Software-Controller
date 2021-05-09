import React from "react";
import QuadControllerPage from "./components/Pages/QuadControllerPage/QuadControllerPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const App = () => {
  return (
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
  );
};
