import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import Container from "../components/Container";
import Title from "../components/Title";
import { AuthStartStyles } from "../styles/AuthStartStyles";
import CustomInput from "../components/CustomInput";
import TextButton from "../components/TextButton";
import Button from "../components/Button";
import { useRouter } from "expo-router";
import { signin } from "../services/auth_service";
import { getFromStorage } from "../services/local_storage_service";
const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container
      child={
        <View style={{ alignItems: "center", flex: 1 }}>
          <Title />
          <View style={AuthStartStyles.card}>
            <Text style={{ ...AuthStartStyles.text, fontSize: 30 }}>LOGIN</Text>
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
            <TextButton
              onPress={() => {}}
              children={"Forgot your password"}
              fontSize={16}
              color={"#51A6CD"}
            />
            <Button
              onPressed={async () => {
                if (email && password) {
                  const isPatient = await getFromStorage("USER_TYPE");
                  const result = await signin(email, password);
                  console.log(result);
                  if(result){
                    if(isPatient === "PATIENT"){
                      router.push("/PatientHome");
                    }
                  }else{
                    Alert.alert("Signin failed, please try again");
                  }
                }
              }}
              text={"LOGIN"}
            />
          </View>
          <View>
            <Text style={{ ...AuthStartStyles.text, fontSize: 24 }}>
              Don't have an account ?
            </Text>
            <TextButton
              onPress={() => {
                router.push("/RegisterPage");
              }}
              children={"SIGN UP"}
              color={"#51A6CD"}
              fontSize={16}
            />
          </View>
        </View>
      }
    />
  );
};

export default LoginPage;
