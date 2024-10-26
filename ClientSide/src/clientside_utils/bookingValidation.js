import axios from "axios";
import { toast } from "react-toastify";

//function to get lat long of any location
export const getLatLng = async (location) => {
  const cageKey = process.env.REACT_APP_CAGE_KEY;

  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${cageKey}`
    );

    // Ensure that the response has at least one result
    if (response.data.results && response.data.results.length > 0) {
      const { lat, lng } = response.data.results[0].geometry;
      const { components } = response.data.results[0];

      return { latitude: lat, longitude: lng, components };
    } else {
      // Handle case where no results are found
      console.error("No results found for the location:", location);
      return null;
    }
  } catch (error) {
    console.error("Error fetching location data:", error);
    return null;
  }
};

// Function to validate locations
export const validateLocationsInIndia = async (origin, destination) => {
  // Helper function to check if a location is in India
  const checkLocationInIndia = async (location) => {
    const locationData = await getLatLng(location);

    // If no location data is returned, notify the user
    if (!locationData) {
      toast.error(`Could not find location: ${location}`);
      return false;
    }

    // Ensure components exist before checking country_code
    const { components } = locationData;
    if (!components) {
      toast.error(`Unable to get country information for ${location}`);
      return false;
    }

    console.log(locationData, "from API");

    // Check if the country code is 'IN' for India
    return components?.country_code?.toLowerCase() === "in";
  };

  // Check both origin and destination
  const isOriginInIndia = await checkLocationInIndia(origin);
  const isDestinationInIndia = await checkLocationInIndia(destination);

  // Return false if either location is not in India
  if (!isOriginInIndia) {
    toast.error(`Origin "${origin}" must be in India.`);
    return false;
  }
  if (!isDestinationInIndia) {
    toast.error(`Destination "${destination}" must be in India.`);
    return false;
  }

  return true;
};

// function for validate Dates
export const isDateValid = (startDate, endDate) => {
  const today = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Check if start date is in the past
  if (start < today.setHours(0, 0, 0, 0)) {
    // Adjust today to midnight
    toast.error("Start date cannot be in the past.");
    return false;
  }

  // Check if end date is before start date
  if (end < start) {
    toast.error("End date cannot be before the start date.");
    return false;
  }

  return true;
};
