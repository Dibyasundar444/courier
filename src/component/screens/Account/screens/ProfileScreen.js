import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  LogBox,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { BottomSheet } from "react-native-btr";
import firebase from "firebase";

const Data = [
  {
    id: "0",
    title: "Full Name",
  },
  {
    id: "1",
    title: "Email Address",
  },
  {
    id: "2",
    title: "Phone number",
  },
];
LogBox.ignoreLogs(["Setting a timer"]);

export default function ProfileScreen({ navigation, route }) {
  const navigateData = route.params;
  // console.log(navigateData);

  const [image, setImage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [success, setSuccess] = useState(false);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setEdit(true);
      setVisible(false);
    }
  };
  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setVisible(false);
    }
  };

  const update = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });

    const ref = firebase.storage().ref().child(new Date().toISOString());
    const snapShot = ref.put(blob);

    snapShot.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        setUploading(true);
      },
      (err) => {
        console.log("err", err);
        blob.close();
        setUploading(false);
      }
    );
    snapShot.then(() => {
      snapShot.snapshot.ref.getDownloadURL().then((url) => {
        console.log("url", url);
        blob.close();
        setUploading(false);
        setSuccess(true);
        return url;
      });
    });
  };

  if (success) {
    setTimeout(() => {
      setSuccess(false);
    }, 3500);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" color={"#fff"} size={38} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 50,
            justifyContent: "space-around",
            flex: 0.9,
          }}
        >
          <Text style={{ fontSize: 24, color: "#fff", fontWeight: "bold" }}>
            My Profile
          </Text>
          <TouchableOpacity
            style={{ right: -10, alignItems: "center" }}
            activeOpacity={0.7}
            onPress={() => alert("coming soon")}
          >
            <Image
              source={require("../../../../image/Wallet.jpg")}
              style={{ bottom: -3 }}
            />
            <Text style={{ color: "#fff", fontSize: 10 }}>
              {navigateData.points}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        {/* <View style={styles.edit}>
                    <TouchableOpacity style={{paddingVertical:2,paddingHorizontal:5}}>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                </View> */}
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={toggleBottomNavigationView}
          >
            {navigateData.profileImg ? (
              <Image
                style={styles.profile}
                source={
                  image ? { uri: image } : { uri: navigateData.profileImg }
                }
              />
            ) : (
              <Image
                style={styles.profile}
                source={
                  image
                    ? { uri: image }
                    : require("../../../../image/Profile.png")
                }
              />
            )}
          </TouchableOpacity>
        </View>
        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}
        >
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Text style={{ fontWeight: "700", color: "#fdb915" }}>
                Choose Photo
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                width: "90%",
                borderWidth: 1,
                borderColor: "#aaa",
                backgroundColor: "#aaa",
              }}
            />
            <View style={{ marginTop: 30, alignItems: "center" }}>
              <Text
                onPress={openCamera}
                style={{
                  marginBottom: 20,
                  fontWeight: "700",
                  color: "gray",
                }}
              >
                Open camera
              </Text>
              <Text
                onPress={pickImage}
                style={{
                  fontWeight: "700",
                  color: "gray",
                }}
              >
                Select from file
              </Text>
            </View>
          </View>
        </BottomSheet>
        <View style={{ marginTop: 0 }}>
          <FlatList
            data={Data}
            showsVerticalScrollIndicator={false}
            renderItem={(item) => (
              <View key={item.item.id} style={styles.nameView}>
                <Text style={styles.title}>{item.item.title}</Text>
                <Text style={styles.subTitle}>
                  {item.item.id == 0
                    ? navigateData.name
                    : item.item.id == 1
                    ? navigateData.email
                    : navigateData.phoneNo}
                </Text>
                <View style={styles.line} />
              </View>
            )}
          />
        </View>
        {edit ? (
          <View style={{ alignItems: "center", marginTop: 40 }}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 8,
                paddingHorizontal: 20,
                backgroundColor: "#fdb915",
                borderRadius: 4,
              }}
              onPress={update}
            >
              {uploading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={{ color: "#fff" }}>Update</Text>
              )}
            </TouchableOpacity>
            {success ? (
              <Text style={{ color: "green", fontSize: 12, marginTop: 20 }}>
                Updated successfully
              </Text>
            ) : null}
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdb915",
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 30,
    flex: 0.1,
    marginBottom: 50,
  },
  body: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    flex: 1,
  },
  profile: {
    // position:"absolute",
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    backgroundColor: "#fff",
    top: -20,
    borderWidth: 0.5,
    borderColor: "gray",
    // resizeMode:'contain',
  },
  nameView: {
    marginLeft: 20,
    // marginTop:20
  },
  title: {
    fontSize: 22,
  },
  subTitle: {
    fontSize: 16,
    marginTop: 10,
  },
  line: {
    borderWidth: 1,
    marginTop: 15,
    marginRight: 20,
    borderColor: "#fdb915",
  },
  edit: {
    position: "absolute",
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    right: 30,
    top: -10,
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 180,
    alignItems: "center",
  },
});
