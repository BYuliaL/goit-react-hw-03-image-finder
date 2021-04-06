import axios from "axios";

const fetchImages = ({ searchValue = "", currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchValue}&page=${currentPage}&per_page=${pageSize}&key=20405936-6e55c763eecf497ab63d5a834`
    )
    .then((response) => response.data.hits);
};

// eslint-disable-next-line
export default { fetchImages };
