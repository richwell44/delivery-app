import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { themeColors } from "../theme";
import ProductRow from "../components/ProductRow";
import * as Icon from "react-native-feather";
import Cart from "../components/Cart";

export default function FeaturedScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  return (
    <SafeAreaView>
      <View contentContainerStyle={styles.mainContainer}>
        <Cart />
        <View style={styles.imageContainer}>
          {/* Go back button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.goBackButton}
          >
            <Icon.ArrowLeft strokeWidth={4} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
          <Image style={styles.image} source={item.image} />
        </View>
        {/* Featured item details */}
        <View style={styles.featuredInfoContainer}>
          <Text style={styles.dealTitle}>{item.name}</Text>
          <Text style={styles.dealDescription}>{item.description}</Text>
        </View>
        <ScrollView style={styles.productsContainer}>
          {item.products &&
            item.products.map((product, productIndex) => (
              <ProductRow item={product.product} key={productIndex} />
            ))}
          {item.items &&
            item.items.map((product, productIndex) => (
              <ProductRow item={product.product} key={productIndex} />
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 20,
  },
  imageContainer: {
    position: "fixed",
  },
  goBackButton: {
    position: "absolute",
    zIndex: 10,
    borderRadius: 50,
    padding: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.84,
    top: 20,
    left: 8,
    backgroundColor: "white",
  },
  featuredInfoContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "white",
    marginTop: -40,
  },
  dealTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 25,
  },
  dealDescription: {
    fontSize: 16,
    color: "black",
    marginBottom: 10,
    marginHorizontal: 25,
  },
  image: {
    height: 300,
    width: "full",
  },
  productsContainer: {
    backgroundColor: "white",
  },
});
