import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '67d584d51ef944bcae0187e40e54b47c',
  },
});
