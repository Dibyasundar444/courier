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


const sign = ({ navigation }) => {

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
      axios.post("https://digicourierapp.herokuapp.com/user/login",{"email": email, "password": password})
      .then((resp)=>{
        if(resp.status == 200){
          try {
            const jsonValue = JSON.stringify(resp.data);
            AsyncStorage.setItem('jwt',jsonValue);
            console.log(jsonValue);
          } catch (e) {
            console.log(e);
          }
          navigation.navigate("logss");
        }
        else {
          console.log(resp.status);
        }
      })
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          borderTopLeftRadius: 30,
          // width: wp("130%"),
          backgroundColor: "#fff",
          marginTop: hp(15),
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
          keyboardType="numeric"
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
        {/* <Text
          style={{
            color: "grey",
            marginVertical: 15,
            marginHorizontal: wp(24),
          }}
        >
          We'll send OTP for verification
        </Text> */}
        <Text
          style={{
            marginTop: hp(6),
            // backgroundColor:"#000",
            textAlign:"center",
            // marginHorizontal: wp(27),
            fontSize: 20,
            color:"gray"
          }}
        >
          or Continue with
        </Text>
        <View style={{height:hp(30),justifyContent:"flex-end"}}>
          <View style={{ flexDirection: "row",justifyContent:"space-evenly",marginBottom:25 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#2834a1",
                padding: 15,
                paddingHorizontal: 37,
              }}
            >
              <Text style={{ color: "#fff" }}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#f54c6e",
                padding: 15,
                paddingHorizontal: 37,
              }}
            >
              <Text style={{ color: "#fff" }}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                padding: 15,
                paddingHorizontal: 37,
              }}
            >
              <Text style={{ color: "#fff" }}>Apple</Text>
            </TouchableOpacity>
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

export default sign;
