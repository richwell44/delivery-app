import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from "../slices/cartSlice";

export default function ProductRow({ item }) {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) =>
    selectCartItemsById(state, item.id)
  );

  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };
  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item.id }));
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.itemPrice}>P{item.price}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!totalItems.length}
              style={[
                styles.button,
                !totalItems.length && styles.disabledButton,
              ]}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={"white"}
              />
            </TouchableOpacity>
            <Text style={styles.itemCount}>{totalItems.length}</Text>
            <TouchableOpacity onPress={handleIncrease} style={styles.button}>
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 12,
    marginHorizontal: 8,
  },
  image: {
    borderRadius: 24,
    height: 100,
    width: 100,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 12,
  },
  textContainer: {
    paddingLeft: 12,
  },
  itemName: {
    fontSize: 18,
  },
  itemDescription: {
    color: "black",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 12,
  },
  itemPrice: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: themeColors.bgColor(1),
  },
  disabledButton: {
    backgroundColor: "gray",
  },
  itemCount: {
    paddingHorizontal: 12,
  },
});
