import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";
import { API } from "../../../../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function RateCalculator({navigation}){

    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [length, setLength] = useState("");
    const [rate, setRate] = useState("0");
    const [token, setToken] = useState("");
    const [isResp, setIsResp] = useState(false);


    useEffect(() => {
        AsyncStorage.getItem('jwt').then(resp => {
            if(resp !== null ){
                const token = JSON.parse(resp).access_token;
                setToken(token);
            } else {
                return null;
            }
        }).catch(err => console.log(err));
    }, []);

    let axiosConfig = {
        headers: {
            "Authorization": token,
        }
    };
    let postData={
        "height": Number(height),
        "width": Number(width),
        "length": Number(length)
    };
    const calculate=()=>{
        setIsResp(true);
        axios.post(`https://courrierapp.herokuapp.com/api/ratecalc`,postData,axiosConfig)
        .then(resp=>{
            setRate(resp.data);
            setIsResp(false);
        })
        .catch(err=>{
            console.log("error from server: ",err);
        })
    };

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name="chevron-back" color={"#fff"} size={38}/>
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Rate Calculator</Text>
            </View>
            <View style={styles.body}>
                <View style={{marginTop:30,marginBottom:50}}>
                    <Text style={{fontSize:20,textAlign:"center",fontWeight:"700"}}>Put Details :</Text>
                </View>
                <View style={styles.content}>
                    <View style={{alignItems:"center"}}>
                        <Text style={{fontSize:16,fontWeight:"700"}}>Height</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="00.00"
                            value={height}
                            onChangeText={(val)=>setHeight(val)}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{alignItems:"center"}}>
                        <Text style={{fontSize:16,fontWeight:"700"}}>Width</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="00.00"
                            value={width}
                            onChangeText={(val)=>setWidth(val)}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{alignItems:"center"}}>
                        <Text style={{fontSize:16,fontWeight:"700"}}>Length</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="00.00"
                            value={length}
                            onChangeText={(val)=>setLength(val)}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <View style={{alignItems:"center",marginTop:50}}>
                    <View style={styles.rate}>
                        {
                            isResp ?  <ActivityIndicator color="#fdb915" /> : <Text style={{color:"#fdb915"}}>{rate}/-</Text>
                        }                      
                    </View>
                </View>
                <View style={styles.lastView}>
                    <TouchableOpacity 
                        style={styles.btn}
                        activeOpacity={0.6}
                        onPress={calculate}
                    >
                        <Text style={styles.text}>Calculate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fdb915"
    },
    header: {
        marginLeft:10,
        marginTop:20,
    },
    headerTxt: {
        fontSize:24,
        color:"#fff",
        fontWeight:"bold",
        marginTop:30,
        marginBottom:20,
        marginLeft:10
    },
    body: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 35,
        flex: 1
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 20
    },
    input: {
        width: 80,
        backgroundColor: "#fff",
        height: 40,
        borderRadius: 5,
        marginTop: 10,
        borderWidth: 0.5,
        textAlign: "center"
    },
    lastView: {
        alignItems: "center",
        marginTop: 50,
    },
    btn: {
        backgroundColor: "#fdb915",
        borderRadius: 10,
        elevation:5
    },
    text: {
        marginVertical: 10,
        marginHorizontal: 20,
        color: "#fff",
        fontSize: 16,
    },
    rate: {
        elevation: 9,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    }
});