import React from "react";
import { storiesOf } from "@storybook/react-native";

import CircleGestureController from "./circleGestureController";

import { BufferView } from "../../Particles/decorators";

storiesOf("Molecules|CircleGestureController", module)
  .addDecorator(BufferView)
  .add("default", () => <CircleGestureController />);
