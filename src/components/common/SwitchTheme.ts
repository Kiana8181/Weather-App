import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {},
  thumb: {
    bg: "black",
  },
  track: {
    bg: "#D9D9D9",
    _checked: {
      bg: "#FDCA72",
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
