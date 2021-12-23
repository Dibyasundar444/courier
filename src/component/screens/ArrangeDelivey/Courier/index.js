import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, Switch, ScrollView } from "react-native";
import { Ionicons, Entypo, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";


const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


export default function CourierScreen(){

    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [switchValue, setSwitchValue] = useState(false);

    const toggle=(value)=>{
        setSwitchValue(value);
    };


    const categories = ["Envelope", "Box Pack", "Other"];
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginBottom:150}}>
                <View style={{marginHorizontal:20,marginTop:20}}>
                    <View style={{marginTop:10}}>
                        <Text style={{fontWeight:"bold"}}>Courier Type</Text>
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
                            <Text style={{marginLeft:10}}>Width</Text>
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
                        <Text style={{fontWeight:"bold"}}>Weight</Text>
                    </View>
                    <View style={{marginLeft:20}}>
                        <TextInput 
                            placeholder="Weight of package"
                            style={styles.weight}
                            value={text}
                            onChangeText={setText}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <View style={{borderWidth:2,borderColor:"#e8e4e3"}}/>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:20,marginLeft:10,alignItems:"center"}}>
                    <View>
                        <Text style={{fontWeight:"bold"}}>Secure The Package</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View>
                            <Text>{ switchValue===true ? `Yes` : `No` }</Text>
                        </View>
                        <View style={{marginHorizontal:10}}>
                            <Switch 
                                value={switchValue}
                                onValueChange={toggle}
                            />
                        </View>
                    </View>
                </View>
                <View style={{borderWidth:2,borderColor:"#e8e4e3"}}/>
                <View style={{marginTop:10,marginLeft:20}}>
                    <Text style={{fontWeight:"bold"}}>Courier Details</Text>
                    <View style={{marginTop:10,marginBottom:20}}>
                        <View style={{flexDirection:"row",alignItems:"center",marginBottom:20}}>
                            <Text style={{marginRight:10,color:"gray",fontWeight:"bold"}}>Product Value</Text>
                            <TextInput 
                                placeholder="value in price"
                                style={styles.weight}
                                value={text}
                                onChangeText={setText}
                                keyboardType="numeric"
                            />
                        </View>
                        <TextInput 
                            placeholder="Enter courier info (i.e. thing in package)"
                            style={styles.input}
                            onChangeText={setText}
                            value={text}
                            multiline={true}
                        />
                    </View>
                </View>
                <View style={{borderWidth:2,borderColor:"#e8e4e3"}}/>
                <View style={{alignItems:"flex-end"}}>
                    <TouchableOpacity style={styles.continue}>
                        <Text style={{color:"#fff",fontSize:16}}>Continue ↓</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 80,
        width:width/1.4,
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
        marginTop:20,
        height:40,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:15
    },
    weight: {
        // backgroundColor:"#000",
        height:40,
        borderWidth:0.2,
        // borderColor:"#000"
        borderRadius:20,
        paddingHorizontal:10
    }
  });
  