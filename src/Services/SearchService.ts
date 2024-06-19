const URL_API = `https://www.omdbapi.com`;
const API_Key = import.meta.env.VITE_API_KEY;
console.log(API_Key);

export const SearchService = async () => {
  try {
    const resp = await fetch(`${URL_API}/?apikey=${API_Key}&s=batman`);
    const data = await resp.json();
    const { Search } = data;
    console.log(Search);
  } catch (error) {
    console.log(error);
  }
};
