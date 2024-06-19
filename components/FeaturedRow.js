import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { themeColors } from "../theme";
import FeaturedCard from "./FeaturedCard";
import { featured } from "../constants";

export default function FeaturedRow({ title, description }) {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={[styles.seeAll, { color: themeColors.text }]}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}
      >
        {featured.featured_deals.map((deal, index) => {
          return <FeaturedCard item={deal} key={index} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16, // Adjusted padding to match px-4
  },
  title: {
    fontWeight: "bold",
    fontSize: 16, // Adjusted font size to match text-l
  },
  description: {
    color: "gray",
    fontSize: 12, // Adjusted font size to match text-xs
  },
  seeAll: {
    fontWeight: "600",
  },
  scrollView: {
    overflow: "visible",
    paddingVertical: 20, // Adjusted padding to match py-5
  },
  scrollViewContent: {
    paddingHorizontal: 15,
  },
});
