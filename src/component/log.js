import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import axios from "axios";



function Untitled({ navigation, route }) {

  const { email } = route.params;

  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);

  const errorHandler =()=>{
    if(otp==="" | otp.length != 6){
      setError(true);
    } else setError(false);
  };

  const submitHandler=()=>{
    axios.post("https://digicourierapp.herokuapp.com/user/activation",{"otpcode":otp})
    .then((resp)=>{
      if(resp.status === 200){
        navigation.navigate("sign");
        console.log(resp.data);
      }
      else{
        setError(true);
        console.log(resp.status);
      }
    })
  };


  return (
    <View style={styles.container}>
      <View style={styles.rect3Stack}>
        <View style={styles.rect3}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.loremIpsum3}>&lt;</Text>
            </TouchableOpacity>
            <View style={styles.buttonFiller}></View>
            <Text style={styles.verification}>Verification</Text>
          </View>
          <Text style={styles.loremIpsum}>
            Enter 6 digit verfication code{"\n"}sent on your given {email}
          </Text>
          <Text
            style={{ color: "white", marginLeft: wp(15), marginTop: hp(5) }}
          >
            0.3 min
          </Text>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.resend}>RESEND</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rect2}>
          <Text style={styles.enterOtp}>Enter OTP</Text>
          <TextInput
            placeholder="Enter 6 digit verification code"
            style={styles.textInput}
            value={otp}
            onChangeText={(val)=>setOtp(val)}
            onBlur={errorHandler}
          />
          {
            error === true ? <Text style={{color:"red",fontSize:12}}>Invalid OTP</Text> : null
          }
          <TouchableOpacity
            style={styles.button3}
            onPress={submitHandler}
          >
            <Text style={styles.loremIpsum2}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,149,0,1)",
  },
  rect3: {
    left: 0,
    width: 460,
    height: 412,
    position: "absolute",
    backgroundColor: "rgba(255,184,0,1)",
    top: 0,
  },
  button: {
    width: 46,
    height: 46,
    backgroundColor: "rgba(255,177,6,1)",
  },
  loremIpsum3: {
    // fontFamily: "roboto-700",
    color: "rgba(247,247,247,1)",
    fontSize: 30,
    marginTop: 2,
    marginLeft: 13,
  },
  buttonFiller: {
    flex: 1,
    flexDirection: "row",
  },
  verification: {
    // fontFamily: "roboto-700",
    color: "rgba(246,242,242,1)",
    lineHeight: 40,
    letterSpacing: 2,
    textAlign: "center",
    fontSize: 28,
  },
  buttonRow: {
    height: 46,
    flexDirection: "row",
    marginTop: 99,
    marginLeft: 46,
    marginRight: 200,
  },
  loremIpsum: {
    // fontFamily: "roboto-regular",
    color: "rgba(252,250,250,1)",
    fontSize: 20,
    marginTop: 29,
    marginLeft: 46,
  },
  button2: {
    width: 100,
    height: 35,
    backgroundColor: "rgba(255,168,9,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0,
    marginLeft: 272,
    paddingBottom: hp(5),
  },
  resend: {
    // fontFamily: "roboto-regular",
    color: "rgba(238,232,232,1)",
    fontSize: 20,
    marginLeft: 18,
  },
  rect2: {
    top: 348,
    left: 16,
    width: 478,
    height: 763,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 58,
    borderWidth: 1,
    borderColor: "rgba(251,250,250,1)",
    borderBottomWidth: 0,
  },
  enterOtp: {
    // fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    marginTop: 28,
    marginLeft: 30,
  },
  textInput: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    width: 347,
    height: 56,
    borderWidth: 0,
    borderColor: "#000000",
    fontSize: 23,
    borderStyle: "solid",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    opacity: 0.49,
    borderBottomWidth: 1,
    marginTop: 13,
    marginLeft: 28,
  },
  button3: {
    width: 259,
    height: 60,
    backgroundColor: "rgba(250,166,9,1)",
    borderRadius: 44,
    marginTop: 161,
    marginLeft: 58,
  },
  loremIpsum2: {
    // fontFamily: "roboto-regular",
    color: "rgba(251,247,247,1)",
    fontSize: 25,
    marginTop: 10,
    marginLeft: 85,
  },
  rect3Stack: {
    width: 491,
    height: 1141,
    marginTop: -30,
    marginLeft: -26,
  },
});

export default Untitled;
