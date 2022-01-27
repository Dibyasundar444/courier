import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import log from "./src/component/Verification";
import logs from "./src/component/logs";
import logss from "./src/component/logss";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import register from "./src/component/register";
// import logo from "./src/component/logo";
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
import Verification from "./src/component/Verification";
import Sign from "./src/component/sign";
import RateCalculator from "./src/component/screens/Account/screens/RateCalculatorScreen";
import { View } from "react-native";

const Stack = createStackNavigator();

const Mystack = () => {

  return (
    <View style={{flex:1,backgroundColor:"#e0ab24"}}>
      <Stack.Navigator headerMode="none" initialRouteName="logss">
        <Stack.Screen name="ArrangeDelivery" component={ArrangeDelivery} />
        <Stack.Screen name="verification" component={Verification} />
        <Stack.Screen name="logs" component={logs} />
        <Stack.Screen name="logss" component={logss} />
        <Stack.Screen name="sign" component={Sign} />
        <Stack.Screen name="register" component={register} />
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
        <Stack.Screen name="RateCalculator" component={RateCalculator} />
      </Stack.Navigator>
    </View>
  );
};

const AuthStack = ()=> {
  return(
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="sign" component={Sign} />
      <Stack.Screen name="verification" component={Verification} />
      <Stack.Screen name="register" component={register} />
      <Stack.Screen name="logss" component={logss} />
    </Stack.Navigator> 
  )
};

export default function App() {
  const [isToken, setIsToken] = useState(false);
  console.log(isToken);

  const isUser = async() => {
      try {
        let userData = await AsyncStorage.getItem('jwt');
        let data = JSON.parse(userData);
        if(data!==null){
          setIsToken(true);
        }else{
          setIsToken(false);
        }
      } catch(e) {
        console.log(e);
      }
  };

  useEffect(()=>{
    isUser();
  },[]);
  
  return (
    <NavigationContainer>
      {
        isToken ? <Mystack /> : <AuthStack />
      }
    </NavigationContainer>
  );
};
