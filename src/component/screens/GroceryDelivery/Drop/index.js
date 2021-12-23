import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";


const { height } = Dimensions.get("window");


export default function DropScreen(){
    const [number, onChangeNumber] = useState(null);
    return(
        <View style={{marginHorizontal:20,marginTop:20}}>
            <View style={styles.view1}>
                <View style={{marginLeft:10}}>
                    <Ionicons name="md-location-sharp" size={20} color={"#eda81c"} />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Enter Pickup..."
                    />
                </View>
            </View>
            <View style={[styles.view2,{marginTop:height/3.5}]}>
                <View style={styles.subView2}>
                    <FontAwesome name="location-arrow" color={"#eda81c"} size={20}/>
                    <View style={{marginLeft:20}}>
                        <Text>2020,hbuihgghg,tryfhfuytwtwu</Text>
                        <Text>2020,hbuihgghg,tryfhfuytwtwu</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.view2,{marginTop:10}]}>
                <View style={[styles.subView2,{marginVertical:15}]}>
                    <Entypo name="star" color={"#eda81c"} size={20}/>
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:18}}>City Garden</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.view2,{marginTop:10}]}>
                <View style={[styles.subView2,{marginVertical:15}]}>
                    <Ionicons name="person" color={"#eda81c"} size={20}/>
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:18}}>Sam Smith</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.view2,{marginTop:10}]}>
                <View style={[styles.subView2,{marginVertical:15}]}>
                    <Ionicons name="call" color={"#eda81c"} size={20}/>
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:18}}>+1 123456789</Text>
                    </View>
                </View>
            </View>
            <View style={{alignItems:"flex-end"}}>
                <TouchableOpacity style={styles.continue}>
                    <Text style={{color:"#fff",fontSize:16}}>Continue ↓</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      paddingRight:80,  
    },
    continue: {
        backgroundColor:"#eda81c",
        marginTop:30,
        height:40,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:15
    },
    view1: {
        flexDirection:"row",
        alignItems:"center",
        elevation:5,
        borderRadius:30,
        opacity:0.99,
        backgroundColor:"#fff"
    },
    view2: {
        elevation:5,borderRadius:10,
        opacity:0.99,
        backgroundColor:"#ebebeb"
    },
    subView2: {
        marginLeft:10,
        marginVertical:10,
        flexDirection:"row",
        alignItems:"center"
    }
  });
  