import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Fontisto } from '@expo/vector-icons';


const Data = [
    {
        "id": "0",
        "title": "Full Name"
    },
    {
        "id": "1",
        "title": "Email Address" 
    },
    {
        "id": "2",
        "title": "Phone number"
    }
];

export default function ProfileScreen({navigation,route}){

    const  navigateData  = route.params;
    // console.log(navigateData);

    const [name, setName] = useState("Samantha Smith");
    const [email, setEmail] = useState("email@address.com");
    const [number, setNumber] = useState("+91 1234567890");

    
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name="chevron-back" color={"#fff"} size={38}/>
                </TouchableOpacity>
                <View style={{flexDirection:"row",marginLeft:50,justifyContent:"space-around",flex:0.9}}>
                    <Text style={{fontSize:24,color:"#fff",fontWeight:"bold"}}>My Profile</Text>
                    <View style={{right:-20}}>
                        <Ionicons name="wallet" size={24} color="#000" style={{bottom:-5}} onPress={()=>alert("coming soon")} />
                        <Text style={{color:"#fff",fontSize:10}}>{navigateData.points}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={{alignItems:"center"}}>
                    <Image style={styles.profile} source={{uri: navigateData.profileImg}}/>
                </View>
                <View style={{marginTop:50}}>
                    <FlatList 
                        data={Data}
                        showsVerticalScrollIndicator={false}
                        renderItem={(item)=>(
                            <View key={item.item.id} style={styles.nameView}>
                                <Text style={styles.title}>{item.item.title}</Text>
                                <Text style={styles.subTitle}>{item.item.id == 0 ? navigateData.name : item.item.id ==1 ? navigateData.email : navigateData.phoneNo}</Text>
                                <View style={styles.line}/>
                            </View>
                        )}
                    />
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
        alignItems:"center",
        flexDirection:"row",
        marginLeft:10,
        marginTop:30,
        flex:0.1,
        marginBottom: 50
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
        backgroundColor: "gray",
        top: -20
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
    }
});