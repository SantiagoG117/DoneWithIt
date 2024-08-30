import { Platform } from "react-native";
import colors from "./colors";

//Represents the default styles of the app:
export default {
    text: {
        fontSize: 18,
        color: colors.darkgray,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
    } 
}
