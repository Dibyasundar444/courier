import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, Ionicons, Foundation, MaterialIcons, } from '@expo/vector-icons';
import { constData } from './Data.js';
// import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Account({navigation,route}) {
    // console.log(Data);
    const [index, setIndex] = useState(0);
    const [points, setPoints] = useState("10");
    const [userData, setUserData] = useState({name:"",profileImg:"",email:"",phone:""});

    // const navigateData = route.params;

    // useEffect(() => {
    //     AsyncStorage.getItem('jwt').then(resp => {
    //         if(resp !== null ){
    //             const parsed = JSON.parse(resp).user;
    //             setUserData({name:parsed.name, profileImg:parsed.profileImg,email:parsed.email,phone:parsed.phoneNo})
    //         } else {
    //             return null;
    //         }
    //     }).catch(err => console.log(err));
    // }, []);

    const navigateData={
        "name": userData.name,
        "email": userData.email,
        "phoneNo": userData.phone,
        "profileImg": userData.profileImg,
        "points": points
    };

    const customAlert = () =>
        Alert.alert(
        "Logging out",
        "Are you sure?",
        [
            {
            text: "No",
            onPress: () => console.log("No Pressed"),
            style: "cancel"
            },
            { text: "Yes", onPress: clickLogOut }
        ]
    );

    const segmentClicked=(index)=>{
        setIndex(index);
        if (index==0) {
            navigation.navigate("Adresses");
        } else if (index==1) {
            navigation.navigate("Language");
        } else if (index==2){
            navigation.navigate("Contact");
        } else if (index==3) {
            navigation.navigate("Terms");
        } else if (index==4) {
            console.log(index);
        } else {customAlert()}
    };
    const clickLogOut = async () => {
        AsyncStorage.removeItem('jwt');
    };
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.subView1}>            
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={styles.subView1_text1}>Account</Text>
                    <View style={{marginRight:20,}}>
                        <Ionicons name="wallet" size={24} color="#000" style={{bottom:-5}} />
                        <Text style={{color:"#fff",fontSize:10}}>{points}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.subView1_1} onPress={()=>navigation.navigate("Profile",navigateData)}>
                    <Image 
                        source={{uri:userData.profileImg}}
                        style={styles.profile}/>
                    <View style={styles.subView1_1_1}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={styles.subView1_1_1_text1}>{userData.name}</Text>
                            {/* <View style={{flexDirection:"row"}}> */}
                                
                                
                            {/* </View> */}
                        </View>
                        <Text style={{color:"#fff"}}>View profile</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.view2}>
                <View style={styles.subView2}>
                    <FlatList 
                        data={constData}
                        showsVerticalScrollIndicator={false}
                        renderItem={(item)=>(
                            <TouchableOpacity
                                key={item.item.id}
                                activeOpacity={0.8}
                                onPress={()=>segmentClicked(item.item.id)}
                                style={{flexDirection:"row",marginBottom:30}}
                                active={index==item.item.id}
                            >
                                <View style={{marginTop:3}}>
                                {
                                    item.item.id == 0 ? <Ionicons name="location-sharp" size={24} color="#fdb915" />
                                    :
                                    item.item.id == 1 ? <Ionicons name="globe-outline" size={24} color="#fdb915" />
                                    :
                                    item.item.id == 2 ? <MaterialCommunityIcons name="email" size={24} color="#fdb915" style={{marginTop:2}} />
                                    :
                                    item.item.id == 3 ? <Foundation name="clipboard-notes" size={24} style={{marginTop:2,marginLeft:5}} color="#fdb915" />
                                    :
                                    item.item.id == 4 ? <MaterialIcons name="alt-route" size={24} color="#fdb915" />
                                    :
                                    <MaterialIcons name="exit-to-app" size={24} color="#fdb915" style={{marginTop:2}} />
                                }
                                </View>
                                <View style={{marginLeft:40}}>
                                    <Text style={{fontSize:20,fontWeight:"600"}}>{item.item.heading}</Text>
                                    <Text style={{color:"gray",flexWrap:"wrap",marginRight:50}}>{item.item.description}</Text>
                                </View>
                            </TouchableOpacity>
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
        backgroundColor: "#fdb915",
        justifyContent:"center"
    },
    subView1: {
        height: 170,
        marginTop: 10
    },
    subView1_text1: {
        fontSize: 24,
        color: "#fff",
        marginLeft: 40
    },
    subView1_1: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15
    },
    subView1_1_1: {
        marginLeft: 20
    },
    subView1_1_1_text1: {
        fontSize: 18,
        color: "#fff"
    },
    view1_press: {
    },
    view2: {
        borderTopLeftRadius: 35,
        // borderWidth:1,
        marginTop: -30,
        backgroundColor:"#fff"
    },
    subView2: {
        marginTop: 30,
        marginLeft: 40
    },
    profile: {
        height: 70,
        width: 70,
        borderRadius: 70/2,
        marginLeft: 40,
        backgroundColor: "#fff"
    },
    modal: {
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#fff",
        height: 100,
        width: 100
    }
})