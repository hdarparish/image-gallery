import axios from "axios";

//Base URl
const accessKey = process.env.REACT_APP_API_KEY;
//const base_url = `https://api.unsplash.com/photos/?client_id=${accessKey}`;
const getImage = async (count) => {
  try {
    //const response = await axios.get(base_url);
    const response = await axios.get(
      `https://api.unsplash.com//search/photos?page=${count}`,
      {
        params: { query: "toronto" },
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      }
    );
    return response.data.results;
  } catch (err) {
    console.error(err);
  }
};

export default getImage;
