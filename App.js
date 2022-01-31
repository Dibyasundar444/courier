import React, { useCallback, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from 'expo-splash-screen';


import logs from "./src/component/logs";
import logss from "./src/component/logss";
import Register from "./src/component/register";
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




export default function App(){

  const Stack = createStackNavigator();
  const [token, setToken] = useState(null);
  const [appIsReady, setAppIsReady] = useState(false);

  const isUser = async() => {
      try {
        let userData = await AsyncStorage.getItem('jwt');
        let data = JSON.parse(userData);
        if(data !== null){
          setToken(data);
        }else{
          setToken(null);
        }
      } catch(e) {
        console.log("Error while accessing token: ",e);
      }
  };

  useEffect(()=>{
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await isUser();
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.log(e);
      } finally {
        setAppIsReady(true);
      }
    };
    prepare();
  },[]);


  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  };

  return (
    <NavigationContainer>
      <View style={{flex:1,backgroundColor:"#e0ab24"}} onLayout={onLayoutRootView}>
        <Stack.Navigator headerMode="none" initialRouteName={token ? "logss" : "sign"}>
          <Stack.Screen name="ArrangeDelivery" component={ArrangeDelivery} />
          <Stack.Screen name="verification" component={Verification} />
          <Stack.Screen name="logs" component={logs} />
          <Stack.Screen name="logss" component={logss} />
          <Stack.Screen name="sign" component={Sign} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="FoodDelivery" component={FoodDelivery} />
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
    </NavigationContainer>
  );
};
