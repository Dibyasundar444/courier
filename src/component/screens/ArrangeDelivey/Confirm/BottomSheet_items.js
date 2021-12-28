import React, { useState } from "react";
import { View, Text, StyleSheet,Dimensions, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get("window");
const price1="1050.00";
const price2="2050.00";
const price3="3050.00";



export default function BottmSheet_item({delMode,setDelMode,closeSheet}){

    const segmentClicked=(index)=>{
        setDelMode(index);
    };
    return(
        <>
            <View style={{flex:1}}>
                <Text style={styles.view1}>Select Delivery Mode</Text>
                <View style={styles.view2}>
                    <TouchableOpacity style={styles.view2_1} active={delMode=="Usual"} onPress={()=>segmentClicked("Usual")} activeOpacity={0.6}>
                        <FontAwesome name={delMode==="Usual" ? "dot-circle-o":"circle-thin"} size={26} color="#fdb915" />
                        <View style={{flexWrap:"wrap",marginLeft:10}}>
                            <Text style={{fontSize:16}}>Usual Delivery</Text>
                            <Text style={styles.des}>Usually takes 2-3 days</Text>
                            <Text style={styles.des}>to deliver</Text>
                        </View>
                        <Text style={styles.price}>₹{price1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.view2_1} active={delMode=="Fast"} onPress={()=>segmentClicked("Fast")} activeOpacity={0.6}>
                        <FontAwesome name={delMode=="Fast" ? "dot-circle-o":"circle-thin"} size={26} color="#fdb915" />
                        <View style={{flexWrap:"wrap",marginLeft:10}}>
                            <Text style={{fontSize:16}}>Fast Delivery</Text>
                            <Text style={styles.des}>Assured 6 hour delivery</Text>
                        </View>
                        <Text style={styles.price}>₹{price2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.view2_1} active={delMode=="Superfast"} onPress={()=>segmentClicked("Superfast")} activeOpacity={0.6}>
                        <FontAwesome name={delMode=="Superfast" ? "dot-circle-o":"circle-thin"} size={26} color="#fdb915" />
                        <View style={{flexWrap:"wrap",marginLeft:10}}>
                            <Text style={{fontSize:16}}>Superfast Delivery</Text>
                            <Text style={styles.des}>Dedicated delivery boy</Text>
                            <Text style={styles.des}>delivers in 2-3 hours</Text>
                        </View>
                        <Text style={styles.price}>₹{price3}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.update} activeOpacity={0.6} onPress={closeSheet}>
                    <Text style={styles.txtUpdate}>Update</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    update: {
        justifyContent:"center",
        alignItems:"center",
        borderTopRightRadius:30,
        backgroundColor:"#fdb915",
    },
    view1: {
        textAlign:"center",
        fontSize:18,
        fontWeight:"bold"
    },
    view2: {
        flex:1,
        marginHorizontal:20,
        marginTop:20
    },
    view2_1: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop: 20
    },
    des: {
        color:"gray",
        flexWrap:"wrap",
        fontSize:14
    },
    price: {
        fontWeight:"bold",
        fontSize:16
    },
    txtUpdate: {
        marginVertical:15,
        color:"#fff",
        fontWeight:"bold",
        fontSize:15
    }
});