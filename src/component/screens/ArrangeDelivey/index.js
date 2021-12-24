import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions
} from "react-native";
import { Ionicons, FontAwesome, SimpleLineIcons, Foundation } from '@expo/vector-icons';
import PickUPScreen from "./PickUp";
import DropScreen from "./Drop";
import CourierScreen from "./Courier";
import ConfirmInfoScreen from "./Confirm";


const { height } = Dimensions.get("window")

export default function ArrangeDelivery({navigation}){


    const [activeIndex, setActiveIndex] = useState(0);

    const segmentClicked=(index)=>{
        setActiveIndex(index);
    };
    const _renderItem=()=>{
        if(activeIndex==0){
            return(
                <PickUPScreen />
            )
        } else if(activeIndex==1){
            return(
                <DropScreen />
            )
        } else if(activeIndex==2){
            return(
                <CourierScreen />
            )
        } else if(activeIndex==3){
            return(
                <ConfirmInfoScreen />
            )
        }
    };
    
    return(
        <View style={styles.container}>
            <View style={{marginTop:40,flexDirection:"row",alignItems:"center",marginLeft:15}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name="chevron-back" color={"#fff"} size={38}/>
                </TouchableOpacity>
                <View style={{flex:1,alignItems:"center"}}>
                   {activeIndex === 0 ? <Text style={{color:"#fff",fontSize:28}}>Pickup Location</Text> : null}
                   {activeIndex === 1 ? <Text style={{color:"#fff",fontSize:28}}>Drop Location</Text> : null}
                   {activeIndex === 2 ? <Text style={{color:"#fff",fontSize:28}}>Courier Info</Text> : null}
                   {activeIndex === 3 ? <Text style={{color:"#fff",fontSize:28}}>Confirm Info</Text> : null}
                </View>
            </View>
            <View style={{flexDirection:"row"}}>
                <View style={{alignItems:"center",flex:0.25}}>
                    <TouchableOpacity style={[styles.button,{backgroundColor: activeIndex === 0 ? "#fff" : "#cca15c",marginTop:40}]}
                        onPress={()=>segmentClicked(0)} active={activeIndex == 0}>
                        <Ionicons name="md-location-sharp" color={"#fdb915"} size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor: activeIndex === 1 ? "#fff" : "#cca15c",marginTop:20}]}
                        onPress={()=>segmentClicked(1)} active={activeIndex == 1}>
                        <FontAwesome name="location-arrow" color={"#fdb915"} size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor: activeIndex === 2 ? "#fff" : "#cca15c",marginTop:20}]}
                    onPress={()=>segmentClicked(2)} active={activeIndex == 2}>
                        <SimpleLineIcons name="handbag" color={"#fdb915"} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor: activeIndex === 3 ? "#fff" : "#cca15c",marginTop:20}]}
                    onPress={()=>segmentClicked(3)} active={activeIndex == 3}>
                        <Foundation name="clipboard-notes" color={"#fdb915"} size={28} />
                    </TouchableOpacity>
                </View>
                <View style={styles.renderItems}>
                    {_renderItem()}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fdb915",
    },
    button: {
        height:50,
        width:50,
        borderRadius:50/2,
        alignItems:"center",
        justifyContent:"center",
    },
    renderItems: {
        flex:1,
        backgroundColor:"#fff",
        height:height,
        marginTop:20,
        borderTopLeftRadius:20
    }
})