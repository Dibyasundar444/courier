import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';


const Data = [
    {
        "id": "0",
        "title": "Full Name",
        "subTitle": "Samantha Smith"
    },
    {
        "id": "1",
        "title": "Email Address",
        "subTitle": "email@address.com"
    },
    {
        "id": "2",
        "title": "Phone number",
        "subTitle": "+1 12345678900"
    }
]

export default function ProfileScreen({navigation}){

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name="chevron-back" color={"#fff"} size={38}/>
                </TouchableOpacity>
                <View style={{alignItems:"center",flex:0.87}}>
                    <Text style={{fontSize:24,color:"#fff",fontWeight:"bold"}}>My Profile</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={{alignItems:"center"}}>
                    <Image style={styles.profile} source={require("../../../../../assets/components/image/profile.jpg")}/>
                </View>
                <View style={{marginTop:50}}>
                    <FlatList 
                        data={Data}
                        showsVerticalScrollIndicator={false}
                        renderItem={(item)=>(
                            <View key={item.item.id} style={styles.nameView}>
                                <Text style={styles.title}>{item.item.title}</Text>
                                <Text style={styles.subTitle}>{item.item.subTitle}</Text>
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
        backgroundColor: "#000",
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