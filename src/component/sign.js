import React from "react";
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

const sign = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 30,
          width: wp("130%"),
          backgroundColor: "#fff",
          marginTop: hp(15),
        }}
      >
        <Text
          style={{
            marginTop: hp(5),
            color: "grey",
            fontSize: 22,
            marginLeft: wp(14),
          }}
        >
          Sign in with phone number
        </Text>
        <TextInput
          placeholder="Email Address"
          style={{
            marginTop: hp(10),
            fontSize: 25,
            marginHorizontal: 23,
            borderBottomWidth: 1,
          }}
        />
        <TextInput
          placeholder="Phone Number"
          style={{
            marginTop: hp(10),
            fontSize: 25,
            marginHorizontal: 23,
            borderBottomWidth: 1,
          }}
        />
        <TouchableOpacity
          style={styles.button3}
          onPress={() => navigation.navigate("log")}
        >
          <Text style={styles.loremIpsum2}>Continue</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "grey",
            marginVertical: 15,
            marginHorizontal: wp(24),
          }}
        >
          We'll send OTP for verification
        </Text>
        <Text
          style={{
            marginTop: hp(6),
            marginHorizontal: wp(27),
            fontSize: 20,
          }}
        >
          or Continue with
        </Text>
        <View style={{ flexDirection: "row", marginVertical: hp(10) }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#2834a1",
              padding: 10,
              paddingHorizontal: 37,
            }}
          >
            <Text style={{ color: "#fff" }}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#f54c6e",
              padding: 10,
              paddingHorizontal: 37,
            }}
          >
            <Text style={{ color: "#fff" }}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              padding: 10,
              paddingHorizontal: 37,
            }}
          >
            <Text style={{ color: "#fff" }}>Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(20),
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
    marginLeft: wp(18),
  },
  loremIpsum2: {
    fontSize: 17,
    color: "#fff",
    marginTop: hp(2),
  },
});

export default sign;
