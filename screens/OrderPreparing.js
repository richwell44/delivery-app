import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";

export default function OrderPreparing() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // move to delivery screen
      navigation.navigate("Delivery");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={[styles.container, { backgroundColor: themeColors.bgColor(0.2) }]}
    >
      <Image
        source={require("../assets/images/delivery_guy.gif")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 320, // 80 * 4
    width: 320, // 80 * 4
  },
});
