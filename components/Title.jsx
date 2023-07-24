import React from "react";
import { View, Text } from "react-native";
import { TitleStyle } from "../styles/TitleStyle";
const Title = () => {
  return (
    <View style={TitleStyle.titleWrapper}>
      <Text style={TitleStyle.title}> DemCare</Text>
    </View>
  );
};

export default Title;
