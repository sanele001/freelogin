import { LogingFlow, HomeNav } from "./navigation/loginflow";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./reduxtoolkit/store";
import { Provider } from "react-redux";

export default function App() {
  // get token from login api

  const accessToken = false;

  return (
    <Provider store={store}>
      <NavigationContainer>
        {accessToken ? <HomeNav /> : <LogingFlow />}
      </NavigationContainer>
    </Provider>
  );
}
