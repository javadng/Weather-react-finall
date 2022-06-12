import { useState } from 'react';
import { API_SEARCH, API_KEY } from '../global/config';

const useSearchAJAX = () => {
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const searchAJAX = async function (query) {
    setSearchIsLoading(true);

    try {
      const response = await fetch(`${API_SEARCH}?q=${query}&appid=${API_KEY}`);

      if (!response.ok)
        throw new Error(
          `Somthing went wrong, Error : ${response.status} ${response.statusText}`
        );

      const [dataSearch] = await response.json();

      if (!dataSearch) throw new Error(`City Not Found. Try again 🙏.`);

      const coords = { lat: dataSearch.lat, lon: dataSearch.lon };

      // return { lat: dataSearch.lat, lon: dataSearch.lon };
      return coords;
    } catch (err) {
      setSearchError(err);
    }

    setSearchIsLoading(false);
  };

  return {
    searchIsLoading,
    searchError,
    searchAJAX,
  };
};
export default useSearchAJAX;
