import { StyleSheet } from "react-native";
import {COLORS} from "./colors"
import {FWEIGHT} from "./fweight"

export const LoginScreenStyle = StyleSheet.create({
    LoginStyle: { width: "100%", height: "100%", backgroundColor: COLORS.DARK_BLUE },
    LoginContainer: {
        margin:20,
        flex:1,
        justifyContent:"space-evenly",
        alignSelf:"center",
        width:330,
    },
    TextUser:{
    },
    TextPass:{ 
    },
    Text: {
       
        marginTop: 50,
        marginLeft:30,
        fontSize: 35,
        fontWeight: FWEIGHT.BOLD,
        color: COLORS.LIGHT_BLUE,
    
      },
      buttonSession:{
        alignSelf:"center",
      }
});


