import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome } from '@expo/vector-icons';


const price = "1050.00";
const text1 = "Your Pickup has been arranged";
const text2 = "Thanks for choosing us for";
const text3 = "delivering your valuable stuffs."
const { width } = Dimensions.get("window")


export default function PickupAssigned({navigation,route}){

    const navigateData = route.params;
    // console.log(navigateData);


    const proceed=()=>{};

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name="chevron-back" color={"#fff"} size={38}/>
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Pickup Assigned</Text>
            </View>
            <View style={styles.body}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{alignItems:"center",height:200,marginTop:20}}>
                        <Image source={require("../../../../image/appIcon.png")} style={{resizeMode:"contain",width:"100%",height:"100%"}}/>
                    </View>
                    <Text style={{textAlign:"center",fontSize:16,fontWeight:"bold",marginTop:30}}>{text1}</Text>
                    <Text style={{textAlign:"center",fontSize:13,fontWeight:"bold",marginTop:20}}>{text2}</Text>
                    <Text style={{textAlign:"center",fontSize:13,fontWeight:"bold"}}>{text3}</Text>
                    <View style={styles.card}>
                        <View style={{flexDirection:"row",marginTop:10,width:width/1.5}}>
                            <View style={{marginTop:10}}>
                                <Ionicons name="md-location-sharp" size={24} color="#fdb915" />
                            </View>
                            <View style={{marginLeft:30}}>                               
                                <Text style={{color:"gray",fontWeight:"bold"}}>Walmart</Text>                                                            
                                <Text style={{fontSize:18}}>Emili Williamson</Text>                                                          
                                <Text style={{fontSize:14}}>{navigateData.slocation}</Text>                                                           
                                <Text style={{fontSize:14}}>10013, United States</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",marginVertical:10,width:width/1.5}}>
                            <View style={{marginTop:10}}>
                                <FontAwesome name="location-arrow" size={24} color="#fdb915" />
                            </View>
                            <View style={{marginLeft:30}}>                               
                                <Text style={{color:"gray",fontWeight:"bold"}}>City Garden</Text>                                                             
                                <Text style={{fontSize:18}}>{navigateData.rname}</Text>                                                                
                                <Text style={{fontSize:14}}>{navigateData.rlocation}</Text>                                 
                                <Text style={{fontSize:14}}>10013, United States</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.proceed} activeOpacity={0.6} onPress={proceed}>
                <Text style={styles.txtProceed}>Track my courier</Text>
            </TouchableOpacity>
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
        flex: 1,
    },
    proceed:{
        borderTopRightRadius:30,
        backgroundColor:"#fdb915",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        bottom:0,
        width:"100%"
    },
    txtProceed: {
        color:"#fff",
        fontWeight:"bold",
        marginVertical:15
    },
    title: {
        marginLeft:30,
        marginTop:20
    },
    card: {
        backgroundColor:"#e1f7f3",
        borderRadius:20,
        marginTop:20,
        marginHorizontal:20,
        elevation:16,
        alignItems:"center",
        marginBottom:100
    },
});