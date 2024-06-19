import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function FeaturedCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Featured", { item })}
    >
      <View
        style={[
          styles.cardContainer,
          { shadowColor: themeColors.bgColor(0.2) },
        ]}
      >
        <Image style={styles.image} source={item.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 24,
    backgroundColor: "white",
    borderRadius: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    height: 144,
    width: 256,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textContainer: {
    paddingHorizontal: 12,
    paddingBottom: 16,
    spaceBetween: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 8,
  },
});
