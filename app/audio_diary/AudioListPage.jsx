import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { Modal, View } from "react-native";
import Title from "../../components/Title";
import { AuthStartStyles } from "../../styles/AuthStartStyles";

import { Calendar } from "react-native-calendars";

const AudioListPage = () => {
  const [showMoadl, setShowModal] = useState(false);
  const onDayPress = (day) => {
    console.log(day.timestamp)
  };
  useEffect(() => {}, []);

  return (
    <Container
      child={
        <View style={{ flex: 1, alignItems: "center" }}>
          <Title />
          {/* <View style={AuthStartStyles.card}></View> */}

          <View style={{ width: 300,marginTop : 80 }}>
            <Calendar
              onDayPress={onDayPress}
              style={{ width: 300, borderRadius: 24 }}
            />
          </View>

    
        </View>
      }
    />
  );
};

export default AudioListPage;
