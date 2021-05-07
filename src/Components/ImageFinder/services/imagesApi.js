import axios from "axios";

const API_Url = "https://pixabay.com/api/";
const API_KEY = "21124678-0d24ae1c4ddebba156f36dfb4";
const perPage = 12;

const fetchImagesWithQuery = (searchQuery, page) => {
  return axios
    .get(
      `${API_Url}?q=${searchQuery}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&key=${API_KEY}`
    )
    .then((response) => response.data.hits);
  console.log(response);
};

export default {
  fetchImagesWithQuery,
};
