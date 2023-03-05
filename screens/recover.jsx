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

export default function RecoverPword({ navigation }) {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const [snack, setSnak] = useState(false);

  // handle password recovery

  const handleRecovery = () => {
    setTimeout(() => {
      setEmail("");
      setSnak(true);
    }, 1000);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.illustration}>
          <Image
            source={require("../assets/verify.png")}
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
                to display sign-up errors
              </Text>
            </View>
          )}

          <TextInput
            variant="standard"
            label="Email"
            keyboardType="email"
            value={email}
            onChangeText={(Text) => setEmail(Text)}
            style={{ margin: 10, fontSize: 20, width: "100%" }}
          />

          <Button
            title="Submit"
            color="orange"
            style={{ width: 300, marginBottom: "5%", marginTop: "5%" }}
            disabled={email.length > 4 ? false : true}
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
              <Button
                variant="text"
                title="NEXT"
                color="orange"
                compact
                onLongPress={() => navigation.navigate("Verity Account")}
              />
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
    paddingBottom: "20%",
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
    height: "20%",
    marginTop: "5%",

    backgroundColor: "green",
  },
});
