import React from "react";
import { StyleSheet, View } from "react-native";

export const CircleRadius = 225;

class Circle extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.grid}>
          <View style={[Styles.row, Styles.rowTop]}>
            {this.props.icons && this.props.icons[0]}
          </View>
          <View style={[Styles.row, Styles.rowMid]}>
            {this.props.icons && this.props.icons[1]}
            {this.props.icons && this.props.icons[2]}
          </View>
          <View style={[Styles.row, Styles.rowBot]}>
            {this.props.icons && this.props.icons[3]}
          </View>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: CircleRadius / 2,
    height: CircleRadius,
    width: CircleRadius,
  },
  grid: {
    flex: 1,
    flexDirection: "column",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  rowTop: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  rowMid: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowBot: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default Circle;
