import axios from "axios";

/* //Base URl
const accessKey = process.env.REACT_APP_API_KEY;
//const base_url = `https://api.unsplash.com/photos/?client_id=${accessKey}`;
const getImage = async (city, count) => {
  try {
    //const response = await axios.get(base_url);
    const response = await axios.get(
      `https://api.unsplash.com//search/photos?page=${count}`,
      {
        params: { query: city },
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      }
    );
    return response.data.results;
  } catch (err) {
    console.error(err);
  }
}; */

//connecting to AWS Lambda function
const base_url = process.env.REACT_APP_AWS_API;
const getImage = async (city, count) => {
  try {
    //const response = await axios.get(base_url);
    const response = await axios.get(base_url, {
      params: { city: city, page: count },
    });

    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default getImage;
