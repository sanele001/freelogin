import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Button, TextInput } from "@react-native-material/core";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Login({ navigation }) {
  const [err, setErr] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        {/* this is error text */}
        {err && (
          <View>
            <Text style={{ color: "red", paddingBottom: 10 }}>
              to display login errors
            </Text>
          </View>
        )}
        <View style={styles.socialLogin}>
          <Button
            variant="outlined"
            color="red"
            title="facebook"
            leading={(props) => (
              <Icon name="facebook" size={20} color="orange" />
            )}
          />
          <Text> </Text>
          <Button
            variant="outlined"
            title="Google  "
            leading={(props) => <Icon name="google" size={20} color="orange" />}
          />
        </View>
      </View>
      <View style={styles.inputsView}>
        <TextInput
          variant="standard"
          label="Email"
          style={{ margin: 16, fontSize: 20, color: "grey" }}
        />
        <TextInput
          variant="standard"
          label="Password"
          secureTextEntry={true}
          style={{ margin: 16, fontSize: 20, fontWeight: "bold" }}
        />
        <View style={styles.forgotPasswordView}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Recover Password")}
          >
            <Text style={{ color: "orange" }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.loginFooter}>
        <Button title="Login" color="orange" style={{ width: 300 }} />
        <View style={{ marginTop: 50, flexDirection: "row" }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
              Register Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "white",
  },
  logo: {
    height: 200,
    width: 200,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5%",
  },
  socialLogin: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forgotPasswordView: {
    alignItems: "flex-end",
    paddingRight: 20,
  },
  loginFooter: {
    justifyContent: "center",
    alignItems: "center",

    marginTop: 20,
  },
});
