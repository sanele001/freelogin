import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Signup from "../screens/signup";
import RecoverPword from "../screens/recover";
import Otp from "../screens/otp";
import Otp2 from "../screens/otp2";
import NewPassword from "../screens/newpass";
import Home from "../screens/home";

const Stack = createNativeStackNavigator();

export function LogingFlow() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Recover Password" component={RecoverPword} />
      <Stack.Screen name="Verify" component={Otp} />
      <Stack.Screen name="Verity Account" component={Otp2} />
      <Stack.Screen name="New Password" component={NewPassword} />
    </Stack.Navigator>
  );
}

export function HomeNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
