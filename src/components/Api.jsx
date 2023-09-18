import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/;';
const KEY = '38550354-eee994e31f66bb4c1e0427d2f';

export const fetchImages = async (quary, page) => {
  const quaryIndexOf = quary.indexOf('/');
  const readyQuary = quary.slice(quaryIndexOf + 1, quary.length - 1);

  const response = await axios.get(
    `https://pixabay.com/api/?q=${readyQuary}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};
