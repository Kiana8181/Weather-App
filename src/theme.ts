import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { switchTheme } from "./components/common/SwitchTheme";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    body: "Gilroy-Regular",
  },
  components: { Switch: switchTheme },
});

export default theme;
