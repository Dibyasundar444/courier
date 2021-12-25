import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';

const price = "1050.00";
const paymentData=[
    {
        "id": "0",
        "title": "Cash on Pickup",
        "des": "Pay while pick a delivery"
    },
    {
        "id": "1",
        "title": "Cash on Delivery",
        "des": "Pay while drop a delivery"
    },
    {
        "id": "2",
        "title": "Credit/Debit Card",
        "des": "Pay from your card"
    },
    {
        "id": "3",
        "title": "UPI payment",
        "des": "Pay using upi id"
    }
];
export default function PaymentScreen({navigation}){
    const[checked, setChecked] = useState();
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name="chevron-back" color={"#fff"} size={38}/>
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Payment modes</Text>
            </View>
            <View style={styles.body}>
               <View style={{marginLeft:20}}>
                    <View style={{marginTop:20,marginBottom:20}}>
                        <Text style={{fontSize:22}}>Amount to pay ₹{price}</Text>
                    </View>
                    {
                        paymentData.map(item=>(
                            <TouchableOpacity style={styles.payment} key={item.id}>
                                {/* <Entypo name="circle" size={20} color="#fdb915" /> */}
                                <RadioButton
                                    value={item.id}                              
                                    status={checked === item.id ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked(item.id)}
                                />
                                <View style={{marginLeft:30}}>
                                    <Text style={{fontSize:16}}>{item.title}</Text>
                                    <Text style={{color:"gray"}}>{item.des}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
               </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fdb915"
    },
    header: {
        marginLeft:10,
        marginTop:20,
        flexDirection:"row"
    },
    headerTxt: {
        fontSize:24,
        color:"#fff",
        marginBottom:20,
        marginLeft:30
    },
    body: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 35,
        flex: 1
    },
    payment: {
        flexDirection:"row",
        alignItems:"center",
        marginBottom:30
    }
});