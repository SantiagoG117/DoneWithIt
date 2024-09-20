import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

export default {
    //Copy all the properties of the DefaultTheme object
    ...DefaultTheme,
    //Override some of the properties of DefaultTheme
    colors: {
        //copy all the properties of DefaultTheme.colors
        ...DefaultTheme.colors,
        primary: colors.primary,
        text: colors.primary,
        background: colors.white
    }
  }
