import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, Entypo, Zocial } from "@expo/vector-icons";
import MapView from 'react-native-maps';


const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default function PickUPScreen(){
    const [text, setText] = useState("");
    return(
        <View style={{overflow:"hidden",borderTopLeftRadius:20}}>
            <MapView style={styles.map} />
            <View style={styles.view1}>
                <View style={[styles.subView1,{backgroundColor:"#fff",elevation:5}]}>
                    <View style={{marginRight:10,marginLeft:20}}>
                        <Ionicons name="md-location-sharp" size={20} color="#eda81c" />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={setText}
                            value={text}
                            placeholder="Search..."
                        />
                    </View>
                </View>
            </View>
            <View style={styles.view3}>
                <View style={{marginHorizontal:30}}>
                    <Ionicons name="md-location-sharp" size={20} color="#eda81c" />
                </View>
                <View>
                    <Text>128 Mott ST, NEw York, NY</Text>
                    <Text>10013, United States</Text>
                </View>
            </View>
            <View style={{}}>
                <ScrollView style={{marginHorizontal:20,marginTop:20}}>
                    <View style={[styles.subView1,{backgroundColor:"#e8e4e3"}]}>
                        <View style={{marginRight:10,marginLeft:20}}>
                            <Ionicons name="md-location-sharp" size={20} color="#eda81c" />
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                onChangeText={setText}
                                value={text}
                                placeholder="Name of..."
                            />
                        </View>
                    </View>
                    <View style={[styles.subView1,{marginTop:10,backgroundColor:"#e8e4e3"}]}>
                        <View style={{marginRight:10,marginLeft:20}}>
                            <Zocial name="call" size={20} color="#eda81c" />
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                onChangeText={setText}
                                value={text}
                                placeholder="Contact Number"
                            />
                        </View>
                    </View>
                    <View style={{alignItems:"flex-end"}}>
                        <TouchableOpacity style={styles.continue}>
                            <Text style={{color:"#fff",fontSize:16}}>Continue ↓</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
        height: height/2,
      },
      view1: {
        position:"absolute",
        marginTop:20,
        marginHorizontal:10,
        width:width/1.35
      },
      subView1: {
        flexDirection:"row",
        alignItems:"center",
        // elevation:5,
        borderRadius:30,
        // opacity:0.99,
      },
      view3: {
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        backgroundColor:"#e8e4e3",
        marginTop:-60,
        flexDirection:"row",
        paddingVertical:15,
        alignItems:"center"
      },
      continue: {
        backgroundColor:"#eda81c",
        marginTop:30,
        height:40,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:15
    }
  });
  