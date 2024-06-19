import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../slices/cartSlice";

export default function Cart() {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  if (!cartItems.length) return null; // if no items in the cart

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={[
          styles.touchableOpacity,
          { backgroundColor: themeColors.bgColor(1) },
        ]}
      >
        <View style={styles.cartItemCountContainer}>
          <Text style={styles.cartItemCountText}>{cartItems.length}</Text>
        </View>
        <Text style={styles.viewCartText}>Tap to view cart</Text>
        <Text style={styles.cartTotalText}>P{cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 50,
    paddingHorizontal: 10,
  },
  touchableOpacity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 9999,
    padding: 4,
    paddingVertical: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    height: 55,
  },
  cartItemCountContainer: {
    padding: 2,
    paddingHorizontal: 4,
    width: 50,
    height: 40,
    borderRadius: 9999,
    backgroundColor: "rgba(255,255,255,0.3)",
    marginLeft: 5,
    textAlign: "center",
  },
  cartItemCountText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    padding: 5,
  },
  viewCartText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
  },
  cartTotalText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
    marginRight: 10,
  },
});
