import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
import { categories } from "../constants";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {categories.map((category, index) => {
          return (
            <View key={index} style={styles.categoryContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setActiveCategory(category.id);
                  navigation.navigate("ProductsScreen", {
                    products: category.products,
                  });
                }}
              >
                <Image style={styles.image} source={category.image} />
              </TouchableOpacity>
              <Text style={styles.text}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingHorizontal: 15,
  },
  categoryContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },
  button: {
    padding: 1,
    borderRadius: 9999,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 4,
  },
  image: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 45,
    height: 45,
  },
  text: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "bold",
    color: "black",
  },
});
