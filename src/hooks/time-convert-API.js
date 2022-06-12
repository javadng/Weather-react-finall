const useCovertTime = (
  timeUnix,
  locale = 'fa-IR',
  options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }
) => {
  const time = new Intl.DateTimeFormat(locale, options).format(timeUnix * 1000);

  return time;
};

export default useCovertTime;
