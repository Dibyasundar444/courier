import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from "../../config";


const Sign = ({ navigation }) => {

  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const errorHandler1=()=>{
    if (email=="") {
      setError1(true);
    } else{
      setError1(false);
    }
  };
  const errorHandler2=()=>{
    if (password=="") {
      setError2(true);
    } else{
      setError2(false);
    }
  };

  const submitHandler=async()=>{
    if (email=="" | password=="") {
      null
    }else {
      axios.post(`${API}/login`,{"email": email, "password": password})
      .then(async resp => {
        if(resp.status == 200){
          try {
            const jsonValue = JSON.stringify(resp.data);
            await AsyncStorage.setItem('jwt',jsonValue);
            // console.log(jsonValue);
          } catch (e) {
            console.log(e);
          }
          navigation.navigate("logss");
        }
        else {
          console.log(resp.status);
        }
      })
      .catch(e=>console.log(e))
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          borderTopLeftRadius: 30,
          backgroundColor: "#fff",
          marginTop: hp(15),
          flex:1
        }}
      >
        <Text
          style={{
            marginTop: hp(5),
            color: "grey",
            fontSize: 22,
            textAlign:"center"
            // marginLeft: wp(14),
          }}
        >
          Signin
        </Text>
        <TextInput
          placeholder="Email Address"
          style={{
            marginTop: hp(10),
            fontSize: 18,
            marginHorizontal: 23,
            borderBottomWidth: 1,
          }}
          value={email}
          onChangeText={(val)=>setEmail(val)}
          keyboardType="email-address"
          onBlur={errorHandler1}
        />
        {
          error1 === true ? <Text style={{color:"red",marginLeft:20,fontSize:12}}>* required field</Text> : null
        }
        <TextInput
          placeholder="Password"
          style={{
            marginTop: hp(10),
            fontSize: 18,
            marginHorizontal: 23,
            borderBottomWidth: 1,
          }}
          value={password}
          onChangeText={(val)=>setPassword(val)}
          onBlur={errorHandler2}
        />
        {
          error2 ? <Text style={{color:"red",marginLeft:20,fontSize:12}}>* required field</Text> : null
        }
        <View style={{alignItems:"center"}}>
          <TouchableOpacity
            style={styles.button3}
            onPress={submitHandler}
          >
            <Text style={styles.loremIpsum2}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:"center",marginVertical:20}}>
          <Text>Don't have an account?</Text>
          <Text style={{color:"#e0ab24"}}
            onPress={()=>navigation.navigate("register")}
          >Register here</Text>
        </View>
        <Text
          style={{
            // marginTop: hp(6),
            // backgroundColor:"#000",
            textAlign:"center",
            // marginHorizontal: wp(27),
            fontSize: 20,
            color:"gray"
          }}
        >
          or Continue with
        </Text>
        <View style={{height:hp(25)}}>
          <View style={{ flexDirection: "row",justifyContent:"space-evenly", marginTop: 30 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#2834a1",
                padding: 15,
                paddingHorizontal: 37,
                borderRadius: 10
              }}
            >
              <Text style={{ color: "#fff" }}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#f54c6e",
                padding: 15,
                paddingHorizontal: 37,
                borderRadius: 10
              }}
            >
              <Text style={{ color: "#fff" }}>Google</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{
                backgroundColor: "#000",
                padding: 15,
                paddingHorizontal: 37,
              }}
            >
              <Text style={{ color: "#fff" }}>Apple</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: hp(20),
    backgroundColor: "#e0ab24",
    flex: 1,
  },
  button3: {
    alignItems: "center",
    marginTop: hp(4),
    width: wp(60),
    height: hp(7),
    backgroundColor: "#e0ab24",
    borderRadius: 16,
    // marginLeft: wp(18),
  },
  loremIpsum2: {
    fontSize: 17,
    color: "#fff",
    marginTop: hp(2),
  },
});

export default Sign;
