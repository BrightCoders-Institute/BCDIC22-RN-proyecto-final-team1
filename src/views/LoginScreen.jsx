import { Text, View } from 'react-native'
import React, { Component } from 'react'
import ButtonBlue from "../components/ButtonBlue";
import { TextInput } from 'react-native-paper';
import { LoginScreenStyle } from "../themes/LoginStyle";
import {COLORS} from "../themes/colors"

export class LoginScreen extends Component {
  render() {
    return (
      <View style={LoginScreenStyle.LoginStyle}>
        <Text style={LoginScreenStyle.Text}>Iniciar Sesión</Text>
          <View style={LoginScreenStyle.LoginContainer}>
            <TextInput
                            mode="outlined"
                            label="Correo electronico"
                            outlineColor={COLORS.LIGHT_BLUE}
                            activeOutlineColor={COLORS.LIGHT_BLUE}
                            textColor={COLORS.WHITE}
                            style={{backgroundColor: COLORS.DARK_BLUE}}
                      />
                      <TextInput
                          mode="outlined"
                          label="Contraseña"
                          outlineColor={COLORS.LIGHT_BLUE}
                          activeOutlineColor={COLORS.LIGHT_BLUE}
                          textColor={COLORS.WHITE}
                          style={{ backgroundColor:COLORS.DARK_BLUE}}
                      />
                
                  <View View style={LoginScreenStyle.buttonSession}>
                    <ButtonBlue Text="Iniciar sesion"/>
                  </View>
              
          </View> 
      </View>
    )
  }
}

export default LoginScreen