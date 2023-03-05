import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import { Button, Surface } from "@react-native-material/core";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Otp() {
  const [otp, setOtp] = useState("");
  const [err, setErr] = useState("");
  const sufaceHolder = [0, 1, 2, 0];

  const handleOtp = (text) => {
    // copy state
    let otpCopy = otp;
    //
    const oC = (otpCopy += text);
    setOtp(oC);
  };

  // verification logic
  const handleVerify = () => {
    if (otp.length < 4) {
      setErr("wrong code entered");
    }
  };

  return (
    <View style={styles.screenSize}>
      <View style={styles.container}>
        <View style={styles.titlesec}>
          <Icon name="lock" size={100} color="#c1b7b0" />
          {<Text style={{ color: "red", padding: 5 }}>{err}</Text>}
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            OTP VERIFICATION
          </Text>
          <Text> verification err here</Text>
          <View style={styles.inputs}>
            {sufaceHolder.map((digit, index) => {
              return (
                <Surface
                  elevation={0}
                  category="medium"
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 70,
                    height: 70,
                    backgroundColor: "lightgrey",
                  }}
                  key={index}
                >
                  <TextInput
                    keyboardType="numeric"
                    value={digit}
                    textAlign="center"
                    maxLength={1}
                    style={{
                      borderColor: "green",
                      fontSize: 25,
                      fontWeight: "bold",
                      width: "100%",
                      height: "100%",
                    }}
                    onChangeText={(text) => handleOtp(text)}
                  />
                </Surface>
              );
            })}
          </View>
          <Button
            title="Verify now"
            color="orange"
            style={{ width: "80%", marginTop: "10%" }}
            disabled={otp.length < 4 ? true : false}
            onPress={handleVerify}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenSize: {
    height: windowHeight,
    width: windowWidth,
    padding: 0,
    backgroundColor: "white",
  },
  container: {
    flex: 1,

    margin: 0,
  },
  titlesec: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "20%",
  },
  inputs: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: "5%",
  },
  inputText: {},
});
