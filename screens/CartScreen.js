import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectFeatured } from "../slices/featuredSlices";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../slices/cartSlice";

export default function CartScreen() {
  const featured = useSelector(selectFeatured);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({});
  const dispatch = useDispatch();
  const deliveryFee = 20;

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);

  return (
    <View style={styles.container}>
      {/* back button */}
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[
            styles.backButton,
            { backgroundColor: themeColors.bgColor(1) },
          ]}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text style={styles.orderText}>Your order</Text>
        </View>
      </View>

      {/* Delivery-Time */}
      <View
        style={[
          styles.deliveryContainer,
          { backgroundColor: themeColors.bgColor(0.2) },
        ]}
      >
        <Image
          source={require("../assets/images/delivery_guy.webp")}
          style={styles.deliveryImage}
        />
        <Text style={styles.deliveryText}>Delivery will be in 20-30 mins</Text>
        <TouchableOpacity>
          <Text style={[styles.changeText, { color: themeColors.text }]}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* items in cart */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        style={styles.itemsContainer}
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          let product = items[0];
          return (
            <View key={key} style={styles.itemRow}>
              <Text style={[styles.itemCount, { color: themeColors.text }]}>
                {items.length} x
              </Text>
              <Image style={styles.itemImage} source={product.image} />
              <Text style={styles.itemName}>{product.name}</Text>
              <Text style={styles.itemPrice}>P{product.price}</Text>
              <TouchableOpacity
                style={[
                  styles.minusButton,
                  { backgroundColor: themeColors.bgColor(1) },
                ]}
                onPress={() => {
                  dispatch(removeFromCart({ id: product.id }));
                }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* totals */}
      <View
        style={[
          styles.totalContainer,
          { backgroundColor: themeColors.bgColor(0.2) },
        ]}
      >
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Subtotal</Text>
          <Text style={styles.totalText}>P{cartTotal}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Delivery fee</Text>
          <Text style={styles.totalText}>P{deliveryFee}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalBoldText}>Order Total</Text>
          <Text style={styles.totalBoldText}>P{deliveryFee + cartTotal}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderPreparing")}
            style={[
              styles.placeOrderButton,
              { backgroundColor: themeColors.bgColor(1) },
            ]}
          >
            <Text style={styles.placeOrderButtonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  backButtonContainer: {
    position: "relative",
    paddingVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  backButton: {
    position: "absolute",
    zIndex: 10,
    borderRadius: 50,
    padding: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    top: 20,
    left: 8,
  },
  orderText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  deliveryContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  deliveryImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  deliveryText: {
    flex: 1,
    paddingLeft: 16,
  },
  changeText: {
    fontWeight: "bold",
  },
  scrollViewContent: {
    paddingBottom: 50,
  },
  itemsContainer: {
    backgroundColor: "white",
    paddingTop: 16,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 24,
    marginHorizontal: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  itemCount: {
    fontWeight: "bold",
  },
  itemImage: {
    height: 56,
    width: 56,
    borderRadius: 50,
  },
  itemName: {
    flex: 1,
    fontWeight: "bold",
    color: "gray",
  },
  itemPrice: {
    fontWeight: "bold",
    fontSize: 16,
  },
  minusButton: {
    padding: 4,
    borderRadius: 50,
  },
  totalContainer: {
    padding: 24,
    paddingHorizontal: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    spaceY: 16,
    height: 200,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    color: "gray",
  },
  totalBoldText: {
    color: "gray",
    fontWeight: "bold",
  },
  placeOrderButton: {
    padding: 12,
    borderRadius: 50,
    marginTop: 60,
  },
  placeOrderButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
