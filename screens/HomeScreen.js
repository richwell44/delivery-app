import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import FeaturedRow from "../components/FeaturedRow";
import { featured } from "../constants";
import Cart from "../components/Cart";
import { useState } from "react";
import filter from "lodash.filter";
import { categories } from "../constants";

export default function HomeScreen() {
  const [showCategories, setShowCategories] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const getFilteredProducts = (query) => {
    if (!query) {
      return [];
    }

    const formattedQuery = query.toLowerCase();
    let allProducts = categories.flatMap((category) => category.products);
    return filter(allProducts, (product) =>
      product.name.toLowerCase().includes(formattedQuery)
    );
  };

  const filteredProducts = getFilteredProducts(searchQuery);

  // Get the first featured deal
  const todaysSpecial = featured.featured_deals[0];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          {/* search bar */}
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            autoCapitalize="none"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          {/* location on the search tab*/}
          <View style={styles.locationContainer}>
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text style={styles.locationText}>Gaborone</Text>
          </View>
        </View>
        {/* slider icon for filter */}
        <View>
          {/* slider icon for filter */}
          <TouchableOpacity
            style={[
              styles.sliderIconContainer,
              showCategories
                ? { backgroundColor: themeColors.bgColor(1) }
                : { backgroundColor: "lightgray" },
            ]}
            onPress={() => setShowCategories(!showCategories)}
          >
            <Icon.Sliders
              height="20"
              width="20"
              strokeWidth={2.5}
              stroke="white"
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* main */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {/* categories */}
        {showCategories && <Categories />}

        {/* featured */}
        <View style={styles.featuredContainer}>
          {/* Render the first featured deal only */}
          <FeaturedRow
            title={todaysSpecial.name}
            featured={todaysSpecial.products || todaysSpecial.items}
            description={todaysSpecial.description}
          />
        </View>
      </ScrollView>
      <Cart />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 8,
    marginTop: 20,
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 12,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 10,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 2,
    borderLeftColor: "gray",
    paddingLeft: 8,
  },
  locationText: {
    color: "gray",
  },
  safeAreaView: {
    backgroundColor: "white",
    flex: 1,
  },

  scrollViewContent: {
    paddingBottom: 20,
  },
  featuredContainer: {
    marginTop: 20,
  },

  sliderIconContainer: {
    padding: 12,
    borderRadius: 50,
  },
});
