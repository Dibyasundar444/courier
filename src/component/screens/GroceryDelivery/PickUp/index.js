import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import { Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";
import MapView from 'react-native-maps';


const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default function PickUPScreen(){
    const [text, setText] = useState("");
    return(
        <View style={{}}>
            <MapView style={styles.map} />
            <View style={{position:"absolute",marginTop:20,marginHorizontal:10,width:width/1.35}}>
                <View style={{flexDirection:"row",alignItems:"center",elevation:5,borderRadius:30,opacity:0.99,backgroundColor:"#fff"}}>
                    <View style={{marginRight:10,marginLeft:20}}>
                        <Ionicons name="md-location-sharp" size={20} color="#eda81c" />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={setText}
                            value={text}
                            placeholder="Enter Pickup..."
                        />
                    </View>
                </View>
                <View style={{elevation:5,borderRadius:10,opacity:0.99,backgroundColor:"#fff",marginTop:10}}>
                    <View style={{marginLeft:20,marginTop:10}}>
                        <View>
                            <Text style={{color:"gray",fontSize:16}}>Saved Addresses</Text>
                        </View>
                        <View style={{marginTop:10}}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Entypo name="home" size={24} color="#eda81c" />
                                <Text style={{marginLeft:40}}>Home</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems:"center",marginVertical:20,marginLeft:3}}>
                                <FontAwesome  name="building-o" size={24} color="#eda81c" />
                                <Text style={{marginLeft:40}}>Office</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems:"center",marginBottom:30,marginLeft:3}}>
                                <FontAwesome  name="building-o" size={24} color="#eda81c" />
                                <Text style={{marginLeft:40}}>Other</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{elevation:5,borderRadius:10,opacity:0.99,backgroundColor:"#fff",marginTop:10}}>
                    <View style={{marginLeft:20,marginTop:10}}>
                        <View>
                            <Text style={{color:"gray",fontSize:16}}>Recent Searches</Text>
                        </View>
                        <View style={{marginTop:10}}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Entypo name="back-in-time" size={24} color="#eda81c" />
                                <Text style={{marginLeft:40}}>City Center</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems:"center",marginVertical:20}}>
                                <Entypo name="back-in-time" size={24} color="#eda81c" />
                                <Text style={{marginLeft:40}}>Walmart Campus</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems:"center",marginBottom:30}}>
                                <Entypo name="back-in-time" size={24} color="#eda81c" />
                                <Text style={{marginLeft:40}}>Golden Point</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: width/1.5,
        fontSize:16,
    },
    map: {
        width: width,
        height: height,
      },
  });
  