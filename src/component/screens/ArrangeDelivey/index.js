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
import axios from "axios";

const { height } = Dimensions.get("window")

export default function ArrangeDelivery({navigation}){


    const [activeIndex, setActiveIndex] = useState(0);
    const [rname, setRname] = useState("");
    const [rnumber, setRnumber] = useState("");
    //post data -->
    const [slocation, setSlocation] = useState("");
    const [activeAddress, setActiveAddress] = useState(0);
    const [rlocation, setRlocation] = useState("");
    const [cType, setCType] = useState("Envelope");
    const [Height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [Length, setLength] = useState("");
    const [Weight, setWeight] = useState("");
    const [switchValue, setSwitchValue] = useState(false);
    const [Price, setPrice] = useState("");
    const [Info, setInfo] = useState("");
    const[delMode, setDelMode] = useState("Usual");
    //<--
    const postData={
        "addresstodeli": rlocation,
        "SedndingAddress": slocation,
        "Distance":"",
        "Length": Number(Length),
        "Width": Number(width),
        "Height": Number(Height),
        "CourierType": cType,
        "secureProduct": switchValue,
        "CourierInfo": Info,
        "deliveryMode": delMode,
        "Price": Number(Price)
    };
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzk5Njc5YTdmZmI4MDAxNjUyNDEzZSIsImlhdCI6MTY0MDYxMjQ0MSwiZXhwIjoxNjQxMjE3MjQxfQ.pMVin7HxUhVkwCJcWuVEH5smC1xNDiXtjJntUvMl8KI",
            }
    };

    const onSubmit=()=>{
        // navigation.navigate("payment");
        if(slocation=="" | rlocation=="" | Height=="" | width=="" | Length=="" | Weight=="" | Price=="" | Price==0){
            alert("please enter the details")
        } else {
            axios.post("https://digicourierapp.herokuapp.com/api/product",postData,axiosConfig)
            .then(res=>{
                if(res.status==200){
                    console.log(postData);
                    navigation.navigate("payment");
                } else console.log(res.status);               
            })
            .catch(e=>console.log(e))
        }
    };

    const segmentClicked=(index)=>{
        setActiveIndex(index);
    };
    const _renderItem=()=>{
        if(activeIndex==0){
            return(
                <PickUPScreen
                    location={slocation}
                    setLocation={setSlocation}
                    activeIndex={activeAddress}
                    setActiveIndex={setActiveAddress}
                    next={()=>segmentClicked(1)}
                />
            )
        } else if(activeIndex==1){
            return(
                <DropScreen
                    drop={rlocation}
                    setDrop={setRlocation}
                    name={rname}
                    number={rnumber}
                    setName={setRname}
                    setNumber={setRnumber}
                    next={()=>segmentClicked(2)}
                />
            )
        } else if(activeIndex==2){
            return(
                <CourierScreen 
                    cType={cType}
                    Height={Height}
                    Weight={Weight}
                    width={width}
                    Length={Length}
                    switchValue={switchValue}
                    Price={Price}
                    Info={Info}
                    setCType={setCType}
                    setHeight={setHeight}
                    setWidth={setWidth}
                    setLength={setLength}
                    setWeight={setWeight}
                    setSwitchValue={setSwitchValue}
                    setPrice={setPrice}
                    setInfo={setInfo}
                    next={()=>segmentClicked(3)}

                />
            )
        } else if(activeIndex==3){
            return(
                <ConfirmInfoScreen 
                    delMode={delMode}
                    setDelMode={setDelMode}
                    onSubmit={onSubmit}
                    sLocation={slocation}
                    rLocation={rlocation}
                    courierType={cType}
                    secured={switchValue===true?"Yes":"No"}
                    cHeight={Height}
                    cInfo={Info}
                    cLength={Length}
                    cWidth={width}
                    cWeight={Weight}
                    rName={rname}
                />
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
                   {activeIndex === 0 ? <Text style={{color:"#fff",fontSize:28}}>Sender Location</Text> : null}
                   {activeIndex === 1 ? <Text style={{color:"#fff",fontSize:28}}>Receiver Location</Text> : null}
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
});