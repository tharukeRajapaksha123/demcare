import React, { useState } from "react";
import Container from "../components/Container";
import { View, Text, TouchableOpacity } from "react-native";
import Title from "../components/Title";
import { AuthStartStyles } from "../styles/AuthStartStyles";
import CustomInput from "../components/CustomInput";
import CustomDatePicker from "../components/CustomDatePicker";
import Button from "../components/Button";
import { useRouter } from "expo-router";
import { register } from "../services/auth_service";
const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (loading) {
  }

  return (
    <Container
      child={
        <View style={{ flex: 1, alignItems: "center" }}>
          <Title />
          <View style={{ ...AuthStartStyles.card, height: 500 }}>
            <Text style={{ fontSize: 32, ...AuthStartStyles.text }}>
              REGISTER
            </Text>
            <CustomInput
              onChange={(e) => {
                setName(e);
              }}
              placeholder={"Name"}
            />
            <CustomInput
              onChange={(e) => {
                setAge(e);
              }}
              placeholder={"Age"}
            />
            <CustomInput
              onChange={(e) => {
                setEmail(e);
              }}
              placeholder={"Email"}
            />
            <CustomInput
              onChange={(e) => {
                setPassword(e);
              }}
              placeholder={"Password"}
            />
            <Button
              onPressed={async () => {
                setLoading(true);
                const result = await register(email, password, name, age);
                if (result) {
                  router.push("/PatientHome");
                }
                setLoading(true);
              }}
              text={"REGISTER"}
            />
          </View>
          <View style={{ alignItems: "center", height: 100 }}>
            <Text style={{ ...AuthStartStyles.text, fontSize: 24 }}>
              Already have an account?
            </Text>
            <TouchableOpacity
              style={{ margin: 0 }}
              onPress={() => {
                router.push("/");
              }}
            >
              <Text
                style={{ ...AuthStartStyles.text, fontSize: 16, margin: 8 }}
              >
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    />
  );
};

export default RegisterPage;
