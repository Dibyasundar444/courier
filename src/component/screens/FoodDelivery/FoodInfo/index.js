import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons, Entypo, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";


const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


export default function FoodInfoScreen(){

    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");

    const categories = ["Envelope", "Box Pack", "Other"];
    return(
        <ScrollView>
            <View style={{marginHorizontal:20,marginTop:20}}>
                <View style={{marginTop:10}}>
                    <Text>Courier Type</Text>
                    <View style={{flexDirection:"row",marginTop:10}}>
                        {categories.map((item,id)=>(
                            <TouchableOpacity
                                key={id}
                                onPress={()=>setIndex(id)} 
                                style={[styles.index,index === id && styles.setIndex]}   
                            >
                                <Text style={{color:index===id?"#fff":"#000"}}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
            <View style={{borderWidth:2,borderColor:"#e8e4e3",marginTop:20,marginBottom:5}}/>
            <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                <View style={{alignItems:"center"}}>
                    <View style={{flexDirection:"row"}}>
                        <AntDesign name="arrowup" size={18} color="#eda81c" />
                        <Text style={{marginLeft:10}}>Height</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:16}}>0.0 cm</Text>
                    </View>
                </View>
                <View style={{borderWidth:2,borderColor:"#e8e4e3"}}/>
                <View style={{alignItems:"center"}}>
                    <View style={{flexDirection:"row"}}>
                        <AntDesign name="arrowright" size={18} color="#eda81c" />
                        <Text style={{marginLeft:10}}>Widh</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:16}}>0.0 cm</Text>
                    </View>
                </View>
                <View style={{borderWidth:2,borderColor:"#e8e4e3"}}/>
                <View style={{alignItems:"center"}}>
                    <View style={{flexDirection:"row"}}>
                        <MaterialCommunityIcons name="arrow-left-right" size={18} color="#eda81c" />
                        <Text style={{marginLeft:10}}>Length</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:16}}>0.0 cm</Text>
                    </View>
                </View>
            </View>
            <View style={{borderWidth:2,borderColor:"#e8e4e3",marginTop:5}}/>
            <View style={{flexDirection:"row",alignItems:"center",paddingVertical:50,marginLeft:20}}>
                <View>
                    <Text>Weight</Text>
                </View>
                <View style={{marginLeft:20}}>
                    <Text>weight Icon</Text>
                    <View style={{flexDirection:"row"}}>
                        <Text>0 kg</Text>
                        <Text style={{marginHorizontal:45}}>10 kg</Text>
                        <Text>20 kg</Text>
                    </View>
                </View>
            </View>
            <View style={{borderWidth:2,borderColor:"#e8e4e3"}}/>
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:20,marginLeft:20}}>
                <View>
                    <Text>Frangible</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View>
                        <Text>No</Text>
                    </View>
                    <View style={{marginHorizontal:10}}>
                        <Text>Icon</Text>
                    </View>
                </View>
            </View>
            <View style={{borderWidth:2,borderColor:"#e8e4e3"}}/>
            <View style={{marginTop:10,marginLeft:20}}>
                <Text>Courier Details</Text>
                <View style={{marginTop:10,marginBottom:20}}>
                    <TextInput 
                        placeholder="Enter courier info (i.e. thing in package)"
                        style={styles.input}
                        onChangeText={setText}
                        value={text}
                    />
                </View>
            </View>
            <View style={{borderWidth:2,borderColor:"#e8e4e3"}}/>
            <View style={{alignItems:"flex-end"}}>
                <TouchableOpacity style={styles.continue}>
                    <Text style={{color:"#fff",fontSize:16}}>Continue ↓</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 80,
        width:width/1.35,
        borderRadius:10,
        paddingLeft:10,
        backgroundColor:"#e8e4e3"
    },
    index: {
        width:80,
        backgroundColor:"#e8e8e8",
        alignItems:"center",
        marginRight:5,
        height:40,
        justifyContent:"center",
        borderRadius:20,
        elevation:9,
        borderWidth:0.1
    },
    setIndex: {
        backgroundColor: "#eda81c",
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
  