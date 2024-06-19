import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation";
import { useGetLocation } from "./hooks/useGetLocation";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  // const [lat, lon] = useGetLocation();
  // console.log([lat, lon]);
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
