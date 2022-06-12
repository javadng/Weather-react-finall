const AJAXCALL = useCallback(async url => {
  setIsLoading(true);

  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Somthing went wrong : ${response.status}`);

    const dataAPI = await response.json();

    setWeatherData([dataAPI]);
  } catch (error) {
    console.error(error);
  }

  setIsLoading(false);
});

useEffect(() => {
  AJAXCALL(`${API_URL}&lat=${lat}&lon=${lon}`);
}, []);