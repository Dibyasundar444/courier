import React, { useRef, useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons, Entypo, FontAwesome, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import RBSheet from "react-native-raw-bottom-sheet";
import BottmSheet_item from "./BottomSheet_items";




const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


export default function ConfirmInfoScreen({onSubmit,delMode,setDelMode,sLocation,rLocation,
    courierType,secured,cHeight,cInfo,cLength,cWidth,cWeight,rName,usualRate,fastDel_Rate,superFastDel_rate}){

    const refRBSheet = useRef();
    const navigation = useNavigation();

    


    return(
        <ScrollView style={{marginBottom:100}} showsVerticalScrollIndicator={false}>
            <View style={{marginTop:20,marginLeft:20}}>
                <View style={{flexDirection:"row"}}>
                    <View style={{marginTop:10}}>
                        <Ionicons name="md-location-sharp" size={24} color="#fdb915" />
                    </View>
                    <View style={{marginLeft:30}}>
                        <Text style={{color:"gray"}}>Walmart</Text>
                        <Text style={{fontSize:18}}>Emili Williamson</Text>
                        <Text style={{fontSize:15}}>{sLocation}</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:20}}>
                    <View style={{marginTop:10}}>
                        <FontAwesome name="location-arrow" size={24} color="#fdb915" />
                    </View>
                    <View style={{marginLeft:30}}>
                        <Text style={{color:"gray"}}>City Garden</Text>
                        <Text style={{fontSize:18}}>{rName}</Text>
                        <Text style={{fontSize:15}}>{rLocation}</Text>
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
                        onPress={()=>navigation.navigate("Map")}
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
                        <Text>{courierType}</Text>
                        <Text>{secured}</Text>
                    </View>                    
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginRight:10,marginTop:10}}>
                    <View>
                        <Text style={{color:"gray"}}>Height Width Length</Text>
                        <Text style={{fontSize:13}}>{cHeight} × {cWidth} × {cLength} (cm)</Text>
                    </View>
                    <View>
                        <Text style={{color:"gray"}}>Weight</Text>
                        <Text>{cWeight} kg</Text>
                    </View>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{color:"gray"}}>Courier info</Text>
                    <Text>{cInfo}</Text>
                </View>
            </View>
            <View style={{borderWidth:3,borderColor:"#e8e4e3",marginVertical:10}}/>
            <TouchableOpacity 
                style={{marginHorizontal:20,backgroundColor:"#e8e4e3",borderRadius:30}}
                onPress={()=>refRBSheet.current.open()}
            >
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    height={height/1.8}
                    customStyles={{
                    draggableIcon: {
                        backgroundColor: "#fff",
                    },
                    container:{
                        borderTopLeftRadius: 30,
                    }
                    }}
                >
                    <BottmSheet_item 
                        delMode={delMode}
                        setDelMode={setDelMode}
                        closeSheet={()=>refRBSheet.current.close()}
                        usualRate={usualRate}
                        fastDel_Rate={fastDel_Rate}
                        superFastDel_rate={superFastDel_rate}
                    />
                </RBSheet>
                <View style={{marginLeft:20,marginVertical:10}}>
                    <Text style={{color:"gray",fontWeight:"bold",fontSize:18}}>Delivery Mode</Text>
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginRight:10}}>
                        <Text style={{fontSize:18}}>{delMode}</Text>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontSize:18,marginRight:10}}>₹{usualRate}</Text>
                            <AntDesign name="caretdown" size={22} style={{top:-2}}color="gray" />
                        </View>
                    </View>
                    <Text style={{fontSize:18}}>Delivery</Text>
                </View>
            </TouchableOpacity>
            <View style={{alignItems:"flex-end"}}>
                <TouchableOpacity style={styles.proceed} onPress={onSubmit}>
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
  