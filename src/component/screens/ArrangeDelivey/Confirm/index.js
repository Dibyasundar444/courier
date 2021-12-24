import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons, Entypo, FontAwesome, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";


const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


export default function ConfirmInfoScreen(){

    // const [index, setIndex] = useState(0);
    // const [text, setText] = useState("");

    const categories = ["Envelope", "Box Pack", "Other"];
    return(
        <ScrollView style={{marginBottom:100}} showsVerticalScrollIndicator={false}>
            <View style={{marginTop:20,marginLeft:20}}>
                <View style={{flexDirection:"row"}}>
                    <View style={{marginTop:10}}>
                        <Ionicons name="md-location-sharp" size={24} color="#fdb915" />
                    </View>
                    <View style={{marginLeft:30}}>
                        <View>
                            <Text style={{color:"gray"}}>Walmart</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:18}}>Emili Williamson</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:15}}>128 Mott St, New York, Ny</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:15}}>10013, United States</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:20}}>
                    <View style={{marginTop:10}}>
                        <FontAwesome name="location-arrow" size={24} color="#fdb915" />
                    </View>
                    <View style={{marginLeft:30}}>
                        <View>
                            <Text style={{color:"gray"}}>City Garden</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:18}}>Emili Williamson</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:15}}>128 Mott St, New York, Ny</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:15}}>10013, United States</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{borderWidth:3,borderColor:"#e8e4e3",marginVertical:20}}/>
            <View style={{marginLeft:20,marginRight:10}}>
                <View>
                    <Text style={{color:"gray"}}>Distance</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View>
                        <Text>24.2 km</Text>
                    </View>
                    <TouchableOpacity 
                        style={{flexDirection:"row",alignItems:"center"}}
                        onPress={()=>alert("working")}
                    >
                        <FontAwesome name="location-arrow" size={18} color="#fdb915" />
                        <Text style={{color:"#fdb915",fontWeight:"bold",marginLeft:5}}>View in Map</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{borderWidth:3,borderColor:"#e8e4e3",marginVertical:20}}/>
            <View style={{marginLeft:20}}>
                <View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginRight:10}}>
                        <Text style={{color:"gray"}}>Courier Type</Text>
                        <Text style={{color:"gray"}}>Secure Product</Text>
                    </View> 
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginRight:70}}>
                        <Text>Box Courier</Text>
                        <Text>No</Text>
                    </View>                    
                </View>
                <View style={{marginTop:10}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginRight:45}}>
                        <Text style={{color:"gray"}}>Height Width Length</Text>
                        <Text style={{color:"gray"}}>Weight</Text>
                    </View> 
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginRight:60}}>
                        <Text>0 × 0 × 0 (cm)</Text>
                        <Text>5 kg</Text>
                    </View>                    
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{color:"gray"}}>Courier info</Text>
                    <Text>Courier info</Text>
                    <Text>Courier info</Text>
                </View>
            </View>
            <View style={{borderWidth:3,borderColor:"#e8e4e3",marginVertical:10}}/>
            <TouchableOpacity 
                style={{marginHorizontal:20,backgroundColor:"#e8e4e3",borderRadius:30}}
                onPress={()=>alert("working")}
            >
                <View style={{marginLeft:20,marginVertical:10}}>
                    <Text style={{color:"gray",fontWeight:"bold",fontSize:18}}>Delivery Mode</Text>
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginRight:10}}>
                        <Text style={{fontSize:18}}>Economy</Text>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontSize:18,marginRight:10}}>$8.60</Text>
                            <AntDesign name="caretdown" size={22} style={{top:-2}}color="gray" />
                        </View>
                    </View>
                    <Text style={{fontSize:18}}>Delivery</Text>
                </View>
            </TouchableOpacity>
            <View style={{alignItems:"flex-end"}}>
                <TouchableOpacity style={styles.proceed}>
                    <Text style={{color:"#fff",fontSize:16}}>Proceed to payment</Text>
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
        backgroundColor: "#fdb915",
    },
    proceed: {
        backgroundColor:"#fdb915",
        marginTop:30,
        height:40,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:15,
        marginRight:20,
        marginBottom:20
    }
  });
  