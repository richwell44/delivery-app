import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import ProductRow from "../components/ProductRow";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Cart from "../components/Cart";

export default function ProductsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { products } = route.params;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Cart />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {/* Go back button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              styles.goBackButton,
              { backgroundColor: themeColors.bgColor(0.2) },
            ]}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
          <Text style={styles.title}>Products</Text>
          {/* Render products */}
          {products.map((product, index) => (
            <ProductRow item={product} key={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "white",
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  container: {
    position: "relative",
    paddingBottom: 144, // 36 * 4
    backgroundColor: "white",
  },
  goBackButton: {
    position: "absolute",
    zIndex: 10,
    borderRadius: 50,
    padding: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    top: 20,
    left: 8,
  },
  title: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginLeft: 80, // 20 * 4
    fontSize: 24,
    fontWeight: "bold",
  },
});
