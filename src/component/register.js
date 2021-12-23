import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RadioButton } from "react-native-paper";

const register = ({ navigation }) => {
  const [Gender, setGender] = useState();
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
        />
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
        />
        <Text style={{ fontSize: 17, marginHorizontal: 10, marginTop: hp(3) }}>
          Are You a Bussiness Customer ?
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.containertext}>
            <RadioButton
              style={styles.radioCircle}
              status={Gender == "Women" ? "checked" : "unchecked"}
              onPress={() => setGender("Women")}
              color={"#000"}
            />
            <Text style={styles.radioText}>yes</Text>
          </View>
          <View style={styles.containertext}>
            <RadioButton
              style={styles.radioCircle}
              status={Gender == "Men" ? "checked" : "unchecked"}
              onPress={() => setGender("Men")}
              color={"#000"}
            />
            <Text style={styles.radioText}>No</Text>
          </View>
        </View>
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
        />
        <TouchableOpacity
          style={styles.button3}
          onPress={() => navigation.navigate("logss")}
        >
          <Text style={styles.loremIpsum2}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0ab24",
    flex: 1,
  },
  scontainer: {
    borderRadius: 30,
    width: wp("130%"),
    backgroundColor: "#fff",
    marginTop: hp(8),
    height: hp("100%"),
  },
  button3: {
    alignItems: "center",
    marginTop: hp(20),
    width: wp(60),
    height: hp(7),
    backgroundColor: "#e0ab24",
    borderRadius: 16,
    marginLeft: wp(18),
  },
  loremIpsum2: {
    fontSize: 17,
    color: "#fff",
    marginTop: hp(2),
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
