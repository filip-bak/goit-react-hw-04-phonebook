const useLocalStorage = (key, defaultValue) => {
  const storedData = () =>
    JSON.parse(localStorage.getItem(key)) || defaultValue;

  const setStoredData = setItem => {
    try {
      localStorage.setItem(key, JSON.stringify(setItem));
    } catch (err) {
      console.log(err);
    }
  };

  return { storedData, setStoredData };
};
export default useLocalStorage;
