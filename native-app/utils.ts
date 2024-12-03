import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Coordinate } from './types';

export function useLocation() {
  const [location, setLocation] = useState<null | Coordinate>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Highest,
        });

        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }
    })();
  }, []);

  return location;
}
