import React from "react";
import { App } from "./App";
import { SafeAreaProvider } from "react-native-safe-area-context";

const contextApp = () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};

export default contextApp;
// export { default } from "../storybook";
