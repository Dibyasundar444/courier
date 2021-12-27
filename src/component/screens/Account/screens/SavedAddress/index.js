import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions
} from "react-native";
import { Ionicons, Entypo, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import RenderScreen from "./component/RenderScreen";




const { height } = Dimensions.get("window");

export default function AddressScreen({navigation}){


    const [activeIndex, setActiveIndex] = useState(0);
    const [home, setHome] = useState("");
    const [office, setOffice] = useState("");
    const [other, setOther] = useState("");

    const segmentClicked=(index)=>{
        setActiveIndex(index);
    };
    const _renderItem=()=>{
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzk5Njc5YTdmZmI4MDAxNjUyNDEzZSIsImlhdCI6MTY0MDYxMjQ0MSwiZXhwIjoxNjQxMjE3MjQxfQ.pMVin7HxUhVkwCJcWuVEH5smC1xNDiXtjJntUvMl8KI",
            }
        };
        if(activeIndex==0){
            const postData = {
                "homeAddress": home
            };
            const homeAddress=()=>{
            axios.patch("https://digicourierapp.herokuapp.com/user/update",postData,axiosConfig)
            .then(res=>{
                console.log({"homeAdrs":res.data});
            })
            .catch(e=>{console.log(e)}) 
            }
            return(
                <RenderScreen 
                    headerInputPlaceholder="Home"
                    location="Home Address"
                    starfieldPlaceholder="City Garden"
                    namePlaceholder="Name of Person"
                    numberplaceholder="Contact number"
                    headerInput={home}
                    // starfeldInput={value}
                    // nameInput={value}
                    // numberInput={value}
                    setHeaderInput={setHome}
                    // setStarfeldInput={setValue}
                    // setNumberInput={setValue}
                    // setNameInput={setValue}
                    onSubmit={homeAddress}
                />
            )
        } else if(activeIndex==1){
            const postData = {
                "officeAddress": office
            };
            const officeAddress=()=>{
            axios.patch("https://digicourierapp.herokuapp.com/user/update",postData,axiosConfig)
            .then(res=>{
                console.log({"officeAdrs":res.data});
            })
            .catch(e=>{console.log(e)}) 
            }
            return(
                <RenderScreen 
                    headerInputPlaceholder="Office"
                    location="Office Address"
                    starfieldPlaceholder="City Garden"
                    namePlaceholder="Name of Person"
                    numberplaceholder="Contact number"
                    headerInput={office}
                    // starfeldInput={value}
                    // nameInput={value}
                    // numberInput={value}
                    setHeaderInput={setOffice}
                    // setStarfeldInput={setValue}
                    // setNumberInput={setValue}
                    // setNameInput={setValue}
                    onSubmit={officeAddress}
                />
            )
        } else if(activeIndex==2){
            const postData = {
                "otherAddress": other
            };
            const otherAddress=()=>{
            axios.patch("https://digicourierapp.herokuapp.com/user/update",postData,axiosConfig)
            .then(res=>{
                console.log({"otherAdrs":res.data});
            })
            .catch(e=>{console.log(e)}) 
            }
            return(
                <RenderScreen 
                    headerInputPlaceholder="Other"
                    location="Others"
                    starfieldPlaceholder="City Garden"
                    namePlaceholder="Name of Person"
                    numberplaceholder="Contact number"
                    headerInput={other}
                    // starfeldInput={value}
                    // nameInput={value}
                    // numberInput={value}
                    setHeaderInput={setOther}
                    // setStarfeldInput={setValue}
                    // setNumberInput={setValue}
                    // setNameInput={setValue}
                    // onSubmit={otherAddress}
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
                    <Text style={{color:"#fff",fontSize:28}}>Saved Addresses</Text>
                </View>
            </View>
            <View style={{flexDirection:"row"}}>
                <View style={{alignItems:"center",flex:0.25}}>
                    <TouchableOpacity style={[styles.button,{backgroundColor: activeIndex === 0 ? "#fff" : "#cca15c",marginTop:40}]}
                        onPress={()=>segmentClicked(0)} active={activeIndex == 0}>
                        <Entypo name="home" size={24} color="#fdb915" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor: activeIndex === 1 ? "#fff" : "#cca15c",marginTop:20}]}
                        onPress={()=>segmentClicked(1)} active={activeIndex == 1}>
                        <FontAwesome  name="building-o" size={24} color="#fdb915" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor: activeIndex === 2 ? "#fff" : "#cca15c",marginTop:20}]}
                    onPress={()=>segmentClicked(2)} active={activeIndex == 2}>
                        <MaterialCommunityIcons  name="warehouse" size={24} color="#fdb915" />
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