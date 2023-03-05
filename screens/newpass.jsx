import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

import { Button, TextInput, Snackbar } from "@react-native-material/core";

import { useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function NewPassword() {
  const [passWord, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [err, setErr] = useState(false);
  const [snack, setSnak] = useState(false);

  // handle password recovery

  const handleRecovery = () => {
    if (passWord !== confirmPass) {
      setErr(true);
    } else {
      setTimeout(() => {
        setPassword("");
        setConfirmPass("");
        setSnak(true);
      }, 1000);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.illustration}>
          <Image
            source={require("../assets/account.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <View style={styles.top}>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            Enter your registered email.
          </Text>
          <Text>We will send a verification code to a registered email.</Text>
          {/* this is error text */}
          {err && (
            <View>
              <Text style={{ color: "red", paddingBottom: 10 }}>
                handle errors here
              </Text>
            </View>
          )}

          <TextInput
            variant="standard"
            label="New Password"
            keyboardType="default"
            value={passWord}
            secureTextEntry={true}
            onChangeText={(Text) => setPassword(Text)}
            style={{ margin: 10, fontSize: 20, width: "100%" }}
          />

          <TextInput
            variant="standard"
            label="Confirm New Email"
            keyboardType="default"
            secureTextEntry={true}
            value={confirmPass}
            onChangeText={(Text) => setConfirmPass(Text)}
            style={{ margin: 10, fontSize: 20, width: "100%" }}
          />
          <Button
            title="Submit"
            color="orange"
            style={{ width: 300, marginBottom: "5%", marginTop: "5%" }}
            disabled={passWord.length > 4 ? false : true}
            onPress={handleRecovery}
          />
          <TouchableOpacity>
            <Text style={{ fontSize: 20 }}>resend</Text>
          </TouchableOpacity>
        </View>
        {snack && (
          <Snackbar
            message="Please check your email."
            action={
              <Button variant="text" title="NEXT" color="orange" compact />
            }
            style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: "white",
  },
  container: { flex: 1, alignItems: "center", justifyContent: "flex-start" },
  top: {
    justifyContent: "center",
    alignItems: "center",

    width: "90%",
  },
  illustration: {
    width: "60%",
    height: "30%",
    marginTop: "5%",

    backgroundColor: "green",
  },
});
