import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
import { themeColors } from "../theme";
import { useGetLocation } from "../hooks/useGetLocation";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { selectFeatured } from "../slices/featuredSlices";
import { emptyCart } from "../slices/cartSlice";

export default function DeliveryScreen() {
  const items = useSelector(selectFeatured);
  const navigation = useNavigation();
  const [lat, lon] = useGetLocation();
  const dispatch = useDispatch();

  const cancelOrder = () => {
    navigation.navigate("Home");
    dispatch(emptyCart());
  };

  return (
    <View style={styles.container}>
      {/* map view */}
      <MapView
        initialRegion={{
          latitude: -24.68551222051431,
          longitude: 25.98071693269063,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
        mapType="standard"
      >
        {/*         
        <Marker
          coordinate={{
            latitude: -24.68551222051431,
            longitude: 25.98071693269063,
          }}
          title={resturant.name}
          description={resturant.description}
          pinColor={themeColors.bgColor(1)}
        /> */}
      </MapView>
      {/* delivery info */}
      <View style={styles.deliveryInfoContainer}>
        <View style={styles.deliveryInfoTopRow}>
          <View>
            <Text style={styles.etaText}>Estimated time of Arrival</Text>
            <Text style={styles.etaTime}>20-30 mins</Text>
            <Text style={styles.orderStatus}>Your order is on its way!</Text>
          </View>
          <Image
            style={styles.deliveryImage}
            source={require("../assets/images/delivery_guy.webp")}
          />
        </View>
        <View
          style={[
            styles.deliveryDriverContainer,
            { backgroundColor: themeColors.bgColor(0.8) },
          ]}
        >
          <View style={styles.driverImageContainer}>
            <Image
              style={styles.driverImage}
              source={require("../assets/images/potrait.png")}
            />
          </View>
          <View style={styles.driverInfo}>
            <Text style={styles.driverName}>Richwell</Text>
            <Text style={styles.driverRole}>Deliverer</Text>
          </View>
          <View style={styles.contactOptions}>
            <TouchableOpacity style={styles.phoneButton}>
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth={1}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={cancelOrder} style={styles.cancelButton}>
              <Icon.X stroke="red" strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  deliveryInfoContainer: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "white",
    marginTop: -48,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  deliveryInfoTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  etaText: {
    fontSize: 18,
    fontWeight: "600",
    color: "gray",
  },
  etaTime: {
    fontSize: 30,
    fontWeight: "800",
    color: "gray",
  },
  orderStatus: {
    marginTop: 8,
    fontWeight: "600",
    color: "gray",
  },
  deliveryImage: {
    width: 96,
    height: 96,
  },
  deliveryDriverContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 50,
    padding: 8,
    marginVertical: 20,
  },
  driverImageContainer: {
    padding: 4,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,0.4)",
  },
  driverImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  driverInfo: {
    flex: 1,
    marginLeft: 12,
  },
  driverName: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
  driverRole: {
    fontWeight: "600",
    color: "white",
  },
  contactOptions: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  phoneButton: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 50,
    marginRight: 12,
  },
  cancelButton: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 50,
  },
});
