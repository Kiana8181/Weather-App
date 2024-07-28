import axios from "axios";
import { useState, useEffect } from "react";

interface LocationData {
  location: {
    latitude?: number;
    longitude?: number;
  };
}

// Function to get user's current location
export const CurrentLocation = () => {
  const [locationData, setLocationData] = useState<LocationData | null>(null);

  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    try {
      const res = await axios.get("https://sg.ipapi.is/");
      if (res.status === 200) setLocationData(res.data);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  }

  return {
    latitude: locationData?.location.latitude || 35.69424,
    longitude: locationData?.location.longitude || 51.42131,
  };
};
