import axios from "axios";

const KEY = `34510815-700dd665fa248476b1f313f8a`;

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: KEY,
  image_type: "photo",
  orientation: "horizontal",
  safesearch: true,
  per_page: 12,
}

export const fetchImages = async (namePhoto, page = 1, perPage = 12 ) => {
    const response = await axios.get(`/?q=${namePhoto}&page=${page}&per_page={perPage}`);
    return response.data.hits;
  }
  