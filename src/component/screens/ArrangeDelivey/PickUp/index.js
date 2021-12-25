import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons, Entypo, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import MapView from 'react-native-maps';


const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default function PickUPScreen(){

    const [text, setText] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);

    const segmentClicked=(index)=>{
        setActiveIndex(index);
    };
    
    return(
        <View style={{overflow:"hidden",borderTopLeftRadius:20}}>
            <MapView style={styles.map} />
            <View style={{position:"absolute",marginTop:20,marginLeft:10,width:width/1.35}}>
                <View style={{flexDirection:"row",alignItems:"center",elevation:5,borderRadius:30,opacity:0.99,backgroundColor:"#fff"}}>
                    <View style={{marginRight:10,marginLeft:20}}>
                        <Ionicons name="md-location-sharp" size={20} color="#fdb915" />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={setText}
                            value={text}
                            placeholder="Sender loaction..."
                            multiline={true}
                        />
                    </View>
                </View>
                <View style={{elevation:5,borderRadius:10,opacity:0.99,backgroundColor:"#fff",marginTop:10}}>
                    <View style={{marginLeft:20,marginTop:10}}>
                        <View>
                            <Text style={{color:"gray",fontSize:16}}>Saved Addresses</Text>
                        </View>
                        <View style={{marginTop:10}}>
                            <TouchableOpacity 
                                style={{flexDirection:"row",alignItems:"center"}} 
                                onPress={()=>segmentClicked(1)}
                                active={ activeIndex == 1 }
                                activeOpacity={0.6}
                            >
                                <Entypo name="home" size={24} color="#fdb915" />
                                <FontAwesome name={activeIndex==1?"circle":"circle-o"} size={14} color="gray" style={{marginLeft:40}} />
                                <Text style={{marginLeft:10,color: activeIndex == 1 ? "#fdb915": "#000"}}>Home</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{flexDirection:"row",alignItems:"center",marginVertical:20,marginLeft:3}}
                                onPress={()=>segmentClicked(2)}
                                active={ activeIndex == 2 }
                                activeOpacity={0.6}
                            >
                                <FontAwesome  name="building-o" size={24} color="#fdb915" />
                                <FontAwesome name={activeIndex==2?"circle":"circle-o"} size={14} color="gray" style={{marginLeft:42}} />
                                <Text style={{marginLeft:10,color: activeIndex == 2 ? "#fdb915": "#000"}}>Office</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{flexDirection:"row",alignItems:"center",marginBottom:30}}
                                onPress={()=>segmentClicked(3)} 
                                active={ activeIndex == 3 }   
                                activeOpacity={0.6}
                            >
                                <MaterialCommunityIcons  name="warehouse" size={24} color="#fdb915" />
                                <FontAwesome name={activeIndex==3?"circle":"circle-o"} size={14} color="gray" style={{marginLeft:42}} />
                                <Text style={{marginLeft:10,color: activeIndex == 3 ? "#fdb915": "#000"}}>Other</Text>
                            </TouchableOpacity>
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
                                <Entypo name="back-in-time" size={24} color="#fdb915" />
                                <Text style={{marginLeft:40}}>City Center</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems:"center",marginVertical:20}}>
                                <Entypo name="back-in-time" size={24} color="#fdb915" />
                                <Text style={{marginLeft:40}}>Walmart Campus</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems:"center",marginBottom:30}}>
                                <Entypo name="back-in-time" size={24} color="#fdb915" />
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
        fontSize:16,
        marginRight:60
    },
    map: {
        width: width,
        height: height,
      },
  });
  