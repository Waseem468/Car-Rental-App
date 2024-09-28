import axios from "axios";

export const getLatLng = async (location) => {
  const cageKey = process.env.REACT_APP_CAGE_KEY; 
  
  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${cageKey}`
    );
    console.log(response,"response of api")
    const { lat, lng } = response.data.results[0].geometry;
    return { latitude: lat, longitude: lng };
  } catch (error) {
    console.error("Error fetching location data:", error);
    return null;
  }
};
