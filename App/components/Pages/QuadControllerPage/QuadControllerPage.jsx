import React, { useState } from "react";
import { Text, ImageBackground } from "react-native";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import IconButton from "../../Atoms/iconButton/iconButton";
import MainControllers from "../../Organisms/mainControllers/mainControllers";
import { useWebsocket } from "../../Particles/hooks";

const onClickHandler = (hello) => {
  console.log(hello);
};

export default QuadControllerPage = (props) => {
  const insets = useSafeAreaInsets();

  const [xVec, setXVec] = useState(0.0);
  const [yVec, setYVec] = useState(0.0);
  const videoFrame = useWebsocket();

  const handlePanGesture = (x, y) => {
    setXVec(x);
    setYVec(y);
  };

  return (
    <ImageBackground
      style={Styles.container}
      source={{ uri: `data:image/png;base64,${videoFrame}` }}
    >
      <View
        style={[
          Styles.controllers,
          { paddingLeft: insets.left, paddingRight: insets.right },
        ]}
      >
        <MainControllers onPanGesture={handlePanGesture} />
      </View>
      <View style={Styles.navBar}>
        <View style={Styles.navBarTextContainer}>
          <View>
            <Text style={Styles.navBarText}>
              X Vector: {(xVec * 100).toFixed(2)} %
            </Text>
          </View>
          <View>
            <Text style={Styles.navBarText}>
              Y Vector: {(yVec * 100).toFixed(2)} %
            </Text>
          </View>
        </View>
        <View style={Styles.navBarSettings}>
          <IconButton
            onPress={() => onClickHandler("settings")}
            icon={{
              name: "cog",
              type: "font-awesome",
              color: "black",
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  controllers: {
    flex: 1,
    justifyContent: "flex-start",
  },
  navBar: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navBarTextContainer: {
    flexDirection: "column",
  },
  navBarText: {
    margin: 5,
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
    textShadowColor: "#585858",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  navBarSettings: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
