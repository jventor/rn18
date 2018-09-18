import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Characters extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fabada",
          alignItems: "center",
          alignContent: "center"
        }}
      >
        <Text style={{ color: "black", fontWeight: "bold" }}>Houses</Text>
      </View>
    );
  }
}
