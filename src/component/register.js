import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RadioButton } from "react-native-paper";
import axios from "axios";
import { API } from "../../config";

const Register = ({ navigation }) => {

  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [values, setValues] = useState({
                                        name:"", 
                                        email:"", 
                                        password:"", 
                                        phoneNo:"", 
                                        profileImg:"qwer", 
                                        businessCustomer: false,
                                        Bname:"",
                                        GST:"",
                                        PAN:"",
                                        Aadhaar:""
                                      });

  const { name, email, password, phoneNo, profileImg, businessCustomer, Bname, GST, PAN, Aadhaar } = values;

  const errorHandler1=()=>{
    if (name=="") {
      setError1(true);
    } else{
      setError1(false);
    }
  };
  const errorHandler2=()=>{
    if (email=="") {
      setError2(true);
    } else{
      setError2(false);
    }
  };
  const errorHandler3=()=>{
    if (phoneNo=="" | phoneNo.length != 10) {
      setError3(true);
    } else{
      setError3(false);
    }
  };

  let postData = !businessCustomer ? {
    name: name, 
    email: email, 
    password:password, 
    phoneNo: phoneNo, 
    profileImg:"qwer", 
    businessCustomer: businessCustomer
  } : {
    name: name, 
    email: email, 
    password:password, 
    phoneNo: phoneNo, 
    profileImg:"qwer", 
    businessCustomer: businessCustomer,
    businessName: Bname,
    gstNumber: GST,
    panCardNo: PAN,
    adhaarCardNumber: Aadhaar
  }
  console.log(postData);
  const submitHandler=()=>{
    if (email==="" | phoneNo==="" | phoneNo.length != 10 | name==="") {
      null
    }else {
      // console.log(values);
      axios.post(`${API}/register`,postData)
      .then((resp)=>{
        if(resp.status===200){
          console.log(resp.data);
          navigation.navigate("verification",{email: email});
        }
        else{
          console.log(resp.status);
        }
      })
      .catch(e=>console.log(e));
    }
  };

  return (
    <View style={styles.container}>
        <Text
          style={{
            marginTop: hp(7),
            textAlign: "center",
            color: "#fff",
            fontSize: 20,
          }}
        >
          Register
        </Text>
        <View style={styles.scontainer}>
            <ScrollView style={{marginTop:10}}>
                <Text style={{ fontSize: 17, marginHorizontal: 10, marginTop: hp(6) }}>
                  Full Name
                </Text>
                <TextInput
                  placeholder="Enter Full name"
                  placeholderTextColor="grey"
                  style={{
                    fontSize: 17,
                    marginHorizontal: 10,
                    borderBottomWidth: 1,
                    marginTop: hp(1),
                  }}
                  value={name}
                  onChangeText={(val)=>setValues({...values,name: val})}
                  // keyboardType="numeric"
                  onBlur={errorHandler1}
                />
                {
                  error1 === true ? <Text style={{color:"red",marginLeft:20,fontSize:12}}>* required field</Text> : null
                }
                <Text style={{ fontSize: 17, marginHorizontal: 10, marginTop: hp(3) }}>
                  Email Address
                </Text>
                <TextInput
                  placeholder="Enter Email Address"
                  placeholderTextColor="grey"
                  style={{
                    fontSize: 17,
                    marginHorizontal: 10,
                    borderBottomWidth: 1,
                    marginTop: hp(1),
                  }}
                  value={email}
                  onChangeText={(val)=>setValues({...values,email: val})}
                  keyboardType="email-address"
                  onBlur={errorHandler2}
                />
                {
                  error2 === true ? <Text style={{color:"red",marginLeft:20,fontSize:12}}>* required field</Text> : null
                }
                <Text style={{ fontSize: 17, marginHorizontal: 10, marginTop: hp(3) }}>
                  Password
                </Text>
                <TextInput
                  placeholder="Enter the password"
                  placeholderTextColor="grey"
                  style={{
                    fontSize: 17,
                    marginHorizontal: 10,
                    borderBottomWidth: 1,
                    marginTop: hp(1),
                  }}
                  value={password}
                  onChangeText={(val)=>setValues({...values,password: val})}
                  
                />
                <Text style={{ fontSize: 17, marginHorizontal: 10, marginTop: hp(3) }}>
                  Are You a Bussiness Customer ?
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.containertext}>
                    <RadioButton
                      style={styles.radioCircle}
                      status={businessCustomer == true ? "checked" : "unchecked"}
                      onPress={() => setValues({...values,businessCustomer: true})}
                      color="#000"
                    />
                    <Text style={styles.radioText}>yes</Text>
                  </View>
                  <View style={styles.containertext}>
                    <RadioButton
                      style={styles.radioCircle}
                      status={businessCustomer == false ? "checked" : "unchecked"}
                      onPress={() => setValues({...values,businessCustomer: false})}
                      color="#000"
                    />
                    <Text style={styles.radioText}>No</Text>
                  </View>
                </View>
                {
                  businessCustomer ? 
                  <>
                    <Text style={{ fontSize: 17, marginHorizontal: 10, marginTop: hp(3) }}>
                      Name of the Business
                    </Text>
                    <TextInput
                      placeholder="Name of the business"
                      placeholderTextColor="grey"
                      style={{
                        fontSize: 17,
                        marginHorizontal: 10,
                        borderBottomWidth: 1,
                        marginTop: hp(1),
                      }}
                      value={Bname}
                      onChangeText={(val)=>setValues({...values,Bname: val})}
                      // onBlur={errorHandler3}
                    />
                    <Text style={{ fontSize: 17, marginHorizontal: 10, marginTop: hp(3) }}>
                      GST Number
                    </Text>
                    <TextInput
                      placeholder="GST number"
                      placeholderTextColor="grey"
                      style={{
                        fontSize: 17,
                        marginHorizontal: 10,
                        borderBottomWidth: 1,
                        marginTop: hp(1),
                      }}
                      value={GST}
                      onChangeText={(val)=>setValues({...values,GST: val})}
                      // onBlur={errorHandler3}
                    />
                    <Text style={{ fontSize: 17, marginHorizontal: 10, marginTop: hp(3) }}>
                      PAN Card Number
                    </Text>
                    <TextInput
                      placeholder="PAN Card number"
                      placeholderTextColor="grey"
                      style={{
                        fontSize: 17,
                        marginHorizontal: 10,
                        borderBottomWidth: 1,
                        marginTop: hp(1),
                      }}
                      value={PAN}
                      onChangeText={(val)=>setValues({...values,PAN: val})}
                      // onBlur={errorHandler3}
                    />
                    <Text style={{ fontSize: 17, marginHorizontal: 10, marginTop: hp(3) }}>
                      Aadhaar Card Number
                    </Text>
                    <TextInput
                      placeholder="Aadhaar Card number"
                      placeholderTextColor="grey"
                      style={{
                        fontSize: 17,
                        marginHorizontal: 10,
                        borderBottomWidth: 1,
                        marginTop: hp(1),
                      }}
                      value={Aadhaar}
                      onChangeText={(val)=>setValues({...values,Aadhaar: val})}
                      // onBlur={errorHandler3}
                    />
                  </> 
                  : 
                  null
                }
                <Text style={{ fontSize: 17, marginHorizontal: 10, marginTop: hp(3) }}>
                  Phone Number
                </Text>
                <TextInput
                  placeholder="Enter Phone number"
                  placeholderTextColor="grey"
                  style={{
                    fontSize: 17,
                    marginHorizontal: 10,
                    borderBottomWidth: 1,
                    marginTop: hp(1),
                  }}
                  value={phoneNo}
                  onChangeText={(val)=>setValues({...values,phoneNo: val})}
                  keyboardType="numeric"
                  maxLength={10}
                  onBlur={errorHandler3}
                />
                {
                  error3 === true ? <Text style={{color:"red",marginLeft:20,fontSize:12}}>* required field</Text> : null
                }
                <View style={{marginTop:40,flexDirection:"row",marginLeft:10}}>
                  <Text>Already have an account?</Text>
                  <Text style={{marginLeft:20,color:"#e0ab24"}} onPress={()=>navigation.navigate("sign")}>sign in here</Text>
                </View>
                <TouchableOpacity
                  style={[styles.button3,{justifyContent:"center",alignItems:"center"}]}
                  onPress={submitHandler}
                >
                  <Text style={styles.loremIpsum2}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fdb915",
    flex: 1,
  },
  scontainer: {
    borderTopLeftRadius: 30,
    width: wp("130%"),
    backgroundColor: "#fff",
    marginTop: hp(8),
    height: hp("100%"),
    flex:1
  },
  button3: {
    alignItems: "center",
    marginTop: hp(5),
    marginBottom: hp(5),
    width: wp(60),
    height: hp(7),
    backgroundColor: "#fdb915",
    borderRadius: 16,
    marginLeft: wp(18),
  },
  loremIpsum2: {
    fontSize: 17,
    color: "#fff",
    // marginTop: hp(2),
  },
  containertext: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  radioCircle: {},
  radioText: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
});
