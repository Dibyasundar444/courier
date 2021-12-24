import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';


const constData = [
    {
        "id": "0",
        "title": "Full Name",
        "subTitle": "Enter Full name"
    },
    {
        "id": "1",
        "title": "Phone number",
        "subTitle": "Enter phone number"
    },
    {
        "id": "2",
        "title": "Your Message",
        "subTitle": "Enter your message"
    }
];
const txt = "Let us know your fedback,  queries or issue regarding app or features.";

export default function ContactScreen({navigation}){

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [value3, setValue3] = useState("")

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name="chevron-back" color={"#fff"} size={38}/>
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Contact us</Text>
            </View>
            <View style={styles.body}>
                <View style={{marginTop:20,marginLeft:20}}>
                    <Text style={{fontSize:22,marginRight:20}}>{txt}</Text>
                </View>
                <FlatList 
                    data={constData}
                    showsVerticalScrollIndicator={false}
                    renderItem={(item)=>(
                        <View key={item.item.id} style={styles.nameView}>
                            <Text style={styles.title}>{item.item.title}</Text>
                            <TextInput 
                                style={styles.subTitle}
                                placeholder={item.item.subTitle}
                                value={item.item.id == 0 ? value1 : item.item.id == 1 ? value2 : value3}
                                onChangeText={(text)=>{item.item.id == 0 ? setValue1(text) : item.item.id == 1 ? setValue2(text):setValue3(text)}}
                            />
                            <View style={styles.line}/>
                        </View>
                    )}
                />
                <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={0.6}
                    onPress={()=>{}}
                >
                    <Text style={{color:"#fff",fontWeight:"bold"}}>Send message</Text>
                </TouchableOpacity>
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
    profile: {
        position:"absolute",
        height: 100,
        width: 100,
        borderRadius: 100/2,
        backgroundColor: "#000",
        top: -15
    },
    nameView: {
        marginLeft: 20,
        marginTop:20
    },
    title: {
        fontSize: 22
    },
    subTitle: {
        fontSize: 16,
        marginTop: 10,
    },
    line: {
        borderWidth: 1,
        marginTop: 15,
        marginRight: 20,
        borderColor: "#fdb915"
    },
    button: {
        backgroundColor: "#fdb915",
        height: 60,
        borderTopLeftRadius: 35,
        alignItems: "center",
        justifyContent: "center"
    }
});