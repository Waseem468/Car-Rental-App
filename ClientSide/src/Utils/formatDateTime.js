// Helper function to format date as '22-Sep-2024'
export const formatDate = (dateString) => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Date(dateString).toLocaleDateString("en-GB", options);
};

// Helper function to format time as '8:00 PM'
export const formatTime = (timeString) => {
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  return new Date(timeString).toLocaleTimeString("en-US", options);
};
