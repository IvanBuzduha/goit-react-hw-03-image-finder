import axios from "axios";
const API_Url = "https://pixabay.com/api/";
const API_KEY = "21124678-0d24ae1c4ddebba156f36dfb4";

const fetchImage = (searchQuery, page) => {
  return axios
    .get(
      `${API_Url}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => {
      if (res.status === 200) return res;
      throw Error(`${res.status} ${res.statusText}`);
    });
};

export default fetchImage;
