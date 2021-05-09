import React, { useMemo, useState } from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Grid, Row } from "react-native-easy-grid";
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
    console.log(x, y);
  };

  const controls = useMemo(() => {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <MainControllers onPanGesture={handlePanGesture} />
      </View>
    );
  }, []);

  const bottomNav = useMemo(() => {
    return (
      <View style={Styles.bottomNav}>
        <IconButton
          onPress={() => onClickHandler("settings")}
          icon={{
            name: "cog",
            type: "font-awesome",
            color: "black",
          }}
        />
      </View>
    );
  }, []);

  return (
    <ImageBackground
      style={Styles.container}
      source={{ uri: `data:image/png;base64,${videoFrame}` }}
    >
      <Grid
        style={{ paddingLeft: insets.bottom, paddingRight: insets.top }}
        justifyContent="space-between"
      >
        <Row size={8}>{controls}</Row>
        <Row size={1}>{bottomNav}</Row>
      </Grid>
    </ImageBackground>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  bottomNav: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
