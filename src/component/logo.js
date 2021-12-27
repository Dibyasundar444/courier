import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const logo = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#e0ab24", height: hp("100%") }}>
      <TouchableOpacity onPress={() => navigation.navigate("register")}>
        <Image
          source={require("../image/appIcon.png")}
          resizeMode="contain"
          style={styles.img}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: "white",
          fontSize: 18,
          marginHorizontal: wp(35),
          marginBottom: hp(10),
        }}
      >
        Postman 365
      </Text>
    </View>
  );
};

export default logo;

const styles = StyleSheet.create({
  img: {
    width: wp(25),
    height: hp(25),
    marginTop: hp(25),
    marginLeft: wp(35),
  },
});
