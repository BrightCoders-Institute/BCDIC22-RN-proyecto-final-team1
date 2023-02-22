import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const SignUpStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.DARK_BLUE
    },
    scroll: {
        marginTop: 80,
        marginHorizontal: 40
    },
    title: {
        fontWeight: 'bold',
        color: COLORS.LIGHT_BLUE,
        fontSize: 25,
        marginBottom: 20
    },
    input: {
        backgroundColor: COLORS.DARK_BLUE,
        marginVertical:10
    },
    button: {
        alignItems: 'center',
        marginTop: 25
    }
});
