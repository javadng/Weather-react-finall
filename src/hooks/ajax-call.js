import { useState, useCallback } from 'react';

const TimeoutPromise = sec => {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long. check your conections.'));
    }, sec * 1000);
  });
};

const useAJAX = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const AJAXCALL = useCallback(async url => {
    setIsLoading(true);

    try {
      const fetchUrl = fetch(url);

      
      const response = await Promise.race([fetchUrl, TimeoutPromise(1000)]);

      if (!response.ok)
        throw new Error(
          `Somthing went wrong, Error : ${response.status} ${response.statusText}`
        );

      const dataAPI = await response.json();

      // console.log(dataAPI);

      setIsLoading(false);
      return dataAPI;
    } catch (error) {
      setError({
        errorMessage: `${error.message}💥`,
      });
      setIsLoading(false);

      // console.log(error);
      throw error;
    }
  }, []);

  return {
    isLoading,
    error,
    AJAXCALL,
  };
};

export default useAJAX;
