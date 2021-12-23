import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons, Zocial } from "@expo/vector-icons";
import MapView from "react-native-maps";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


export default function DropScreen({props}){
    const [text, setText] = useState("");
    return(
        <View style={{overflow:"hidden",borderTopLeftRadius:20}}>
            <MapView style={styles.map} />
            <View style={styles.view1}>
                <View style={{marginLeft:10}}>
                    <Ionicons name="md-location-sharp" size={20} color={"#eda81c"} />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setText}
                        value={text}
                        placeholder="Enter Drop..."
                        multiline={true}
                    />
                </View>
            </View>
            <View>
                <View style={styles.view3}>
                    <View style={{marginHorizontal:30}}>
                        <FontAwesome name="location-arrow" color={"#eda81c"} size={22}/>
                    </View>
                    <View style={{marginRight:80}}>
                        <Text style={{flexWrap:"wrap"}}>2020,hbuihgghg,tryfhfuytwt2020,hbuihgghg</Text>
                    </View>
                </View>
                <View style={{}}>
                    <View style={{marginHorizontal:20,marginTop:20}}>
                        <View style={[styles.subView1,{backgroundColor:"#e8e4e3"}]}>
                            <View style={{marginRight:10,marginLeft:20}}>
                                <Entypo name="star" color={"#eda81c"} size={20}/>
                            </View>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={setText}
                                    value={text}
                                    placeholder="City Garden"
                                />
                            </View>
                        </View>
                        <View style={[styles.subView1,{marginTop:10,backgroundColor:"#e8e4e3"}]}>
                            <View style={{marginRight:10,marginLeft:20}}>
                                <MaterialIcons  name="person" size={22} color="#eda81c" />
                            </View>
                            <View>
                                <TextInput
                                    style={styles.input1}
                                    onChangeText={setText}
                                    value={text}
                                    placeholder="Name of Person"
                                />
                            </View>
                            <MaterialCommunityIcons  name="contacts" size={22} color="#eda81c" />
                        </View>
                        <View style={[styles.subView1,{marginTop:10,backgroundColor:"#e8e4e3"}]}>
                            <View style={{marginRight:10,marginLeft:20}}>
                                <Zocial name="call" size={22} color="#eda81c" />
                            </View>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={setText}
                                    value={text}
                                    placeholder="Contact Number"
                                    keyboardType="number-pad"
                                />
                            </View>
                        </View>
                        <View style={{alignItems:"flex-end"}}>
                            <TouchableOpacity style={styles.continue} onPress={props}>
                                <Text style={{color:"#fff",fontSize:16}}>Continue ↓</Text>
                            </TouchableOpacity>
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
        fontSize:16,
        marginRight:50,
        paddingLeft:10
    },
    input1: {
        height: 60,
        fontSize: 16,
        width: width/2.2
    },
    map: {
        width: width,
        height: height/2.8
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
        position: "absolute",
        flexDirection:"row",
        alignItems:"center",
        elevation:5,
        borderRadius:30,
        opacity:0.99,
        backgroundColor:"#fff",
        marginLeft:20,
        marginTop:20,
        width:width/1.4

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
        marginTop:-20,
        flexDirection:"row",
        paddingVertical:20,
        alignItems:"center"
      },
  });
  