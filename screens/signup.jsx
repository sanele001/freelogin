import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button, TextInput } from "@react-native-material/core";

import { useState } from "react";

export default function Signup({ navigation }) {
  const [err, setErr] = useState(false);
  const [errMessage, setErrMassage] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConform] = useState("");
  const [number, setNumber] = useState("");
  const [btn, setBtn] = useState(true);

  function onSignup() {
    // input validation
    if (!email || !password || !confirm || number === "") {
      setErr(true);
      setErrMassage("all inputs must be filled");
    } else if (password !== confirm) {
      setErr(true);
      setErrMassage("password do not match");
    } else if (number.length !== 10) {
      setErrMassage("number must be equal to 10 digits");
      setErr(true);
    } else {
      // run back end sign-up function
      navigation.navigate("Verify");
    }
  }
  // password confirm
  function confimPword(Text) {
    if (password && email !== "") {
      setConform(Text);
      setBtn(false);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {/* this is error text */}
        {err && (
          <View>
            <Text style={{ color: "red", paddingBottom: 10 }}>
              dynamic arror message here
            </Text>
          </View>
        )}
      </View>
      <View style={styles.inputsView}>
        <TextInput
          variant="standard"
          label="Email"
          keyboardType="email"
          value={email}
          onChangeText={(Text) => setEmail(Text)}
          style={{ margin: 10, fontSize: 20 }}
        />
        <TextInput
          variant="standard"
          label="Phone Number"
          keyboardType="numeric"
          value={number}
          onChangeText={(Text) => setNumber(Text)}
          style={{ margin: 10, fontSize: 20 }}
        />
        <TextInput
          variant="standard"
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(Text) => setPassword(Text)}
          style={{ margin: 10, fontSize: 20 }}
        />
        <TextInput
          variant="standard"
          label="Confirm Password"
          secureTextEntry={true}
          value={confirm}
          onChangeText={(text) => confimPword(text)}
          style={{ margin: 10, fontSize: 20 }}
        />
      </View>
      <View style={styles.signupFooter}>
        <Button
          title="Sign-up now"
          color="orange"
          style={{ width: 300 }}
          disabled={confirm ? btn : true}
          onPress={onSignup}
        />
        <View style={{ marginTop: 50, flexDirection: "row" }}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
              Sign-in Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  top: {
    justifyContent: "center",
    alignItems: "center",
  },

  signupFooter: {
    justifyContent: "center",
    alignItems: "center",

    marginTop: 20,
  },

  inputsView: {},
});
