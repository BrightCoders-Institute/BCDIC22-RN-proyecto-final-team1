import "react-native-gesture-handler";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React, { Component } from "react";
import AddRecord from "../views/AddRecord";
import MyRecords from "../views/MyRecords";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./../views/LoginScreen";
import SignUpScreen from "../views/SignUpScreen";
import StartupScreen from "../views/StartupScreen";
import Details from "../views/Details";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Image, Text } from "react-native";
import { indexStyle } from "../themes/IndexStyle";
import { COLORS } from "../themes/colors";
import Uploadimg from "../views/UploadImg";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={indexStyle.containerHeader}>
        <View style={indexStyle.containerLogo}>
          <Image
            source={require("../../img/damageControl.png")}
            style={indexStyle.imgLogo}
          />
          <Text style={indexStyle.textLogo}>Damage Control</Text>
        </View>
        <Text style={indexStyle.textUser}>Usuario{"\n"}example@gmail.com</Text>
      </View>
      <View style={indexStyle.containerDrawer}>
        <DrawerItemList {...props} />
        <View style={indexStyle.containerLogout}>
          <DrawerItem
            label="Cerrar sesión"
            labelStyle={indexStyle.drawerText}
            onPress={() => props.navigation.navigate("Login")}
            icon={({ focused, size }) => (
              <MaterialCommunityIcons
                name="logout"
                size={size}
                color={focused ? COLORS.WHITE : COLORS.BLACK}
              />
            )}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: COLORS.WHITE,
        drawerInactiveTintColor: COLORS.BLACK,
        drawerActiveBackgroundColor: COLORS.LIGHT_BLUE,
        drawerLabelStyle: indexStyle.dtextStyle,
        headerShown: true,
        headerTransparent: true,
        headerTitle: "",
        headerTintColor: COLORS.WHITE,
        headerLeftContainerStyle: indexStyle.dtextContainer,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Crear reportes"
        component={Uploadimg}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="notebook-edit-outline"
              size={size}
              color={focused ? COLORS.WHITE : COLORS.BLACK}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Mis Reportes"
        component={MyRecords}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="newspaper-variant-multiple-outline"
              size={size}
              color={focused ? COLORS.WHITE : COLORS.BLACK}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export class Index extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="StartupScreen"
        >
          <Stack.Screen name="StartupScreen" component={StartupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="MyDrawer" component={MyDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Index;
