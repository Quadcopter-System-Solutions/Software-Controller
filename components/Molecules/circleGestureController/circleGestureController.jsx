import React from "react";
import { View, StyleSheet } from "react-native";
import Circle from "../../Atoms/circle/circle";
import { CircleRadius } from "../../Atoms/circle/circle";
import { Icon } from "react-native-elements";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

const { set, cond, eq, Value, call, event } = Animated;

const color = "rgba(0, 0, 0, 0.4)";
const type = "material-community";
const radius = 70;

export default class CircleGestureController extends React.Component {
  constructor(props) {
    super(props);

    const absoluteX = new Value(0);
    const dragX = new Value(0);
    const absoluteY = new Value(0);
    const dragY = new Value(0);
    const state = new Value(-1);

    this.translateX = new Value(0);
    this.translateY = new Value(0);

    this.xVector = new Value(0.0);
    this.yVector = new Value(0.0);

    this.onGestureEvent = event([
      {
        nativeEvent: {
          translationX: dragX,
          translationY: dragY,
          absoluteX: absoluteX,
          absoluteY: absoluteY,
          state: state,
        },
      },
    ]);

    this.vectorChange = this.vectorChange.bind(this);

    const transX = new Value();
    this.translateX = cond(
      eq(state, State.ACTIVE),
      [
        // State Active
        set(transX, dragX),
        call([absoluteX, absoluteY], this.vectorChange),
        transX,
      ],
      [
        // State Inactive
        set(transX, 0),
        set(this.xVector, 0),
        set(this.yVector, 0),
        transX,
      ]
    );
    const transY = new Value();
    this.translateY = cond(
      eq(state, State.ACTIVE),
      [
        // State Active
        set(transY, dragY),
        transY,
      ],
      [
        // State Inactive
        set(transY, 0),
        transY,
      ]
    );
  }

  vectorChange([absoluteX, absoluteY]) {
    this.myComponent.measure((_fx, _fy, _width, _height, px, py) => {
      this.xVector = ((absoluteX - px - CircleRadius / 2) / CircleRadius) * 2;
      this.yVector =
        (((absoluteY - py - CircleRadius / 2) * -1) / CircleRadius) * 2;

      if (this.xVector > 1.0) this.xVector = 1;
      else if (this.xVector < -1.0) this.xVector = -1;
      if (this.yVector > 1.0) this.yVector = 1;
      else if (this.yVector < -1.0) this.yVector = -1;

      this.props.onPanGesture(this.xVector, this.yVector);
    });
  }

  render() {
    return (
      <View>
        <View
          ref={(view) => {
            this.myComponent = view;
          }}
        >
          <Circle
            style={Styles.circle}
            icons={[
              <Icon name={"chevron-up"} type={type} color={color} />,
              <Icon name={"chevron-left"} type={type} color={color} />,
              <Icon name={"chevron-right"} type={type} color={color} />,
              <Icon name={"chevron-down"} type={type} color={color} />,
            ]}
          />
        </View>
        <PanGestureHandler
          onGestureEvent={this.onGestureEvent}
          onHandlerStateChange={this.onGestureEvent}
        >
          <Animated.View
            style={[
              Styles.bubble,
              {
                transform: [
                  {
                    translateX: this.translateX,
                    translateY: this.translateY,
                  },
                ],
              },
            ]}
          ></Animated.View>
        </PanGestureHandler>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  x: {
    flexDirection: "row",
  },
  bubble: {
    position: "absolute",
    top: CircleRadius / 2 - radius / 2,
    left: CircleRadius / 2 - radius / 2,
    height: radius,
    width: radius,
    borderRadius: radius / 2,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
});
