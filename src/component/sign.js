import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-facebook';

import { API } from "../../config";

WebBrowser.maybeCompleteAuthSession();

const Sign = ({ navigation }) => {

  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState(null);
  
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '564858245446-760t5d14fuhhp41cdnk58doqg1hfdoth.apps.googleusercontent.com',
    iosClientId: '748771280616-tfshincnhnomntsl165led9gnbgqdad0.apps.googleusercontent.com',   // have to change
    androidClientId: '564858245446-uv4sn6c7t28qtj6f0pajnstvnboksmik.apps.googleusercontent.com'
  });
  // console.log(response);
  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log("google",JSON.stringify(response));
      }
  }, [response]);

  async function FBlogIn() {
    try {
      await Facebook.initializeAsync({
        appId: '6974666259274428',
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        axios.get(`https://graph.facebook.com/me?access_token=${token}`)
        .then(resp=>{
          // console.log(resp.data);
          axios.get(`https://graph.facebook.com/${resp.data.id}?fields=id,name,email,picture.type(large)&access_token=${token}`)
          .then(res=>{
            console.log(res.data);
            const navData = {
              id: res.data.id,
              name: res.data.name,
              profileImg: res.data.picture.data.url
            };
            navigation.navigate('ChooseCustomer',navData);
          })
        })
      } else {
        alert('Login failed');
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }


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
      setLoading(true);
      axios.post(`${API}/login`,{"email": email, "password": password})
      .then(async resp => {  
        console.log("resp",resp);
          try {
            const jsonValue = JSON.stringify(resp.data);
            await AsyncStorage.setItem('jwt',jsonValue);
            // console.log(jsonValue);
          } 
          catch (e) {
            console.log(e);
          }
          setLoading(false);
          navigation.navigate("logss");
      })
      .catch(e=>{
        console.log(e);
        setLoading(false);
      })
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
            {
              loading ? <ActivityIndicator color="#fff" size={30} />
              :
              <Text style={styles.loremIpsum2}>Continue</Text>
            }
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
              onPress={FBlogIn}
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
              onPress={()=>promptAsync({useProxy: true})}
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
    justifyContent:"center"
    // marginLeft: wp(18),
  },
  loremIpsum2: {
    fontSize: 17,
    color: "#fff",
    // marginTop: hp(2),
  },
});

export default Sign;
