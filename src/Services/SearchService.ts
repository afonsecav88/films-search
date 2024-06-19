import { Search } from '../Interfaces/Films.Interface';

const URL_API = `https://www.omdbapi.com`;
const API_Key = import.meta.env.VITE_API_KEY;

export const SearchService = async (searchTerm: string): Promise<Search[]> => {
  try {
    const resp = await fetch(`${URL_API}/?apikey=${API_Key}&s=${searchTerm}`);
    const data = await resp.json();
    const { Search } = data;
    return Search;
  } catch (error) {
    throw new Error('error searching movies');
  }
};
