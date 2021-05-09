import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { text, select } from "@storybook/addon-knobs";

import IconButton from "./iconButton";

import { BufferView } from "../../Particles/decorators";

import knobData from "./iconButton.knobs.json";
const { icons } = knobData;

const onClickHandler = () => {
  console.log("tapped-press-me");
};

storiesOf("Atoms|iconButton", module)
  .addDecorator(BufferView)
  .add("icon-material-community", () => (
    <IconButton
      onPress={onClickHandler}
      icon={{
        name: select(icons.label, icons.options, icons.default, icons.group),
        type: "material-community",
        color: text("Color", "black", icons.group),
      }}
    />
  ));
