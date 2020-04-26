import axios from "axios";

const API_KEY = "AIzaSyDMpmORBdsUlsZpKTr-REU-8Hqw7qh9t78";

const getCoordsForAddress = async address => {
  const response = await axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${API_KEY}`
    )
    .then(response => {
      return response.data.results[0].geometry.location;
    })
    .catch(console.error);

  // const data = response.data;
  // const coordinates = data.results[0].geometry.location;
  // return coordinates;
};

// try {
// }
// if (!data || data.status === "ZERO_RESULTS") {
//   throw error;
// }
export default getCoordsForAddress;
