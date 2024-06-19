import { useEffect, useState } from "react";
import * as Location from "expo-location";

export const useGetLocation = () => {
  const [error, setError] = useState(null);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
    })();
  }, [lat, lon]);

  return [lat, lon];
};
