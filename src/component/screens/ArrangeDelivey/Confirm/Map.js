import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


export default function MyMap(){
    return(
        <View style={{flex:1}}>
            <MapView style={styles.map} initialRegion={{latitude:22.5726,longitude: 88.3639,latitudeDelta: 0.0922,longitudeDelta: 0.0421}} />
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        height: height,
        width: width
    }
});