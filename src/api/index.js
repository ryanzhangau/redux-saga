const KEY = '?client_id=35e54a6e36e040b1ab62ca510cbe2cfc2518aafc86925a1e56ef1f9fc827991f';
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async page => {
  const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
  const data = await response.json();
  if (response.status >= 400) throw new Error(data.errors);
  return data;
};

export { fetchImages };
