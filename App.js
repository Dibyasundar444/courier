import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import log from "./src/component/log";
import logs from "./src/component/logs";
import logss from "./src/component/logss";
import sign from "./src/component/sign";
import { NavigationContainer } from "@react-navigation/native";
import register from "./src/component/register";
import logo from "./src/component/logo";
import { View, Image, Text } from "react-native";
import ArrangeDelivery from "./src/component/screens/ArrangeDelivey";
import FoodDelivery from "./src/component/screens/FoodDelivery";

const Stack = createStackNavigator();
const Mystack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="logo" component={logo} />
      <Stack.Screen name="log" component={log} />
      <Stack.Screen name="logs" component={logs} />
      <Stack.Screen name="logss" component={logss} />
      <Stack.Screen name="sign" component={sign} />
      <Stack.Screen name="register" component={register} />
      <Stack.Screen name="ArrangeDelivery" component={ArrangeDelivery} />
      <Stack.Screen name="FoodDelivery" component={FoodDelivery} />
      <Stack.Screen name="GroceryDelivery" component={ArrangeDelivery} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Mystack />
    </NavigationContainer>
  );
}
