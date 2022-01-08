import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import log from "./src/component/log";
import logs from "./src/component/logs";
import logss from "./src/component/logss";
import sign from "./src/component/sign";
import { NavigationContainer } from "@react-navigation/native";
import register from "./src/component/register";
import logo from "./src/component/logo";
import ArrangeDelivery from "./src/component/screens/ArrangeDelivey";
import FoodDelivery from "./src/component/screens/FoodDelivery";
import Account from "./src/component/screens/Account";
import AddressScreen from "./src/component/screens/Account/screens/SavedAddress/index";
import LanguageScreen from "./src/component/screens/Account/screens/LanguageScreen";
import ContactScreen from "./src/component/screens/Account/screens/ContactScreen";
import T_C_Screen from "./src/component/screens/Account/screens/T&C_screen";
import ProfileScreen from "./src/component/screens/Account/screens/ProfileScreen";
import MyDeliveries from "./src/component/screens/MyDelivery";
import PaymentScreen from "./src/component/screens/ArrangeDelivey/Payment/PaymentScreen";
import OrderDetailsScreen from "./src/component/screens/MyDelivery/component/OrderDetailsScreen";
import MyMap from "./src/component/screens/ArrangeDelivey/Confirm/Map";
import PickupAssigned from "./src/component/screens/ArrangeDelivey/Payment/PickupAssignedScreen";

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
      {/* <Stack.Screen name="GroceryDelivery" component={ArrangeDelivery} /> */}
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Adresses" component={AddressScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Terms" component={T_C_Screen} />
      <Stack.Screen name="myDeliveries" component={MyDeliveries} />
      <Stack.Screen name="payment" component={PaymentScreen} />
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
      <Stack.Screen name="Map" component={MyMap} />
      <Stack.Screen name="Pickup Assigned" component={PickupAssigned} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Mystack />
    </NavigationContainer>
  );
};
