import React from "react";
import Container from "../../components/Container";
import { View, Image, StyleSheet, TouchableOpacity, TextInput,Text } from "react-native";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from "../../components/CustomInput";

const AddMemmory = () => {
  return (
    <Container
      child={
        <View style={{ flex: 1, alignItems: "center" }}>
          <Title />
          <View style={styles.imageWrapper}>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Icon name="plus" size={24} color="black" />
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={require("../../assets/music.png")}
            />
          </View>
          <View>
            <CustomInput placeholder={"Name"} onChange={(e)=>{}} />
            <CustomInput placeholder={"Relationship"} onChange={(e)=>{}} />
            <Button onPressed={()=>{}} text={"Add Memmory"}/>
          </View>
          <Button onPressed={()=>{}} text={"Add"} />
        </View>
      }
    />
  );
};

export default AddMemmory;

const styles = StyleSheet.create({
  imageWrapper: {
    width: 350,
    height: 350,
    marginVertical : 8,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  image: {
    width: 350,
    height: 300,
  },
  button: {
    width: 50,
    borderColor : "black",
    borderWidth : 1,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
